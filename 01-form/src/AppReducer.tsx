import { useState } from "react";
import "./App.css";
import FormReducer from "./components/FormReducer";
import ListUserReducer from "./components/ListUserReducer";
import User from "./interfaces";

interface UsersState {
  users: User[];
}

function AppReducer() {
  const [users, setUsers] = useState<UsersState["users"]>([]);

  const handleSubmit = (state: User): void => {
    setUsers((users) => [...users, state]);
  };

  return (
    <div className="App">
      <h1>AppReducer</h1>
      <FormReducer setUsers={handleSubmit} />
      <ListUserReducer users={users} />
    </div>
  );
}

export default AppReducer;
