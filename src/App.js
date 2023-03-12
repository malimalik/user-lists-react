import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersLists';
import {nanoid} from 'nanoid';

function App() {
  const [userList, setUserList] = useState([]);
  
  const addUserHandler = (name, age) => {
      setUserList((prevUsersList) => {
        return [...prevUsersList, {id : nanoid(), name: name, age: age}];
      });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users = {userList}/>
    </div>
  );
}

export default App;
