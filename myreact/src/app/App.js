import React,{Component} from "react";

import {Form} from "./components/Form";
import {Stat} from "./components/Stat";

export class App extends Component {

    render(){
        let fields = [{
            id:1,
            field_label:"Name"
        },
        {
            id:2,
            field_label:"Roles"
        },
        {
            id:3,
            field_label:"Instances"
        },
        {
            id:4,
            field_label:"Applications"
        }];
        return (
        <div>     
           <Form fields= {fields}/>
           <Stat/>
       </div>
        )
  
    }
}