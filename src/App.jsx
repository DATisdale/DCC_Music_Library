import React, {Component} from 'react';
//import MusicTable from  '../src/components/MusicTable/MusicTable'
//import './style.css'
import axios from 'axios';
import MusicList from '../src/components/Music List/MusicList'


class App extends Component {
    constructor (props) {
        super(props);
    }
    
    componentDidMount() {
        this.fetchUsers();
    }
    async fetchUsers() {
        try{
           let response = await axios.get("http://www.devcodecampmusiclibrary.com/api/music")
            console.log(response)
        }catch (error) {
            console.log(error)
        }
    }

    render () {
        return (
            <div className = "App">
                <h1>Hello World!</h1>
            </div>
        );
    }
}    

export default App;