import { useState } from "react";
import "../../App.css";

function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passwoed, setPassword] = useState("");
  const [isCheckd, setIsChecked] = useState(false)
  const [isCheck, setIsCheck] = useState(false);

  function submitPersonDetails(event) {
    event.preventDefault();

    if(!isCheckd){
        return ;

    }
    setIsCheck(true);
    console.log({ firstName, lastName, passwoed });
  }

  return (
    <div>
      <div className="middle">
        <form onSubmit={(event) => submitPersonDetails(event)}>
          <input
            onChange={(val) => setFirstName(val.target.value)}
            type="text"
            placeholder="first name"
          />
          <input
            onChange={(val) => setLastName(val.target.value)}
            type="text"
            placeholder="last name"
          />
          <input
            onChange={(val) => setPassword(val.target.value)}
            type="password"
            placeholder="passwoed"
          />
          <div className="flexy">
            <input onChange={(event) => setIsChecked(event.target.checked)} type="checkbox" /> <span>Please check option click </span>
          </div>
          <button>signup</button>
        </form>
        {isCheck && (
          <div className="modalBox">
            <div className="modal">
                <h1>name : {firstName + " " + lastName}</h1>
                <h2>Passwoed : {passwoed}</h2>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default Registration;
