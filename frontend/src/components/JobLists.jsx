import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";

const JobLists = () => {
  const [jobs, setJobs] = useState([]); // Store jobs from API
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const [searchQuery, setSearchQuery] = useState(""); // For skills
  const [locationFilter, setLocationFilter] = useState(""); // For location
  const [titleFilter, setTitleFilter] = useState(""); // For job title

  // Fetch jobs from API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/jobs/");
        if (!response.ok) throw new Error("Failed to fetch jobs");
        const data = await response.json();
        console.log(data);
        setJobs(data); // Assuming API returns an array of job objects
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Handle input changes
  const handleSearchChange = (e) =>
    setSearchQuery(e.target.value.toLowerCase());
  const handleLocationChange = (e) =>
    setLocationFilter(e.target.value.toLowerCase());
  const handleTitleChange = (e) => setTitleFilter(e.target.value.toLowerCase());

  // Process search skills
  const searchSkills = searchQuery
    .split(",")
    .map((skill) => skill.trim())
    .filter((skill) => skill.length > 0);

  // Filter jobs
  const filteredJobs = jobs.filter((job) => {
    const matchesSkills =
      searchSkills.length === 0 ||
      searchSkills.every((skill) =>
        job.requiredSkills.some((tag) => tag.toLowerCase().includes(skill))
      );

    const matchesLocation =
      locationFilter === "" ||
      job.location.toLowerCase().includes(locationFilter);

    const matchesTitle =
      titleFilter === "" || job.title.toLowerCase().includes(titleFilter);

    return matchesSkills && matchesLocation && matchesTitle;
  });

  const handleDelete = (jobId) => {
    console.log("Deleting job with ID:", jobId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-4 items-center">
      <h2 className="text-blue-500 font-extrabold text-3xl sm:text-5xl lg:text-7xl mb-8">
        Find Latest Jobs
      </h2>

      {/* Filters Section */}
      <div className="min-w-[100%] max-w-md mb-8 space-y-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Job Title Filter */}
        <div>
          <input
            type="text"
            placeholder="Search by job title (e.g., Frontend Developer)"
            value={titleFilter}
            onChange={handleTitleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Skills Search Bar */}
        <div>
          <input
            type="text"
            placeholder="Search by skills (e.g., React, Python)"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-sm text-gray-500 mt-2">
            Separate multiple skills with commas (e.g., React, Python)
          </p>
        </div>

        {/* Location Filter */}
        <div>
          <input
            type="text"
            placeholder="Filter by location (e.g., San Francisco)"
            value={locationFilter}
            onChange={handleLocationChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Loading & Error Handling */}
      {loading && <p>Loading jobs...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {filteredJobs.map((job) => (
          <JobCard key={job._id || job.id} job={job} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default JobLists;
