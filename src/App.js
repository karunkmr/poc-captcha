import { React } from 'react';
import logo from './logo.svg';
import './App.css';

import ReCAPTCHA from "react-google-recaptcha";


function App() {

  function onChange(value) {
    console.log("Captcha value:", value);
  }


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

        <ReCAPTCHA
          sitekey="6LecUsgjAAAAAI7fpja2OcU5qM9OuQFfxVzw7Dpd"
          onChange={onChange}
        />

      </header>
    </div>
  );
}

export default App;
