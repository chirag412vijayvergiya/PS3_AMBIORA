import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  X,
  Briefcase,
  Building,
  FileText,
  List,
  DollarSign,
  MapPin,
  Calendar,
} from "lucide-react";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { Textarea } from "../components/ui/Textarea";
import jobSeekerImg from "../assets/job-seeker.jpg";
import jobPortalImg from "../assets/job-portal.png";
import toast from "react-hot-toast";

export default function JobForm({ onJobCreate }) {
  const navigate = useNavigate();

  const [jobDetails, setJobDetails] = useState({
    title: "",
    company: "",
    description: "",
    skills: "",
    salary: "",
    location: "",
    category: "",
    lastDateToApply: "",
  });

  const handleChange = (e) => {
    setJobDetails({ ...jobDetails, [e.target.name]: e.target.value });
  };

  const createJob = async (jobData) => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // ✅ Ensures cookies/session are sent
        body: JSON.stringify(jobData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create job");
      }

      toast.success("Job created successfully!");
      // // Call parent function to update UI
      // onJobCreate(data.job);

      // Redirect after successful submission
      navigate("/");
    } catch (error) {
      console.error("Error creating job:", error.message);
      alert(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobData = {
      title: jobDetails.title,
      description: jobDetails.description,
      salary: Number(jobDetails.salary), // Ensure salary is a number
      location: jobDetails.location,
      employer: "65b9d95e57c2a3e5b1d4f1b3", // Replace with actual employer ID
      category: jobDetails.category,
      requiredSkills: jobDetails.skills.split(",").map((skill) => skill.trim()),
      lastDateToApply: new Date(jobDetails.lastDateToApply).toISOString(), // Convert to correct format
    };

    createJob(jobData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
      <div className="flex bg-white rounded-2xl shadow-xl overflow-hidden w-[90%] max-w-4xl relative">
        {/* Left Side - Two Images */}
        <div className="w-1/2 flex items-center justify-center bg-blue-100 p-6 relative">
          <img
            src={jobSeekerImg}
            alt="Job Seeker"
            className="w-[80%] h-auto object-contain relative z-10"
          />
        </div>

        {/* Right Side - Form with Background Image */}
        <div className="w-1/2 p-8 relative">
          <img
            src={jobPortalImg}
            alt="Job Portal Background"
            className="absolute inset-0 w-70 h-70 object-cover opacity-20 top-1/4 left-1/4"
          />

          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            onClick={() => navigate(-1)}
          >
            <X size={24} />
          </button>

          <h2 className="text-2xl font-bold mb-4 text-center relative z-10">
            Create a New Job Role
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <div className="flex items-center gap-2 p-2 rounded-lg">
              <Briefcase className="text-gray-500" size={20} />
              <Input
                name="title"
                placeholder="Job Title"
                value={jobDetails.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center gap-2 p-2 rounded-lg">
              <Building className="text-gray-500" size={20} />
              <Input
                name="company"
                placeholder="Company Name"
                value={jobDetails.company}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-start gap-2 p-2 rounded-lg">
              <FileText className="text-gray-500" size={20} />
              <Textarea
                name="description"
                placeholder="Job Description"
                value={jobDetails.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center gap-2 p-2 rounded-lg">
              <List className="text-gray-500" size={20} />
              <Input
                name="skills"
                placeholder="Skills Required (comma-separated)"
                value={jobDetails.skills}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center gap-2 p-2 rounded-lg">
              <DollarSign className="text-gray-500" size={20} />
              <Input
                name="salary"
                type="number"
                placeholder="Salary (e.g., 70000)"
                value={jobDetails.salary}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center gap-2 p-2 rounded-lg">
              <MapPin className="text-gray-500" size={20} />
              <Input
                name="location"
                placeholder="Location"
                value={jobDetails.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center gap-2 p-2 rounded-lg">
              <List className="text-gray-500" size={20} />
              <Input
                name="category"
                placeholder="Job Category (e.g., IT, Finance)"
                value={jobDetails.category}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center gap-2 p-2 rounded-lg">
              <Calendar className="text-gray-500" size={20} />
              <Input
                name="lastDateToApply"
                type="date"
                value={jobDetails.lastDateToApply}
                onChange={handleChange}
                required
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <Button
                type="button"
                variant="outline"
                className="w-1/3"
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="w-1/3 bg-blue-600 hover:bg-blue-700"
              >
                Create +
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
