import React from 'react';

export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  }
  return (
    <div style={containerStyle}>
      <p>-Inline Style-</p>
      <button>test</button>
    </div>
  );
};