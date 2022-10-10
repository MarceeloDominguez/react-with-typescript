import React, { useReducer } from "react";
import { INITIAL_VALUES, userReducer } from "../hooks/userReducer";
import User from "../interfaces";

interface Props {
  setUsers: (state: User) => void;
}

export default function FormReducer({ setUsers }: Props) {
  const [state, dispatch] = useReducer(userReducer, INITIAL_VALUES);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    dispatch({
      type: "change_value",
      payload: { inputName: name, inputValue: value },
    });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUsers(state);

    dispatch({
      type: "clear",
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>Name</label>
      <input
        value={state.name}
        placeholder="name..."
        name="name"
        onChange={handleChange}
      />

      <br />

      <label>Nickname</label>
      <input
        value={state.nickname}
        placeholder="nickname..."
        name="nickname"
        onChange={handleChange}
      />

      <br />

      <label>Description</label>
      <input
        value={state.description}
        placeholder="description..."
        name="description"
        onChange={handleChange}
      />

      <br />

      <button type="submit">Enviar...</button>
    </form>
  );
}
