import React from "react";

import "./navbar.css";
import AllItems from "../allitems/AllItems";

const Navbar = () => {
  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-2 gap-6 mb-6 lg:grid-cols-2 bg-white">
          <div className="w-full px-4 py-5  ml-4">
            <div className="mt-1 text-3xl font-semibold pro-name">File Manager</div>
          </div>
          <div className="w-full px-4 py-5">
            <div className="mt-1 font-semibold text-gray-900 text-right">
              <button className="btn-customised">+ Upload</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
