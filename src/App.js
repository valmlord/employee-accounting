import { Component } from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello World</h2>
}

class Field extends Component {
  render() {
    const holder = 'Enter Here';
    const styledField = {
      width: '300px'
    };

    return <input
      placeholder={holder}
      type="text"
      style={styledField} />
  }
}

function Btn() {
  const text = 'log in';

  const logged = false;

  return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
    </div>
  );
}

export default App;
