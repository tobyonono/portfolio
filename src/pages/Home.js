import { ImageArray } from "../components/ImageArray";
import Navbar from "../components/Navbar";
import OverlappingImages from "../components/OverlappingImages";
import ProjectSection from "../components/ProjectSection";

const Home = () => (
    <div>
        <section className='h-screen imageContainer'>
            <Navbar />
            <OverlappingImages />
        </section>
        <ProjectSection />
        <section className="h-full bg-white p-20">
            <div className="flex first-line:">
                <span className="text-black font-nitti text-6xl px-20">ABOUT ME - </span>

            </div>
            <div className="grid grid-cols-2 p-20">
                <div>
                    <div className="font-GTWalsheim text-lg text-left ">
                        <p className="mb-4">Hello! My name is Toby and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
                        <p className="mb-4">Fast-forward to today, and I’ve had the privilege of working for a radio station, consulting on FX analytics projects, and working on political campaigns.</p>
                        <p className="mb-4">What excites me most about working in software development is being able to design and create things that have purpose and solve real problems. Leaning into customer research and insight, finding the right problems to solve, delivering that value as quickly as possible, learning from it and then iterating and improving that value over time is the key to great design.</p>
                        <p>Here are a few technologies I’ve been working with recently:</p>
                    </div>
                    <ul className="m-4 grid grid-cols-[repeat(2,_minmax(140px,_200px))] text-left list-[circle]">
                        <li className="">JavaScript (ES6+)</li>
                        <li className="">TypeScript</li>
                        <li className="">React</li>
                        <li className="">Tailwind CSS</li>
                        <li className="">Node.js</li>
                        <li className="">WordPress</li>
                    </ul>
                </div>
                <div className="relative max-w-xs">
                    <div className="after:border after:border-black after:top-3 after:left-3">
                        <img src={ImageArray[6].image} />
                    </div>
                </div>
            </div>
        </section>
    </div>

)

export default Home;

/* bg-amber-600 */