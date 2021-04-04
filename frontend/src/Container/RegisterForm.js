import React, { useRef, useState, useEffect } from "react";
import FormModal from "../components/FormModal";
import Text from "../components/Text";
import PrimaryButton from "../components/PrimaryButton";
import Link from "../components/Link";
import "../assets/stylesheets/Forms.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/colors/Colors.css";
import Colors from "../assets/colors/Colors";
import crossLogo from "../assets/images/cross.svg";
import Validation from "../utils/Validation";
import Fetch from "../utils/Fetch";
import * as Common from "../common/index";

const RegisterForm = ({ trigger, triggerFunc }) => {
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await Fetch.post(
      `${Common.DOMAIN}${Common.PORT}/auth/customer/register`,
      {
        name: nameValue,
        email: emailValue,
        password: passValue,
      }
    );
    if (!res.data.valid) {
      if (res.data.mess === "name") {
        setValidNameReg(false);
        setValidEmailReg(true);
      } else if (res.data.mess === "email") {
        setValidEmailReg(false);
        setValidNameReg(true);
      }
    } else {
      setValidNameReg(true);
      setValidEmailReg(true);
      triggerFunc(false, true);
    }
  };
  const nameOnChange = () => {
    setNameValue(name.current.value);
  };
  const emailValidation = () => {
    setEmailValue(email.current.value);
    if (!Validation.ValidateEmail(email.current.value)) {
      setEmailInputClasses("form-control shadow-none errorInput");
    } else {
      setEmailInputClasses("form-control shadow-none");
    }
  };
  const passwordValidation = () => {
    setPassValue(password.current.value);
    if (!Validation.ValidatePassword(password.current.value)) {
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
  return trigger ? (
    <FormModal height="703px">
      <form className="logForm">
        <div className="d-flex flex-row justify-content-end w-100">
          <button
            type="button"
            className="crossBtn"
            onClick={() => triggerFunc(false, false)}
          >
            <img src={crossLogo} />
          </button>
        </div>
        <div className="d-flex flex-row justify-content-center py-3">
          <Text
            textDecoration="none"
            fontWeight="bold"
            fontSize="32px"
            fontFam="Montserrat"
            color="black"
          >
            Register
          </Text>
        </div>
        {validEmailReg ? null : (
          <div class="mb-3 d-flex flex-row justify-content-center">
            <Text
              fontSize="12px"
              color={Colors.strawberry}
              fontWeight="normal"
              fontFam="Montserrat"
            >
              This e-mail has been used for another account!
            </Text>
          </div>
        )}
        {validNameReg ? null : (
          <div class="mb-3 d-flex flex-row justify-content-center">
            <Text
              fontSize="12px"
              color={Colors.strawberry}
              fontWeight="normal"
              fontFam="Montserrat"
            >
              This name has been used for another account!
            </Text>
          </div>
        )}
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            <Text
              textDecoration="none"
              fontWeight="bold"
              fontSize="12px"
              fontFam="Montserrat"
              color="black"
            >
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
            <Text
              textDecoration="none"
              fontWeight="bold"
              fontSize="12px"
              fontFam="Montserrat"
              color="black"
            >
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
            <Text
              textDecoration="none"
              fontWeight="bold"
              fontSize="12px"
              fontFam="Montserrat"
              color="black"
            >
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
        <div class="mb-4 d-flex flex-column align-items-center">
          <p className="mb-1">
            <Text fontFam="Montserrat" color={Colors["greyish-brown"]}>
              By creating the account you agree to the
            </Text>
          </p>
          <p>
            <Text fontFam="Montserrat" color={Colors["greyish-brown"]}>
              <Link color={Colors.primary} linkTo="#">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link color={Colors.primary} linkTo="#">
                Privacy Policy
              </Link>
            </Text>
          </p>
        </div>
        <div className="mt-2">
          <PrimaryButton disabled={disableBtn} onClick={handleSubmit}>
            Register
          </PrimaryButton>
        </div>
        <div className="d-flex flex-row justify-content-center mt-5 pt-2">
          <p>
            <Text fontFam="Montserrat" color={Colors["greyish-brown"]}>
              Do you have an account?{" "}
              <Link underlined={true} linkTo="#" color={Colors.primary}>
                Log In
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

export default RegisterForm;
