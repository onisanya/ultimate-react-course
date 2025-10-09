import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  console.log("items:", items);

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <TravelList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div className="app-header">
      <h1>Far Away</h1>
    </div>
  );
}

function TravelList({ items, onDeleteItem, onToggleItem }) {
  return (
    <ul className="list">
      {items.map((item) => (
        <Item
          item={item}
          DeleteItem={onDeleteItem}
          ToggleItem={onToggleItem}
          key={item.id}
        />
      ))}
    </ul>
  );
}

function Form({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  function reset() {
    setQuantity(1);
    setDescription("");
    document.querySelector("input").value = "";
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItem(newItem);
    console.log("newItem:", newItem);
    reset();
  }

  function modifyQuantity(e, amount) {
    e.preventDefault();
    setQuantity((q) => {
      if (quantity + amount < 1) return 1;
      else {
        return quantity + amount;
      }
    });
  }

  return (
    <form className="add-form">
      <h3>I will take... </h3>
      <span> </span>
      <span className={quantity <= 1 ? "multiplier" : "multiplier__active"}>
        {quantity} x
      </span>
      <input
        type="text"
        placeholder="Item description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={(e) => modifyQuantity(e, 1)}>+</button>
      <button onClick={(e) => modifyQuantity(e, -1)}>-</button>
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}

function Item({ item, DeleteItem, ToggleItem }) {
  const packed = item.packed ? "item__packed" : "";
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => ToggleItem(item.id)}
      />
      <span className={`${packed}`}>
        {item.quantity > 1 ? `(${item.quantity} x )` : ""}
        {item.description}
      </span>
      <button className="delete" onClick={() => DeleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em> 0 items</em>
    </footer>
  );
}
