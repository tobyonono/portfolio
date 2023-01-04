import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";

const Navbar2 = () => {

    return (
      <nav className=" p-0 md:p-4 z-10 w-full md:w-auto max-w-screen-lg m-auto ">
        <ul className="flex flex-row items-center justify-around m-auto p-2 text-black font-nitti text-sm">
          <li className='active:border-blue-400'>
            <NavLink to='/' className={({ isActive }) =>
              isActive ? 'opacity-100 border-b' : 'opacity-50 hover:opacity-100 '
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
              isActive ? 'opacity-100 border-b border-dashed' : 'opacity-50 hover:opacity-100 '
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
              isActive ? 'opacity-100' : 'opacity-50 hover:opacity-100 border-dashed'
            }>
  
              <button className="pointer-events-auto ">
                <span className="w-12">003</span>
                <span className='w-12 ml-1 mr-1'>-</span>
                <span>AUDIO</span>
              </button>
            </NavLink>
          </li>
          <li>
            <button className="pointer-events-auto opacity-50 hover:opacity-100">
              <span className="w-12">004</span>
              <span className='w-12 ml-1 mr-1'>-</span>
              <span>WIP</span>
            </button>
          </li>
        </ul>
        <ul className=" fixed md:hidden flex flex-col text-white bottom-unset top-4 left0 text-left p-4 w-auto">
          <li>
            <div className="space-y-2">
              <span className="block w-8 h-0.5 bg-white"></span>
              <span className="block w-8 h-0.5 bg-white"></span>
              <span className="block w-5 h-0.5 bg-white"></span>
            </div>
          </li>
        </ul>
      </nav >
    )
  }
  
  export default Navbar2;