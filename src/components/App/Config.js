const SEARCH_OPTIONS = ['title', 'genre'];
const SORT_OPTIONS = ['year', 'rating'];
const FILMS_MOCK_DATA = [
    {   
        id: 0,
        img: 'https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        title: 'Reservoir Dogs',
        genre: 'crime',
        year: 1992,
        rating: 8.3,
        duration: 145,
        summary: 'When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.'
    },
    {
        id: 1,
        img: 'https://m.media-amazon.com/images/M/MV5BNDc3Y2YwMjUtYzlkMi00MTljLTg1ZGMtYzUwODljZTI1OTZjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        title: 'Four Rooms',
        genre: 'comedy',
        year: 1995,
        rating: 6.8,
        duration: 145,
        summary: 'Four interlocking tales that take place in a fading hotel on New Year\'s Eve.'
    },
    {
        id: 2,
        img: 'https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
        title: 'Kill Bill: Volume 1',
        genre: 'western',
        year: 2003,
        rating: 8.1,
        duration: 145,
        summary: 'After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.'
    },
    {
        id: 3,
        img: 'https://m.media-amazon.com/images/M/MV5BNmFiYmJmN2QtNWQwMi00MzliLThiOWMtZjQxNGRhZTQ1MjgyXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg',
        title: 'Kill Bill: Volume 2',
        genre: 'western',
        year: 2004,
        rating: 8.0,
        duration: 145,
        summary: 'The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle.'
    },
    {
        id: 4,
        img: 'https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
        title: 'The Hateful Eight',
        genre: 'western',
        year: 2015,
        rating: 7.8,
        duration: 145,
        summary: 'In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.'
    }
];

export { SEARCH_OPTIONS, SORT_OPTIONS, FILMS_MOCK_DATA };
