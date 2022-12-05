import img1 from '../../images/F1000005.JPG';
import img2 from '../../images/000016.JPG';
import img3 from '../../images/F1000033.JPG';
import img4 from '../../images/F1000006.jpg';
import img5 from '../../images/000017.JPG';

export const PlaylistArray =[
    {
        name:'Molasses',
        desc:'Slow R&B, Slow Jazz, Slow Life',
        link:'',
        genre:['r&b', 'jazz', 'afrobeats', ],
        image:img1,
        date:'12.11.2022',
        location:'Dublin'
    },
    {
        name:'T-Shirt Weather In The Manor',
        desc:'Sunny Friday Morning',
        link:'',
        genre:['r&b', 'rap', 'afrobeats','baile'],
        image:img2,
        date:'09.06.2022',
        location:'London'
    },
    {
        name:'African Only Livestream',
        desc:'Sunny Friday Morning',
        link:'',
        genre:['r&b', 'amapiano', 'afrobeats','highlife'],
        image:img3,
        date:'01.03.2022',
        location:'Lagos'
    },
    {
        name:'T-Shirt Weather In The Manor',
        desc:'Sunny Friday Morning',
        link:'',
        genre:['r&b', 'rap', 'afrobeats','baile'],
        image:img4,
        date:'08.08.2022',
        location:'Berlin'
    },
    {
        name:'Red Clay',
        desc:'Sunny Friday Morning',
        link:'',
        genre:['amapiano', 'house', 'afrobeats'],
        image:img5,
        date:'08.08.2022',
        location:'Berlin'
    },
]

const genreArray = PlaylistArray.map((playlist) => {
    return playlist.genre;
  });
  
export const uniqueTags = Array.from(new Set(genreArray.flat()))
