import React from 'react';

export default function ContactInfo(props) {
  return (
    <button
      className="btn btn-block me-2"
      style={{ borderRadius: "20px", backgroundColor: "#3b82f6", color: "#fff" }} // Light Blue
      onClick={props.onClick} // Optional click handler for dynamic behavior
    >
      <i className={`fa ${props.icon}`} style={{ marginRight: "10px" }}></i>
      {props.contactText}
    </button>
  );
}
