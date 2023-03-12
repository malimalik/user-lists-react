import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersLists';
import {nanoid} from 'nanoid';

/**
 * 
 * @returns AddUser and the UsersList component, App is the lowest common ancestor. Lifting state up
 */
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
      {userList.length > 0 && <UsersList users = {userList}/>}
    </div>
  );
}

export default App;
