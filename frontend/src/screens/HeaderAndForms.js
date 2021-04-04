import React, { useState } from "react";

import Header from "../Container/Header";
import LogInForm from "../Container/LogInForm";
import RegisterForm from "../Container/RegisterForm";

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
