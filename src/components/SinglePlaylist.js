import { ImageArray } from "./ImageArray";

const SinglePlaylist = ({ name, image, date, location, genre }) => (
    <article className="w-full p-3 border font-nitti text-sm uppercase shadow-lg rounded-lg">
        <div className="relative p-2 pb-11 border border-black">
            <div>
                <img src={ImageArray[4].image} />
            </div>
            <div className="flex flex-wrap justify-between mt-3">
                <span>30.11.2022</span>
                <span>Dublin</span>
                <div className="basis-full text-left mt-3 text-lg font-bold">
                    <h1 >Testing Name</h1>
                    </div>
            </div>
        </div>
    </article>
)



export default SinglePlaylist;