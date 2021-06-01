import React from 'react';
import {jsx, css} from "@emotion/react"

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `;
  return (
    <div css={containerStyle}>
      <p>-Emotion-</p>
      <button>test</button>
    </div>
  );
};