import React from 'react';
import './style.css';
import { InlineStyle } from './components/InlineStyle';
import { CssModules } from './components/CssModules';
import { StyledJsx } from './components/StyledJsx';
import { StyledComponents } from './components/StyledComponents';
import { Emotion } from './components/Emotion';

export default function App() {
  return (
    <div>
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
