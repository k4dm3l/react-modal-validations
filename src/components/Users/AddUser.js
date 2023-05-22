import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

import style from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

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
      username: enteredUsername,
      age: enteredAge,
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
    <div>
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
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name=""
            value={enteredAge}
            id="age"
            onChange={ageChangeHandler}
          />
          <Button text={"Add Button"} onClick={addUserHandler} />
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
