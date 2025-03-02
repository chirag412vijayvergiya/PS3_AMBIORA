export default function HeroSection() {
  return (
    <div className="bg-blue-600 rounded-xl p-8 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Find Your Dream Job Today
        </h1>
        <p className="text-lg mb-8 text-blue-100">
          Browse through thousands of full-time and part-time jobs near you
        </p>
        <div className="bg-white rounded-lg p-2 md:p-4 flex flex-col md:flex-row gap-2">
          <div className="flex-1 flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400 mr-2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              className="bg-transparent w-full focus:outline-none text-gray-800"
            />
          </div>
          <div className="flex-1 flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400 mr-2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <input
              type="text"
              placeholder="City, state, or remote"
              className="bg-transparent w-full focus:outline-none text-gray-800"
            />
          </div>
          <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
