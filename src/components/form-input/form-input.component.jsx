import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, value, ...otherProps }) => {
  return (
    <div className="group">
      <input
        type="text"
        onChange={handleChange}
        {...otherProps}
        className="form-input"
      />
      {label ? (
        <label className={`${value.length ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
