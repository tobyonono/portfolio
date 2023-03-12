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

    const filterList = uniqueTags.map((tag, i) => <li className={tag === clickedFilter ? "mr-3 bg-slate-900 text-white rounded-xl focus:bg-slate-900 focus:rounded-xl shadow-[0_2px_0_0_rgb(0,0,0)] border-2 border-black transition ease-out active:scale-105" : "mr-3 hover:bg-slate-900 hover:text-white rounded-xl focus:bg-slate-500 focus:rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300 shadow-[0_2px_0_0_rgb(0,0,0)] border-2 border-black"} key={i} onClick={() => handleClick(tag)}><button className="uppercase p-2">{tag}</button></li>)

    return (
        <ul className="flex font-nitti max-w-screen-lg m-auto items-center justify-start p-12 md:p-0 md:py-8 text-xs uppercase">
            <span className="font-bold">Filter:</span>
            <li className={'All' === clickedFilter ? "mr-3 bg-slate-900 text-white rounded-xl focus:bg-slate-900 focus:rounded-xl shadow-[0_2px_0_0_rgb(0,0,0)] border-2 border-black transition ease-out active:scale-105" : "mr-3 hover:bg-slate-900 hover:text-white rounded-xl focus:bg-slate-500 focus:rounded-xl shadow-[0_2px_0_0_rgb(0,0,0)] border-2 border-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"} onClick={() => handleClick('All')}><button className="uppercase p-2">All</button></li>
            {filterList}
        </ul>
    )

}

export default PlaylistFilter;