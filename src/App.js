
import React, { useState } from 'react';
import './App.css';

//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
//import Contact from './Components/Contact';

import Alert from './Components/Alert';











function App() {

  
  /* // eslint-disable-next-line  */
  const [mode, setMode] = useState('dark'); // Tells Dark Mode is enabled or not .

  
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })

    // eslint-disable-next-line
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }





  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enabled.","Success");
      document.title = "TextUtils - DarkMode";
      
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled.","Success");
      document.title = "TextUtils - LightMode";

  
     
    }
  }
  
  return (
    <>

<Navbar title="TextUtils" element2='About' mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

<div className="container my-3">

         
       
<TextForm showAlert={showAlert} heading="Enter Your Text" mode={mode} /> 
{ /* <About/> */}
{ /* <Blog/> */}





</div>
</>
  );
}

export default App;
