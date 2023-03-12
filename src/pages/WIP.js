import Navbar2 from "../components/Navbar2";
import { WIPProjectInfo } from "../components/Project/ProjectInfo";
import WIPList from "../components/WIP/WIPList";

const WIP = () => (
    <div>
        <header className="border-b-2">
            <Navbar2 />
        </header>
        <section className="h-full w-full p-8 text-black">
            <div className="max-w-screen-lg m-auto text-sm font-nitti mb-8 ">
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg m-auto">
                    <div className="p-12 md:py-12 md:pr-12 text-left">
                        <h2 className="font-GTWalsheim text-2xl"><span className="font-guyot italic">A few </span>projects I'm working on and some ideas that haven't been fleshed out yet. Some have been started, and others are still being researched.</h2>
                    </div>
                    <div className="p-12 md:py-12 md:pl-12 text-left font-GTWalsheim text-base">
                        <p className="mb-4">Working on a couple of things around my interests, mainly being music & football.</p>
                        <p>Also find it a lot easier to learn new things if I'm invested in the outcomes.</p>
                    </div>
                </div>
            </div>
        </section >
        <section className='h-full w-full bg-black py-12'>
            <WIPList projects={WIPProjectInfo} gridLayout={`grid-cols-1`}/>
        </section>
    </div>

)

export default WIP;
