

import React, { useState } from "react";
import validator from "validator";

const App = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const validate = (value) =>{
    setPassword(value);
    if(validator.isStrongPassword(value)){
      setMessage('strong');
    }else{
      setMessage('weak');
    }
  };

  return(
    <div>
      <h2>PASSWORD CHECKING</h2>
      <input type="password" value={password}
      onChange={(e) =>
        validate(e.target.value)
      } />

      {message && (<p>{message}</p>)}
    </div>
  );
};
export default App;