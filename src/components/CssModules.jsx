import React from 'react';
import classes from "./CssModules.module.scss"

export const CssModules = () => {
  return (
    <div className={classes.continer}>
      <p>-Css Style-</p>
      <button>test</button>
    </div>
  );
};