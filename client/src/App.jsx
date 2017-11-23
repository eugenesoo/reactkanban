import React from 'react';

//setup state, 4 different objects to hold data for 4 columns
//create a component for each of the column
//pass down state information into each of the column

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column1: [
        {description: 'buy 2 eggs'},
        {description: 'buy 2 turkeys'},
      ],
      column2: [
        {description: 'buy 2 eggs'},
        {description: 'buy 2 turkeys'},
      ],
      column3: [
        {description: 'buy 2 eggs'},
        {description: 'buy 2 turkeys'},
      ],
      column4: [
        {description: 'buy 2 eggs'},
        {description: 'buy 2 turkeys'},
      ],
    }
  }

  render() {
    return (
      <div>
        HELLO!
      </div>
    )
  }
}

export default App;
