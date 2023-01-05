import { Link } from "react-router-dom";
import { PlaylistArray, uniqueTags } from "./PlaylistInfo";

const PlaylistFilter = ({ setFilteredGenre }) => {

    const handleClick = (filter) => {
        setFilteredGenre(filter)
    }

    const filterList = uniqueTags.map((tag, i) => <li className="ml-3 text-gray-400  hover:bg-slate-200 rounded-xl focus:bg-slate-500 focus:rounded-xl" key={i} onClick={() => handleClick(tag)}><button className="uppercase p-2">{tag}</button></li>)

    return (
        <ul className="flex font-nitti max-w-screen-lg m-auto items-center justify-start py-8 text-xs uppercase">
            <span className="font-bold">Filter:</span>
            <li className="ml-3 text-gray-400 hover:bg-slate-200 rounded-xl uppercase" onClick={() => handleClick('All')}><button className="uppercase p-2">All</button></li>
            {filterList}
        </ul>
    )

}

export default PlaylistFilter;