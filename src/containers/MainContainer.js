import React, { Component } from "react";
import Notebook from './Notebook.js'
import composedAuthHOC from '../HOC/AuthHOC.js'

const BASE_URL = "http://localhost:3000/";


class MainContainer extends Component {

  grabUser = () => {
    fetch(BASE_URL+'users/show', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
    })
  }

  render() {
    console.log('maincontainer props:', this.props)
    return(
       <div>
       <Notebook />
       </div>
       )
  }
}

export default composedAuthHOC(MainContainer);
