import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

function DeleteTooltip() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <>
      <span data-tip={showTooltip ? "remove" : ""} data-for="delete-tooltip" className="cursor-pointer" onClick={handleClick}>
        <FaTrash />
      </span>

      {showTooltip && (
        <Tooltip id="delete-tooltip" place="left" effect="solid">
          <div className="flex flex-col">
            <span>
              <FaTrash /> Remove
            </span>
            <div className="flex justify-end mt-2">
              <button className="mr-2 px-4 py-2 bg-red-500 text-white rounded">Yes</button>
              <button className="px-4 py-2 bg-gray-500 text-white rounded">No</button>
            </div>
          </div>
        </Tooltip>
      )}
    </>
  );
}

export default DeleteTooltip;
