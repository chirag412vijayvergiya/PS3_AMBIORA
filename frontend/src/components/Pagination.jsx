export default function Pagination() {
  return (
    <div className="flex items-center justify-center space-x-1">
      <a
        href="#"
        className="px-3 py-1 rounded-md text-gray-500 hover:bg-gray-200"
      >
        Previous
      </a>
      <a href="#" className="px-3 py-1 rounded-md bg-blue-600 text-white">
        1
      </a>
      <a
        href="#"
        className="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-200"
      >
        2
      </a>
      <a
        href="#"
        className="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-200"
      >
        3
      </a>
      <span className="px-3 py-1 text-gray-500">...</span>
      <a
        href="#"
        className="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-200"
      >
        8
      </a>
      <a
        href="#"
        className="px-3 py-1 rounded-md text-gray-500 hover:bg-gray-200"
      >
        Next
      </a>
    </div>
  );
}
