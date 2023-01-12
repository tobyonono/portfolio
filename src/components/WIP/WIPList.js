import { ImageArray } from '../../images/ImageArray';
import SingleProject from "../Project/SingleProject";

const WIPList = ({ projects, gridLayout }) => {

    const ProjectList = projects.map((proj, i) => {
        return (
            <div>
                <div className="max-w-screen-lg py-8 m-auto text-sm font-nitti  text-white">
                    <div className="flex justify-between border-b border-b-white ">
                        <p>WIP</p>
                        <p>00{i + 1}</p>
                    </div>
                    <div className="grid grid-cols-2 max-w-screen-lg m-auto whitespace-pre-line">
                        <div className=" py-12 pr-12 text-left">
                            <h2 className="font-GTWalsheim text-base">{proj.desc1}</h2>
                        </div>
                        <div className="py-12 pl-12 text-left font-GTWalsheim text-base">
                            <p className="mb-4">{proj.desc2}</p>
                            <p></p>
                        </div>
                    </div>
                    <div className="py-8">
                        <SingleProject key={i} name={proj.name} description={proj.description} devTools={proj.devTools} image={proj.image} color={proj.color} />
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="max-w-screen-lg m-auto">
            <ul className={`grid ${gridLayout} gap-4`}>
                {ProjectList}
            </ul>
        </div>
    )
}



export default WIPList;