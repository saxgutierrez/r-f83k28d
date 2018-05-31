import React, { Component } from 'react';
import './App.css';

class App extends Component {

	constructor(){
  		super();
  			this.changeNumber = this.changeNumber.bind(this);

			this.state = {number: 0}
  	}

  	changeNumber() {
  			this.setState({
  			number: this.state.number+1
  		});
  	}


  render() {
    return (
      <div>
        <span className="value">{this.state.number}</span>
        <button id="inc" onClick={this.changeNumber}  >Incrementa</button>
      </div>
    );
  }

}
export default App;
