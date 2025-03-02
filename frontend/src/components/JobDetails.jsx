"use client";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  Clock,
  Building2,
  Mail,
  DoorOpen,
  Volume2,
} from "lucide-react";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [resume, setResume] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [responseDetails, setResponseDetails] = useState("");

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/jobs/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch job details");
        }
        const data = await response.json();
        setJob(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setResume(file);
      setResponseMessage(""); // Reset previous messages
      setResponseDetails(""); // Reset previous details
    } else {
      setResponseMessage("Only PDF files are allowed.");
    }
  };

  const handleUpload = async () => {
    if (!resume) {
      setResponseMessage("Please select a resume to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("jobDescription", job.description);

    setUploading(true);
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/resumes/evaluate-resume",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      if (response.ok) {
        setResponseMessage("Resume evaluation successful!");
        setResponseDetails(result);
        console.log("Response from AI:", result.JDMatch.JDMatch);
      } else {
        setResponseMessage(result.error || "Error evaluating resume.");
      }
    } catch (error) {
      setResponseMessage("Failed to upload resume.");
    } finally {
      setUploading(false);
    }
  };

  const readText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  if (loading) {
    return (
      <div className="text-center py-16">
        <p className="text-xl font-semibold">Loading job details...</p>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Job not found</h2>
        <p className="mt-2 text-gray-600">
          {error || "This job doesn't exist."}
        </p>
        <Link
          to="/joblists"
          className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/joblists"
        className="bg-blue-500 inline-flex items-center text-white hover:bg-blue-700 mb-6 px-4 py-2 rounded-lg"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={"/placeholder.svg"}
                  alt={`${job.employer} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {job.title}
                </h1>
                <div className="flex items-center gap-2 text-gray-600">
                  <Building2 className="w-4 h-4" />
                  <span>{job.employer}</span>
                </div>
              </div>
            </div>
            <Link to={`/apply/${job._id}`}>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-5 h-5" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Briefcase className="w-5 h-5" />
              <span>{job.category}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5" />
              <span>{new Date(job.postedAt).toDateString()}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <DoorOpen className="w-5 h-5" />
              <span>Open</span>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex flex-wrap gap-2">
              {job.requiredSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Job Description</h2>
              <button
                onClick={() => readText(job.description)}
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <Volume2 className="w-5 h-5 mr-2" /> Read Out Loud
              </button>
            </div>
            <p className="text-gray-600 whitespace-pre-line">
              {job.description}
            </p>
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Salary & Requirements</h2>
            </div>
            <p className="text-gray-600 mt-2">
              <strong>Salary:</strong> ₹{job.salary.toLocaleString()}
            </p>
          </div>

          <div className="mt-8 pt-8 border-t">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold mb-4">How to Apply</h2>
              <button
                onClick={() =>
                  readText(
                    `Submit your resume and cover letter through the application form. 
         For any questions, contact us at careers@${job.employer.toLowerCase()}.com`
                  )
                }
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <Volume2 className="w-5 h-5 mr-2" /> Read Out Loud
              </button>
            </div>

            <p className="text-gray-600 mb-4">
              Submit your resume and cover letter through the application form.
              For any questions, contact us at:
            </p>
            <a
              href={`mailto:careers@${job.employer.toLowerCase()}.com`}
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <Mail className="w-4 h-4 mr-2" />
              {`careers@${job.employer.toLowerCase()}.com`}
            </a>

            {/* Resume Upload Section */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold">
                Upload Your Resume (PDF)
              </h2>
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="mt-2 border rounded p-2"
              />
              <button
                onClick={handleUpload}
                disabled={uploading}
                className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                {uploading ? "Uploading..." : "Submit Resume"}
              </button>
              {responseMessage && responseDetails && (
                <div className="mt-4 p-4 border rounded-lg bg-gray-100">
                  <p className="text-green-600 font-semibold">
                    {responseMessage}
                  </p>
                  <div className="mt-2">
                    <h3 className="text-lg font-semibold text-gray-700">
                      Match Percentage:
                    </h3>
                    <p className="text-xl font-bold text-blue-600">
                      {responseDetails.JDMatch}
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{
                          width: `${parseInt(responseDetails.JDMatch)}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  {/* Missing Skills Section */}
                  {responseDetails.MissingKeywords?.length > 0 && (
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold text-gray-700">
                        Missing Skills:
                      </h3>
                      <ul className="list-disc pl-5 text-red-600">
                        {responseDetails.MissingKeywords.map((skill, index) => (
                          <li key={index}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/* Summary Analysis */}
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-700">
                      Summary:
                    </h3>
                    <p className="text-gray-600">
                      {responseDetails.matchPercentage >= 80
                        ? "Great match! Your resume aligns well with the job requirements."
                        : responseDetails.matchPercentage >= 50
                        ? "Good match, but consider improving your resume by adding the missing skills."
                        : "Low match. You may need to gain more relevant skills before applying."}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
