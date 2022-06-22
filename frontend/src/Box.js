import "./Box.css";
import Button from "./Button";
import LimitForm from "./LimitForm";

function Box() {
  const startTrade = () => {};
  return (
    <div className="Box">
      <h1 className="Box-heading">Arithmetic</h1>
      <div className="Content App-box">
        <div className="Content-inner">
          <div className="LimitForm"></div>
          <LimitForm />
        </div>
      </div>
      <Button className="start">Start</Button>
    </div>
  );
}

export default Box;
