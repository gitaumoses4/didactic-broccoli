import React, { Component } from 'react';
import { connect } from 'react-redux';
import {updateProfile} from "../../redux/actions/profileActions";

class Form extends Component{
  state = {
    profileName: '',
    age: 0
  };

  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value});
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { profileName, age } = this.state;
    const { update } = this.props;
    update(profileName , age);
  };

  render(){
    const { name, age } = this.state;
    return (
      <div className="card">
        <form onSubmit={this.onSubmit} className="form">
          <div className="input-field">
            <label htmlFor="profileName">Name: </label>
            <input
              type="text"
              name="profileName"
              id="profileName"
              onChange={this.onChange}
              value={name}/>
          </div>
          <div className="input-field">
            <label htmlFor="age">Age: </label>
            <input type="text" name="age" id="age" value={age} onChange={this.onChange}/>
          </div>
          <button type={"submit"}>Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = () => {
  return {
    update: updateProfile
  }
};

export default connect(null, mapDispatchToProps())(Form);
