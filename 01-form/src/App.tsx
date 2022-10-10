import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ListUser from "./components/ListUser";
import User from "./interfaces";

interface UsersState {
  users: User[];
}

function App() {
  const [users, setUsers] = useState<UsersState["users"]>([]);

  const handleUsers = (values: User): void => {
    setUsers((users) => [...users, values]);
  };

  return (
    <div className="App">
      <h1>App</h1>
      <Form setUsers={handleUsers} />
      <ListUser users={users} />
    </div>
  );
}

export default App;
