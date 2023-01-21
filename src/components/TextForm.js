import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log('Got Converted into UpperCase');
        setText(text.toUpperCase());
    }

    const handleLowClick = () => {
        console.log('Got Converted into LowerCase');
        setText(text.toLowerCase());
    }

    const handleReplace = () => {
        console.log('Got Replaced');
        let a = prompt("What you want to replace?");
        let b = prompt("Repalce " + a + " with what?");
        setText(text.replaceAll(a, b));
    }

    const handleDelClick = () => {
        console.log('Blanked');
        setText("");
    }

    const handleOnChange = (event) => {
        // console.log('On Change');
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter your Text');

    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <label htmlFor="my-box" className="form-label"><h1>{props.formName}</h1></label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="10" style = {{backgroundColor: `${props.mode === "light"?'white':'black'}`, color: `${props.mode === "light"?'black':'white'}`}}></textarea>
                </div>
                <button className="btn btn-primary me-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary me-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary me-1 my-1" onClick={handleReplace}>Replace</button>
                <button className="btn btn-danger me-1 my-1" onClick={handleDelClick}>Clear</button>
            </div>
            <div className="container">
                <div className="container my-3">
                    <h2>Your Text Summary</h2>
                    {/* <p>No. of text are {text.length} and no. of words are {text.split(" ").length}</p> */}
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} minutes required to read the whole text.</p>
                </div>
                <div className="container my-3 float-end">
                    <h2 className='my-1'>Preview</h2>
                    <p className='my-1'>{text.length>0?text:"Enter your text to review"}</p>
                </div>
            </div>
        </>
    )
}