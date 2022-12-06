import img1 from '../../images/F1000005.JPG';
import img2 from '../../images/000016.JPG';
import img3 from '../../images/F1000033.JPG';
import img4 from '../../images/F1000006.jpg';
import img5 from '../../images/000017.JPG';
import img6 from '../../images/000019.JPG';
import img7 from '../../images/000043.JPG';


export const PlaylistArray =[
    {
        name:'Molasses',
        desc:'Slow R&B, Slow Jazz, Slow Life',
        link:<iframe src="https://open.spotify.com/embed/playlist/7MB7fMB6cScyBT7VNyYrx9?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
        genre:['r&b', 'jazz', 'afrobeats', ],
        image:img1,
        date:'12.11.2022',
        location:'Dublin'
    },
    {
        name:'T-Shirt Weather In The Manor',
        desc:'Sunny Friday Morning',
        link:<iframe src="https://open.spotify.com/embed/playlist/3g92WrKlqrvZgvpGdFuMV9?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
        genre:['r&b', 'rap', 'afrobeats','baile'],
        image:img2,
        date:'09.06.2022',
        location:'London'
    },
    {
        name:'African Only Livestream',
        desc:'Sunny Friday Morning',
        link:<iframe src="https://open.spotify.com/embed/playlist/6zvCa9tlYGdJWPhz9Ruzpk?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
        genre:['r&b', 'amapiano', 'afrobeats','highlife'],
        image:img3,
        date:'01.03.2022',
        location:'Lagos'
    },
    {
        name:'Jazz Selections',
        desc:'Sunny Friday Morning',
        link:<iframe src="https://open.spotify.com/embed/playlist/4tZZU27KBx9le8rBXRkQ3G?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
        genre:['r&b', 'rap', 'afrobeats','baile'],
        image:img4,
        date:'08.08.2022',
        location:'Berlin'
    },
    {
        name:'Red Clay',
        desc:'Sunny Friday Morning',
        link:<iframe  src="https://open.spotify.com/embed/playlist/15gR1fSsUVPJlaJkSwAfMk?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
        genre:['amapiano', 'house', 'afrobeats'],
        image:img5,
        date:'08.08.2022',
        location:'Berlin'
    },
    {
        name:'Red Clay',
        desc:'Sunny Friday Morning',
        link:'',
        genre:['amapiano', 'house', 'afrobeats'],
        image:img6,
        date:'08.08.2022',
        location:'Berlin'
    },
    {
        name:'Red Clay',
        desc:'Sunny Friday Morning',
        link:'',
        genre:['amapiano', 'house', 'afrobeats'],
        image:img7,
        date:'08.08.2022',
        location:'Berlin'
    },
]

const genreArray = PlaylistArray.map((playlist) => {
    return playlist.genre;
  });
  
export const uniqueTags = Array.from(new Set(genreArray.flat()))
