import React,{Component} from "react";
import store from "./../Store";

export class Stat extends Component {
    constructor(props){
      super(props);
      this.state = {
      
      }
      console.log('stats constructor called');
    }
  
    componentWillMount() {
        console.log('stats component will mount called');
    }

    render(){
        console.log('stats render called');
        let field_rows =[];
        var state = store.getState();
        for(var i in state.fields){
            field_rows.push(i);
        }
        
        field_rows = field_rows.map( item => (
            <tr key={item}><td>{item}</td></tr>
        ));
        return(
        <div className="table-container"> <table>
                <tbody>
                <tr><th>{this.props.title}</th></tr>
                {field_rows}
                </tbody>
            </table>
        </div>
        );
    }
    componentDidMount(){
        console.log(' stats component did mount');
          store.subscribe( () => {
             this.forceUpdate();
         })//unsubscribe in unmount method
    }
  
}

Stat.defaultProps = {
   title:'Stack of Inputs'
}