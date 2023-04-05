import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ImageArray } from "../images/ImageArray";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import OverlappingImages from "../components/OverlappingImages";
import ProjectSection from "../components/Project/ProjectSection";
import Footer from "../components/Footer";
import Header from "../components/Header";

const items = ["I value kindness & open communication.", "I studied CS @ Trinity College Dublin.", "I download new fonts I'm never going to use.", "I support Liverpool Football Club.", "I have great taste in music.", "Click on 'audio' if you don't believe me.", "Could genuinely eat 20+ crepes in a sitting.", "I like watching food related videos.", "Don't necessarily like cooking."];

const Home = () => {
    const [animatedLine, setAnimatedLine] = useState(items[0]);
    const [index, setIndex] = useState(0);
    const [anim, setAnim] = useState("in");

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((i) => (i + 1) % items.length);
            setAnim("in");
            setTimeout(() => {
                setAnim("out");
            }, 1000);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setAnimatedLine(items[index]);
    }, [index]);

    const variants = {
        out: {
            opacity: 0
        },
        in: {
            opacity: 1,
            transition: {
                duration: 1.5
            }
        }
    };
    return (
        <div>
            <Header />
            <section className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg m-auto">
                <div className=" p-12 md:py-12 md:px-0 md:pr-12 text-left flex items-center">
                    <div className="">
                        <h5 className="font-GTWalsheim text-5xl mb-2"><span className="font-guyot italic">Hello!</span> I'm Toby,</h5>
                        <motion.div
                            animate={anim}
                            variants={variants}
                            className="font-GTWalsheim text-gray-600"
                            style={{ fontSize: 40 }}
                        >
                            {animatedLine}
                        </motion.div>
                    </div>

                </div>
                <div className="py-12 md:px-0 pl-12 text-left font-GTWalsheim text-sm">
                    <p className="mb-4">I enjoy creating things that live on the internet. My interest in things computer related started back in 2000 trying to beat all the records on Mavis Beacon.</p>
                    <p className="mb-4">I still don't type particularly fast.</p>
                    <p className="mb-4">Then came hooking up multiple screens, remote access with LogMeIn, editing HTML on mySpace & Tumblr and launching ridiculous websites using Freewebs.</p>
                    <p className="mb-4">Fast-forward to today, and I’ve had the privilege of working for a radio station, consulting on FX analytics projects, and working on political campaigns.</p>
                    <p>Here are a few technologies I’ve been working with recently:</p>
                    <ul className="m-4 grid grid-cols-[repeat(2,_minmax(140px,_200px))] text-left list-[circle]">
                        <li className="">JavaScript (ES6+)</li>
                        <li className="">TypeScript</li>
                        <li className="">React</li>
                        <li className="">Tailwind CSS</li>
                        <li className="">Node.js</li>
                        <li className="">WordPress</li>
                    </ul>

                    <p className="mb-4"><span className="font-guyot underline underline-offset-4">It's nice to meet you, check out my work below.</span></p>
                </div>
            </section>
            <section>
                <ProjectSection />
            </section>
            <footer>
                <Footer />
            </footer>

        </div>
    )

}

export default Home;

/* bg-amber-600 */