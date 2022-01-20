import React, { useState } from "react";
import ErrorModal from "./UI/ErrorModal";
import "./UserInput.css";

const UserInput = (props) => {
  const [username, setUsername] = useState("");
  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const [age, setAge] = useState("");
  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const [error, setError] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(username, age);
    if (username.trim().length === 0 || age.trim().length === 0) setError(true);
    if (+age < 1) return; // The + before the age converts the string age to number age
    const user = {
      name: username,
      age: age,
      id: Math.random().toString(),
    };
    props.UserFetch(user);
    setUsername("");
    setAge("");
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
              onChange={usernameHandler}
              id="username"
              type="text"
              value={username}
            />
          </div>
          <div className="ageInput">
            <label htmlFor="age">
              <strong>Age(Years): </strong>
            </label>
            <input
              autoComplete="off"
              onChange={ageHandler}
              value={age}
              id="age"
              type="number"
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
