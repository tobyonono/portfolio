import { useEffect, useState } from "react";
import { ImageArray, archiveArray } from "../images/ImageArray";
import Navbar2 from "../components/Navbar2";
import ProjectSection from "../components/Project/ProjectSection";
import MasonryImageList from "../components/MasonryImageList";
import vid1 from "../video/SupportingMaterial1.mp4"


const items = ["I value kindness & open communication.", "I studied CS @ Trinity College Dublin.", "I love downloading new fonts I'm never going to use.", "I support Liverpool FC.", "I have great taste in music.", "Click on 'audio' if you don't believe me.", "Could genuinely eat 20+ crepes in a sitting.", "I like watching food related videos.", "Don't necessarily like cooking."];

const Visual = () => {

    return (
        <div>
            <header className="border-b-2">
                <Navbar2 />
            </header>
            <section className="grid grid-cols-2 max-w-screen-lg m-auto">
                <div className="py-12 pr-12 border-r-2 text-left align-middle">
            <video controls autoPlay><source src={vid1} /></video>
                </div>
                <div className="py-12 pl-12 text-left font-GTWalsheim text-sm">
                    <p className="mb-4">I'm definitely more into looking at photographs than taking them, but over the past couple of years I've been taking some of my own and trying to collect some for a family archive.</p>
                    <p className="mb-4">Started out using disposables in college but didn't fancy paying €20 a pop so bought a Canon AF35, some Kodak Gold and went from there. </p>
                    <p className="mb-4">More costcutting followed and I joined the photography society so I could develop and scan them myself instead of paying for that service.</p>
                    <p className="mb-4">Eventually started to learn more became obsessed with photography & music videos in particular.</p>
                </div>
            </section>
            <section className="bg-black ">
                <div className="max-w-screen-lg py-8 m-auto text-sm font-nitti uppercase  text-white">
                    <div className="flex justify-between border-b border-b-white ">
                        <p>Selected Images from <span className="font-GTWalsheim italic text-xs">Red Clay Archive</span></p>
                        <p>001</p>
                    </div>
                    <div className="py-8">
                        <MasonryImageList pictures={archiveArray} key={'a1'}/> 
                    </div>
                </div>
            </section>
            <section className="bg-black">
                <div className="max-w-screen-lg m-auto text-sm font-nitti uppercase text-white">
                    <div className="flex py-2 justify-between border-b border-b-white ">
                        <p>Selected Images from <span className="font-GTWalsheim italic text-xs">Personal Shoots</span></p>
                        <p>002</p>
                    </div>
                    <div className="py-8">
                        <MasonryImageList pictures={ImageArray} key={'a2'}/> 
                    </div>
                   
                </div>
            </section>


        </div>
    )

}

export default Visual;

/* bg-amber-600 */