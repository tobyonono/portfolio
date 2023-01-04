import ProjectSection from "./ProjectSection"
import { ImageArray } from '../../images/ImageArray';
import { ProjectInfo } from "./ProjectInfo";
import SingleProject from "./SingleProject";

const FeaturedProject = () => {

    const ProjectList = ProjectInfo.map((proj) => {
        return <SingleProject name={proj.name} description={proj.description} devTools={proj.devTools} image={proj.image} />
    })

    return (
        <div className="max-w-screen-lg m-auto">
            <ul className="grid grid-cols-2 gap-4">
                {ProjectList}
            </ul>
        </div>
    )
}



export default FeaturedProject;