import logo from './logo.svg';
import './App.css';
import ToggleButton from './components/ToggleButton'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <p>Toggle Button</p>
        <ToggleButton />
      </header>
    </div>
  );
}

export default App;
