const SingleProject = ({ name, description, devTools, image }) => (
    <li className="relative grid grid-cols-[repeat(12,_1fr)] items-center font-nitti mb-20">
        <div className=" relative col-[7_/_-1] row-[1_/_1] text-right">
            <div>
                <p className="m-2 text-xs text-white">FEATURED PROJECT</p>
                <h3 className="mb-6 text-white text-2xl">{name}</h3>
                <div className="relative z-10 p-5 bg-white shadow-lg border-8 border-solid border-green-900">
                    <p className=" text-black font-GTWalsheim">{description}</p>
                </div>
                <ul className="relative flex flex-wrap z-10 mt-6 mb-3 justify-end text-white">
                    <li className="border border-white p-1 m-1 shadow-lg">{devTools.library}</li>
                    <li className="border border-white p-1 m-1 shadow-lg">{devTools.styling}</li>
                    <li className="border border-white p-1 m-1 shadow-lg">{devTools.hosting}</li>
                    {devTools.server && <li className="border border-black p-1 m-1 shadow-lg">{devTools.server}</li>}
                </ul>
            </div>
        </div>
        <div className="relative col-[1_/_8] row-[1_/_-1]">
            <div><img src={image}/></div>
        </div>
    </li>
)

export default SingleProject