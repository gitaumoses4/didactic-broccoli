import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component{
  render(){
    const { name, age } = this.props;
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

const mapStateToProps = ({ app }) => {
  return {
    name: app.name,
    age: app.age
  }
};

const mapDispatchToProps = () => {return {};};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
