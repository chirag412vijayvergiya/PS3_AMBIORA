"use client";

import { useState } from "react";
import HeroSection from "./HeroSection";
import FeaturedJobCard from "./FeaturedJobCard";
import JobCategories from "./JobCategories";
import { Link } from "react-router-dom";

export default function AppLayout() {
  const [activeFilters, setActiveFilters] = useState([]);

  const addFilter = (filter) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const removeFilter = (filter) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  };

  return (
    <div className=" min-h-screen bg-gray-">
      <main className="w-[100%] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroSection />

        <div className="w-full mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Featured Jobs</h2>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                <FeaturedJobCard
                  title="Senior Frontend Developer"
                  company="TechCorp"
                  location="San Francisco, CA"
                  type="Full-time"
                  salary="$120K - $150K"
                  tags={["React", "TypeScript", "Tailwind"]}
                  featured={true}
                />
                <FeaturedJobCard
                  title="UX/UI Designer"
                  company="DesignHub"
                  location="Remote"
                  type="Full-time"
                  salary="$90K - $120K"
                  tags={["Figma", "Adobe XD", "UI/UX"]}
                  featured={true}
                />
              </div>
            </div>

            <div className="flex justify-center mb-4">
              <Link to="/joblists">
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg font-bold">
                  View All Jobs
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Browse Jobs by Category
          </h2>
          <JobCategories />
        </div>

        <div className="mt-16 bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Get Job Alerts
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Subscribe to receive the latest job openings that match your
            interests
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
