import { useState } from "react";
import "./styles.css";
import { List } from "./List";
import { useLogDidMount } from "./useLogDidMount";

const initial = ["🐵 Monkey Face"];

function pickRandom() {
  const allData = [
    "🐵 Monkey Face",
    "🐒 Monkey",
    "🦍 Gorilla",
    "🦧 Orangutan",
    "🐶 Dog Face",
    "🐕 Dog",
    "🦮 Guide Dog",
    "🐕‍🦺 Service Dog",
    "🐩 Poodle",
    "🐺 Wolf",
    "🦊 Fox",
    "🦝 Raccoon",
    "🐱 Cat Face",
    "🐈 Cat"
  ];
  return allData[Math.floor(Math.random() * allData.length)];
}

function item(str) {
  return {
    name: str
  };
}

export default function App() {
  const [items, setItems] = useState(initial.map(item));
  useLogDidMount("App did mount");
  console.log("App render");
  return (
    <div className="App">
      <List
        items={items}
        onAdd={() =>
          setItems([...items.map(({ name }) => name), pickRandom()].map(item))
        }
      />
    </div>
  );
}
