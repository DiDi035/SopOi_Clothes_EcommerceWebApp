import React, { useState } from "react";

import Header from "../components/Header/Header";
import LogInForm from "../components/LogInForm";
import RegisterForm from "../components/RegisterForm";

const HeaderAndForms = () => {
  const [triggerReg, setTriggerReg] = useState(false);
  const [triggerLog, setTriggerLog] = useState(false);
  return (
    <div>
      <Header triggerRegForm={setTriggerReg} triggerLogForm={setTriggerLog} />
      <LogInForm
        trigger={triggerLog}
        triggerFunc={setTriggerLog}
      />
      <RegisterForm
        trigger={triggerReg}
        triggerFunc={setTriggerReg}
      />
    </div>
  );
};

export default HeaderAndForms;
