import React from "react";

export const Textarea = ({ className, ...props }) => {
  return (
    <textarea
      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none ${className}`}
      rows="4"
      {...props}
    />
  );
};
