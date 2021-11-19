import React  from 'react';
import axios from "axios"




export default class MusicList extends React.Component {
    state = {
        songs: []
    };

    componentDidMount(){
        axios.get('http://www.devcodecampmusiclibrary.com/api/music').then(res=> {
            console.log(res);
            this.setState({songs:res.data})
        })
    }

    render(){
      return (
     <><thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">Artist</th>
                  <th scope="col">Album</th>
                  <th scope="col">Song Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Release Date</th>

              </tr>
          </thead>
          <tr>
               <th scope = "row">1</th> 
               <td></td>
              </tr></>
      ) 
      }
    }

    