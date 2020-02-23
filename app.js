import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello world</h1>,
  document.getElementById('app')
)

class MyTestClass extends React.Component {
  render() {
    return <h2>Hello you, too.</h2>;
  }
}

ReactDOM.render(
  <MyTestClass />,
  document.getElementById('app').append()
)
