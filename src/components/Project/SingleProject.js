const SingleProject = ({ name, description, devTools, image }) => (
    < li className="relative grid grid-cols-[repeat(12,_1fr)] items-center font-nitti p-3 border-2 text-sm uppercase shadow-lg rounded-lg" >
        <div className=" relative col-[4_/_-1] row-[1_/_1] text-right">
            <div className=''>
                <h3 className="mb-6 text-[bisque] text-2xl relative z-10">{name}</h3>
                <div className="relative z-10 p-5 bg-white shadow-lg border-8 border-solid border-[bisque]">
                    <p className=" text-black text-left font-guyot normal-case text-[0.75rem]">{description}</p>
                </div>
                <ul className="relative flex flex-wrap z-10 mt-6 mb-3 justify-end text-white text-[0.7rem]">
                    <li className="border border-white p-2 m-1 shadow-lg hover:bg-white hover:text-black rounded-2xl ">{devTools.library}</li>
                    <li className="border border-white p-2 m-1 shadow-lg hover:bg-white hover:text-black rounded-2xl">{devTools.styling}</li>
                    <li className="border border-white p-2 m-1 shadow-lg hover:bg-white hover:text-black rounded-2xl">{devTools.hosting}</li>
                    {devTools.server && <li className="border border-white p-2 m-1 shadow-lg hover:bg-white hover:text-black rounded-2xl">{devTools.server}</li>}


                </ul>
            </div>
        </div>
        <div className="relative col-[1_/_8] row-[1_/_-1]">

            <div><img src={image} /></div>

        </div>
    </li >
)

export default SingleProject

   