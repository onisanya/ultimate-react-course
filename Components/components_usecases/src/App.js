import logo from "./logo.svg";
import "./App.css";
import AccordionSimple from "./Accordion_simple";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <AccordionSimple textContent="Lorem ipsum dolor sit amet." />
      <AccordionSimple textContent="lorem150" />
      <AccordionSimple textContent="lorem250" />
    </div>
  );
}

export default App;
