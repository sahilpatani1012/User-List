import React from "react";
import ReactDOM from "react-dom";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  const errorClickHandler = () => {
    props.setErrorStatus(false);
  };

  const Modal = (props) => {
    return (
      <div className="modalBack" onClick={errorClickHandler}>
        <div className="modalContent">
          <div className="errorTitle">
            <h2>{props.title}</h2>
          </div>
          <div className="errorBody">
            <p>{props.message}</p>
            <button onClick={errorClickHandler} className="errorButton">
              Okay!
            </button>
          </div>
        </div>
      </div>
    );
  };

  return ReactDOM.createPortal(
    <Modal title={props.title} message={props.message} />,
    document.getElementById("errorModal")
  );
};

export default ErrorModal;
