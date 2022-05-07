// I dont setup a page to post 
// (just copy and paste on index.js /add/movie to add if you have admin access)

const addMovie = new Movie({
  title: 'Hereditary',
  videoId: 'V6wWKNij_1M',
  thumbnail: 'https://i.ytimg.com/vi/V6wWKNij_1M/hqdefault.jpg',
  description: "When Ellen, the matriarch of the Graham family, passes away, her daughter's family begins to unravel cryptic and increasingly terrifying secrets about their ancestry. The more they discover, the more they find themselves trying to outrun the sinister fate they seem to have inherited.",
  //logo: '',
  tags: { 
    age: '+16' ,
    year: '2018' ,
    generes: ['horror', 'thriller', 'Psychological Thriller', 'drama'] ,
    cast: ['Toni Collette', 'Gabriel Byrne', ' Alex Wolff']  
  }
})

app.get('/add/movie', async (req, res) => {
  await addMovie.save()
  res.send('movie added')
})


const addSerie = new Serie({
  title: 'Rick And Morty',
  videoId: 'qtdCIs6JdXg',
  thumbnail: 'https://i.ytimg.com/vi/qtdCIs6JdXg/hqdefault.jpg',
  description: 'Rick and Morty is Adult Swim\'s most scientifically accurate animated comedy. Created by Justin Roiland and Dan Harmon, it catalogues the bizarre misadventures of a bored scientific genius/drunkard and his socially awkward grandson, Morty.',
  //logo: '',
  tags: { 
    age: '+14' ,
    year: '2022' ,
    generes: ['animation', 'carton', 'comedy'],
    cast: ['rick', 'morty', 'summer', 'jerry']  
  },
  seasons: [
  {
    id: 1,
    episodes: [
      {
        number: 1,
        title: 'Wake Up, Mort',
        duration: '2min',
        thumbnail: 'https://i.ytimg.com/vi/qtdCIs6JdXg/hqdefault.jpg',
        sypnopsis: 'The first scene is, literally, Morty saving all of humanity from Rick',
        url: 'qtdCIs6JdXg'
      },
      {
        number: 2,
        title: 'Enter The Dream of Morty\'s Math Teacher',
        duration: '3min',
        thumbnail: 'https://i.ytimg.com/vi/5qT144r5d3w/hqdefault.jpg',
        sypnopsis: 'This is a Rick and Morty in an Inception-esque scenario scene, enter the dream of Morty\'s teacher, in an attempt to make him give Morty an "A" in math class.',
        url: '5qT144r5d3w'
      },
      {
        number: 3,
        title: 'Christmas',
        duration: '3min',
        thumbnail: 'https://i.ytimg.com/vi/9IIbAwZofAU/hqdefault.jpg',
        sypnopsis: 'morty go inside ruben body where rick created an anatomy park',
        url: '9IIbAwZofAU'
      },
      {
        number: 4,
        title: 'M. Night Shaym-Aliens',
        duration: '1min',
        thumbnail: 'https://i.ytimg.com/vi/WGtB__V24jo/hqdefault.jpg',
        sypnopsis: 'rick and jerry are stuck in a simulation',
        url: 'WGtB__V24jo'
      },
      {
        number: 5,
        title: 'Morty meets King Jellybean',
        duration: '2min',
        thumbnail: 'https://i.ytimg.com/vi/U_f63SBFJig/hqdefault.jpg',
        sypnopsis: 'morty get asault by King Jellybean',
        url: 'U_f63SBFJig'
      },
      {
        number: 6,
        title: 'Rick Potion',
        duration: '3min',
        thumbnail: 'https://i.ytimg.com/vi/_-2NIvUBpu8/hqdefault.jpg',
        sypnopsis: 'morty get asault by King Jellybean',
        url: '_-2NIvUBpu8'
      }
    ]
  },
  {
    id: 2,
    episodes: [
      {
        number: 1,
        title: 'Shattered timeline',
        duration: '4min',
        thumbnail: 'https://i.ytimg.com/vi/DBqbiJrgP9w/hqdefault.jpg',
        sypnopsis: 'another adventure',
        url: 'DBqbiJrgP9w'
      },
      {
        number: 2,
        title: 'roy',
        duration: '4min',
        thumbnail: 'https://i.ytimg.com/vi/ZwpPBpfmPBw/hqdefault.jpg',
        sypnopsis: 'All the funny moments and scenes compilation of Rick and Morty Season 2 Episode 2',
        url: 'ZwpPBpfmPBw'
      },
      {
        number: 3,
        title: 'Unity',
        duration: '2min',
        thumbnail: 'https://i.ytimg.com/vi/KI8fVZhXaiU/hqdefault.jpg',
        sypnopsis: 'Unity leaves Rick and almost commits suicide',
        url: 'KI8fVZhXaiU'
      },
      {
        number: 4,
        title: 'PARASITES CLEAN-UP',
        duration: '2min',
        thumbnail: 'https://i.ytimg.com/vi/3PakCvsgVpk/hqdefault.jpg',
        sypnopsis: 'parasites invide the house',
        url: '3PakCvsgVpk'
      }
  ]
},
  {
    id: 3,
    episodes: [
      {
        number: 1,
        title: 'Rickdemption',
        duration: '2min',
        thumbnail: 'https://i.ytimg.com/vi/-KmzJZUqpj4/hqdefault.jpg',
        sypnopsis: 'rick escape of prision',
        url: '-KmzJZUqpj4'
      },
      {
        number: 2,
        title: 'Jerry After the Divorce',
        duration: '4min',
        thumbnail: 'https://i.ytimg.com/vi/Y7WXC_MT69A/hqdefault.jpg',
        sypnopsis: 'jerry and bet get divorsed',
        url: 'Y7WXC_MT69A'
      },
      {
        number: 3,
        title: 'Rick turns himself into a pickle',
        duration: '2min',
        thumbnail: 'https://i.ytimg.com/vi/9d-ekfDjjpQ/hqdefault.jpg',
        sypnopsis: 'Rick turns himself into a pickle to avoid go therapy',
        url: '9d-ekfDjjpQ'
      },
      {
        number: 4,
        title: 'Worldender Lair',
        duration: '2min',
        thumbnail: 'https://i.ytimg.com/vi/zysb49M8Rns/hqdefault.jpg',
        sypnopsis: 'Rick and Morty are summoned by the Vindicators to stop Worldender but end up in a deathtrap conceived by Drunk Rick.',
        url: 'zysb49M8Rns'
      }
  ]
},
   {
    id: 4,
    episodes: [
      {
        number: 1,
        title: 'Rick Die Rickpeat',
        duration: '2min',
        thumbnail: 'https://i.ytimg.com/vi/-rLCeuT4SiM/hqdefault.jpg',
        sypnopsis: 'rick die over and over',
        url: '-rLCeuT4SiM'
      },
      {
        number: 2,
        title: 'the talking cat',
        duration: '3min',
        thumbnail: 'https://i.ytimg.com/vi/1ByjJ-g4t9M/hqdefault.jpg',
        sypnopsis: 'rick find out why the cat can talk',
        url: '1ByjJ-g4t9M'
      },
      {
        number: 3,
        title: 'Rick wins Heist Off',
        duration: '2min',
        thumbnail: 'https://i.ytimg.com/vi/-e_1UxwZUsg/hqdefault.jpg',
        sypnopsis: 'One Crew Over The Crewcoo\'s Morty',
        url: '-e_1UxwZUsg'
      }
  ]
},
  {
    id: 5,
    episodes: [
      {
        number: 1,
        title: 'Morty Destroy Narnia',
        duration: '2min',
        thumbnail: 'https://i.ytimg.com/vi/9WGSdzhsxjU/hqdefault.jpg',
        sypnopsis: 'narnia parody',
        url: '9WGSdzhsxjU'
      },
      {
        number: 2,
        title: 'A Mission to Kill God',
        duration: '3min',
        thumbnail: 'https://i.ytimg.com/vi/-sr3hZCAono/hqdefault.jpg',
        sypnopsis: 'Rick and Morty prepare to kill Christian God before being rudely interrupted by alien assailants. Watch all-new episodes of Rick and Morty Sundays at 11pm on Adult Swim.',
        url: '-sr3hZCAono'
      }
  ]
}
]
})

app.get('/add/serie', async (req, res) => {
  await addSerie.save()
  res.send('serie added')
})

