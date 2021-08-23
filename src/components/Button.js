import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Button extends React.Component {
   
  render() {
    console.log(this.props);
    return (
      <>
        <button className="btn" type="button" > {this.props.children} </button>

      </>
    )
  }
}

export default Button;