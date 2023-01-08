import img1 from '../images/F1000026.JPG';
import img2 from '../images/F1000024.JPG';
import img3 from '../images/000012.JPG';
import img4 from '../images/000099.JPG';
import img5 from '../images/F1000005.JPG';
import img6 from '../images/F1000007.JPG';
import img7 from '../images/F1000021.JPG';
import img8 from '../images/000017.JPG';
import img9 from '../images/000019.JPG';
import img10 from '../images/000043.JPG';
import img11 from '../images/F1000033.JPG';
import img12 from './archive/2a.jpg';
import img13 from './archive/2b.jpg';
import img14 from './archive/2c.jpg';
import img15 from './archive/2d.jpg';
import img16 from './archive/2e.jpg';
import img17 from './archive/2f.jpg';
import img18 from './archive/2g.jpg';
import img19 from './archive/2h.jpg';
import img20 from './archive/2i.jpg';
import img21 from './archive/2j.jpg';
import img22 from './archive/2k.jpg';
import img23 from './archive/2l.jpg';
import img24 from './archive/2m.jpg';
import img25 from '../images/F1000006.jpg';












export const ImageArray = [
    {
        src: img3,
         x: 500,
         y:249
     },
    {
        src: img1,
        x:646,
        y:-519
    }, 
    
    {
        src: img25,
        x:553,
        y:-686
    },
    {
        src: img5,
        x:440,
        y:-230
    },
    {
        src: img4,
        x:553,
        y:-686
    },
   
    {
       src: img11,
        x:646,
        y:-519
    },
    {
        src: img2,
        x: 307,
        y:317
    },
    {
        src: img7,
        x:646,
        y:-519
    },
    {
        src:img6,
    },
    {
        src:img9,
    },
    {
        src:img10,
    },
    {
        src:img8,
    }
]

export const archiveArray = [
    {
        src:img12
    },
    {
        src:img13
    },
    {
        src:img14
    },
    {
        src:img16
    },
    {
        src:img17
    },
    {
        src:img18
    },
    {
        src:img19
    },
    {
        src:img20
    },
    {
        src:img21
    },
    {
        src:img22
    },
    {
        src:img23
    },
    {
        src:img24
    },


]

export const Loader = () => (
    <svg  className='animate-spin-slow tracking-[0.85em]' x="0px" y="0px" width="150px" height="150px" viewBox="0 0 300 300" fill="#fff">
        <defs>
            <path
                id="circlePath"
                d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
            ></path>
        </defs>
        <circle cx="100" cy="100" r="50" fill="none" stroke="none"></circle>
        <g>
            <use xlinkHref="#circlePath" fill="none"></use>
            <text fill="red" stroke="#fff">
                <textPath xlinkHref="#circlePath" fill="#fff">• ONONO • ONONO</textPath>
            </text>
        </g>
    </svg>)