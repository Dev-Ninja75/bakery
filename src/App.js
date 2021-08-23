import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Add from "./components/Add"; 
import List from "./components/List"; 
import Pay from "./components/Pay"; 
import Button from "./components/Button";


class App extends React.Component {
    constructor(props) {
      super(props);
  
      // status des states
      this.state = {
        activeTab: "add",
        items: [],
        
      };
    }

    // activeTab = () => {
    //   this.state = ({activeTab})
    // }

    // items = () => {
    //   this.state = ({item})
    // }

  render() {
    return (

      <>
        <Button isSelected onClick> Add </Button>,
        <Button isSelected onClick> List </Button>,
        <Button isSelected onClick> Pay  </Button>
      </>
      
    );
  }
}

export default App;
