import { Link } from "react-router-dom";
import { PlaylistArray, uniqueTags } from "./PlaylistInfo";
import { useState } from "react";

const PlaylistFilter = ({ setFilteredGenre }) => {

    const[clickedFilter, setClickedFilter] = useState('All');
    console.log(clickedFilter);
    console.log(uniqueTags[0]);

    const handleClick = (filter) => {
        setFilteredGenre(filter);
        setClickedFilter(filter);
    }

    const filterList = uniqueTags.map((tag, i) => <li className={tag === clickedFilter ? "ml-3 text-gray-500 bg-slate-200 rounded-xl focus:bg-slate-500 focus:rounded-xl" : "ml-3 text-gray-500 hover:bg-slate-200 rounded-xl focus:bg-slate-500 focus:rounded-xl"} key={i} onClick={() => handleClick(tag)}><button className="uppercase p-2">{tag}</button></li>)

    return (
        <ul className="flex font-nitti max-w-screen-lg m-auto items-center justify-start py-8 text-xs uppercase">
            <span className="font-bold">Filter:</span>
            <li className={'All' === clickedFilter ? "ml-3 text-gray-500 bg-slate-200 rounded-xl focus:bg-slate-500 focus:rounded-xl" : "ml-3 text-gray-500 hover:bg-slate-200 rounded-xl focus:bg-slate-500 focus:rounded-xl"} onClick={() => handleClick('All')}><button className="uppercase p-2">All</button></li>
            {filterList}
        </ul>
    )

}

export default PlaylistFilter;