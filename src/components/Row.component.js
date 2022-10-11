import React from "react";
import Square from "./Square.component";

const Row = ({ row, h }) => {
  return (
    <div
      className="row"
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {row.map((area, index) => (
        <Square key={`square-${index}`} color={area.c} h={h} w={row.length} />
      ))}
    </div>
  );
};

export default Row;
