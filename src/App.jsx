import React,{Component} from 'react';
import MusicTable from '../src/components/MusicTable/MusicTable'
//import '../src/components/img'
//import axios from 'axios'



class App extends Component {
    constructor (props) {
        super(props);
        this.state ={
         songs:[]    
        }
    }
    
  
  
    render () {
        return(
            <MusicTable/>
        )
    }
  }    
  export default App;