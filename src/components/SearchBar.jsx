import React, {Component} from 'react';
import './SearchBarStyle/FindBarStyle.css'
import axios from 'axios'


 class SearchBar extends Component  {
    state = {
        songs: [],
        loading: false,
        value: ''
      };
    componentDidMount(){}
      search = async val => {
        this.setState({ loading: true });
        const res = await axios(
            "http://www.devcodecampmusiclibrary.com/api/music"
        );
        const songs = await res.data.results;
    
        this.setState({ songs, loading: false });
      };
    
      onChangeHandler = async e => {
        this.search(e.target.value);
        this.setState({ value: e.target.value });
      };
    
      get renderSongs() {
        let songs = <h1>Dev Code Music Library</h1>;
        if (this.state.songs) {
          songs = <songs list={this.state.songs} />;
        }
    
        return songs;
      }
    
      render() {
        return (
          <div>
            <input
              value={this.state.value}
              onChange={e => this.onChangeHandler(e)}
              placeholder="Search for music"
            />
            {this.renderSongs}
          </div>
        );
      }
    }
    

export default SearchBar