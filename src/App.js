import { React } from 'react';
import logo from './logo.svg';
import './App.css';

import PDF from './samples/pdf.pdf';
import DOC from './samples/word.doc';
import DOCX from './samples/word.docx';
import PPT from './samples/powerpoint.ppt';
import PPTX from './samples/powerpoint.pptx';
import XLS from './samples/excel.xls';
import XLSX from './samples/excel.xlsx';
import ReCAPTCHA from "react-google-recaptcha";


function App() {

  // function onChange(value) {
  //   console.log("Captcha value:", value);
  // }

  return (
    <div className="App">
      {/* <header className="App-header">
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

      </header> */}
      <h1>DOC file</h1>
      <iframe src={'https://view.officeapps.live.com/op/embed.aspx?src=https://karunkmr.github.io' + DOC} width={'100%'} height={'400px'}></iframe>
      <h1>DOCX file</h1>
      <iframe src={'https://view.officeapps.live.com/op/embed.aspx?src=https://karunkmr.github.io' + DOCX} width={'100%'} height={'400px'}></iframe>
      <h1>XLS file</h1>
      <iframe src={'https://view.officeapps.live.com/op/embed.aspx?src=https://karunkmr.github.io' + XLS} width={'100%'} height={'400px'}></iframe>
      <h1>XLSX file</h1>
      <iframe src={'https://view.officeapps.live.com/op/embed.aspx?src=https://karunkmr.github.io' + XLSX} width={'100%'} height={'400px'}></iframe>
      <h1>PPT file</h1>
      <iframe src={'https://view.officeapps.live.com/op/embed.aspx?src=https://karunkmr.github.io' + PPT} width={'100%'} height={'400px'}></iframe>
      <h1>PPTX file</h1>
      <iframe src={'https://view.officeapps.live.com/op/embed.aspx?src=https://karunkmr.github.io' + PPTX} width={'100%'} height={'400px'}></iframe>
      <h1>PDF file</h1>
      <iframe src={PDF} width={'100%'} height={'400px'}></iframe>
    </div>
  );
}

export default App;
