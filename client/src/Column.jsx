import React from 'react';

const Column = (props) => (
  <div className={props.data.name}>
    <div className='header'>
      <h2>{props.data.name}</h2>
    </div>
    {
      props.data.data.map(item => 
        <p>{item.description}</p>
      )
    }
    <button onClick={() => { props.handleInput(`${props.data.id}`) } }>Add a card</button>
  </div>
);

export default Column;
