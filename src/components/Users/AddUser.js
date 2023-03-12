import React, {useState} from 'react';
import Card from '../UI/Card'
import classes from '../Users/AddUser.module.css';
import Button from '../UI/Button';




/**
 * This component is solely responsible for collecting the data from the name and the age field. 
 * It also performs the validation for the input fields, name and age.
 * The state of a component should always be handled within the component itself
 * @param {} props 
 * @returns void
 */
const AddUser = (props) => {
    const [name, setName] = useState([]);
    const [age, setAge] = useState([]);
    
    const addUserHandler = (event) => {
        event.preventDefault();
        //because addUserHandler is a nested function, it can access the arguments
        // of AddUser
        props.onAddUser(name, age);
        //validation to ensure none of the input fields are empty
        if (name.trim().length === 0 || age.trim().length === 0 || +age < 1) {
            return;
        }
        setName('');
        setAge('');
    };

    const userNameChangeHandler = (event) => {
        setName(event.target.value);
        console.log(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

   return (
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}> 
        <label htmlFor='userName'>Username</label>
        <input id='username' type="text" value={name} onChange={userNameChangeHandler}/>
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type="number" value={age} onChange={ageChangeHandler}/>
        <Button type='submit'> Add User</Button>
    </form>
    </Card>
   )
}

export default AddUser;