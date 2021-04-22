import React, { useState, useEffect, useRef } from "react";
import bg2x from "../../assets/images/adminBg-2x.jpg";
import FormModal from "../../components/FormModal/FormModal";
import Text from "../../components/Text/Text";
import Validation from "../../utils/Validation";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import BrandLogo from "../../assets/images/logo-light.svg";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as UserActions from "../../states/user/action";
import * as UserStates from "../../states/user/states";

const AdminLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [emailInputClasses, setEmailInputClasses] = useState(
    "form-control shadow-none"
  );
  const [passInputClasses, setPassInputClasses] = useState(
    "form-control shadow-none"
  );
  const [disableBtn, setDisableBtn] = useState(true);
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const isSuccess = useSelector(UserStates.getIsSuccess);
  const email = useRef("");
  const password = useRef("");
  const type = useSelector(UserStates.getType);
  const emailValidation = () => {
    setEmailValue(email.current.value);
    if (!Validation.ValidateEmail(email.current.value)) {
      setEmailInputClasses("form-control shadow-none errorInputAdmin");
    } else {
      setEmailInputClasses("form-control shadow-none");
    }
  };
  const passwordValidation = () => {
    setPassValue(password.current.value);
    if (!Validation.ValidatePassword(password.current.value)) {
      setPassInputClasses("form-control shadow-none errorInputAdmin");
    } else {
      setPassInputClasses("form-control shadow-none");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UserActions.authenCurUser(emailValue, passValue));
  };
  useEffect(() => {
    if (
      emailValue !== "" &&
      emailInputClasses !== "form-control shadow-none errorInputAdmin" &&
      passValue !== "" &&
      passInputClasses !== "form-control shadow-none errorInputAdmin"
    ) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
    if (isSuccess && type === "seller") {
      history.push("/admin");
    }
  }, [emailValue, passValue, isSuccess]);
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${bg2x})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <img
        src={BrandLogo}
        style={{ position: "absolute", top: "3%", left: "3%" }}
      />
      <FormModal height="424px" width="380px" bgColor="rgba(61, 61, 63, 0.8)">
        <form>
          <div className="d-flex flex-row justify-content-center pb-2 mb-2">
            <Text
              textDecoration="none"
              fontWeight="bold"
              fontSize="32px"
              fontFam="Montserrat"
              color="primary"
            >
              Log In
            </Text>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              <Text
                fontFam="Montserrat"
                textDecoration="none"
                fontWeight="bold"
                fontSize="12px"
                color="greyish"
              >
                E-MAIL
              </Text>
            </label>
            <input
              style={{ width: "316px" }}
              value={emailValue}
              required
              type="email"
              class={emailInputClasses}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="email@sample.com"
              ref={email}
              onChange={emailValidation}
            />
          </div>
          <div class="mb-5">
            <label for="exampleInputPassword" class="form-label">
              <Text
                fontFam="Montserrat"
                textDecoration="none"
                fontWeight="bold"
                fontSize="12px"
                color="greyish"
              >
                PASSWORD
              </Text>
            </label>
            <input
              style={{ width: "316px" }}
              value={passValue}
              required
              type="password"
              class={passInputClasses}
              id="exampleInputPassword"
              placeholder="Enter password"
              ref={password}
              onChange={passwordValidation}
            />
          </div>
          <div className="mb-4">
            <PrimaryButton
              disabled={disableBtn}
              width="316px"
              onClick={handleSubmit}
            >
              Log In
            </PrimaryButton>
          </div>
        </form>
      </FormModal>
    </div>
  );
};

export default AdminLogin;
