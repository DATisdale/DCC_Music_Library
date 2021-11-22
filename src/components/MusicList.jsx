import React from "react"

export default function MusicList(songs) {
    return(
        <div>
            <ul>
                {songs.map(songs=>(
                    <li key={songs.id}>
                        Artist:
                        <span>{songs.artist}</span>
                        Title:
                        <span>{song.title}</span>
                        Release Date:
                        <span>{songs.releaseDate}</span>
                        Genre:
                        <span>{songs.genre}</span>
                        Album:
                        <span>{songs.album}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
