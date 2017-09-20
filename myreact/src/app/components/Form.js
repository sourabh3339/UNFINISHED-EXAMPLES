import React,{Component} from "react";
import {Field} from "./Field";

export class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            form_title:"Form title"
        };
    }
    changeFormTitle(value){
        this.setState({
            form_title:"Changing: "+value
        })
    }
    render(){
        let title = "Default for";
        let field_arr = this.props.fields;
        field_arr = field_arr.map( item => (
            <Field randomupdate = {this.changeFormTitle.bind(this)} key={item.id} field_name={item.field_label}/>
        ));
        
        return (
            <ul>{this.state.form_title}
               {field_arr}
            </ul>
        )
    }
}
