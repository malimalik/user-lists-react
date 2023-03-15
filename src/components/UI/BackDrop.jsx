import React from "react";
import classes from "../UI/ErrorModal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

export default BackDrop;
