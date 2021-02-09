import React from "react";
import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col text-left">
      {label && <label htmlFor={props.id || props.name}>{label}</label>}
      <input
        {...field}
        {...props}
        className="border-b border-primary focus:outline-none focus:border-blue-500"
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CustomInput;
