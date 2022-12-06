import { Link } from "react-router-dom";
import { PlaylistArray, uniqueTags } from "./PlaylistInfo";

const PlaylistFilter = ({setFilteredGenre}) => {
    
    const handleClick = (filter) => {
        setFilteredGenre(filter)
    }

    const filterList = uniqueTags.map((tag, i) => <li className="ml-3 text-gray-400 after:content-['/'] after:ml-3 uppercase" key={i} onClick={() => handleClick(tag)}>{tag}</li>)

    return (
        <ul className="flex font-GTWalsheim p-20 d">Filter:{filterList}</ul>
    )

}

export default PlaylistFilter;