import React from "react";
import Labels from "../labels/Labels";
import "./category.css";

function Category({ category }) {
  return (
    <div>
      <b className="listcatname">{category.Name}</b>
      <Labels labels={category.Labels} />
    </div>
  );
}

export default Category;
