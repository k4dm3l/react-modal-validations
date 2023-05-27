import { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import Wrapper from "../Helpers/Wrapper";

import style from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value; 

    if (
      !enteredUsername.trim().length ||
      !enteredAge.trim().length ||
      +enteredAge <= 0
    ) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values - non-negative age value)',
        buttonText: 'Close'
      });
      return;
    }

    props.onAddUser({
      id: Math.random().toString(),
      username: enteredName,
      age: enteredUserAge,
    });

    setEnteredAge("");
    setEnteredUsername("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <Wrapper>
      {error && <Modal
        config={error || {
          title: '',
          message: '',
          buttonText: 'Close'
        }}
        onCloseError={errorHandler}
      />}
      <Card className={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name=""
            value={enteredUsername}
            id="username"
            onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name=""
            value={enteredAge}
            id="age"
            onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button text={"Add Button"} onClick={addUserHandler} />
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
