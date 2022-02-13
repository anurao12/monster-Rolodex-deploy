import React from "react";
import "./SearchBox.style.css";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};
