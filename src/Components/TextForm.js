import React, {useState} from 'react';


export default function TextForm(props) {


    const handleUpClick = () => {
       
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("--- Converted to UpperCase ---","Success");
    }


    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("--- Converted to LowerCase ---","Success");
    }

    const handleSentenceClick = () => {
        let newText = text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
        setText(newText);
        props.showAlert("--- Converted to SentenceCase ---","Success");
    
    }

    const handleCopy = () =>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("--- Copied to Clipboard ---","Success");

    }




    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("--- Text Cleared. ---","Success");
    }


    const handleOnChange = (event) => {
        //console.log("handle onChange");
        setText(event.target.value);
    }


    const [text, setText] = useState("");




    return (

        <>
            <div className="container" style={{color : props.mode === 'dark'? 'white' : 'grey'}}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                
                <textarea className="form-control" id="mybox" rows="5" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'? '#042730' : 'white', color : props.mode === 'dark'? 'white' : 'grey'}}></textarea>
                </div>
                <button  className="btn btn-primary mx-1" onClick={handleUpClick} >Convert 2 UpperCase</button>
                <button  className="btn btn-primary mx-1" onClick={handleLowClick} >Convert 2 LowerCase</button>
                <button  className="btn btn-primary mx-1" onClick={handleSentenceClick} >Convert 2 SentenceCase</button>
                <button  className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>
                <button  className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
    
            
            </div>
            <div className="container my-3" style={{color : props.mode === 'dark'? 'white' : 'grey'}}>
                <h1>
                    Your Text Summary
                </h1>
                <h2>{text.split(" ").length - 1} Words || {text.length} Characters || {0.008 * text.split(" ").length} Minutes Read</h2>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Enter Some Text in Upper Box to Preview"}</p>
            </div>
        </>
    )




    
}





