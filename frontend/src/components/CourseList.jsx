"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../data/courseData";
import { Star, Clock } from "lucide-react";

const CourseList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter courses based on search term
  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Explore Our Courses
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Discover top-quality courses taught by industry experts
        </p>

        {/* Search bar */}
        <div className="mt-6 max-w-xl mx-auto">
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 py-3 sm:text-sm border-gray-300 rounded-md"
              placeholder="Search courses or instructors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Course grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white overflow-hidden shadow rounded-lg transition-all hover:shadow-lg"
          >
            <div className="relative">
              <img
                className="h-48 w-full object-cover"
                src={course.thumbnail || "/placeholder.svg"}
                alt={course.title}
              />
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">
                ${course.price}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2 h-14">
                {course.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{course.instructor}</p>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2 h-10">
                {course.shortDescription}
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1 text-sm font-medium text-gray-900">
                    {course.rating}
                  </span>
                  <span className="ml-1 text-sm text-gray-500">
                    ({course.reviewCount})
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {course.duration}
                </div>
              </div>
              <Link
                to={`/courselist/${course.id}`}
                className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* No results message */}
      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900">
            No courses found
          </h3>
          <p className="mt-2 text-gray-500">Try adjusting your search terms</p>
        </div>
      )}
    </div>
  );
};

export default CourseList;
