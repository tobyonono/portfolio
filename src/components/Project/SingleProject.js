import { ExternalLink } from "feather-icons-react/build/IconComponents";
const SingleProject = ({ key, name, description, devTools, image, color }) => (
    < li className={`font-nitti p-3  text-sm uppercase shadow-lg rounded-3xl ${color} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer`} >
        <div className=" flex relative flex-col justify-between items-center w-full h-full">
            <div className='text-white flex justify-between w-full font-GTWalsheim text-xs'>
               <p>Launch Project</p>
               <p><ExternalLink /></p>
            </div>
            <div className="justify-center">
                <h3 className="my-6 text-[bisque] text-2xl relative z-10 whitespace-pre-line">{name}</h3>
            </div>
            <div>
                <ul className="relative flex flex-wrap z-10 mt-6 mb-3 md:justify-end text-white text-[0.7rem]">
                    <li className="border border-white p-2 m-1 shadow-lg hover:bg-white hover:text-black rounded-2xl ">{devTools.library}</li>
                    <li className="border border-white p-2 m-1 shadow-lg hover:bg-white hover:text-black rounded-2xl">{devTools.styling}</li>
                    <li className="border border-white p-2 m-1 shadow-lg hover:bg-white hover:text-black rounded-2xl">{devTools.hosting}</li>
                    {devTools.server && <li className="border border-white p-2 m-1 shadow-lg hover:bg-white hover:text-black rounded-2xl">{devTools.server}</li>}


                </ul>
            </div>
        </div>

    </li >
)

export default SingleProject

