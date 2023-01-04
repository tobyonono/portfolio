const SinglePlaylist = ({ name, image, date, location, genre, setPlaylist, link }) => {

    const handleClick = (playlistLink) =>{
        setPlaylist(playlistLink)
        
    }
    console.log(name);
    const genreList = genre.map((genre) => <li className="border border-black p-1 m-1 shadow-lg cursor-pointer">{genre}</li>)
    return (
    <article className="w-full p-3 border font-nitti text-sm uppercase shadow-lg rounded-lg">
        <div className="relative p-2 pb-4 border border-black h-full">
            <div className="hover:brightness-50 cursor-pointer" onClick={() => handleClick(link)}>
                <img src={image} />
            </div>
            <div className="flex flex-wrap justify-between mt-3">
                <span>{date}</span>
                <span>{location}</span>
                <div className="basis-full text-left mt-3 text-lg font-bold">
                    <h1>{name}</h1>
                </div>
                <div className="flex flex-row">
                    <ul className="flex w-full flex-wrap">{genreList}</ul>
                </div>
            </div>
        </div>
    </article>
    )
}



export default SinglePlaylist;