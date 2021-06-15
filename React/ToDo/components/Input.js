import "./Input.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

function Input(props) {
  const [inputText, inputedText] = useState("");

  function inputFunction(e) {
    inputedText(e.target.value);
  }
  function fontFunction(e) {
    const obj = {
      text: inputText,
    };
    props.toInput(obj);
    inputedText("");
  }
  return (
    <div className="form-section">
      <div className="input-div">
        <input
          className="input-field"
          onChange={inputFunction}
          value={inputText}
        ></input>
      </div>
      <div className="icon-add">
        <FontAwesomeIcon
          icon={faPlusSquare}
          className="icon"
          onClick={fontFunction}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default Input;
