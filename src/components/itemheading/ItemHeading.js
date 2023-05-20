import React from "react";

function ItemHeading() {
  return (
    <>
      <thead>
        <tr>
          <th className="px-4 py-2">
            <input type="checkbox" className=" checked:bg-blue-500 " />
          </th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Owner</th>
          <th className="px-4 py-2">Labels</th>
          <th className="px-4 py-2">Type</th>
          <th className="px-4 py-2">Modified</th>
          <th className="px-4 py-2">Action</th>
        </tr>
      </thead>
    </>
  );
}

export default ItemHeading;
