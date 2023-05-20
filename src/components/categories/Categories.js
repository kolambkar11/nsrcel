import React from "react";
import Label from "../label/Label";
import Category from "../category/Category";

function Categories({ categories }) {
  if (!categories) {
    // Render a loading state or return null if you want to show nothing
    return <div>Loading...</div>;
  }
  return (
    <div>
      {categories.map((category) => {
        return <Category key={category.id} category={category}></Category>;
      })}
    </div>
  );
}

export default Categories;
