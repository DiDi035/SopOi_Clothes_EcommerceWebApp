import React, { useRef } from "react";

import FormModal from "./Container/FormModal";
import Text from "./Text";
import SubmitFormBtn from "./SubmitFormBtn";
import Link from "./Link";

import "bootstrap/dist/css/bootstrap.min.css";

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
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const emailValidation = () => {
    if (!ValidateEmail(email.current.value)) {
      console.log("Email invalid");
    } else {
    }
  };
  const passwordValidation = () => {
    if (!ValidatePassword(password.current.value)) {
      console.log("Password invalid");
    } else {
    }
  };

  return (
    <FormModal>
      <form>
        <div className="d-flex flex-row justify-content-center py-4">
          <Text textDecoration="none" fontWeight="bold" fontSize="32px">
            Register
          </Text>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            <Text textDecoration="none" fontWeight="bold" fontSize="12px">
              NAME
            </Text>
          </label>
          <input
            onError={true}
            ref={name}
            placeholder="Enter your name..."
            type="text"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            <Text textDecoration="none" fontWeight="bold" fontSize="12px">
              E-MAIL
            </Text>
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your e-mail..."
            ref={email}
            onChange={emailValidation}
          />
        </div>
        <div class="mb-4">
          <label for="exampleInputPassword1" class="form-label">
            <Text textDecoration="none" fontWeight="bold" fontSize="12px">
              PASSWORD
            </Text>
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter your password..."
            ref={password}
            onChange={passwordValidation}
          />
        </div>
        <div class="mb-4 d-flex flex-column align-items-center">
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
        <SubmitFormBtn onClick={handleSubmit}>
          <Text textDecoration="none" fontWeight="bold" fontSize="16px">
            Register
          </Text>
        </SubmitFormBtn>
      </form>
    </FormModal>
  );
};

export default RegisterForm;
