import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersLists';
import ErrorModel from './components/UI/ErrorModal';
import {nanoid} from 'nanoid';

function App() {
  const [userList, setUserList] = useState([]);
  
  const addUserHandler = (name, age) => {
    setUserList((currUsers) => {
        return [...currUsers, {id: nanoid(), name: name, age: age}];
    });
  };
  

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users = {userList}/>
      <ErrorModel errorMessage={"Hello"}></ErrorModel>
    </div>
  );
}

export default App;
