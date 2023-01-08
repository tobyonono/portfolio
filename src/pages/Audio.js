import PlaylistFilter from "../components/Playlist/PlaylistFilter";
import Navbar2 from "../components/Navbar2";
import SinglePlaylist from "../components/Playlist/SinglePlaylist";
import MultiplePlaylists from "../components/Playlist/MultiplePlaylists";
import Footer from "../components/Footer";

import { useState, useEffect } from "react";

const Audio = () => {

    const [playlist, setPlaylist] = useState('');
    const [showPlaylist, setShowPlaylist] = useState(false);
    const [filteredGenre, setFilteredGenre] = useState('All')

    useEffect(() => {

        if (!showPlaylist) {
            setShowPlaylist(true);
        }
    }, [playlist])

    return (
        <div>
            <header className="border-b-2">
                <Navbar2 />
            </header>
            <section className="h-full w-full p-8 bg-black text-white">
                <div className="max-w-screen-lg m-auto text-sm font-nitti mb-8 ">
                    <div className="grid grid-cols-2 max-w-screen-lg m-auto">
                        <div className=" py-12 pr-12 text-left">
                            <h2 className="font-GTWalsheim text-2xl"><span className="font-guyot italic">Couple tunes</span> across a number of genres including rap, R&B, amapiano &amp; more.</h2>

                        </div>
                        <div className="py-12 pl-12 text-left font-GTWalsheim text-base">
                            <p className="mb-4">Couple of projects based around my love of music & food, I generally use these to get comfortable using new tools. </p>
                            <p>I want to always be growing an improving so the code in these all inevitably get changed (at least locally) when I'm trying to learn new things.</p>
                        </div>
                    </div>
                    <div className="flex py-2 justify-between border-b border-b-white uppercase">
                        <p>Playlists</p>
                        <p>001</p>
                    </div>
                </div>
                


            </section >
            <section>
            <div className="max-w-screen-lg m-auto">
                    <PlaylistFilter setFilteredGenre={setFilteredGenre} />
                    {showPlaylist && <div className="w-full flex">
                        {playlist}
                        <div className="h-full"><img /></div>
                    </div>}

                    <div className="">
                        <MultiplePlaylists setPlaylist={setPlaylist} filteredGenre={filteredGenre} />

                    </div>
                </div>
            </section>
            <footer>
                <Footer />
            </footer>
        </div >


    )
}



export default Audio;

