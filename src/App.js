import React, { useState } from "react";
import UserInput from "./Components/UserInput";
import "./App.css";
import UserList from "./Components/UserList";
const App = () => {
  const [UserLog, setUserLog] = useState([]);
  const UserCatch = (UserInfo) => {
    setUserLog((prevUserLog) => {
      return [...prevUserLog,UserInfo];
    });
  };

  return (
    <div>
      <UserInput UserFetch={UserCatch} />
      <UserList users={UserLog}/>
    </div>
  );
};

export default App;
