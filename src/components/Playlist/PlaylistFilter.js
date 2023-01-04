import { Link } from "react-router-dom";
import { PlaylistArray, uniqueTags } from "./PlaylistInfo";

const PlaylistFilter = ({setFilteredGenre}) => {
    
    const handleClick = (filter) => {
        setFilteredGenre(filter)
    }

    const filterList = uniqueTags.map((tag, i) => <li className="ml-3 text-gray-400 after:content-['/'] after:ml-3 " key={i} onClick={() => handleClick(tag)}>{tag}</li>)

    return (
        <ul className="flex font-GTWalsheim max-w-screen-lg m-auto items-center justify-start py-8 text-sm">Filter:{filterList}</ul>
    )

}

export default PlaylistFilter;