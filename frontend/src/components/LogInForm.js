import React, { useRef, useState, useEffect } from "react";

import FormModal from "./Container/FormModal";
import Text from "./Text";
import SubmitFormBtn from "./SubmitFormBtn";
import Link from "./Link";

import "../assets/stylesheets/Forms.css";
import "../assets/colors/Colors.css";
import Colors from "../assets/colors/Colors";
import crossLogo from "../assets/images/cross.svg";

const ValidateEmail = (mail) => {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      mail
    )
  ) {
    return true;
  }
  return false;
};

const ValidatePassword = (pass) => {
  return pass.length >= 10;
};

const LogInForm = ({ trigger, triggerFunc }) => {
  const [emailInputClasses, setEmailInputClasses] = useState(
    "form-control shadow-none"
  );
  const [passInputClasses, setPassInputClasses] = useState(
    "form-control shadow-none"
  );
  const [disableBtn, setDisableBtn] = useState(true);
  const [validLogin, setValidLogin] = useState(true);
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const email = useRef("");
  const password = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const emailValidation = () => {
    setEmailValue(email.current.value);
    if (!ValidateEmail(email.current.value)) {
      setEmailInputClasses("form-control shadow-none errorInput");
    } else {
      setEmailInputClasses("form-control shadow-none");
    }
  };
  const passwordValidation = () => {
    setPassValue(password.current.value);
    if (!ValidatePassword(password.current.value)) {
      setPassInputClasses("form-control shadow-none errorInput");
    } else {
      setPassInputClasses("form-control shadow-none");
    }
  };
  useEffect(() => {
    if (
      emailValue !== "" &&
      emailInputClasses !== "form-control shadow-none errorInput" &&
      passValue !== "" &&
      passInputClasses !== "form-control shadow-none errorInput"
    ) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [emailValue, passValue]);
  return trigger ? (
    <FormModal>
      <form className="logForm" action="" method="GET">
        <div className="d-flex flex-row justify-content-end w-100">
          <button type="button" className="crossBtn" onClick={() => triggerFunc(false)}>
            <img src={crossLogo} />
          </button>
        </div>
        <div className="d-flex flex-row justify-content-center py-4 mb-4">
          <Text textDecoration="none" fontWeight="bold" fontSize="32px">
            Log In
          </Text>
        </div>
        {validLogin ? null : (
          <div class="mb-3 d-flex flex-row justify-content-center">
            <Text fontSize="12px" color={Colors.strawberry} fontWeight="normal">
              Your e-mail/password is invalid!
            </Text>
          </div>
        )}
        <div class="mb-5">
          <label for="exampleInputEmail1" class="form-label">
            <Text textDecoration="none" fontWeight="bold" fontSize="12px">
              E-MAIL
            </Text>
          </label>
          <input
            value={emailValue}
            required
            type="email"
            class={emailInputClasses}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your e-mail..."
            ref={email}
            onChange={emailValidation}
          />
        </div>
        <div class="mb-5">
          <label for="exampleInputPassword1" class="form-label">
            <Text textDecoration="none" fontWeight="bold" fontSize="12px">
              PASSWORD
            </Text>
          </label>
          <input
            value={passValue}
            required
            type="password"
            class={passInputClasses}
            id="exampleInputPassword1"
            placeholder="Enter your password..."
            ref={password}
            onChange={passwordValidation}
          />
        </div>
        <div className="d-flex flex-row w-90 mb-5">
          <div className="ml-4">
            <input type="checkbox" className="form-check-input" />
            <label class="form-check-label" for="exampleCheck1">
              <Text fontSize="14px" textDecoration="none" fontWeight="normal">
                Remember password
              </Text>
            </label>
          </div>
          <div className="w-90 pl-4 ml-4">
            <Link fontSize="14px" underlined={false} color="second" linkTo="#">
              Forgot your password?
            </Link>
          </div>
        </div>
        <SubmitFormBtn disabled={disableBtn} onClick={handleSubmit}>
          <Text textDecoration="none" fontWeight="bold" fontSize="16px">
            Log In
          </Text>
        </SubmitFormBtn>
        <div className="d-flex flex-row justify-content-center register">
          <p>
            <Text>
              Don't have an account?{" "}
              <Link underlined={true} linkTo="#">
                Register
              </Link>
            </Text>
          </p>
        </div>
      </form>
    </FormModal>
  ) : (
    ""
  );
};

export default LogInForm;
