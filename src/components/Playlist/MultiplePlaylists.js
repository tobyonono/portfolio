import { PlaylistArray } from "./PlaylistInfo";
import SinglePlaylist from "./SinglePlaylist";

const MultiplePlaylists = () => {

    console.log(PlaylistArray);

    const playlistList = PlaylistArray.map((pl) => <SinglePlaylist name={pl.name} image ={pl.image} date={pl.date} location={pl.location} genre={pl.genre} />)

    return(
        <ul className='grid grid-cols-3 gap-4'>{playlistList}</ul>
    )

}

export default MultiplePlaylists;