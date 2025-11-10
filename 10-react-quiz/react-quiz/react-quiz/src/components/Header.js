import logo from "../logo.svg";

function Header() {
  return (
    <header className="app-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="welcome-container">
        <h2 className="welcome">Welcome to the</h2>
        <h1>React Quiz</h1>
      </div>
    </header>
  );
}

export default Header;
