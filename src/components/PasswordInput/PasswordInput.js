import React, { useState } from "react";
import { useField } from "formik";

const PasswordInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [type, setType] = useState("password");
  return (
    <div className="flex flex-col text-left">
      {label && <label htmlFor={props.id || props.name}>{label}</label>}
      <div className="relative flex items-center">
        <input
          {...field}
          {...props}
          className="border-b border-primary focus:outline-none focus:border-blue-500 w-full"
          type={type}
        />
        {type === "password" ? (
          <span
            class="material-icons text-primary absolute right-0 cursor-pointer select-none"
            onClick={() => {
              setType("text");
            }}
          >
            visibility
          </span>
        ) : (
          <span
            class="material-icons text-primary absolute right-0 cursor-pointer select-none"
            onClick={() => {
              setType("password");
            }}
          >
            visibility_off
          </span>
        )}
      </div>
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default PasswordInput;
