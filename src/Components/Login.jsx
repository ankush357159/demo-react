import React, { useContext } from "react";
import { LoginContext } from "../helper/Context";

const Login = () => {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  return (
    <div>
      {loggedIn ? <h3>You are logged in</h3> : <h3>You are not logged in</h3>}
      <button onClick={() => setLoggedIn(true)}>Click Me!</button>
    </div>
  );
};

export default Login;
