import React from "react";
import styles from "./Input.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { loginAndRegister } from "../Context/FormInput";
export default function Input() {
  let inputContext = useContext(loginAndRegister);

  return (
    <div>
      <div className="mt-5 ">
        <label
          htmlFor={inputContext.labelName}
          className="form-label "
        >
          {inputContext.labelName}
        </label>
        <div className="input-icon position-relative">
          <FontAwesomeIcon
            icon={inputContext.iconName}
            className=" position-absolute top-50 start-0 translate-middle-y"
            
          />
          <input
            type={inputContext.typeInput}
            className={`${styles.Input} form-control bg-transparent border-0 border-bottom border-2  rounded-0 shadow-none px-4 py-2`}
            id={inputContext.labelName}
            placeholder={inputContext.placeholder}
            onChange={(e) => {
              inputContext.handleInputChange(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
