import { useId } from "react";
import React from "react";

function Select({ options, className = "", lebel, ...props }, ref) {
  const id = useId;
  return (
    <div className="w-full">
      {lebel && <lebel className="" htmlFor={id}></lebel>}
      {
        <select
          className={`px-3 text-black outline-none rounded-lg bg-white focus:bg-gray-50 border border-gray-200 duration-200 w-full ${className}`}
          id={id}
          ref={ref}
          {...props}
        >
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      }
    </div>
  );
}

export default React.forwardRef(Select);
