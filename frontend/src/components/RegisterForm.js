import React, { useRef, useState, useEffect } from "react";

import FormModal from "./Container/FormModal";
import Text from "./Text";
import SubmitFormBtn from "./SubmitFormBtn";
import Link from "./Link";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/colors/Colors.css";
import Colors from "../assets/colors/Colors";

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

const RegisterForm = () => {
  const [emailInputClasses, setEmailInputClasses] = useState(
    "form-control shadow-none"
  );
  const [passInputClasses, setPassInputClasses] = useState(
    "form-control shadow-none"
  );
  const [disableBtn, setDisableBtn] = useState(true);
  const [validNameReg, setValidNameReg] = useState(true);
  const [validEmailReg, setValidEmailReg] = useState(true);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const nameOnChange = () => {
    setNameValue(name.current.value);
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
      nameValue !== "" &&
      emailValue !== "" &&
      emailInputClasses !== "form-control shadow-none errorInput" &&
      passValue !== "" &&
      passInputClasses !== "form-control shadow-none errorInput"
    ) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [emailValue, passValue, nameValue]);
  return (
    <FormModal>
      <form>
        <div className="d-flex flex-row justify-content-center py-4">
          <Text textDecoration="none" fontWeight="bold" fontSize="32px">
            Register
          </Text>
        </div>
        {validEmailReg ? null : (
          <div class="mb-3 d-flex flex-row justify-content-center">
            <Text fontSize="12px" color={Colors.strawberry} fontWeight="normal">
              This e-mail has been used for another account!
            </Text>
          </div>
        )}
        {validNameReg ? null : (
          <div class="mb-3 d-flex flex-row justify-content-center">
            <Text fontSize="12px" color={Colors.strawberry} fontWeight="normal">
              This name has been used for another account!
            </Text>
          </div>
        )}
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            <Text textDecoration="none" fontWeight="bold" fontSize="12px">
              NAME
            </Text>
          </label>
          <input
            value={nameValue}
            required
            onChange={nameOnChange}
            onError={true}
            ref={name}
            placeholder="Enter your name..."
            type="text"
            class="form-control shadow-none"
          />
        </div>
        <div class="mb-3">
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
            type="password"
            class={passInputClasses}
            id="exampleInputPassword1"
            placeholder="Enter your password..."
            ref={password}
            onChange={passwordValidation}
            required
          />
        </div>
        <div class="mb-5 d-flex flex-column align-items-center">
          <p className="mb-1">
            <Text>By creating the account you agree to the</Text>
          </p>
          <p>
            <Text>
              <Link linkTo="#">Terms of Service</Link> and{" "}
              <Link linkTo="#">Privacy Policy</Link>
            </Text>
          </p>
        </div>
        <SubmitFormBtn disabled={disableBtn} onClick={handleSubmit}>
          <Text textDecoration="none" fontWeight="bold" fontSize="16px">
            Register
          </Text>
        </SubmitFormBtn>
      </form>
    </FormModal>
  );
};

export default RegisterForm;
