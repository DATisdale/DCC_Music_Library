import React, {Component} from 'react';
import MusicTable from  '../src/components/MusicTable/MusicTable'
//import './style.css'
import axios from 'axios';
//import MusicList from '../src/components/Music List/MusicList'


class App extends Component {
    constructor (props) {
        super(props);
        this.state ={
         songs:[]    
        }
    }
    
    componentDidMount() {
        this.fetchSongs();
    }
    async fetchSongs() {
        try{
           let response = await axios.get("http://www.devcodecampmusiclibrary.com/api/music")
            console.log(response.data)
            this.setState({
                songs: response.data
            });
        }catch (error) {
            console.log(error)
        }
    }

    render () {
        console.log(this.state)
        return (
            <div className = "App">
                <h1>Dev Code Music Library!</h1>
                {this.state.songs.length > 0 ? (
                    this.state.songs.map(song=>{
                    return <p key={song.id}>{song.artist}</p>;
                })
                ) : (
                <h2>Loading</h2>
                )}
                <MusicTable/>    
            </div>
        );
    }
}    

export default App;