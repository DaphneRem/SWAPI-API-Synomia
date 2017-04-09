import React, { Component } from 'react';
import Select from './components/Select';

class Base extends Component {
  render() {
    return (
      <div className="Base">
          <h1>Episodes de Star Wars</h1>
        <Select/>
      </div>
    );
  }
}

export default Base;
