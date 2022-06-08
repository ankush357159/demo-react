import { useState } from "react";
import { LoginContext, UserDataContext } from "./helper/Context";
// import SubChildElement from "./SubChildElement"

import Login from "./Components/Login";
// import FuncCounter from "./Components/FuncCounter";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState({
    name: "Mayank",
    age: 30,
    details: {
      color: "red",
      hobbies: "reading",
    },
    work: {
      profession: "employee",
      institute: "abc"
    }
  });
  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <UserDataContext.Provider value={{data, setData}}>
        {/* <Counter /> */}
     {/* <FuncCounter />  */}
        {/* /* <Home name="John" /> */}
         <Login />
        {/* <SubChildElement />  */}
      </UserDataContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
