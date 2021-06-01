import React from 'react';

export const StyledJsx = () => {
  return (
    <>
    <div className="container">
      <p>-Styled JSX-</p>
      <button>test</button>
    </div>
    <style jsx="true">{`
      .container {
        border: solid 2px #392eff;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
    `}</style>
    </>
  );
};