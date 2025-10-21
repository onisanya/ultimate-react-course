import logo from "./logo.svg";
import "./App.css";
import AccordionSimple from "./Accordion_simple";
import Slider from "./Slider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <AccordionSimple textContent="Lorem ipsum dolor sit amet." />
      <AccordionSimple textContent="lorem150" />
      <AccordionSimple textContent="lorem250" />
      <Slider />
    </div>
  );
}

export default App;
