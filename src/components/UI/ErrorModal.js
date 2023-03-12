import React, { useState } from "react";
import Card from "./Card";
import classes from "../UI/ErrorModal.modules.css"
import Button from "./Button";

const ErrorModel = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModalVisibility = () => {
        setIsModalVisible(!isModalVisible);
    }

    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className="classes.content">
                <p>{props.message}</p>
            </div>
            <footer>
            <Button onClick={toggleModalVisibility}>

            </Button>
            </footer>
            Dismiss
            {props.errorMessage}
        </Card> ? isModalVisible : null
    )
}

export default ErrorModel;