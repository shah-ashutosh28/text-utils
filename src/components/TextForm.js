import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState('');
    const myStyle = {
        color: props.mode==='light'?'black':'white',
        backgroundColor: props.mode==='light'?'white':'black'
    };
    const handleChange = (event) =>{
        setText(event.target.value);
    }
    const handleUp = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been converted to UpperCase.","success");
    }
    const handleLow = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been converted to LowerCase.","success");
    }
    const handleClear = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text has been cleared.","success");
    }
    const handleCopy = () =>{
        let newText = document.getElementById('mybox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text has been copied successfully.","success");
    }
    const handleSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces have been removed successfully.","success");
    }
  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="8" onChange={handleChange} value={text} style={myStyle}
          ></textarea>
        </div>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUp}>Convert to UpperCase</button>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLow}>Convert to LowerCase</button>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear Text</button>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleSpace}>Remove Extra Spaces</button>
      </div>
      <div className="container my-2">
      <h2>Your Text Summary</h2>
      <p><b>{text.split(" ").filter(word => word!=="").length}</b> words and <b>{text.length}</b> characters</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text:"Enter the text above in the box to preview it here."}</p>
      </div>
    </>
  );
}
