import ProjectSection from "./ProjectSection"
import { ImageArray } from '../../images/ImageArray';
import SingleProject from "./SingleProject";

const FeaturedProject = ({projects, gridLayout}) => {

    const ProjectList = projects.map((proj, i) => {
        return <SingleProject key={i} name={proj.name} description={proj.description} devTools={proj.devTools} image={proj.image}color={proj.color} link={proj.link} />
    })

    return (
        <div className="max-w-screen-lg m-auto">
        <ul className={`grid ${gridLayout} gap-4 md:p-0 p-12`}>
                {ProjectList}
            </ul>
        </div>
    )
}



export default FeaturedProject;