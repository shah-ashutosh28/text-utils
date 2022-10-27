
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alert from './components/Alert';

function App() {
  const [mode,setMode] = useState('light');
  const togglemode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light Mode has been enabled","success");
    }
  }
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  return (
    <BrowserRouter>
    <Navbar mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
      <Routes>
        <Route exact path="/" element={<TextForm heading='Enter the text to Analyze' mode={mode} showAlert={showAlert}/>}/>
          
          <Route exact path="/about" element={<About mode={mode}/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
