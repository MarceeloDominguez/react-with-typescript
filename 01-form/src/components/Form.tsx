import React, { useState } from "react";
import User from "../interfaces";

interface FormState {
  inputValues: User;
}

interface FormProps {
  //setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  setUsers: (inputValues: User) => void;
}

const INITIAL_VALUES = {
  name: "",
  nickname: "",
  description: "",
};

export default function Form({ setUsers }: FormProps) {
  const [inputValues, setInputValues] =
    useState<FormState["inputValues"]>(INITIAL_VALUES);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //setUsers((users) => [...users, inputValues]);
    setUsers(inputValues);

    setInputValues(INITIAL_VALUES);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        value={inputValues.name}
        placeholder="name..."
        name="name"
        onChange={handleChange}
      />

      <br />

      <label>Nickname</label>
      <input
        value={inputValues.nickname}
        placeholder="nickname..."
        name="nickname"
        onChange={handleChange}
      />

      <br />

      <label>Description</label>
      <input
        value={inputValues.description}
        placeholder="description..."
        name="description"
        onChange={handleChange}
      />

      <br />
      <button type="submit">Enviar...</button>
    </form>
  );
}
