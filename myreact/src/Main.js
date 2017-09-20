//bootstrap file
//main file

//bind virtual dom to real dom

import {render} from "react-dom";
import {App} from "./app/App";
import React from "react";


//from Provider, connect method, shall get the store reference
//store is passed to connect/container component as context

//compare, diffing, patching 
render ( <App/>, //virtual dom
        document.getElementById("root") //real dom
       );