import FeaturedProject from "./FeaturedProject";

const ProjectSection = () =>(
    <section className="h-full w-full bg-black p-20">
        <div className="flex">
            <span className="text-white font-nitti text-6xl px-20">Selected Works - </span>
        </div>
        <FeaturedProject />
    </section>
)


export default ProjectSection;