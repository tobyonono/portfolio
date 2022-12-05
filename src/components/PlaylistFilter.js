import { Link } from "react-router-dom";
import { PlaylistArray, uniqueTags } from "./PlaylistArray";

const PlaylistFilter = () => {

    const filterList = uniqueTags.map((tag, i) => <li className="ml-3 text-gray-400" key={i}>{tag}</li>)

    return (
        <ul className="flex font-GTWalsheim p-20">Filter:{filterList}</ul>
    )

}

export default PlaylistFilter;