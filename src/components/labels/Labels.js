import React from "react";
import Label from "../label/Label";

function Labels({ labels }) {
  return (
    <div>
      {labels &&
        labels.map((label) => {
          return <Label key={label.id} label={label} />;
        })}
    </div>
  );
}

export default Labels;
