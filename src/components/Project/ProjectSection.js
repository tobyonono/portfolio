import FeaturedProject from "./FeaturedProject";
import { ProjectInfo } from "./ProjectInfo";


const ProjectSection = () => (
    <section className="h-full w-full bg-black py-12">
        <div className="max-w-screen-lg m-auto text-sm font-nitti uppercase mb-8">
            <div className="flex px-12 md:px-0 py-2 justify-between border-b border-b-white text-white ">
                <p> Selected Work</p>
                <p>001</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg m-auto text-white">
            <div className="px-12 md:px-0 md:py-12 md:pr-12 text-left">
                <h2 className="font-GTWalsheim text-2xl"><span className="font-guyot italic">Personal design work</span>, experiments, projects &amp; high visuals.</h2>

            </div>
            <div className="px-12 md:px-0 md:py-12 md:pl-12 text-left font-GTWalsheim text-base">
                <p className="mb-4">Couple of projects based around my love of music & food, I generally use these to get comfortable using new tools. </p>
                <p>I want to always be growing an improving so the code in these all inevitably get changed (at least locally) when I'm trying to learn new things.</p>

            </div>
        </div>
        <FeaturedProject projects={ProjectInfo} gridLayout={`grid-cols-1 md:grid-cols-2`}/>
    </section>
)


export default ProjectSection;