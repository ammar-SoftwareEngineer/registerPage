import React from "react";
import styles from "./ImageSide.module.css";
import img from "./images/Rectangle 11.png";
export default function ImageSide() {
  return (
    <div className={` position-relative ${styles.ImageSide}`}>
      <div className="image">
        <img
          className="w-100  "
          style={{ height: "100vh" }}
          src={img}
          alt="img"
        />
      </div>
    
    </div>
  );
}
