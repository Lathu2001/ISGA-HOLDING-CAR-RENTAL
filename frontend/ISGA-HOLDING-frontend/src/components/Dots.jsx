import React from 'react';

export default function Dots({ total, current, onClick }) {
  return (
    <div className="dots" style={dotContainerStyle}>
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          className="dot"
          onClick={() => onClick(index)}
          style={{
            ...dotStyle,
            backgroundColor: current === index ? 'black' : 'white',
          }}
        ></span>
      ))}
    </div>
  );
}

const dotContainerStyle = {
  textAlign: 'center',
};

const dotStyle = {
  height: '15px',
  width: '15px',
  margin: '0 2px',
  backgroundColor: '#bbb',
  borderRadius: '50%',
  display: 'inline-block',
  transition: 'background-color 0.6s ease',
  cursor: 'pointer',
};