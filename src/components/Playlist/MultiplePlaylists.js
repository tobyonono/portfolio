import { PlaylistArray } from "./PlaylistInfo";
import SinglePlaylist from "./SinglePlaylist";
import { useState } from "react";

const MultiplePlaylists = ({setPlaylist, filteredGenre}) => {
    const filteredPlaylist = PlaylistArray.filter((playlist) => {
        if(filteredGenre === "" || filteredGenre === "All")
        {
            return playlist
        }
        else{
            return playlist.genre.includes(filteredGenre);
        }
        
      });

    const playlistList = filteredPlaylist.map((pl) => <SinglePlaylist name={pl.name} image ={pl.image} date={pl.date} location={pl.location} genre={pl.genre} link={pl.link} setPlaylist={setPlaylist}/>)

    return(
        <ul className='grid grid-cols-3 gap-4'>{playlistList}</ul>
    )

}

export default MultiplePlaylists;