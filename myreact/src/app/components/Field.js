import React,{Component} from "react";
import store from "./../Store";

export class Field extends Component {
    constructor(props){
      super(props);
      this.state = {
        input_data: this.props.field_name+'default_data',
        update_callback : this.props.randomupdate
      }
      console.log('constructor called');
    }
    onQtyChange(e){

        this.setState({
            input_data: "modified-"+e.target.value
        })
        this.state.update_callback(Math.random()*1000);
        store.dispatch({
             type: 'gen_update', 
             field_data :{
                 field_name:this.state.input_data
             }});
    }

    componentWillMount() {
        console.log('component will mount called');
    }

    render(){
        console.log('render called');
        return(
            <div>
              <label>{this.state.input_data}<input onChange={(e) => this.onQtyChange(e)}/></label>
            </div>
        );
    }
    componentDidMount(){
        console.log('component did mount');
    }
  
}

Field.defaultProps = {
    field_name: 'Default Name',
    help_text: "Enter Default Name"
}