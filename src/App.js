import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    const [hello] = useState('hello');



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
            {hello}
        </a>
      </header>
    </div>
  );
}

export default App;
