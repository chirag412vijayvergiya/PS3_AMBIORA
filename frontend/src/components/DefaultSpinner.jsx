import { FaSpinner } from "react-icons/fa";

function DefaultSpinner() {
  return (
    <div className="flex items-center justify-center">
      <FaSpinner className="animate-spin text-blue-500 text-4xl" />
    </div>
  );
}

export default DefaultSpinner;
