import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class GatheringItem extends Component{
  constructor(props){
    super(props);
    this.state= {
      item: props.item
    }
  }
  render(){
    return(
      <li className="collection-item">
        <Link to={`/gatherings/${this.state.item.id}`}>{this.state.item.name}</Link>
      </li>
    )
  }
}

export default GatheringItem;
