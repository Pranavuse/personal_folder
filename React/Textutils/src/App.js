import "./App.css";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import React, {useState} from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('null');

  function showAlert(message, type){
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert("null")
    },3000)
  }
  function toggleMode(){
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#353b41";
      document.body.style.color="white";
      showAlert("Dark mode is enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("This is Default light mode", "primary")
    }
  }
 
  return (
    <>
    <Router>
    
      <Navbar title="TextUtils" aboutText="about us" mode={mode} toggleMode={toggleMode}  />
      <Alert alert={alert}/>
      <div className="container my-3">
      <h6 className="container">Current Theme: {mode}</h6>
      
      <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} head = "Enter Your Text to analyze"/>} />
        <Route path="/about" element={<About />} />
        
      </Routes>
      </div>
      
      </Router>
    </>
  );
}

export default App;
