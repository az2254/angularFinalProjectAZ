import { Samples } from './samples';

export const allSAMPLES: Samples[] = [
    {
        id: 0,
        name: 'Money Laundering',
        image: '/assets/images/sample1.png',
        category: 'Rise to 360 conversion',
        featured: true,
        description: 'Conversion of Articulate Rise module to 360. Template and interactions creation.',
        comments: [
            {

                rating: 4,
                comment: 'Good Work',
                author: 'John Smith',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 5,
                comment: 'Perfect',
                author: 'Anna Dark',
                date: '2018-03-03T18:25:09.829Z'
            },
            {
                rating: 2,
                comment: 'Too Simple',
                author: 'Alice Coper',
                date: '2018-03-03T18:30:55.933Z'
            },
            {
                rating: 1,
                comment: 'No comment',
                author: 'Natassa ReZum',
                date: '2018-03-03T18:59:47.274Z'
            }
        ]
    },
    {
        id: 1,
        name: 'Articulate Simple Game',
        image: '/assets/images/sample_2.png',
        category: 'Development of a Game in Articulate Storyline using JavaScript',
        featured: false,
        description: 'Combination of basic JavaScript with Articulate Storyline',
        comments: [
            {
                rating: 4,
                comment: 'Good Work',
                author: 'John Smith',
                date: '2012-10-16T17:57:28.556094Z'
              },
              {
                rating: 5,
                comment: 'Perfect',
                author: 'Anna Dark',
                date: '2018-03-03T18:25:09.829Z'
              },
              {
                rating: 2,
                comment: 'Too Simple',
                author: 'Alice Coper',
                date: '2018-03-03T18:30:55.933Z'
              },
              {
                rating: 1,
                comment: 'No comment',
                author: 'Natassa ReZum',
                date: '2018-03-03T18:59:47.274Z'
              },
        ]
    }

];