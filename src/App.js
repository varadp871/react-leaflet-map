import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {

  state = {
    persons: [{ name: "Varad", age: 20 }],
  };

  switchNameHandler = () => {
    // console.log('Was Clicked')
    this.setState({
      persons: [{ name: "Vidyasagar", age: 20 }],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [{ name: event.target.value, age: 20 }],
    });
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1>Hello, Welcome to React</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler} style={style}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changed={this.nameChangedHandler}
        />
      </div>
    );
  }
}

export default App;

//   state = {
// return (
//   React.createElement('div', {className : 'App'}, React.createElement('h1', {className : 'App'}, `Hi! This is an H1 tag inside a Div Tag`))
// );
//     persons : [
//       {name: 'Varad', age : 20},
//       {name: 'Sujay', age : 21},
//       {name: 'Vedant', age : 20}
//     ],
//     otherState : 'some other Value'
//   }

// switchNameHandler = () => {
//     // console.log('Was Clicked')
//     setPersonState( {
//       persons : [
//       {name : 'VaradPro', age  :20},
//       {name : 'Sujay', age:21},
//       {name : 'Vedant', age:25}
//     ]
//   } )
//   }

//Functional Components
// const [ personState, setPersonState ] = useState({
//         persons : [
//           {name: 'Varad', age : 20},
//           {name: 'Sujay', age : 21},
//           {name: 'Vedant', age : 20}
//         ],
//         otherState : 'some other Value'
// });
