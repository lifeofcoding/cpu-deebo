import React, { Component } from 'react';
import styles from './component.less';

export class Home extends component {
  render() {
    return (
      <div>
        <h1>Hello, Electron!</h1>
        <p>I hope you enjoy using enhanced-electron-react-boilerplate to start your dev off right!</p>
        <div className='padded'>
          <div className={`box padded ${styles.box}`}>
            This has a different background color, but uses the same 'box' className. However, thanks to CSS modules the names dont collide. Here we are setting a background color, and overriding the shadow.
          </div>
        </div>
      </div>
    );
  }
}
