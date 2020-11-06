import React, { Component } from 'react';

const sizes = {
  0: 'is-0', //for gapless
  1: 'is-1',
  2: 'is-2',
  3: 'is-3',
  4: 'is-4',
  5: 'is-5',
  6: 'is-6',
  7: 'is-7',
  8: 'is-8',
  9: 'is-9',
  10: 'is-10',
  11: 'is-11',
  12: 'is-12'
}

export default class Columns extends Component {
  render() {
    const { reactRef, children, isMultiline, className, isGapless, onClick, style={}, isCentered } = this.props;
    return (<div
      ref={reactRef}
      style={style}
      className={`columns ${isCentered ? 'is-centered' : ''} ${isMultiline ? 'is-multiline' : ''} ${isGapless ? 'is-gapless': ''} ${className ? className : ''}`}
      onClick={onClick}
    >
      {children}
    </div>);
  }
}

export class Column extends Component {  
  render() {
    const { reactRef, children, isSize, className, onClick, style={} } = this.props;
    const size = sizes[isSize] || isSize;
    return(<div ref={reactRef} onClick={onClick} style={style} className={`column ${size && size} ${className && className}`}>
      {children}
    </div>)
  }
}