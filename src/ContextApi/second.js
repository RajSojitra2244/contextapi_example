import React, { Component } from 'react'
import {MyContext} from './Home'
export default class second extends Component {

   // static contextType =MyContext
   componentDidMount(){
       console.log("mounted");
   }
   componentDidUpdate(){
       console.log("update");
   } 
   componentWillReceiveProps(){
       console.log("recive_props");
   }
   shouldComponentUpdate(){
       console.log("should_component_update");
       return true
   }
   render() {
        return (
            <div>
                <h1>Second component</h1>
                <lifecycle ids={56}/>
                <MyContext.Consumer>
                   {({data,handle}) => <h5>Name:{data.name}<br/>Id: {data.id}<br/>
                    <button onClick={handle}>Click</button>
                   </h5>} 
                </MyContext.Consumer>
                
            </div>
        )
    }
}
