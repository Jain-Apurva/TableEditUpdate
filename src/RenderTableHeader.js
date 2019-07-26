import React from "react";

const RenderTableHeader = ({ person }) => {
  const tableHeader = Object.keys(person);
  return tableHeader.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>;
  });
};

export default RenderTableHeader;
