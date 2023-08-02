import "./CostForm.css";
import React, { useState } from "react";

const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   name: "",
  //   amount: "",
  //   date: "",
  // });

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
    //setUserInput({ ...userInput, name: event.target.value }); variant
    //setUserInput((prevState)=>{return{...prevState, name: event.target.value}}) variant
  };
  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
    //setUserInput({ ...userInput, amount: event.target.value });
  };
  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
    //setUserInput({ ...userInput, date: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    console.log(costData);
    props.onSaveCostData(costData);
    setInputName("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input type="text" onChange={nameChangeHandler} value={inputName} />
        </div>
        <div className="new-cost__control">
          <label>Summ</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={inputAmount}
          />
        </div>
        <div className="new-cost__control">
          <label>Name</label>
          <input
            type="date"
            min="2020-01-01"
            step="2023-07-23"
            onChange={dateChangeHandler}
            value={inputDate}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
