import ProjectSection from "./ProjectSection"
import { ImageArray } from '../../images/ImageArray';
import { ProjectInfo } from "./ProjectInfo";
import SingleProject from "./SingleProject";

const FeaturedProject = () => {

    const ProjectList = ProjectInfo.map((proj) => {
        return <SingleProject name={proj.name} description={proj.description} devTools={proj.devTools} image={proj.image} />
    })

    return (
        <div className="p-20">
            <ul className="w-3/4">
                {ProjectList}
            </ul>
        </div>
    )
}



export default FeaturedProject;