import React from "react";

export default function Alert(props) {
  if (!props.alert) {
    return null;
  }

  return (
    <div
      className={`alert alert-${props.alert.type} alert-dismissible fade show`}
      role="alert"
      style={{
        margin: "1rem auto",
        maxWidth: "900px",
        borderRadius: "8px",
        fontWeight: 500,
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <strong>{props.alert.type}</strong>: {props.alert.msg}
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={props.onClose}
      ></button>
    </div>
  );
}