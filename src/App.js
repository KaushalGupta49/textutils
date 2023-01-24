import './App.css';
import React, { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "Black";
      document.body.style.color = "White"; //body text color
      showAlert("Dark Mode has been Enabled" ,"success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "White";
      document.body.style.color = "Black"; //body text color
      showAlert("Light Mode has been Enabled" ,"success");
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutus="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm formName="Enter the text to Analyze" mode={mode} showAlert={showAlert}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;