import PlaylistFilter from "../components/Playlist/PlaylistFilter";
import Navbar from "../components/Navbar";
import SinglePlaylist from "../components/Playlist/SinglePlaylist";
import MultiplePlaylists from "../components/Playlist/MultiplePlaylists";

import { useState } from "react";

const Audio = () => {

    const [playlist,setPlaylist] = useState('')
    const [showPlaylist, setShowPlaylist]= useState(false)
    return(
        <div>
            <Navbar />
            <section className="h-full w-full p-20">
                <div className="flex first-line:">
                    <span className="text-black font-nitti text-6xl px-20">PLAYLISTS - </span>
    
                </div>
                <PlaylistFilter />
                {showPlaylist && <div className="w-full px-20 flex">
                    <iframe style={{ 'border-radius': '12px' }} src="https://open.spotify.com/embed/playlist/7MB7fMB6cScyBT7VNyYrx9?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <div className="h-full"><img  /></div>
                </div>}
    
                <div className="px-20">
                    <MultiplePlaylists />
    
                </div>
    
            </section >
        </div >
    
    
    )
}



export default Audio;

