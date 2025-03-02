export default function FeaturedJobCard({
  title,
  company,
  location,
  type,
  salary,
  tags,
  featured,
}) {
  return (
    <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-600 hover:shadow-md transition-shadow">
      {featured && (
        <div className="flex justify-end mb-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Featured
          </span>
        </div>
      )}

      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <div className="mb-2">
        <div className="text-gray-700">{company}</div>
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
          {location}
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
          {type}
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          {salary}
        </span>
      </div>

      <div className="mb-4 flex flex-wrap gap-1">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
          >
            {tag}
          </span>
        ))}
      </div>

      <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
        Apply Now
      </button>
    </div>
  );
}
