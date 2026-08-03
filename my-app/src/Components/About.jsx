import React from "react";

export default function About(props) {
  return (
    <div
      className="container my-3"
      style={{
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <h1>About TextUtils</h1>

      <p>
        TextUtils is a React application that helps you analyze and manipulate
        your text.
      </p>

      <ul>
        <li>Convert text to Uppercase</li>
        <li>Convert text to Lowercase</li>
        <li>Clear text</li>
        <li>Count words, characters, and sentences</li>
        <li>Estimate reading time</li>
      </ul>
    </div>
  );
}