import React, { Component } from 'react'
import First from './first'
export const MyContext = React.createContext();
export default class Home extends Component {
    state={
        name:"Raj",
        id:12
    }
    handle=()=>{
        this.setState({id:this.state.id +1});
    }
    render() {
        const AllData ={
            data:this.state,
            handle: this.handle
        }
        return (
            <div>
                <MyContext.Provider value={AllData}>
                <First/>
                    <h3>Home COmponent</h3>
                </MyContext.Provider>
            </div>
        )
    }
}
