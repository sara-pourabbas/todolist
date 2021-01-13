import React, { useState } from "react";

export const Test1 = () => {
  const [list, setList] = useState([]);
  const [textInput, setTextInput] = useState("");

  const addItem = () => {
    setList((prevState) => [...prevState, textInput]);
    setTextInput("");
  };

  const checkStatus = () => {
    const number = list.length;
    if (number === 0) {
      return "تمام شده";
    } else if (number === 1 || number === 2) {
      return "در حال اتمام";
    } else if (number >= 3 && number <= 10) {
      return number;
    } else {
      return "تعداد زیاد است";
    }
  };
  return (
    <div className="form container">
      <div className="form__status">{checkStatus()}</div>
      <div className="form__action">
        <button className="form__action__button" onClick={addItem}>
          Add
        </button>
        <input
          className="form__action__input"
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
      </div>
      <div className="form__list">
        {list &&
          list.length !== 0 &&
          list.map((item, ind) => (
            <div className="form__list__item" key={ind}>
              {item}
            </div>
          ))}
      </div>
    </div>
  );
};
