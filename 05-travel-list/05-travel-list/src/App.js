import { useState } from "react";

function Logo() {
  return (
    <div className="app-header">
      <h1>Far Away</h1>
    </div>
  );
}

function TravelList() {
  return (
    <ul className="list">
      <Item />
      <Item />
      <Item />
    </ul>
  );
}

function Form() {
  const [quantity, setQuantity] = useState(1);

  function reset() {
    setQuantity(1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting");
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
      <input type="text" placeholder="Item description" />
      <button onClick={(e) => modifyQuantity(e, 1)}>+</button>
      <button onClick={(e) => modifyQuantity(e, -1)}>-</button>
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}

function Item() {
  return (
    <li className="item">
      <input type="checkbox" />
      <span>India</span>
      <button className="delete">❌</button>
    </li>
  );
}

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <TravelList />
      <Stats />
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em> 0 items</em>
    </footer>
  );
}

export default App;
