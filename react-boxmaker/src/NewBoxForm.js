import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

export class NewBoxForm extends Component {
  constructor(props){
    super(props);
    this.state= {height: "",width: "",color: ""}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt){
    evt.preventDefault();
    const newBox = { ...this.state, id: uuidv4() };
    this.props.createBox(newBox);
    this.setState({
      height: "",
      width: "",
      color: ""
    })
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]:[evt.target.value]
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="height">Height</label>
          <input 
          type='text'
          name='height'
          value={this.state.height}
          onChange={this.handleChange}
          id='height'
          />
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <input 
          type='text'
          name='width'
          value={this.state.width}
          onChange={this.handleChange}
          id='width'
          />
        </div>
        <div>
          <label htmlFor="color">Color</label>
          <input 
          type='text'
          name='color'
          value={this.state.color}
          onChange={this.handleChange}
          id='color'
          />
        </div>
        <button>Add new box!</button>
      </form>
    )
  }
}

export default NewBoxForm
