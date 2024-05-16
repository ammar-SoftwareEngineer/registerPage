import React from "react";
import styles from "./Modal.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Msg } from "../Context/MsgContext";
import { useContext } from "react";
export default function Modal() {
  let msgContext = useContext(Msg);
  if (msgContext.show) {
    return (
      <div>
        <div
          className="layer position-absolute top-50 start-50 w-100 translate-middle min-vh-100 d-flex justify-content-center align-items-center z-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.699)" }}
        >
          <div className="container">
            <div
              className={`${styles.card} card p-3 rounded-5 text-center  mx-auto`}
            >
              <FontAwesomeIcon
                icon={msgContext.iconName}
                size="3x"
                className={msgContext.msg==="Success" ? "text-success" : "text-danger"}
              />
              <div className="card-body">
                <h5
                  className={
                    msgContext.msg==="Success" ? "text-success fs-4 " : "text-danger fs-4"
                  }
                >
                  {msgContext.msg}
                </h5>
                <p className="card-text ">{msgContext.bodyMsg}</p>
                <button
                  className={
                    msgContext.msg==="Success" ? " btn btn-success " : " btn btn-danger "
                  }
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
