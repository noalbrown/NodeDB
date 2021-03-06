import React, { Component } from 'react';

class AddItems extends Component {
  constructor() {
    super()
    this.state = {
      supplies: '',
      quantity: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAdd(e) {
    const { supplies, quantity } = this.state
    e.preventDefault()
    this.props.addBackpackItem(supplies, quantity)
    // This empties the input squares after submission!
    this.setState({ supplies: "", quantity: "" })
  }

  render() {
    const { supplies, quantity } = this.state;
    return (
      <form className="addItems" onSubmit={(e) => this.handleAdd(e)}>
        <input
          name="supplies"
          value={supplies}
          placeholder="First add an item"
          onChange={this.handleChange} />

        <input
          name="quantity"
          value={quantity}
          placeholder="How many? "
          onChange={this.handleChange} />
        <button type="submit">Add Item</button>
      </form>
    )
  };
}

export default AddItems;