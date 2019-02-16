import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', numberOfWords: 0};

    this.handleChange = this.handleChange.bind(this);
  }

  
  handleChange(event) {
      let wordCountPerRow = event.target.value.split('\n').map(function(value, index) {
        return value.trim().split(/\b(\s)/).reduce(function(acc, value) {
          if(value != ' ' && value != '') {
            return acc + 1;
          } else {
            return acc;
          }
        }, 0);
      });

      let accumulated = 0;
      let accumulatedWordCountPerRow = [];
      wordCountPerRow.forEach(element => {
        accumulatedWordCountPerRow.push(accumulated += element);
      });

      let stringRepr = accumulatedWordCountPerRow.reduce(function(acc, value){
        return acc + value + '\n';
      }, '')

      this.setState(
      {
          text: event.target.value, 
          wordCountPerRow: wordCountPerRow,
          accumulatedWordCountPerRow: accumulatedWordCountPerRow,
          stringRepr: stringRepr
      });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <textarea className="textarea" rows='50' placeholder="Paste your lines of text here:" value={this.state.text}  onChange={this.handleChange}/>
          <textarea className="textarea" rows='50' value={this.state.stringRepr} readOnly/>

        </div>
      </div>
    );
  }
}

export default App;
