import React, { useRef, useState } from "react";
import ErrorModal from "./UI/ErrorModal";
import "./UserInput.css";

const UserInput = (props) => {

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [username, setUsername] = useState("");  State logic for userinput and handling it
  // const usernameHandler = (event) => {
  //   setUsername(event.target.value);
  // };

  // const [age, setAge] = useState("");
  // const ageHandler = (event) => {
  //   setAge(event.target.value);
  // };

  const [error, setError] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    const refName = nameInputRef.current.value; // Ref code for input 
    const refAge = ageInputRef.current.value;
    if (refName.trim().length === 0 || refAge.trim().length === 0) setError(true);
    if (+refAge < 1) return; // The + before the age converts the string age to number age
    const user = {
      name: refName, //Using ref value instead of state value
      age: refAge,
      id: Math.random().toString(),
    };
    props.UserFetch(user);
    nameInputRef.current.value = ""; //These statements manipulate the DOM elements which is not recommended using refs but it's fine here :)
    ageInputRef.current.value = "";
    // setUsername("");
    // setAge("");
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          setErrorStatus={setError}
          title="An Error Occured"
          message="Invalid Username or age. Please try again."
        />
      )}
      <div className="formBody">
        <form onSubmit={submitHandler} className="userInputForm">
          <div className="nameInput">
            <label htmlFor="username">
              <strong>Username: </strong>
            </label>
            <input
              autoComplete="off"
              // onChange={usernameHandler}
              id="username"
              type="text"
              // value={username}
              ref={nameInputRef}
            />
          </div>
          <div className="ageInput">
            <label htmlFor="age">
              <strong>Age(Years): </strong>
            </label>
            <input
              autoComplete="off"
              // onChange={ageHandler}
              // value={age}
              id="age"
              type="number"
              ref={ageInputRef}
            />
          </div>
          <button className="inputSubmit" type="submit">
            Add User
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default UserInput;