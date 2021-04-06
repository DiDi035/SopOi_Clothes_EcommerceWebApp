import React, { useRef, useState, useEffect, useCallback } from "react";
import FormModal from "../components/FormModal";
import Text from "../components/Text";
import PrimaryButton from "../components/PrimaryButton";
import Link from "../components/Link";
import "../assets/stylesheets/Forms.css";
import "../assets/colors/Colors.css";
import Colors from "../assets/colors/Colors";
import crossLogo from "../assets/images/cross.svg";
import Validation from "../utils/Validation";
import Fetch from "../utils/Fetch";
import * as Common from "../common/index";
import * as UserTypes from "../states/user/type";
import * as UserActions from "../states/user/action";
import { connect, useDispatch } from "react-redux";
import store from "../states/store";

const LogInForm = (props) => {
  const [emailInputClasses, setEmailInputClasses] = useState(
    "form-control shadow-none"
  );
  const [passInputClasses, setPassInputClasses] = useState(
    "form-control shadow-none"
  );
  const [disableBtn, setDisableBtn] = useState(true);
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [validLogin, setValidLogin] = useState(true);
  const email = useRef("");
  const password = useRef("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UserActions.authenCurUser(emailValue, passValue))
      .then(() => {
        setValidLogin(true);
        props.triggerFunc(false, false);
      })
      .catch((err) => {
        setValidLogin(false);
      });
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
  return props.trigger ? (
    <FormModal height="568px">
      <form className="logForm" action="" method="GET">
        <div className="d-flex flex-row justify-content-end w-100">
          <button
            type="button"
            className="crossBtn"
            onClick={() => props.triggerFunc(false, false)}
          >
            <img src={crossLogo} />
          </button>
        </div>
        <div className="d-flex flex-row justify-content-center pb-2 mb-2">
          <Text
            textDecoration="none"
            fontWeight="bold"
            fontSize="32px"
            fontFam="Montserrat"
            color="black"
          >
            Log In
          </Text>
        </div>
        {validLogin ? null : (
          <div class="mb-1 d-flex flex-row justify-content-center">
            <Text
              fontFam="Montserrat"
              fontSize="12px"
              color={Colors.strawberry}
              fontWeight="normal"
            >
              Your e-mail/password is invalid!
            </Text>
          </div>
        )}
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            <Text
              fontFam="Montserrat"
              textDecoration="none"
              fontWeight="bold"
              fontSize="12px"
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
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            <Text
              fontFam="Montserrat"
              textDecoration="none"
              fontWeight="bold"
              fontSize="12px"
              color="black"
            >
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
              <Text
                fontFam="Montserrat"
                fontSize="14px"
                textDecoration="none"
                fontWeight="normal"
                color={Colors["greyish-brown"]}
              >
                Remember password
              </Text>
            </label>
          </div>
          <div className="w-90 pl-4 ml-4">
            <Link
              fontSize="14px"
              underlined={false}
              color={Colors["greyish-brown"]}
              linkTo="#"
            >
              Forgot your password?
            </Link>
          </div>
        </div>
        <div className="mb-4">
          <PrimaryButton disabled={disableBtn} onClick={handleSubmit}>
            Log In
          </PrimaryButton>
        </div>
        <div className="d-flex flex-row justify-content-center mt-5">
          <p>
            <Text fontFam="Montserrat" color={Colors["greyish-brown"]}>
              Don't have an account?{" "}
              <Link underlined={true} linkTo="#" color={Colors.primary}>
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

const mapStateToProps = (state) => {
  return {
    curUser: state.user.curUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authenUser: (email, password) =>
      dispatch(UserActions.authenCurUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
