import React from 'react';
import Column from './Column.jsx';
//setup state, 4 different objects to hold data for 4 columns
//create a component for each of the column
//pass down state information into each of the column

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column1: {
        id: 'column1',
        name: 'Winnie',
        data: [
          {description: 'buy 1 eggs'},
          {description: 'buy 1 turkeys'},
        ],
      },
      column2: {
        id: 'column2',
        name: 'Bob',
        data: [
          {description: 'buy 2 eggs'},
          {description: 'buy 2 turkeys'},
        ],
      },
      column3: {
        id: 'column3',
        name: 'Thomas',
        data: [
          {description: 'buy 3 eggs'},
          {description: 'buy 3 turkeys'},
        ],
      },
      column4: {
        id: 'column4',
        name: 'George',
        data: [
          {description: 'buy 4 eggs'},
          {description: 'buy 4 turkeys'},
        ],
      },
    };
    this.handleInput = this.handleInput.bind(this);
  }
  
  handleInput(columnId) {
    const input = prompt('please enter task');
    console.log(columnId, input);
    const newData = {};
    Object.assign(newData, this.state[columnId]); 
    console.log(newData);
    newData.data.push({ description: input });
    this.setState({
      [columnId]: newData
    })
  }

  render() {
    return (
      <div className='board'>
        <Column data={this.state.column1} handleInput={this.handleInput}/>
        <Column data={this.state.column2} handleInput={this.handleInput}/>
        <Column data={this.state.column3} handleInput={this.handleInput}/>
        <Column data={this.state.column4} handleInput={this.handleInput}/>
      </div>
    )
  }
}

export default App;
