import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {name: 'Varad', age : 20},
      {name: 'Sujay', age : 21},
      {name: 'Vedant', age : 20}
    ],
    otherState : 'some other Value'
  }
  
switchNameHandler = () => {
    // console.log('Was Clicked')
    this.setState( {
      persons : [
      {name : 'VaradPro', age  :20},
      {name : 'Sujay', age:21},
      {name : 'Vedant', age:25}
    ]
  } )
  }
  
  
  render () {

    return (
      <div className="App">

      <h1>Hello, Welcome to React</h1>
      <p>This is really working</p>
      <button onClick = {this.switchNameHandler}>Switch Name</button>
      <Person name = {this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies : Singing</Person>
      <Person  name = {this.state.persons[1].name} age = {this.state.persons[1].age}/>
      <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
    </div>
  );
  // return (
  //   React.createElement('div', {className : 'App'}, React.createElement('h1', {className : 'App'}, `Hi! This is an H1 tag inside a Div Tag`))
  // );
}
}


export default App;
