import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarker,
  FaLinkedin,
  FaBriefcase,
  FaGraduationCap,
  FaEdit,
  FaSave,
  FaFileUpload,
  FaFilePdf,
  FaTimes,
} from "react-icons/fa";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "Aman",
    lastName: "Joshi",
    email: "aman.joshi@example.com",
    contactNo: "",
    address: "",
    gender: "",
    skills: [],
    experience: "",
    linkedinUrl: "",
    jobTitle: "",
    education: "",
    preferredLocation: "",
    bio: "",
    course: "",
    department: "",
    resume: null,
    resumeUrl: "", // URL for the uploaded resume
    profileImage: null,
  });
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false); // State for modal

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSkillsChange = (e) => {
    const skills = e.target.value.split(",");
    setProfile({ ...profile, skills });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, resume: file, resumeUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add logic to save profile data to the backend
    console.log("Profile Saved:", profile);
  };

  const openResumeModal = () => {
    if (profile.resumeUrl) {
      setIsResumeModalOpen(true);
    }
  };

  const closeResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Profile Header */}
        <div className="bg-blue-500 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative">
                <img
                  src={
                    profile.profileImage ||
                    `https://api.dicebear.com/7.x/initials/svg?seed=${profile.firstName} ${profile.lastName}`
                  }
                  alt="Profile"
                  className="w-20 h-20 rounded-full border-4 border-white"
                />
                {isEditing && (
                  <label
                    htmlFor="profileImage"
                    className="absolute bottom-0 right-0 bg-white p-1 rounded-full cursor-pointer shadow-md"
                  >
                    <FaEdit className="text-blue-600" />
                    <input
                      type="file"
                      id="profileImage"
                      name="profileImage"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-white">
                  {profile.firstName} {profile.lastName}
                </h1>
                <p className="text-gray-200">
                  {profile.jobTitle || "Job Title"}
                </p>
              </div>
            </div>
            <button
              onClick={isEditing ? handleSave : () => setIsEditing(true)}
              className="flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              {isEditing ? (
                <FaSave className="mr-2" />
              ) : (
                <FaEdit className="mr-2" />
              )}
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
        </div>

        {/* Profile Details */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="flex items-center">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="text"
                name="firstName"
                value={profile.firstName}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full p-2 border-b ${
                  isEditing ? "border-blue-500" : "border-gray-300"
                }`}
                placeholder="First Name"
              />
            </div>

            {/* Last Name */}
            <div className="flex items-center">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full p-2 border-b ${
                  isEditing ? "border-blue-500" : "border-gray-300"
                }`}
                placeholder="Last Name"
              />
            </div>

            {/* Email */}
            <div className="flex items-center">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full p-2 border-b ${
                  isEditing ? "border-blue-500" : "border-gray-300"
                }`}
                placeholder="Email"
              />
            </div>

            {/* Contact Number */}
            <div className="flex items-center">
              <FaPhoneAlt className="text-gray-500 mr-2" />
              <input
                type="tel"
                name="contactNo"
                value={profile.contactNo}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full p-2 border-b ${
                  isEditing ? "border-blue-500" : "border-gray-300"
                }`}
                placeholder="Contact Number"
              />
            </div>

            {/* Address */}
            <div className="flex items-center">
              <FaMapMarker className="text-gray-500 mr-2" />
              <input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full p-2 border-b ${
                  isEditing ? "border-blue-500" : "border-gray-300"
                }`}
                placeholder="Address"
              />
            </div>

            {/* Gender */}
            <div className="flex items-center">
              <FaUser className="text-gray-500 mr-2" />
              <select
                name="gender"
                value={profile.gender}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full p-2 border-b ${
                  isEditing ? "border-blue-500" : "border-gray-300"
                }`}
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Skills */}
            <div className="flex items-center">
              <FaBriefcase className="text-gray-500 mr-2" />
              <input
                type="text"
                name="skills"
                value={profile.skills.join(",")}
                onChange={handleSkillsChange}
                disabled={!isEditing}
                className={`w-full p-2 border-b ${
                  isEditing ? "border-blue-500" : "border-gray-300"
                }`}
                placeholder="Skills (comma separated)"
              />
            </div>

            {/* Experience */}
            <div className="flex items-center">
              <FaBriefcase className="text-gray-500 mr-2" />
              <input
                type="number"
                name="experience"
                value={profile.experience}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full p-2 border-b ${
                  isEditing ? "border-blue-500" : "border-gray-300"
                }`}
                placeholder="Experience (years)"
              />
            </div>

            {/* LinkedIn URL */}
            <div className="flex items-center">
              <FaLinkedin className="text-gray-500 mr-2" />
              <input
                type="url"
                name="linkedinUrl"
                value={profile.linkedinUrl}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full p-2 border-b ${
                  isEditing ? "border-blue-500" : "border-gray-300"
                }`}
                placeholder="LinkedIn URL"
              />
            </div>

            {/* Resume Upload */}
            <div className="col-span-2">
              <label className="flex items-center cursor-pointer">
                <FaFileUpload className="text-gray-500 mr-2" />
                <span className="text-gray-700">Upload Resume:</span>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  disabled={!isEditing}
                  className="ml-2"
                  accept=".pdf"
                />
              </label>
              {profile.resume && (
                <div
                  onClick={openResumeModal}
                  className="mt-2 flex items-center text-blue-600 cursor-pointer hover:underline"
                >
                  <FaFilePdf className="mr-2" />
                  <span>{profile.resume.name}</span>
                </div>
              )}
            </div>

            {/* Additional Information */}
            <div className="col-span-2">
              <h2 className="text-xl font-bold mb-4">Additional Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Job Title */}
                <div className="flex items-center">
                  <FaBriefcase className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    name="jobTitle"
                    value={profile.jobTitle}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full p-2 border-b ${
                      isEditing ? "border-blue-500" : "border-gray-300"
                    }`}
                    placeholder="Job Title"
                  />
                </div>

                {/* Education */}
                <div className="flex items-center">
                  <FaGraduationCap className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    name="education"
                    value={profile.education}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full p-2 border-b ${
                      isEditing ? "border-blue-500" : "border-gray-300"
                    }`}
                    placeholder="Education"
                  />
                </div>

                {/* Course */}
                <div className="flex items-center">
                  <FaGraduationCap className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    name="course"
                    value={profile.course}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full p-2 border-b ${
                      isEditing ? "border-blue-500" : "border-gray-300"
                    }`}
                    placeholder="Course"
                  />
                </div>

                {/* Department */}
                <div className="flex items-center">
                  <FaGraduationCap className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    name="department"
                    value={profile.department}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full p-2 border-b ${
                      isEditing ? "border-blue-500" : "border-gray-300"
                    }`}
                    placeholder="Department"
                  />
                </div>

                {/* Bio */}
                <div className="col-span-2">
                  <textarea
                    name="bio"
                    value={profile.bio}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full p-2 border ${
                      isEditing ? "border-blue-500" : "border-gray-300"
                    } rounded-lg`}
                    rows="4"
                    placeholder="Write a short bio..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {isResumeModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">Resume Preview</h2>
              <button
                onClick={closeResumeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes className="text-2xl" />
              </button>
            </div>
            <div className="p-4 h-[70vh] overflow-auto">
              <iframe
                src={profile.resumeUrl}
                title="Resume Preview"
                width="100%"
                height="100%"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
