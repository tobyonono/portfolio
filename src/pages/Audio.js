import PlaylistFilter from "../components/Playlist/PlaylistFilter";
import Navbar from "../components/Navbar";
import SinglePlaylist from "../components/Playlist/SinglePlaylist";
import MultiplePlaylists from "../components/Playlist/MultiplePlaylists";

import { useState, useEffect } from "react";

const Audio = () => {

    const [playlist,setPlaylist] = useState('');
    const [showPlaylist, setShowPlaylist]= useState(false);
    const [filteredGenre, setFilteredGenre] = useState('All')


    useEffect(() => {
        
        if(!showPlaylist )
        {
            setShowPlaylist(true);
        }
    }, [playlist])

    return(
        <div>
            <Navbar />
            <section className="h-full w-full p-20">
                <div className="flex first-line:">
                    <span className="text-black font-nitti text-6xl px-20">PLAYLISTS - </span>
    
                </div>
                <PlaylistFilter setFilteredGenre={setFilteredGenre} />
                {showPlaylist && <div className="w-full px-20 flex">
                    {playlist}
                    <div className="h-full"><img  /></div>
                </div>}
    
                <div className="px-20">
                    <MultiplePlaylists setPlaylist={setPlaylist} filteredGenre={filteredGenre}/>
    
                </div>
    
            </section >
        </div >
    
    
    )
}



export default Audio;

