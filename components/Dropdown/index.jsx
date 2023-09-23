// components/Dropdown.js
import React from "react";
import styles from "./Dropdown.module.scss";

// Helper function to capitalize the first letter of each word
const capitalizeWords = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const Dropdown = ({ options, onChange, label }) => {
  return (
    <div className={styles.dropdown}>
      <label className="dropdownLabel" htmlFor="customDropdown">
        {label}
      </label>
      <select id="customDropdown" onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {capitalizeWords(option)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
