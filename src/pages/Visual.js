import { useEffect, useState } from "react";
import { ImageArray, archiveArray } from "../images/ImageArray";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import ProjectSection from "../components/Project/ProjectSection";
import MasonryImageList from "../components/MasonryImageList";
import vid1 from "../video/SupportingMaterial1.mp4";
import Header from "../components/Header";


const items = ["I value kindness & open communication.", "I studied CS @ Trinity College Dublin.", "I love downloading new fonts I'm never going to use.", "I support Liverpool FC.", "I have great taste in music.", "Click on 'audio' if you don't believe me.", "Could genuinely eat 20+ crepes in a sitting.", "I like watching food related videos.", "Don't necessarily like cooking."];

const Visual = () => {

    return (
        <div>
            <Header />
            <section className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg m-auto">
                <div className="p-12 md:px-0 md:py-12 md:pr-12 border-r-2 text-left align-middle">
            <video controls autoPlay muted><source src={vid1} /></video>
                </div>
                <div className="px-12 md:px-0 md:py-12 md:pl-12 text-left font-GTWalsheim text-sm">
                    <p className="mb-4">I'm definitely more into looking at photographs than taking them, but over the past couple of years I've been taking some of my own and trying to collect some for a family archive.</p>
                    <p className="mb-4">Started out using disposables in college but didn't fancy paying €20 a pop so bought a Canon AF35, some Kodak Gold and went from there. </p>
                    <p className="mb-4">More costcutting followed and I joined the photography society so I could develop and scan them myself instead of paying for that service.</p>
                    <p className="mb-4">Eventually started to learn more became obsessed with photography & music videos in particular.</p>
                </div>
            </section>
            <section className="bg-black ">
                <div className="max-w-screen-lg py-8 m-auto text-sm font-nitti uppercase  text-white">
                    <div className="flex mx-12 md:mx-0 justify-between border-b border-b-white ">
                        <p>Selected Images from <span className="font-GTWalsheim italic text-xs">Red Clay Archive</span></p>
                        <p>001</p>
                    </div>
                    <div className="p-12 md:px-0 md:py-8">
                        <MasonryImageList pictures={archiveArray} key={'a1'}/> 
                    </div>
                </div>
            </section>
            <section className="bg-black">
                <div className="max-w-screen-lg m-auto text-sm font-nitti uppercase text-white">
                    <div className="flex mx-12 md:mx-0 py-2 justify-between border-b border-b-white ">
                        <p>Selected Images from <span className="font-GTWalsheim italic text-xs">Personal Shoots</span></p>
                        <p>002</p>
                    </div>
                    <div className="p-12 md:px-0 md:py-8">
                        <MasonryImageList pictures={ImageArray} key={'a2'}/> 
                    </div>
                   
                </div>
            </section>
            <footer>
                <Footer />
            </footer>

        </div>
    )

}

export default Visual;

/* bg-amber-600 */