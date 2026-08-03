import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClClick = () => {
    setText("");
    props.showAlert("Text Cleared!", "warning");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const sentenceCount = text.split(/[.!?]+/).filter((sentence) => sentence.trim() !== "").length;
  const buttonStyle = {
    backgroundColor: props.mode === "dark" ? "#495057" : props.theme.color,
    borderColor: props.mode === "dark" ? "#6c757d" : props.theme.color,
    color: props.mode === "dark" ? "white" : "#212529",
  };

  return (
    <div
      className="container my-4 p-4 rounded"
      style={{
        color: props.mode === "dark" ? "white" : "#212529",
        backgroundColor: props.mode === "dark" ? "#343a40" : "#f8f9fa",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <form>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            rows={5}
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#495057" : "white",
              color: props.mode === "dark" ? "white" : "#212529",
            }}
          ></textarea>
        </div>
        <div>
          <button type="button" className="btn mx-2 mb-2" style={buttonStyle} onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button type="button" className="btn mx-2 mb-2" style={buttonStyle} onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button type="button" className="btn mx-2 mb-2" style={buttonStyle} onClick={handleClClick}>
            Clear
          </button>
        </div>
        <div className="container my-3">
          <h2>Your text Summary here</h2>
          <p>{text.split(/\s+/).filter(Boolean).length} words and {text.length} characters</p>
          <p>{(text.split(/\s+/).filter(Boolean).length * 0.008).toFixed(2)} Minutes Read</p>
          <p>{sentenceCount} sentences</p>
          <h3>Preview</h3>
          <p>{text.length > 0 ? text : "Enter something in the text box to preview it"}</p>
        </div>
      </form>
    </div>
  );
}


