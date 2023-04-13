import { ProjectImages } from "../../images/ProjectImages";
import React from 'react';

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
        image: ProjectImages[0],
        color:`bg-[midnightblue]`,
        link:'#'
    }, 
    {
        name: `BITTER CASSAVA 
         COOKING CLUB`,
        description: 'A web application using the Tasty API. Delivers recipes & instructions based on ingredients you enter. ',
        devTools: {
            library: 'React',
            styling: 'Tailwind CSS',
            hosting: 'Vercel',
        },
        image: ProjectImages[1],
        color:`bg-[darkolivegreen]`,
        link:'https://foodathome.vercel.app/'
    }, 
    {
        name: `ARCHY MOOR 
        ARTIST PAGE`,
        description: 'Artist page for Archy Moor. Features include Instagram story like slideshow and a pop up lightbox for song lyrics.',
        devTools: {
            library: 'React',
            styling: 'Tailwind CSS',
            hosting: 'Vercel',
        },
        image: ProjectImages[2],
        color:`bg-[darkslategrey]`,
        link:'https://archymoor.vercel.app/'
        
    },
    {
        name: 'DSFM',
        description: "A simultaneous listening web app using the Spotify API. Matches your playing state to whatever is broadcasting on that channel.",
        devTools: {
            library: 'React',
            styling: 'Tailwind CSS',
            hosting: 'Vercel',
            server: 'Contentful'
        },
        image: ProjectImages[0],
        color:`bg-[rebeccapurple]`,
        link:'https://dsfm.vercel.app/'
    }, ]

    export const WIPProjectInfo = [
        {
            name: 'SALT',
            description: "A simultaneous listening web app using the Spotify API. Matches your playing state to whatever is broadcasting on that channel.",
            devTools: {
                library: 'React',
                styling: 'Tailwind CSS',
                hosting: 'Vercel',
                server: 'Python'
            },
            image: ProjectImages[0],
            color:`bg-[darkcyan]`,
            desc1:`The idea for this is for a user to split a song into individual stems (vocals, bass, piano & other) interact with each stem at once in the browser and download them.
            Eventually want to  able to mix stems from two songs.`,
            desc2:`The backend is built in python using the Spleeter library to do the splitting and the front end is in React.`
        }, 
        {
            name: `Football Data 
            Dashboard`,
            description: 'A web application using the Tasty API. Delivers recipes & instructions based on ingredients you enter. ',
            devTools: {
                library: 'React',
                styling: 'Styled Components',
                hosting: 'Vercel',
            },
            image: ProjectImages[1],
            color:`bg-[maroon]`,
            desc1:`The motivation for this is for freelance and hobby football analytics writers to have access to a clean dashboard that displays and generates charts of various statistics - xG, xT, xA shots, crosses and other event data on both a player and team basis.
            
            Sourcing event data to build an app that has a more complete picture of the data is the major issue and the providers of that data don't offer it for free`,
            desc2:`Developmentally this needs some research as a lot of the tools are written in Python. I'm looking into scraping event data from WhoScored but existing tools surrouding pitch generation, test location data, pitch translations etc. would need to be written from scratch if I want a Javascript backend`
        }, 
        {
            name: `Live Music
            Thermal Filter`,
            description: 'Artist page for Archy Moor. Features include Instagram story like slideshow and a pop up lightbox for song lyrics.',
            devTools: {
                library: 'P3.js',
                styling: 'Styled Components',
                hosting: 'Vercel',
            },
            image: ProjectImages[2],
            color:`bg-[indianred]`,
            desc1:`Motivaion for this came from a project I saw about live music installations. There were a set of cameras facing the audience and they'd project the audience onto a screen with a dot like filter applied and the dots would also react to different frequencies of the live music being played.
            
            My idea is to create something similar but with a thermal filter instead based on Skepta's album Ignorance Is Bliss`,
            desc2:`I'm researching some libraries to see what would be the best to use for this and I've narrowed it down to Three.js and P5.js`

        }]