import { useState, Fragment } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

import "./App.css";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (newUser) => {
    setUsersList((prevUsers) => [newUser, ...prevUsers]);
  };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <p>Handling Errors with Modals</p>
    //     <AddUser onAddUser={addUserHandler} />
    //     <UsersList users={usersList} />
    //   </header>
    // </div>
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
