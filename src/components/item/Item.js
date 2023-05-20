import React from "react";

import { FiEdit, FiSettings } from "react-icons/fi";
import DeleteTooltip from "../allitems/Deletetooltip";
import "./item.css";

function Item({ file }) {
  const newdate = file.ModifietAt;
  const dateString = newdate;
  const date = new Date(dateString);

  const formattedDateString = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "2-digit",
  });

  return (
    <>
      <tr>
        <td className="px-4 py-2">
          <input type="checkbox" className=" checked:bg-blue-500 " />
        </td>
        <td className="px-4 py-2 sampleth">{file.Name}</td>
        <td className="px-4 py-2">
          <img src={file.file} className="tab-image" />
        </td>
        <td className="px-4 py-2 sampletd">Label 1</td>
        <td className="px-4 py-2 sampletd">{file.Type}</td>
        <td className="px-4 py-2 sampletd">{formattedDateString}</td>
        <td className="px-4 py-2 flex sampletd">
          <FiEdit className="mr-2" />
          <DeleteTooltip />
        </td>
      </tr>
    </>
  );
}

export default Item;
