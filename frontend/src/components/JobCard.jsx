import { Link } from "react-router-dom";
import tc from "./../assets/tc.jpeg";

export default function JobCard({ job }) {
  return (
    <div className="h-auto bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow flex flex-col gap-8">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
            <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src={tc}
                alt={`${job.company} logo`}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-lg">{job.title}</h3>
            <span className="text-gray-500 text-sm">{job.posted}</span>
          </div>

          <div className="mb-2">
            <div className="text-gray-700">{job.company}</div>
            <div className="flex items-center text-gray-500 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {job.location}
            </div>
          </div>

          <div className="mb-3 flex flex-wrap gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              {job.type}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              {job.salary}
            </span>
            {job.requiredSkills.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {job.description}
          </p>

          <div className="flex justify-between items-center">
            <Link to={`/joblists/${job._id}`}>
              <button className="bg-gray-300 text-blue-600  py-2 px-4 rounded-lg hover:bg-gray-400 text-sm font-medium">
                View Details
              </button>
            </Link>

            <Link to={`/joblists/${job._id}`}>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
