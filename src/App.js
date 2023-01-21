import './App.css';
import React, { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "Black";
      document.body.style.color = "White"; //body text color
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "White";
      document.body.style.color = "Black"; //body text color
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutus="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm formName="Enter the text to Analyze" mode={mode}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;