import React  from 'react';


const MusicList = (props) => {
 let renderedMusicList = props.MusicList.map((music) =>{
     return <li>{music}</li>;
 });

 return <div>{renderedMusicList}</div>
}

export default MusicList