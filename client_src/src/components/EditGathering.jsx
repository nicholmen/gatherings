import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class EditGathering extends Component{
  constructor(props){
    super(props);
    this.state = {
      id: '',
      name: '',
      city: '',
      address: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount(){
    this.getGatheringDetails();
  }
  getGatheringDetails(){
    let gatheringId = this.props.match.params.id; // gets id from URL
    axios.get(`http://localhost:3000/api/gatherings/${gatheringId}`)
    .then(response => {
      this.setState({
        id: response.data.id,
        name: response.data.name,
        city: response.data.city,
        address: response.data.address,
      }, () => {
        console.log('state', this.state)
      }
      );
    })
    .catch(error => console.log(error))
  }
  
  editGathering(newGathering){
    axios.request({
      method: 'put',
      url: `http://localhost:3000/api/gatherings/${this.state.id}`,
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
    this.editGathering(newGathering);
    e.preventDefault();
  }

  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render(){
    return(
      <div>
        <br />
        <Link className="btn grey" to="/">Back</Link>
        <h1>Edit Gathering</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange} />
            <label className="active" htmlFor="name">Name</label> 
          </div>
          <div className="input-field">
            <input type="text" name="city" ref="city" value={this.state.city} onChange={this.handleInputChange} />
            <label className="active" htmlFor="city">City</label>
          </div>
          <div className="input-field">
            <input type="text" name="address" ref="address" value={this.state.address} onChange={this.handleInputChange} />
            <label className="active" htmlFor="address">Address</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default EditGathering;
