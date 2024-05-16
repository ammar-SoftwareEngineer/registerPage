import React, { useState } from "react";
import styles from "./Login.module.css";
import ImageSide from "../ImageSide/ImageSide";
import Input from "../Input/Input";
import { loginAndRegister } from "../Context/FormInput";
import {
  faEnvelope,
  faLock,
  faCheckCircle,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal/Modal";
import img from "../ImageSide/images/icon.png";
import { Msg } from "../Context/MsgContext";
import { Link } from "react-router-dom";
export default function Login() {
  let [showModal, setShowModal] = useState(false);
  let [msg, setMsg] = useState("");
  let [bodyMsg, setBodyMsg] = useState("");
  let [loginInputs, setLoginInputs] = useState({
    email: "",
    password: "",
    isRememebr: false,
  });
  function handleEmailInput(value) {
    setLoginInputs({ ...loginInputs, email: value });
  }
  function handlePasswordInput(value) {
    setLoginInputs({ ...loginInputs, password: value });
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
        <div className="col-lg-7 col-md-7 d-none d-md-block ">
          <ImageSide />
        </div>
        <div className="col-lg-5 col-md-5 d-flex align-items-center min-vh-100">
          <div className={` container ${styles.container}`}>
            <div className="header-form  mb-5">
              <h1 className="mb-4">Sign in</h1>
              <p className="mb-2">If you don’t have an account register</p>
              <p>
                You can{" "}
                <Link
                  to="/register"
                  className=" text-decoration-none"
                  style={{ color: "#FF432A", cursor: "pointer" }}
                >
                  <span className="ms-3 ">Register here !</span>
                </Link>
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                let data = JSON.parse(localStorage.getItem("register"));
                if (data === null) {
                  setShowModal(true);
                  setMsg("The account and password do not exist ");
                  setBodyMsg("  register a new account");
                } else if (
                  data.email === loginInputs.email &&
                  data.password === loginInputs.password
                ) {
                  setShowModal(true);
                  setMsg("Success");
                  setBodyMsg(
                    "Congratulations, your account has been successfully registered"
                  );
                } else {
                  setShowModal(true);
                  setMsg("The account and password are incorrect");
                  setBodyMsg(" Edit the account or register a new account");
                }
              }}
            >
              <loginAndRegister.Provider
                value={{
                  labelName: "Email",
                  iconName: faEnvelope,
                  handleInputChange: handleEmailInput,
                  placeholder: "Enter your email address",
                  typeInput: "email",
                }}
              >
                <Input />
              </loginAndRegister.Provider>
              <loginAndRegister.Provider
                value={{
                  labelName: "Password",
                  iconName: faLock,
                  handleInputChange: handlePasswordInput,
                  placeholder: "Enter your Password",
                  typeInput: "password",
                }}
              >
                <Input />
              </loginAndRegister.Provider>
              <div className="check-forget mt-4 mb-5 d-flex justify-content-between">
                <div className="form-check ">
                  <input
                    style={{ cursor: "pointer" }}
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="check"
                    onChange={(e) => {
                      setLoginInputs({
                        ...loginInputs,
                        isRememebr: e.target.checked,
                      });
                    }}
                  />
                  <label
                    style={{ cursor: "pointer" }}
                    className="form-check-label  fs-6"
                    htmlFor="check"
                  >
                    Rememebr me
                  </label>
                </div>
                <div className="forget-pass">
                  <a href="#" className=" text-decoration-none text-black fs-6">
                    Forget Password ?
                  </a>
                </div>
              </div>

              <div className="btn-send">
                <button
                  disabled={!loginInputs.email || !loginInputs.password}
                  type="submit"
                  className="btn w-100 rounded-5 py-3 border-0 shadow-lg"
                  style={{ backgroundColor: "#FF432A", color: "white" }}
                >
                  Login
                </button>
              </div>
            </form>
            <Msg.Provider
              value={{
                show: showModal,
                msg: msg,
                bodyMsg: bodyMsg,
                iconName: msg === "Success" ? faCheckCircle : faXmarkCircle,
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
