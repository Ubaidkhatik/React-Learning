import React , {useState}from 'react'

export default function TextForm(props) {
const handleUpClick = ()=>{
    let newText = text.toUpperCase()
    setText(newText)
}

const handleLoClick = ()=>{
    let newText = text.toLowerCase()
    setText(newText)
}
const handleClearClick = () => {
  let newText = "";
  setText(newText);
};
const handleRemoveExtraSpace = () => {
  let newText = text.split(/[ ]+/).join(" ");
  setText(newText.trim());
};

const handleOnChange = (event)=>{
    setText(event.target.value)

}

const [text , setText]= useState(" ")
  return (
    <>
    <div className="conatainer">
    <h1>{props.heading}</h1>
  
 
  <textarea className="form-control" value= {text} onChange= {handleOnChange} rows="8"></textarea>
  <br/>
  <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to  uppercase</button>
  <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to  lowercase</button>
<button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-danger mx-2" onClick={handleRemoveExtraSpace}>Remove extra</button>

    </div>
    <br />
    <div ><h1  >Your Text Summary</h1>
    <p>{text.split(" ").length} Words and {text.length}</p>
    <p>{0.008 * text.split(" ").length}Minutes Read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>

</>
  )
}
