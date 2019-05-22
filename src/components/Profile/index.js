import React, { Component } from 'react';

class Profile extends Component{
  state = {
    name: '',
    age: ''
  }

  render(){

    const { name, age } = this.state;
    return (
      <div className="profile card">
        <h1>Profile</h1>
        <div>
          <h4>Name: {name}</h4>
          <h4>Age: {age}</h4>
        </div>
      </div>
    )
  }
}

export default Profile;
