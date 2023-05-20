import React from "react";
import "./label.css";
function Label({ label }) {
  return (
    <div>
      <li className="cat-lables">
        <input type="checkbox" className="checkbox" /> {label.Name}
      </li>
    </div>
  );
}

export default Label;
