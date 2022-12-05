export const PlaylistArray =[
    {
        name:'Molasses',
        desc:'Slow R&B, Slow Jazz, Slow Life',
        link:'',
        genre:['r&b', 'jazz', 'afrobeats', ]
    },
    {
        name:'T-Shirt Weather In The Manor',
        desc:'Sunny Friday Morning',
        link:'',
        genre:['r&b', 'rap', 'afrobeats','baile']
    },
]

const genreArray = PlaylistArray.map((playlist) => {
    return playlist.genre;
  });
  
export const uniqueTags = Array.from(new Set(genreArray.flat()))
