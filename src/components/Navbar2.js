import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar2 = () => {

  const [showMobile, setShowMobile] = useState(false);

  return (
    <>
      <nav className="hidden md:block p-0 md:p-4 z-10 w-full md:w-auto max-w-screen-lg m-auto ">
        <ul className="flex flex-row items-center justify-around m-auto p-2 text-black font-nitti text-sm font-bold">
          <li className='active:border-blue-400'>
            <NavLink to='/' className={({ isActive }) =>
              isActive ? 'opacity-100 border-b border-black' : 'opacity-50 hover:opacity-100 '
            } end >
              <button className="pointer-events-auto hover:opacity-100 ">
                <span className="w-12">001</span>
                <span className='w-12 ml-1 mr-1'>-</span>
                <span>HOME</span>
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to='/visual' className={({ isActive }) =>
              isActive ? 'opacity-100 border-b border-black' : 'opacity-50 hover:opacity-100 '
            } >
              <button className="pointer-events-auto">
                <span className="w-12">002</span>
                <span className='w-12 ml-1 mr-1'>-</span>
                <span >VISUAL</span>
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to='/audio' className={({ isActive }) =>
              isActive ? 'opacity-100 border-b border-black' : 'opacity-50 hover:opacity-100 border-dashed'
            }>

              <button className="pointer-events-auto ">
                <span className="w-12">003</span>
                <span className='w-12 ml-1 mr-1'>-</span>
                <span>AUDIO</span>
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to='/wip' className={({ isActive }) =>
              isActive ? 'opacity-100 border-b border-black' : 'opacity-50 hover:opacity-100 border-dashed'
            }>

              <button className="pointer-events-auto ">
                <span className="w-12">004</span>
                <span className='w-12 ml-1 mr-1'>-</span>
                <span>WIP</span>
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>

      <nav className="block md:hidden ">
        <button onClick={() => setShowMobile(!showMobile)} className="relative md:hidden flex flex-col text-white bottom-unset top-1 text-left p-4 w-auto">
          <ul >
            <li>
              <div className="space-y-2">
                <span className="block w-8 h-0.5 bg-black"></span>
                <span className="block w-8 h-0.5 bg-black"></span>
                <span className="block w-5 h-0.5 bg-black"></span>
              </div>
            </li>
          </ul>
        </button>
        {showMobile && 
        <div className=" w-full max-w-full md:mt-11 px-4  bg-white overflow-y-auto text-black z-99 select-auto">
          <ul className="flex flex-col gap-4 items-center justify-between m-auto p-2 text-black font-nitti text-sm font-bold">
          <li className='active:border-blue-400'>
            <NavLink to='/' className={({ isActive }) =>
              isActive ? 'opacity-100 border-b border-black' : 'opacity-50 hover:opacity-100 '
            } end >
              <button className="pointer-events-auto hover:opacity-100 ">
                <span className="w-12">001</span>
                <span className='w-12 ml-1 mr-1'>-</span>
                <span>HOME</span>
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to='/visual' className={({ isActive }) =>
              isActive ? 'opacity-100 border-b border-black' : 'opacity-50 hover:opacity-100 '
            } >
              <button className="pointer-events-auto">
                <span className="w-12">002</span>
                <span className='w-12 ml-1 mr-1'>-</span>
                <span >VISUAL</span>
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to='/audio' className={({ isActive }) =>
              isActive ? 'opacity-100 border-b border-black' : 'opacity-50 hover:opacity-100 border-dashed'
            }>

              <button className="pointer-events-auto ">
                <span className="w-12">003</span>
                <span className='w-12 ml-1 mr-1'>-</span>
                <span>AUDIO</span>
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to='/wip' className={({ isActive }) =>
              isActive ? 'opacity-100 border-b border-black' : 'opacity-50 hover:opacity-100 border-dashed'
            }>

              <button className="pointer-events-auto ">
                <span className="w-12">004</span>
                <span className='w-12 ml-1 mr-1'>-</span>
                <span>WIP</span>
              </button>
            </NavLink>
          </li>
        </ul>
          </div>
          }
      </nav>
    </>
  )
}

export default Navbar2;