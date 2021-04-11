import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../Container/Header/Header";
import LogInForm from "../../Container/LoginForm/LogInForm";
import RegisterForm from "../../Container/RegisterForm/RegisterForm";

const HeaderAndForms = () => {
  const [triggerReg, setTriggerReg] = useState(false);
  const [triggerLog, setTriggerLog] = useState(false);
  const handleTrigger = (triggerReg, triggerLog) => {
    setTriggerLog(triggerLog);
    setTriggerReg(triggerReg);
  };
  return (
    <div>
      <Header triggerForms={handleTrigger} />
      <LogInForm trigger={triggerLog} triggerFunc={setTriggerLog} />
      <RegisterForm trigger={triggerReg} triggerFunc={setTriggerReg} />
    </div>
  );
};

export default HeaderAndForms;
