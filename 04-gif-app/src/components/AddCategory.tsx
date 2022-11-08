import { useState } from "react";

interface FormProps {
  onAddCategory: (inputValue: string) => void;
}

export default function AddCategory({ onAddCategory }: FormProps) {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputValue("");
    onAddCategory(inputValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}
