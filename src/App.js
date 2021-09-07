import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/Button';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "add",
      items: []
    }
  }

  handleButtonClick = (e) => {
    console.log(e.target.innerText);
    this.setState({activeTab:e.target.innerText})
  }

  handleNameChange = (e) => {
    console.log(e);
    this.setState({name:e.target.value})
  }

  addItem =(name, price) => {
    this.setState ({
      items : [...this.state.items, {name: name, price: price}]
    })
  }


  render() {
    console.log(this.state.activeTab);
    
    return (
    <>
      <Button handleClick={this.handleButtonClick} 
              isSelected={this.state.activeTab === "add"}>add</Button>
      <Button handleClick={this.handleButtonClick} 
              isSelected={this.state.activeTab === "list"}>list</Button>
      <Button handleClick={this.handleButtonClick} 
              isSelected={this.state.activeTab === "pay"}>pay</Button>

              {this.state.activeTab === "add" && (<Add/>)}
    </>
    )
  }
}

export default App