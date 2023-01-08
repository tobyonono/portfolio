import { Mail, Github, Linkedin  } from 'feather-icons-react';

import { Loader } from "../images/ImageArray";

const Footer = () => (
    <div className="flex bg-black text-white items-center flex-col border-t border-t-slate-200">
        <div className="max-w-screen-lg m-auto w-full  py-6">
            <div className="flex max-w-screen-lg m-auto w-full justify-between items-center text-left ">               
                <h4 className="text-5xl text-left font-GTWalsheim">Thanks for visiting <br /> my portfolio.</h4>
                <Loader />
            </div>
        </div>
        <div className="flex max-w-screen-lg m-auto w-full justify-between items-center text-left  pt-3 pb-6">
            <p className="font-GTWalsheim"><span className="font-guyot italic">Built with:</span> React, Tailwind CSS, Framer Motion & hosted on Vercel.</p>
            <div className='grid grid-cols-3 max-w-fit gap-4'>
                <a href='mailto:tconono@gmail.com'><Mail /></a>
                <a href='https://github.com/tobyonono'><Github /></a>
                <a href='https://www.linkedin.com/in/toby-onono-b3b4153b'><Linkedin /></a>
            </div>
        </div>
    </div>
)



export default Footer;