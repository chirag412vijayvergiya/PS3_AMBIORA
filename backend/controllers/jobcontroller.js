const Job = require('./../models/jobModel');

// Create a new job (Only Employers can create)
exports.createJob = async (req, res) => {
  try {
    const {
      title,
      description,
      salary,
      location,
      category,
      requiredSkills,
      lastDateToApply,
    } = req.body;

    console.log(req.body);

    // Ensure only employers can create jobs
    if (req.user.role !== 'employer') {
      return res
        .status(403)
        .json({ message: 'Access denied! Only employers can create jobs.' });
    }

    // Validate required fields
    if (!title || !description || !location || !category || !lastDateToApply) {
      return res
        .status(400)
        .json({ message: 'Please provide all required fields.' });
    }

    // Ensure requiredSkills is an array
    const formattedSkills = Array.isArray(requiredSkills)
      ? requiredSkills.map((skill) => skill.trim())
      : [];

    // Create a new job
    const newJob = new Job({
      title,
      description,
      salary,
      location,
      category,
      requiredSkills: formattedSkills,
      lastDateToApply,
      employer: req.user._id, // Assign employer from authenticated user
    });

    await newJob.save();
    res.status(201).json({ message: 'Job created successfully!', job: newJob });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all jobs
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get a single job by ID
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
