import React, {useState,useEffect} from "react";
import axios from "axios";
import '../components/MusicTable/SongTable.css'


function SearchBar() {
    let[search,setSearch]=useState('');
    const [songs, setSongs]=useState([])
    const [filteredData,setFilteredData]=useState([])

    useEffect(()=>{
        
        axios.get("http://www.devcodecampmusiclibrary.com/api/Music")
        .then((response)=>{
            setSongs(response.data)
        })
        
    },[search])


    useEffect(()=>{
        setFilteredData(
            
            //songs.filter((song)=>song.artist.toLowerCase().includes(search.toLowerCase()))
            songs.filter((song)=>song.artist.toLowerCase().includes(search.toLowerCase())),
            songs.filter((song)=>song.title.toLowerCase().includes(search.toLowerCase()))

            
        )
    },)
    return (
        <div className = "MusicTable">
            
            <input type="text" placeholder="search..."onChange={changeHandler}/>
            {console.log(search)}



            {filteredData.map((song)=>{
                return <tr key ={songs.id}>
                    
                <td>{song.id}</td>
                <td>{song.title}</td>
                <td>{song.album}</td>
                <td>{song.artist}</td>
                <td>{song.genre}</td>
                <td>{song.releaseDate}</td>
              </tr>

                    
            })}
        </div>
    )


function changeHandler(event){
    const searchInput = event.target.value;
    setSearch(searchInput);

}
}



export default SearchBar