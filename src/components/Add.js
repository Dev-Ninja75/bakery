import React from "react";

class Add extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name:"",
      price: 0
    }
  }

  
  render() {
      
    return (
      <>
      <div>Add</div>
      <input type="text" name="name" id="name"/>
      <span>{this.setState.price}</span>
      </>
    )
  }
}

export default Add;