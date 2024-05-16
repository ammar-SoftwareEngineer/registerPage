import React, { useState } from "react";
import styles from "./Register.module.css";
import ImageSide from "../ImageSide/ImageSide";
import {
  faEnvelope,
  faUser,
  faLock,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { loginAndRegister } from "../Context/FormInput";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";
import img from "../ImageSide/images/icon.png";
import { Msg } from "../Context/MsgContext";

export default function Register() {
  let [showModal, setShowModal] = useState(false);
  let [bodyMsg, setBodyMsg] = useState("");
  let [registerInputs, setRegisterInputs] = useState({
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  let [error, setError] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  function handleEmailInput(value) {
    setRegisterInputs({ ...registerInputs, email: value });
  }
  function handleUserNameInput(value) {
    setRegisterInputs({ ...registerInputs, userName: value });
    if (registerInputs.userName.length > 10) {
      setError("");
    } else {
      setError({ userName: "The username is less than 10" });
    }
  }
  function handlePasswordInput(value) {
    setRegisterInputs({ ...registerInputs, password: value });
    if (
      registerInputs.password.length >= 8 &&
      registerInputs.password.length < 20
    ) {
      setError("");
    } else {
      setError({ password: "The password is less than 8" });
    }
  }
  function handleConfirmPasswordInput(value) {
    setRegisterInputs({ ...registerInputs, confirmPassword: value });
    if (
      registerInputs.confirmPassword.length >= 8 &&
      registerInputs.confirmPassword.length < 20
    ) {
      setError("");
    } else {
      setError({ confirmPassword: "The password is less than 8" });
    }
  }
  function closeModal() {
    setShowModal(false);
  }
  return (
    <div onClick={closeModal}>
      <img
        src={img}
        className=" position-absolute top-0 z-3 pt-3 ps-3"
        alt=""
      />
      <div className="row">
        <div className="col-lg-7 col-md-7 d-none d-md-block">
          <ImageSide />
        </div>
        <div className="col-lg-5 col-md-5 d-flex align-items-center min-vh-100">
          <div className={` container  ${styles.container}`}>
            <div className="header-form  mb-5">
              <h1 className="mb-4">Sign up</h1>
              <p className="mb-2">If you already have an account register</p>
              <p>
                You can
                <Link
                  to="/login"
                  className=" text-decoration-none"
                  style={{ color: "#FF432A", cursor: "pointer" }}
                >
                  <span className="ms-3 ">Login here !</span>
                </Link>
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                localStorage.setItem(
                  "register",
                  JSON.stringify(registerInputs)
                );
                setShowModal(true);
                if (
                  registerInputs.password === registerInputs.confirmPassword
                ) {
                  navigate("/login");
                } else {
                  setError("Confirm Password Error");
                  setBodyMsg(
                    "The password you wrote in the Confirm Password field is incorrect. Check if it is similar to the Password field"
                  );
                }
              }}
            >
              <loginAndRegister.Provider
                value={{
                  labelName: "Email",
                  iconName: faEnvelope,
                  handleInputChange: handleEmailInput,
                  placeholder: "Enter Your Email",
                  typeInput: "email",
                }}
              >
                <Input />
              </loginAndRegister.Provider>
              <loginAndRegister.Provider
                value={{
                  labelName: "Username",
                  iconName: faUser,
                  handleInputChange: handleUserNameInput,
                  placeholder: "Enter your User name",
                  typeInput: "text",
                }}
              >
                <Input />
                {error.userName && (
                  <p className=" alert alert-danger text-danger mt-2">
                    {error.userName}
                  </p>
                )}
              </loginAndRegister.Provider>
              <loginAndRegister.Provider
                value={{
                  labelName: "Password",
                  iconName: faLock,
                  handleInputChange: handlePasswordInput,
                  placeholder: "Enter The Password",
                  typeInput: "password",
                }}
              >
                <Input />
                {error.password && (
                  <p className=" alert alert-danger text-danger mt-2">
                    {error.password}
                  </p>
                )}
              </loginAndRegister.Provider>

              <loginAndRegister.Provider
                value={{
                  labelName: "Confirm Password",
                  iconName: faLock,
                  handleInputChange: handleConfirmPasswordInput,
                  placeholder: "Confirm your Password",
                  typeInput: "password",
                }}
              >
                <Input />
                {error.confirmPassword && (
                  <p className=" alert alert-danger text-danger mt-2">
                    {error.confirmPassword}
                  </p>
                )}
              </loginAndRegister.Provider>

              <div className="btn-send mt-5">
                <button
                  disabled={
                    !registerInputs.email ||
                    !registerInputs.userName ||
                    !registerInputs.password ||
                    !registerInputs.confirmPassword
                  }
                  type="submit"
                  className="btn w-100 rounded-5 py-3 border-0 shadow-lg"
                  style={{ backgroundColor: "#FF432A", color: "white" }}
                >
                  Register
                </button>
              </div>
            </form>
            <Msg.Provider
              value={{
                show: showModal,
                msg: error,
                bodyMsg: bodyMsg,
                iconName: faXmarkCircle,
              }}
            >
              <Modal />
            </Msg.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}
