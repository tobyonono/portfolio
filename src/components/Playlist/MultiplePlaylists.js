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
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-12 md:p-0 md:py-6'>{playlistList}</ul>
    )

}

export default MultiplePlaylists;