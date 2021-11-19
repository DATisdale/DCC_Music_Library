import React, {Component} from "react";
import axios from "axios";
import './SongTable.css'


class MusicTable extends Component {
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
          <div className = "MusicTable">
              <h1>Dev Code Music Library!</h1>
              {this.state.songs.length > 0 ? (
                  this.state.songs.map(songs=>{
                  return <tr key ={songs.id}>
                  <td>{songs.id}</td>
                  <td>{songs.title}</td>
                  <td>{songs.album}</td>
                  <td>{songs.artist}</td>
                  <td>{songs.genre}</td>
                  <td>{songs.releaseDate}</td>
                </tr>;
              })
              ) : (
              <h2>Loading</h2>
              )}
                  
          </div>
      );
  }
}    
export default MusicTable;