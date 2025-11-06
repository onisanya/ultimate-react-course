import logo from '../logo.svg';

function Header() {
  return (
    <header className='aApp-header'>
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to the React Quiz</h2>
    </header>
  );
}

export default Header;
