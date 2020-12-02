import React, { Component } from 'react'
import {MyContextSecond} from './Home'
export default class id extends Component {
    render() {
        return (
            <div>
                   <MyContextSecond.Consumer>
                   {({data1,handle1}) =><p> {data1.name1}{data1.id}<button onClick={handle1}>Click1</button></p>
                   } 
                </MyContextSecond.Consumer>
            </div>
        )
    }
}
