import React, { Component } from 'react';
import axios from 'axios';
class Test extends Component {
  constructor(props){
    super(props);
    this.url = 'http://localhost:9000/doers'
    this.state = {
      person: []
    }
  }
  componentDidMount(){
    axios
      .get(this.url)
      .then(response => {
        this.setState({
          person: response.data[0].name
        })
        })
        .catch(err => {
          console.log(err)
      })
  }
  render() {
    if (!this.state.person) {
      return (
        <h1>working on it...</h1>
      )
    }
    return (
<div>
{this.state.person.map(person => {
  return <h1>hi</h1>
})}

      </div>
    )
  }
}
export default Test;
