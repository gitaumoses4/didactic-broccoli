import React, { Component } from 'react';

class Form extends Component{
  state = {
    name: '',
    age: 0
  };

  render(){
    return (
      <div className="card">
        <form action="" className="form">
          <div className="input-field">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name"/>
          </div>
          <div className="input-field">
            <label htmlFor="age">Age: </label>
            <input type="text" name="age" id="age"/>
          </div>
          <button type={"submit"}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;
