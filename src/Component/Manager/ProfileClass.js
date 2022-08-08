import React, { Component } from 'react'
import * as services from './Services/ManagerServices'
export default class ProfileClass extends Component {
    constructor(props) {
      super(props)
      this.state = {
        users:[]
     }
     }
   componentDidMount()
   {
    try {
        services.getProfile().then((result)=>
        this.setState({users:result.data})
       );
    } catch (error) {
        console.log(error)
    }
   }    
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
