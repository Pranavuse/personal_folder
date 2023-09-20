import React, { useState } from "react";



export default function TextForm(props) {

  function handleUPCase(){
    console.log("Uppercase was clicked");
    var newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success")
  }
  function handleLPCase(){
    console.log("Lower case was clicked");
    var newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success")
  }
  function cleartext(){
    console.log("clear text was clicked");
    var newText = "";
    setText(newText);
    props.showAlert("Text has been cleared", "success")
  }
  
  function speakMessage(){
    const Speech= new SpeechSynthesisUtterance();
    let voices = speechSynthesis.getVoices();
    const message= document.getElementById("myBox").value;
    Speech.lang='english';
    Speech.text= message;
    Speech.voice = voices[1];
    Speech.pitch = 2;
    window.speechSynthesis.speak(Speech);
}
  function stop(){
    speechSynthesis.cancel();
  }
  function handleOnChange(event){
    // console.log("On Change")
    setText(event.target.value);
    
  }

  const [ text, setText ] = useState("Enter Text Here");
  return (
    <>
    <div className="my-3">
      <h1>{props.head}</h1>
      <textarea
        className="form-control"
        value={text}
        id="myBox"
        onChange={handleOnChange} //we have used onchange so that we can type in text area
        rows="8"
      ></textarea>
      <button className="btn btn-primary my-3" onClick={handleUPCase}>Convert to uppercase</button>
      <button className="btn btn-primary my-3 mx-3" onClick={handleLPCase}>Convert to lowercase</button>
      <button className="btn btn-primary my-3 mx-3" onClick={cleartext}>Clear Text</button>
      <button className="btn btn-primary my-3 mx-3" onClick={speakMessage}> text-to-Speak </button>
      <button className="btn btn-primary my-3 mx-3" onClick={stop}> stop reading </button>
      



    </div>
    <div className="container my-4">
      <h2>Your Text Summary:</h2>
      <p>Your text form has {text.length} characters and {text.split(" ").length-1 } words</p>
      <p>{0.08 * text.split(" ").length} minutes</p>
      <h4 className="text-center my-6">Preview</h4>
      <p className="text-center">{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  );
}
