import React from "react";
import Card from "../UI/Card";
import classes from '../Users/UsersList.module.css'

/**
 * 
 * @param {} props 
 * @returns Dynamic list of users that grows with each form submission. 
 */
const UsersList = props => {
    return (
        <Card className={classes.users}>
        <ul>
            {props.users.map(user => <li key={user.id}>
                {user.name} 
                ({user.age}) years old)
                </li>
            )
            }
        </ul>
        </Card>
    )
}

export default UsersList;