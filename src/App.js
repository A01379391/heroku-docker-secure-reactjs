import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tarea click
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=mCdA4bJAGGk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aquí
        </a>
      </header>
    </div>
  );
}

export default App;
