const express = require('express');
const multer = require('multer');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const pdfParse = require('pdf-parse');

dotenv.config(); // Load environment variables

const router = express.Router();

// Configure Multer for PDF uploads
const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'application/pdf') {
      return cb(new Error('Only PDF files are allowed!'), false);
    }
    cb(null, true);
  },
});

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Function to get response from Gemini
async function getGeminiResponse(inputText) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
    const result = await model.generateContent(inputText);
    return result.response.text(); // Ensure Gemini returns text
  } catch (error) {
    console.error('Gemini API Error:', error.message);
    throw new Error('Failed to fetch response from Gemini AI.');
  }
}

// Function to extract text from a PDF
async function extractTextFromPDF(buffer) {
  try {
    const data = await pdfParse(buffer);
    return data.text;
  } catch (error) {
    console.error('PDF Parsing Error:', error.message);
    throw new Error(
      'Failed to process the PDF. Ensure the file is not encrypted or corrupted.',
    );
  }
}

// API Endpoint to Evaluate Resume
router.post('/evaluate-resume', upload.single('resume'), async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ error: 'No file uploaded. Please upload a PDF.' });
    }

    const { jobDescription } = req.body;
    const resumeBuffer = req.file.buffer;

    // Extract text from the PDF
    const resumeText = await extractTextFromPDF(resumeBuffer);

    const inputPrompt = `
    Act as an advanced ATS (Applicant Tracking System) and analyze this resume against the job description.
    
    Resume: 
    """ 
    ${resumeText} 
    """
    
    Job Description: 
    """
    ${jobDescription}
    """
    
    Your response **must be a valid JSON** with the following format:
    
    {
      "JDMatch": "percentage (e.g., '80%')",
      "MissingKeywords": ["keyword1", "keyword2"],
      "ProfileSummary": "brief summary"
    }
    `;

    // Get response from Gemini AI
    const geminiResponse = await getGeminiResponse(inputPrompt);

    // Extract JSON from response
    const cleanedResponse = geminiResponse.replace(/```json|```/g, '').trim();

    let responseJson;
    try {
      responseJson = JSON.parse(cleanedResponse);
    } catch (parseError) {
      console.error('JSON Parsing Error:', parseError.message);
      return res
        .status(500)
        .json({ error: 'Failed to parse Gemini AI response as JSON.' });
    }

    res.json(responseJson);
  } catch (error) {
    console.error('Error:', error.message);
    res
      .status(500)
      .json({ error: error.message || 'An unexpected error occurred.' });
  }
});

module.exports = router;
