import React,{Component} from 'react';
import MusicTable from '../src/components/MusicTable/MusicTable'
import './components/Style.css';
//import axios from 'axios'
import TitleBar from '../src/components/TitleBar'


class App extends Component {
    constructor (props) {
        super(props);
        this.state ={
         songs:[]    
        }
    }
    
  
  
    render () {
        return(
            <><TitleBar />
            <MusicTable /></>
        )
    }
  }    
  export default App;