import React from 'react';
import './style.css';
import { InlineStyle } from './components/InlineStyle';
import { CssModules } from './components/CssModules';

export default function App() {
  return (
    <div>
      <InlineStyle />
      <CssModules />
    </div>
  );
}
