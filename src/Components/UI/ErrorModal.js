import "./ErrorModal.css";

const ErrorModal = (props) => {

  const errorClickHandler = () => {
    props.setErrorStatus(false);
  }

  return (
    <div className="modalBack">
      <div className="modalContent">
        <div className="errorTitle">
          <h2>{props.title}</h2>
        </div>
        <div className="errorBody">
          <p>{props.message}</p>
          <button onClick={errorClickHandler} className="errorButton">Okay!</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
