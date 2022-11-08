import { useState } from "react";
import "./App.css";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function App() {
  const [categories, setCategories] = useState<string[]>(["Dragon ball z"]);

  const onAddCategory = (valueCategory: string) => {
    if (categories.includes(valueCategory)) return;
    setCategories([valueCategory, ...categories]);
  };

  return (
    <div className="App">
      <h1>App gif</h1>

      <AddCategory onAddCategory={(value: string) => onAddCategory(value)} />

      {categories.map((category: string) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
}

export default App;
