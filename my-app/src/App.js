import logo from './logo.svg';
import './App.css';
import "@ui5/webcomponents/dist/Button.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ui5-button>Hello world!</ui5-button>
      </header>
    </div>
  );
}

export default App;