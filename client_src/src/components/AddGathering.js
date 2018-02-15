import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AddGathering extends Component{
  addGathering(newGathering){
    axios.request({
      method: 'post',
      url: 'http://localhost:3000/api/gatherings',
      data: newGathering
    }).then(response => {
      this.props.history.push('/'); // history comes from react router 
    }).catch(error => console.log(error))
  }
  
  onSubmit(e){
    const newGathering = {
      name: this.refs.name.value,
      city: this.refs.city.value,
      address: this.refs.address.value
    }
    this.addGathering(newGathering);
    e.preventDefault();
  }

  render(){
    return(
      <div>
        <br />
        <Link className="btn grey" to="/">Back</Link>
        <h1>Add Gathering</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="city" ref="city" />
            <label htmlFor="city">City</label>
          </div>
          <div className="input-field">
            <input type="text" name="address" ref="address" />
            <label htmlFor="address">Address</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default AddGathering;
