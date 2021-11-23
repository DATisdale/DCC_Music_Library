import React,{Component} from 'react';
//import MusicTable from '../src/components/MusicTable/MusicTable'
import './components/Style.css';
import TitleBar from '../src/components/TitleBar'
import SearchBar from './components/SearchBar';
//import MusicTable from './components/MusicTable/MusicTable';



class App extends Component {
    constructor (props) {
        super(props);
        this.state ={
         songs:[]    
        }
        
    }

    
  
  
    render () {
        return(
            <><TitleBar /><SearchBar /></>
        )         
    }
  }    
  export default App;