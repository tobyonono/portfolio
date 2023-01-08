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
                    <div className="grid grid-cols-2 max-w-screen-lg m-auto">
                        <div className=" py-12 pr-12 text-left">
                            <h2 className="font-GTWalsheim text-base"><span className="font-guyot italic">A few </span>projects I'm working on and some ideas that haven't been fleshed out yet. Some have been started, and others are still being researched.</h2>
                        </div>
                        <div className="py-12 pl-12 text-left font-GTWalsheim text-base">
                            <p className="mb-4">Working on a couple of things around my interests mainly being music & football.</p>
                            <p>Also find it a lot easier to learn new things if I'm invested in the outcomes.</p>
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