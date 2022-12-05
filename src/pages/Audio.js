import PlaylistFilter from "../components/PlaylistFilter";
import Navbar from "../components/Navbar";
import SinglePlaylist from "../components/SinglePlaylist";

const Audio = () => (
    <div>
        <Navbar />
        <section className="h-full w-full p-20">
            <div className="flex first-line:">
                <span className="text-black font-nitti text-6xl px-20">PLAYLISTS - </span>

            </div>
            <PlaylistFilter />
            <div className="grid grid-cols-3 gap-4 px-20">
                <SinglePlaylist />
                <SinglePlaylist />
                <SinglePlaylist />
                <SinglePlaylist />
            </div>

        </section>
    </div>


)

export default Audio;

