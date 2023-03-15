import React, { Fragment, useState } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "../Users/AddUser.module.css";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";
/**
 * This component is solely responsible for collecting the data from the name and the age field.
 * It also performs the validation for the input fields, name and age.
 * The state of a component should always be handled within the component itself
 * @param {} props
 * @returns void
 */
const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const nameError = "The name field cannot be empty!.";
  const ageError = {
    ageEmptyError: "The age field cannot be empty!.",
    ageInvalidError: "Please enter a valid age, i.e. < 0.",
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    //because addUserHandler is a nested function, it can access the arguments
    // of AddUser validation to ensure none of the input fields are empty
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: nameError,
      });

      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: ageError.ageInvalidError,
      });

      return;
    }

    props.onAddUser(name, age);
    setName("");
    setAge("");
  };

  const userNameChangeHandler = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="userName">Username</label>
          <input
            id="username"
            type="text"
            value={name}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
