"use client";

import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { courses } from "../data/courseData";
import {
  ArrowLeft,
  Star,
  Clock,
  Calendar,
  BarChart,
  ChevronDown,
  ChevronUp,
  Play,
} from "lucide-react";

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number.parseInt(id));

  const [expandedSections, setExpandedSections] = useState({});

  // Toggle section expansion
  const toggleSection = (sectionIndex) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex],
    }));
  };

  // Calculate total lectures and duration
  const totalLectures =
    course?.content.reduce(
      (total, section) => total + section.lectures.length,
      0
    ) || 0;

  if (!course) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Course not found</h2>
        <p className="mt-2 text-gray-600">
          The course you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/courselist"
          className="mt-4 inline-flex items-center text-blue-600 hover:text-indigo-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Course header */}
      <div className="bg-indigo-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/courselist"
            className="inline-flex items-center text-indigo-100 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>
          <h1 className="text-3xl font-bold">{course.title}</h1>
          <p className="mt-2 text-xl text-indigo-100">
            {course.shortDescription}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-6">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="ml-1 font-medium">{course.rating}</span>
              <span className="ml-1 text-indigo-100">
                ({course.reviewCount} reviews)
              </span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-indigo-200" />
              <span className="ml-1 text-indigo-100">{course.duration}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-indigo-200" />
              <span className="ml-1 text-indigo-100">
                Last updated: {course.lastUpdated}
              </span>
            </div>
            <div className="flex items-center">
              <BarChart className="h-5 w-5 text-indigo-200" />
              <span className="ml-1 text-indigo-100">{course.level}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Course content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Course details */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-4">About This Course</h2>
              <p className="text-gray-700 whitespace-pre-line">
                {course.description}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Course Content</h2>
                <div className="text-sm text-gray-500">
                  {totalLectures} lectures • {course.duration} total
                </div>
              </div>

              {/* Course sections */}
              <div className="space-y-4">
                {course.content.map((section, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-md overflow-hidden"
                  >
                    <button
                      className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                      onClick={() => toggleSection(index)}
                    >
                      <div className="font-medium text-left">
                        {section.section}
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 mr-2">
                          {section.lectures.length} lectures
                        </span>
                        {expandedSections[index] ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                    </button>

                    {expandedSections[index] && (
                      <div className="divide-y divide-gray-200">
                        {section.lectures.map((lecture, lectureIndex) => (
                          <div
                            key={lectureIndex}
                            className="flex items-center justify-between p-4 hover:bg-gray-50"
                          >
                            <div className="flex items-center">
                              <Play className="h-4 w-4 text-gray-400 mr-2" />
                              <span>{lecture.title}</span>
                            </div>
                            <span className="text-sm text-gray-500">
                              {lecture.duration}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Enrollment card */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-8">
              <div className="mb-4">
                <img
                  src={course.thumbnail || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
              <div className="text-3xl font-bold mb-6">${course.price}</div>
              <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md font-medium hover:bg-indigo-700 mb-4">
                Enroll Now
              </button>
              <button className="w-full bg-white text-indigo-600 py-3 px-4 rounded-md font-medium border border-indigo-600 hover:bg-indigo-50 mb-6">
                Add to Wishlist
              </button>

              <div className="space-y-4">
                <h3 className="font-medium">This course includes:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {course.duration} of on-demand video
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Full lifetime access
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Access on mobile and TV
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Certificate of completion
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-medium mb-2">Instructor</h3>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xl">
                    {course.instructor.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <div className="font-medium">{course.instructor}</div>
                    <div className="text-sm text-gray-500">
                      Course Instructor
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
