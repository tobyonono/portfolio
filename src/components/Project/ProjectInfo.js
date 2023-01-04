import { ProjectImages } from "../../images/ProjectImages"

export const ProjectInfo = [
    {
        name: 'SPOTIFY RADIO',
        description: "A simultaneous listening web app using the Spotify API. Matches your playing state to whatever is broadcasting on that channel.",
        devTools: {
            library: 'React',
            styling: 'Tailwind CSS',
            hosting: 'Vercel',
            server: 'Express'
        },
        image: ProjectImages[0]
    }, 
    {
        name: 'BITTER CASSAVA COOKING CLUB',
        description: 'A web application using the Tasty API. Delivers recipes & instructions based on ingredients you enter. ',
        devTools: {
            library: 'React',
            styling: 'Styled Components',
            hosting: 'Vercel',
        },
        image: ProjectImages[1] 
    }, 
    {
        name: 'ARCHY MOOR ARTIST PAGE',
        description: 'Artist page for Archy Moor. Features include Instagram story like slideshow and a pop up lightbox for song lyrics.',
        devTools: {
            library: 'React',
            styling: 'Styled Components',
            hosting: 'Vercel',
        },
        image: ProjectImages[2] 
    }]