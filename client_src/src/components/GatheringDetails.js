import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class GatheringDetails extends Component{
  constructor(props){
    super(props);
    this.state= {
      details: ''
    }
  }
  render(){
    return(
      <div>
        <h1>Details</h1>
      </div>
    )
  }
}

export default GatheringDetails;
