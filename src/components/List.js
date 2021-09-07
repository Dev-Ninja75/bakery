import React from "react";

class List extends React.Component {
  render() {
      
    return (
      <>
        <div>List</div>
        <ul>{this.props.items.map(item =>(
          <li>
            <b>Name:</b>{item.name}
            <b>Price:</b>{item.price}
          </li>
        ))}
        </ul>
      </>
    )
  }
}

export default List;