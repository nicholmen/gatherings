import React, {Component} from 'react';
import axios from 'axios';

class Gatherings extends Component{
  constructor(){
    super();
    this.state = {
      gatherings: []

    }
  }

  getGatherings(){
    axios.get('http://localhost:3000/api/gatherings')
      .then(response => {
        this.setState({gatherings: response.data}, () =>{
          // console.log(this.state)
        })
      })
  }

  componentWillMount(){
    this.getGatherings();
  }
  render(){
    const gatheringItems = this.state.gatherings.map((gathering, i) => {
      return(
        <li className="collection-item">{gathering.name}</li>
      )
    })
    return (
      <div>
        <h1>Gatherings</h1>
        <ul className="collection">
          {gatheringItems}
        </ul>
      </div>
    )
  }
}

export default Gatherings;
