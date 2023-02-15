const globalData = {
  companyName: 'Youline',
  supportPhone: '+8801700000000',
  timeZone: 'UTC-6',
  reactionConfig: [
    { type: 1, title: 'smile', schema: 'reactionSmileCount' },
    { type: 2, title: 'love', schema: 'reactionloveCount' },
    { type: 3, title: 'haha', schema: 'reactionHahaCount' },
    { type: 4, title: 'insightful', schema: 'reactionInsightfulCount' },
    { type: 5, title: 'angry', schema: 'reactionAngryCount' },
  ],
  reportConfig: [
    {
      id: 1,
      title: 'Sexual content',
    },
    {
      id: 2,
      title: 'Violent or repulsive content',
    },
    {
      id: 3,
      title: 'Harassment or bullying',
    },
    {
      id: 4,
      title: 'Harmfull or dangerous acts',
    },
    {
      id: 5,
      title: 'Child abuse',
    },
    {
      id: 6,
      title: 'Infringes my rights',
    },
    {
      id: 7,
      title: 'Promotes terrorism',
    },
    {
      id: 8,
      title: 'Spam or misleading',
    },
  ],
}

const UsersData = [
  {
    firstName: 'Nazmul',
    lastName: 'Huda',
    email: 'nazmul@gmail.com',
    username: 'nazmul',
    about:
      "I'm a self-taught passionate Web Application Developer specialized in MERN Stack Web Development. JavaScript is my native programming language. I use HTML, CSS, and Tailwind to design a perfect responsive website template and give them life using React.JS. I can develop scalable REST APIs using Node.JS, Express.JS and MongoDB and connect them with front-end single page applications. Use Redux for State management & RTK Query for Caching and Revalidation.",
    mobile: '+8801746000000',
    dob: new Date(2001, 12),
    avatar: 'https://avatars.githubusercontent.com/u/58470993',
  },
  {
    firstName: 'Sumit',
    lastName: 'Saha',
    email: 'sumit@gmail.com',
    username: 'sumit',
    about:
      "I'm a self-taught passionate Web Application Developer specialized in MERN Stack Web Development. JavaScript is my native programming language. I use HTML, CSS, and Tailwind to design a perfect responsive website template and give them life using React.JS. I can develop scalable REST APIs using Node.JS, Express.JS and MongoDB and connect them with front-end single page applications. Use Redux for State management & RTK Query for Caching and Revalidation.",
    mobile: '+8801746000001',
    dob: new Date(2003, 4),
    avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
  },
  {
    firstName: 'Jhanker',
    lastName: 'Mahabub',
    email: 'jhankar@gmail.com',
    username: 'jhankar',
    about:
      "I'm a self-taught passionate Web Application Developer specialized in MERN Stack Web Development. JavaScript is my native programming language. I use HTML, CSS, and Tailwind to design a perfect responsive website template and give them life using React.JS. I can develop scalable REST APIs using Node.JS, Express.JS and MongoDB and connect them with front-end single page applications. Use Redux for State management & RTK Query for Caching and Revalidation.",
    mobile: '+8801746000002',
    dob: new Date(1991, 10),
    avatar: 'https://avatars.githubusercontent.com/u/53802153?v=4',
  },
  {
    firstName: 'Brad',
    lastName: 'Traversy',
    email: 'traversy@gmail.com',
    username: 'traversy',
    about:
      "I'm a self-taught passionate Web Application Developer specialized in MERN Stack Web Development. JavaScript is my native programming language. I use HTML, CSS, and Tailwind to design a perfect responsive website template and give them life using React.JS. I can develop scalable REST APIs using Node.JS, Express.JS and MongoDB and connect them with front-end single page applications. Use Redux for State management & RTK Query for Caching and Revalidation.",
    mobile: '+8801746000003',
    dob: new Date(1992, 9),
    avatar: 'https://avatars.githubusercontent.com/u/5550850?v=4',
  },
  {
    firstName: 'Fayzul',
    lastName: 'Karim',
    email: 'fayzul@gmail.com',
    username: 'fayzul',
    about:
      "I'm a self-taught passionate Web Application Developer specialized in MERN Stack Web Development. JavaScript is my native programming language. I use HTML, CSS, and Tailwind to design a perfect responsive website template and give them life using React.JS. I can develop scalable REST APIs using Node.JS, Express.JS and MongoDB and connect them with front-end single page applications. Use Redux for State management & RTK Query for Caching and Revalidation.",
    mobile: '+8801746000004',
    dob: new Date(1993, 7),
    avatar: 'https://avatars.githubusercontent.com/u/497812?v=4',
  },
  {
    firstName: 'Sunny',
    lastName: 'Sungha',
    email: 'sunny@gmail.com',
    username: 'sunny',
    about:
      "I'm a self-taught passionate Web Application Developer specialized in MERN Stack Web Development. JavaScript is my native programming language. I use HTML, CSS, and Tailwind to design a perfect responsive website template and give them life using React.JS. I can develop scalable REST APIs using Node.JS, Express.JS and MongoDB and connect them with front-end single page applications. Use Redux for State management & RTK Query for Caching and Revalidation.",
    mobile: '+8801746000005',
    dob: new Date(1994, 8),
    avatar: 'https://avatars.githubusercontent.com/u/24712956?v=4',
  },
  {
    firstName: 'Adrian',
    lastName: 'Twrag',
    email: 'adrian@gmail.com',
    username: 'adrian',
    about:
      "I'm a self-taught passionate Web Application Developer specialized in MERN Stack Web Development. JavaScript is my native programming language. I use HTML, CSS, and Tailwind to design a perfect responsive website template and give them life using React.JS. I can develop scalable REST APIs using Node.JS, Express.JS and MongoDB and connect them with front-end single page applications. Use Redux for State management & RTK Query for Caching and Revalidation.",
    mobile: '+8801746000006',
    dob: new Date(1995, 1),
    avatar: 'https://avatars.githubusercontent.com/u/22957728?v=4',
  },
  {
    firstName: 'Tanvir',
    lastName: 'Hasan',
    email: 'tanvir@gmail.com',
    username: 'tanvir',
    about:
      "I'm a self-taught passionate Web Application Developer specialized in MERN Stack Web Development. JavaScript is my native programming language. I use HTML, CSS, and Tailwind to design a perfect responsive website template and give them life using React.JS. I can develop scalable REST APIs using Node.JS, Express.JS and MongoDB and connect them with front-end single page applications. Use Redux for State management & RTK Query for Caching and Revalidation.",
    mobile: '+8801746000007',
    dob: new Date(1996, 3),
    avatar: 'https://avatars.githubusercontent.com/u/2250509?v=4',
  },
  {
    firstName: 'Hasin',
    lastName: 'Hayder',
    email: 'hasin@gmail.com',
    username: 'hasin',
    about:
      "I'm a self-taught passionate Web Application Developer specialized in MERN Stack Web Development. JavaScript is my native programming language. I use HTML, CSS, and Tailwind to design a perfect responsive website template and give them life using React.JS. I can develop scalable REST APIs using Node.JS, Express.JS and MongoDB and connect them with front-end single page applications. Use Redux for State management & RTK Query for Caching and Revalidation.",
    mobile: '+8801746000008',
    dob: new Date(1997, 6),
    avatar: 'https://avatars.githubusercontent.com/u/490779?v=4',
  },
]

const TweetsData = [
  {
    id: 1,
    description:
      'The car on the left has a gas engine and gets 20 MPG. It has 21 miles of electric range. It gets a $7,500 EV Tax Credit.',
    attacments: [
      'https://pbs.twimg.com/media/FlahAyvWIAAl2GE.jpg',
      'https://pbs.twimg.com/media/FlahDwGWYAQUf-F.jpg',
    ],
  },
  {
    id: 2,
    description: 'ChatGPT, but in iMessage',
    attacments: ['https://pbs.twimg.com/media/Fljwgl2aUAAAM7a.jpg'],
  },
  {
    id: 3,
    description:
      'Do you want to enjoy amazing space pictures every time you browse the internet?',
    attacments: ['https://pbs.twimg.com/media/FljY1tRX0AElSuD.jpg'],
  },
  {
    id: 4,
    description: '✨Southern Crab Nebula✨',
    attacments: ['https://pbs.twimg.com/media/Flmj-qHWYAMBvoN.jpg'],
  },
  {
    id: 5,
    description:
      'We’ve got more work to do, but this year, we signed historic legislation to lower costs for working families and seniors, help keep our communities safe from gun violence, and create good-paying jobs across the country.',
    attacments: ['https://pbs.twimg.com/media/FlV07CcXgAYuuCe.jpg'],
  },
  {
    id: 6,
    description:
      'Jill and I hope everyone is able to spend time with family and friends during the holiday season. We’re also holding a special place in our hearts for anyone missing a loved one during this time.',
    attacments: ['https://pbs.twimg.com/media/Fkw9LMoXwAQegj_.jpg'],
  },
  {
    id: 7,
    description: 'Some nights ….',
    attacments: ['https://https://pbs.twimg.com/media/Fk9Oy_iWIAEx8Qd.jpg'],
  },
  {
    id: 8,
    description: 'New Tesla Supercharger: Seoul-Daechi, South Korea (9 stalls)',
    attacments: ['https://pbs.twimg.com/media/Floj16CWYAEurr9.jpg'],
  },
  {
    id: 9,
    description:
      'In preparation for the Polaris Dawn mission’s planned spacewalk, the crew participated in a decompression sickness risk characterization study in the 20 Foot Chamber at NASA’s Johnson Space Center',
    attacments: ['https://pbs.twimg.com/media/FllB-2IXkAAeIcA.jpg'],
  },
  {
    id: 10,
    description:
      'In preparation for the Polaris Dawn mission’s planned spacewalk, the crew participated in a decompression sickness risk characterization study in the 20 Foot Chamber at NASA’s Johnson Space Center',
    attacments: ['https://pbs.twimg.com/media/FllB-2IXkAAeIcA.jpg'],
  },
  {
    id: 11,
    description:
      'Falcon 9 launches SpaceX’s sixth dedicated smallsat rideshare mission – completing our 200th successful launch!',
    attacments: ['https://pbs.twimg.com/media/FlkxppEaEAINU5T.jpg'],
  },
  {
    id: 12,
    description:
      'Congrats to the 4680 cell team on achieving 868k cells built in the last 7 days—equal to 1k+ cars!',
    attacments: ['https://pbs.twimg.com/media/Fk1_jJAWYAIi0da.jpg'],
  },
  {
    id: 13,
    description: 'Supercharging powered by the sun ☀️',
    attacments: ['https://pbs.twimg.com/media/Fkgz5v6WAAEDSsf.jpg'],
  },
  {
    id: 14,
    description: '60 Minutes Interviews Population Control Expert Thanos',
    attacments: [
      'https://pbs.twimg.com/card_img/1610405372530933760/9h4VKqer.jpg',
    ],
  },
  {
    id: 15,
    description:
      'Leo Messi honored by his teammates, coaching staff and Training Center staff',
    attacments: ['https://pbs.twimg.com/media/FlnziAoXoAEDyc6.jpg'],
  },
  {
    id: 16,
    description: 'Real goat 🐐🐐🐐',
    attacments: ['https://pbs.twimg.com/media/Fln9I9bXgAIKZtr.jpg'],
  },
  {
    id: 17,
    description: 'Lets Embrace n Conquer 2023 👑',
    attacments: ['https://pbs.twimg.com/media/FlXLB5aXkAA-3ku.jpg'],
  },
  {
    id: 18,
    description: 'jus a moment from nov that made me v happy :)',
    attacments: ['https://pbs.twimg.com/media/FlERFVCacAEqYTQ.jpg'],
  },
  {
    id: 19,
    description:
      'P.S.- pandemic weddings ke bhi after-party invites arahe hain😍!! Whattæ festive time 🪬💖',
    attacments: ['https://pbs.twimg.com/media/FkbE6XHVUAAuWiH.jpg'],
  },
  {
    id: 20,
    description:
      'Beauty is being the best possible version of yourself, inside and out ✨',
    attacments: ['https://pbs.twimg.com/media/FjgkmMGVIAAb9SP.jpg'],
  },
  {
    id: 21,
    description:
      'reveals bright starbirth around the center of a spiral galaxy 220 light-years from Earth in the Pegasus constellation. The background is awash with other galaxies and stars. Imagine the worlds within!',
    attacments: ['https://pbs.twimg.com/media/FlkPRpHXkAYixdt.jpg'],
  },
  {
    id: 22,
    description: 'Thumbs up for a new challenge 💪',
    attacments: ['https://pbs.twimg.com/media/Flk9DR7XEAEZ8Gf.jpg'],
  },
  {
    id: 23,
    description: 'Don’t call yourself a gamer if you never played this game',
    attacments: ['https://pbs.twimg.com/media/Fle84c6XEAEmSwa.jpg'],
  },
  {
    id: 24,
    description: 'Premiering on your screens tomorrow!',
    attacments: ['https://pbs.twimg.com/media/FlmtaxXacAAt5ie.jpg'],
  },
  {
    id: 25,
    description:
      'In 2022, Tesla Model Y took the #1 spot for the most American 🇺🇸 made car.  Here’s a 🧵from that report with videoUrls.',
    attacments: ['https://pbs.twimg.com/media/Flg9d7tXgAEj-9Y.jpg'],
  },
  {
    id: 26,
    description:
      'PSG will face Al-Nassr in a friendly match in January. Most probably the last meeting between Messi & Ronaldo! 🇦🇷🇵🇹🐐🐐',
    attacments: ['https://pbs.twimg.com/media/FljnfxpWQAAvTbI.jpg'],
  },
  {
    id: 27,
    description:
      'Chinese commercial space company Space Pioneer is planning for the first launch of its Tianlong-2 kerolox rocket this year, which we can now see vertical. 2 tons to LEO, 35 meters high, standard 3.35m Long March diameter. Could be the first Chinese private launcher to orbit...',
    attacments: ['https://pbs.twimg.com/media/Floj16CWYAEurr9.jpg'],
  },
  {
    id: 28,
    description: 'One day gas stations will become as nostalgic as pay phones',
    attacments: ['https://pbs.twimg.com/media/FlgZ5QnaAAAvXxE.jpg'],
  },
  {
    id: 29,
    description:
      '"Amiraali Ivan Vasiljev väitti, että mustaa savua tuotetaan tietoisesti . Hänen mukaansa tavoitteena on osoittaa näyttävästi, että Venäjän laivasto on paikalla.',
    attacments: [
      'https://pbs.twimg.com/card_img/1609265469428535296/jdzQGTPI.jpg',
    ],
  },
  {
    id: 30,
    description:
      '🎆What a year this has been and what a FIFA World Cup Qatar 2022 we saw.',
    attacments: ['https://pbs.twimg.com/media/FlVKrFiXoAAJqoB.jpg'],
  },
]

const VideosData = [
  {
    id: 1,
    title: 'Top Ten REact Developers Mistakes',
    description:
      'Biginers commont top ten mistakes, this video helps biginer to fix commonly faces issues in first time react js development',
    duration: 54830889,
    videoUrl: 'https://www.youtube-nocookie.com/embed/6O4s7v28nlw',
    thumbnail: 'https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg',
    tags: ['javascript', 'react', 'tips'],
  },
  {
    id: 2,
    title: 'Creates A Virtual Talking Friend with Just 5 Lines of Python',
    description:
      ' For new python developer, pyttsx3 is a cool little library to convert text to speech. This simple tutorial will help to create something simple and fun.',
    duration: 2349809,
    videoUrl: 'https://www.youtube.com/embed/nbX4MBzB_rg',
    thumbnail: 'https://i3.ytimg.com/vi/nbX4MBzB_rg/maxresdefault.jpg',
    tags: ['python', 'automation'],
  },
  {
    id: 3,
    title: 'React JS Crash Course',
    description:
      'Get started with React in this crash course. We will be building a task tracker app and look at components, props, state, hooks, working with an API and more.',
    author: 'Traversy Media',

    duration: 9045830,
    videoUrl: 'https://www.youtube-nocookie.com/embed/w7ejDZ8SWv8',
    thumbnail: 'https://i3.ytimg.com/vi/w7ejDZ8SWv8/maxresdefault.jpg',
    tags: ['react', 'javascript'],
  },
  {
    id: 4,
    title: 'VS Code Snippets - Boost your productivity with User Snippets',
    description:
      'Boost your productivity with User Snippets Boost your productivity with User Snippets Boost your productivity with User Snippets Boost your productivity with User Snippets',
    duration: 7493323,
    videoUrl: 'https://www.youtube-nocookie.com/embed/N-U6AVcIPy4',
    thumbnail: 'https://i3.ytimg.com/vi/N-U6AVcIPy4/maxresdefault.jpg',
    tags: ['vscode', 'tips'],
  },
  {
    id: 5,
    title:
      'How to Automate WhatsApp with 15 lines of Python Code || Learn Python || Python for beginner',
    description:
      ' I was looking for a cool project to demonstrate my Python knowledge and then I found a video by twillio api in this video https://www.youtube.com/watch?v=O2PB6. Then I found this article by Kartik Nighania to automate whats app message.I wanted to make my own version and explore Heroku.Any one beginner in python might be inspired by this and build their own',
    duration: 4923082,
    videoUrl: 'https://www.youtube.com/embed/pQeFxdT3FGY',
    thumbnail: 'https://i3.ytimg.com/vi/pQeFxdT3FGY/maxresdefault.jpg',
    tags: ['python', 'automation'],
  },
  {
    id: 6,
    title: ' Static Blog With Next.js and Markdown',
    description: ' Create a basic blog using Next.js and Markdown.',
    duration: 489232,
    videoUrl: 'https://www.youtube-nocookie.com/embed/MrjeefD8sac',
    thumbnail: 'https://i3.ytimg.com/vi/MrjeefD8sac/maxresdefault.jpg',
    tags: ['nextjs', 'javascript'],
  },
  {
    id: 7,
    title:
      'Tailwind CSS 3 tutorial - Upgrade to Tailwind 3 | Tailwind CSS Bangla Tutorial',
    description:
      'Tailwind CSS v3.0 came with incredible performance gains, huge workflow improvements, and a seriously ridiculous number of new features. In this tutorial - I have tried to explain different new features of Tailwind CSS version 3, how to install tailwind css 3, how to upgrade from tailwind v2 to v3 etc.',
    duration: 2492338,
    videoUrl: 'https://www.youtube-nocookie.com/embed/4M7D3O2XX4o',
    thumbnail: 'https://i3.ytimg.com/vi/4M7D3O2XX4o/maxresdefault.jpg',
    tags: ['tailwind', 'css'],
  },
  {
    id: 8,
    title:
      "Don't Buy Scanner! Build your own smart scanner using 25 lines of python || opencv || Python Project",
    description:
      'Your wallet reminds you of the Sahara desert? But you need to scan documents right? This video is your saviour! ',
    duration: 987423,
    videoUrl: 'https://www.youtube.com/embed/MAwOPyOztDs',
    thumbnail: 'https://i3.ytimg.com/vi/MAwOPyOztDs/maxresdefault.jpg',
    tags: ['python', 'automation'],
  },
  {
    id: 9,
    title:
      'Debounce Function in JavaScript - JavaScript Job Interview question',
    description:
      'In this video, I have explained about the debounce function in JavaScript. This is a common question interviewers ask at Job Interviews. If you watch this video carefully, you will understand what is debounce and how to handle it with custom debounce function.',
    duration: 57320,
    videoUrl: 'https://www.youtube-nocookie.com/embed/dD9O8DnIBj4',
    thumbnail: 'https://i3.ytimg.com/vi/dD9O8DnIBj4/maxresdefault.jpg',
    tags: ['debounce', 'javascript', 'tips'],
  },
  {
    id: 10,
    title: 'Next.js Crash Course',
    description:
      'In this video we will look at the fundamentals of Next.js such as SSR & SSG, routing, data fetching, apis and more',
    duration: 345083,
    videoUrl: 'https://www.youtube-nocookie.com/embed/mTz0GXj8NN0',
    thumbnail: 'https://i3.ytimg.com/vi/mTz0GXj8NN0/maxresdefault.jpg',
    tags: ['nextjs', 'javascript'],
  },
  {
    id: 11,
    title: 'SASS Tutorial in English - Overview of SASS',
    description:
      'In this video, I have given a high level overview of popular CSS Pre-processor SASS which helps us managing our styles at scale. If you have a basic understanding of CSS & JavaScript, this 10 mins SASS Tutorial will help you getting started with SASS.',
    duration: 94200,
    videoUrl: 'https://www.youtube-nocookie.com/embed/4tV1Mfi4fMA',
    thumbnail: 'https://i3.ytimg.com/vi/4tV1Mfi4fMA/maxresdefault.jpg',
    tags: ['sass', 'css', 'ui'],
  },
  {
    id: 12,
    title:
      "Don't Buy Alexa! Build Your Own. Create a Virtual Assistant with Python | Python Project | Jarvis AI",
    description:
      ' Programmers can get anything for free, even Alexa. Building your own (hot) personal assistant — how cool that is! 😁 You just need 20 lines of Python code. 😎',
    duration: 98800,
    videoUrl: 'https://www.youtube.com/embed/AWvsXxDtEkU',
    thumbnail: 'https://i3.ytimg.com/vi/AWvsXxDtEkU/maxresdefault.jpg',
    tags: ['python', 'automation'],
  },
  {
    id: 13,
    title:
      'React Router DOMs v6 Bangla Tutorial - Breaking Changes - React Router 6 vs 5',
    description:
      'In this React Router DOM v6 Bangla tutorial, you will learn how to install react router dom 6, what are the breaking changes in react router 6, difference between react router 6 vs 5, how to upgrade from react router v5 to react router v6. ',
    duration: 59900,
    videoUrl: 'https://www.youtube-nocookie.com/embed/34tjWL9wi4g',
    thumbnail: 'https://i3.ytimg.com/vi/34tjWL9wi4g/maxresdefault.jpg',
    tags: ['react', 'router', 'javascript'],
  },
  {
    id: 14,
    title:
      'Learn and Master Python in 1 Month 🔥🔥🔥 Complete Python Guideline | How to get a Python Job in 2020',
    description:
      ' We are providing a complete guideline to learn python. Your wallet reminds you of the Sahara desert? But you need to scan documents right? This video is your saviour! . 😎',
    duration: 32400,
    videoUrl: 'https://www.youtube.com/embed/wECc7RPAr7s',
    thumbnail: 'https://i3.ytimg.com/vi/wECc7RPAr7s/maxresdefault.jpg',
    tags: ['python', 'automation'],
  },
  {
    id: 15,
    title: 'Tailwind CSS Tutorial Bangla - Introduction to Tailwind CSS',
    description:
      'Tailwind is a utility-first CSS framework to rapidly build modern websites without ever leaving your HTML. In this Tailwind CSS tutorial, I have given a short introduction and overview of Tailwind CSS in Bangla language. Also, I have explained, why Tailwind vs Bootstrap debate should be stopped as both are useful in their own ways.',
    duration: 34000,
    videoUrl: 'https://www.youtube-nocookie.com/embed/smDa6hoxLKI',
    thumbnail: 'https://i3.ytimg.com/vi/smDa6hoxLKI/maxresdefault.jpg',
    tags: ['tailwind', 'css', 'ui'],
  },
  {
    id: 16,
    title: 'JavaScripts Crash Course For Beginners',
    description:
      'In this crash course we will go over the fundamentals of JavaScript including more modern syntax like classes, arrow functions, etc. This is the starting point on my channel for learning JS.',
    duration: 30000,
    videoUrl: 'https://www.youtube-nocookie.com/embed/hdI2bqOjy3c',
    thumbnail: 'https://i3.ytimg.com/vi/hdI2bqOjy3c/maxresdefault.jpg',
    tags: ['javascript'],
  },
  {
    id: 17,
    title: '48 hours - the most isolated camp on earth',
    description:
      'This video was not sponsored by the US Navy; they provided access to the ICEX 2022 camp Special thank you to our X-Ray tier patrons: Carlos Patricio, David Cichowski, Eddie Sabbah, Fabrice Eap, Gil Chesterton, Isabel Herstek, Margaux Lopez, Matt Kaminski, Michael Schneider, Patrick Olson, Vikram Bhat, Vincent Argiro, wc993219',
    duration: 270000,
    videoUrl: 'https://www.youtube-nocookie.com/embed/ap7-Wci2-8k',
    thumbnail: 'https://i3.ytimg.com/vi/ap7-Wci2-8k/maxresdefault.jpg',
    tags: ['isolated', 'earth'],
  },
  {
    id: 18,
    title: 'I dove in a NUCLEAR SUBMARINE (Frozen Ocean)',
    description:
      'Special thank you to our X-Ray tier patrons: Carlos Patricio, David Cichowski, Eddie Sabbah, Fabrice Eap, Gil Chesterton, Isabel Herstek, Margaux Lopez, Matt Kaminski, Michael Schneider, Patrick Olson, Vikram Bhat, Vincent Argiro, wc993219',
    duration: 120000,
    videoUrl: 'https://www.youtube-nocookie.com/embed/JRQSbK4Krg0',
    thumbnail: 'https://i3.ytimg.com/vi/JRQSbK4Krg0/maxresdefault.jpg',
    tags: ['NUCLEAR SUBMARINE', 'Frozen Ocean'],
  },
  {
    id: 19,
    title: '8 Crazy pool vortex ',
    description:
      'Also thank you to Daniel Walsh for answering many fluid dynamics questions, to Jacob Schalch for filming the burning penny, and to Justin and Brendan for their donations to support Physics Girl!',
    duration: 240000,
    videoUrl: 'https://www.youtube-nocookie.com/embed/pnbJEg9r1o8',
    thumbnail: 'https://i3.ytimg.com/vi/pnbJEg9r1o8/maxresdefault.jpg',
    tags: ['Crazy', 'vortex'],
  },
  {
    id: 20,
    title: 'We can see things moving faster than light',
    description:
      'Special thank you to our X-Ray tier patrons: Carlos Patricio, David Cichowski, Eddie Sabbah, Fabrice Eap, Gil Chesterton, Isabel Herstek, Margaux Lopez, Matt Kaminski, Michael Schneider, Patrick Olson, Vikram Bhat, Vincent Argiro, wc993219',
    duration: 660000,
    videoUrl: 'https://www.youtube-nocookie.com/embed/q67vH0SKahU',
    thumbnail: 'https://i3.ytimg.com/vi/q67vH0SKahU/maxresdefault.jpg',
    tags: ['moving faster', 'light'],
  },
  {
    id: 21,
    title: 'Inside The Navy s Indoor Ocean',
    description:
      'Thanks to Kelley Stirling and the Naval Surface Warfare Center, Carderock Division for the visit.  Thanks to Miguel Quintero and Capt. Todd E. Hutchison for talking to us about the important work going on in the Maneuvering and Seakeeping Basin.',
    duration: 1200000,
    videoUrl: 'https://www.youtube-nocookie.com/embed/pir_muTzYM8',
    thumbnail: 'https://i3.ytimg.com/vi/pir_muTzYM8/maxresdefault.jpg',
    tags: ['Navy', 'Ocean'],
  },
  {
    id: 22,
    title: 'Kobe Bryants Greatest Speech | BEST Motivation Ever',
    description:
      'In this powerful and emotional video, we will hear from a legend, a 5-time NBA champion, an 18-time All-Star, and an inductee of the Naismith Memorial Basketball Hall of Fame, Kobe Bryant. Bryant shares his best advice about what it’s like to have the “Mamba Mentality”. He talks about becoming who you want to be as long as you outwork everyone. We hope this video inspires you to take action in pursuing your dreams. Gone but never forgotten. RIP, Kobe ',
    duration: 720000,
    videoUrl: 'https://www.youtube-nocookie.com/embed/dTRBnHtHehQ',
    thumbnail: 'https://i3.ytimg.com/vi/dTRBnHtHehQ/maxresdefault.jpg',
    tags: ['Greatest', 'Motivation'],
  },
  {
    id: 23,
    title:
      'Transformers, explained: Understand the model behind GPT, BERT, and T5',
    description:
      'Over the past five years, Transformers, a neural network architecture, have completely transformed state-of-the-art natural language processing. Want to translate text with machine learning? Curious how an ML model could write a poem or an op ed? Transformers can do it all. In this episode of Making with ML, Dale Markowitz explains what transformers are, how they work, and why they’re so impactful. Watch to learn how you can start using transformers in your app!',
    duration: 540000,
    videoUrl: 'https://www.youtube-nocookie.com/embed/SZorAJ4I-sA',
    thumbnail: 'https://i3.ytimg.com/vi/SZorAJ4I-sA/maxresdefault.jpg',
    tags: ['Understand', 'behind'],
  },
  {
    id: 24,
    title: 'API vs. SDK: Whats the difference?',
    description:
      'In this lightboard video, Nathan Hekman with IBM Cloud, answers these questions and much more while providing a real life scenario which explains the difference and similarities, and ultimately how the two technologies can work together to allow you to spend less time connecting/configuring a cloud service, and more time coding and actually using the service in your app',
    duration: 540000,
    videoUrl: 'https://www.youtube-nocookie.com/embed/kG-fLp9BTRo',
    thumbnail: 'https://i3.ytimg.com/vi/kG-fLp9BTRo/maxresdefault.jpg',
    tags: ['SDK', 'difference'],
  },
  {
    id: 25,
    title: 'IELTS Speaking Interview | BAND 9 | Real Test! ',
    description: 'Please share it on WhatsApp and Facebook!',
    duration: 780000,
    videoUrl: 'https://www.youtube-nocookie.com/embed/V6twSFNeUk4',
    thumbnail: 'https://i3.ytimg.com/vi/V6twSFNeUk4/maxresdefault.jpg',
    tags: ['Speaking', 'BAND'],
  },
  {
    id: 26,
    title: 'TikTok C.E.O. Shou Chew on China, the Algorithm and More',
    description:
      'How did TikTok become the app that every other company is chasing? Where will the social media company go next? TikTok C.E.O. Shou Chew discussed at the 2022 DealBook summit with Andrew Ross Sorkin of The New York Times.',
    duration: 156000,
    videoUrl: 'https://www.youtube-nocookie.com/embed/EE5Pcz99JFI',
    thumbnail: 'https://i3.ytimg.com/vi/EE5Pcz99JFI/maxresdefault.jpg',
    tags: ['China', 'Algorithm'],
  },
  {
    id: 27,
    title: 'Elon musk: "A degree means NOTHING" - Here!',
    description:
      'All music was licensed through MusicBed Music by Ryan Taubert',
    duration: 600000,
    videoUrl: 'https://www.youtube-nocookie.com/embed/q50Vwu9Zgm8',
    thumbnail: 'https://i3.ytimg.com/vi/q50Vwu9Zgm8/maxresdefault.jpg',
    tags: ['NOTHING', 'Elon musk'],
  },
  {
    id: 28,
    title: 'Gwynne Shotwell, President and COO of SpaceX',
    description:
      'In this View From The Top, Christopher Stromeyer, MBA 22, sits down with Gwynne Shotwell, President and COO of SpaceX, to discuss balancing ambitious goals, putting people on Mars in a decade, leading collaboratively, and why she likes making decisions with data.',
    duration: 2400000,
    videoUrl: 'https://www.youtube-nocookie.com/embed/1b-vAeYTxRA',
    thumbnail: 'https://i3.ytimg.com/vi/1b-vAeYTxRA/maxresdefault.jpg',
    tags: ['SpaceX', 'President'],
  },
  {
    id: 29,
    title: 'Inside The $5 Billion Apple Headquarters',
    description:
      'Despite its incredibly futuristic looks, the apple park has been a long time in the making, with Steve Jobs first announcing the project way back in 2006. ',
    duration: 360000,
    videoUrl: 'https://www.youtube-nocookie.com/embed/FzcfZyEhOoI',
    thumbnail: 'https://i3.ytimg.com/vi/FzcfZyEhOoI/maxresdefault.jpg',
    tags: ['Billion', 'Apple Headquarters'],
  },
  {
    id: 30,
    title: 'How SpaceX Mastered Space Suits',
    description:
      'SpaceX began developing its first spacesuit all the way back in 2015. It took Hollywood costume designer Jose Fernandez several months to design a suit that looked as sleek as possible',
    duration: 540000,
    videoUrl: 'https://www.youtube-nocookie.com/embed/emp8sxbRpSQ',
    thumbnail: 'https://i3.ytimg.com/vi/emp8sxbRpSQ/maxresdefault.jpg',
    tags: ['Mastered', 'SpaceX'],
  },
]

const CategoryData = [
  {
    name: 'Beauty',
  },
  {
    name: 'Comedy',
  },
  {
    name: 'Songs',
  },
  {
    name: 'Gaming',
  },
  {
    name: 'Travel',
  },
  {
    name: 'Techonology',
  },
  {
    name: 'Health and Fitness',
  },
  {
    name: 'Cooking',
  },
  {
    name: 'Do-it-yourself',
  },
  {
    name: 'Lifestyle',
  },
  {
    name: 'Business',
  },
  {
    name: 'Learning',
  },
  {
    name: 'News',
  },
  {
    name: 'Others',
  },
]

const ReportData = [
  {
    name: 'Sexual content',
  },
  {
    name: 'Violent or repulsive content',
  },
  {
    name: 'Harassment or bullying',
  },
  {
    name: 'Harmfull or dangerous acts',
  },
  {
    name: 'Child abuse',
  },
  {
    name: 'Infringes my rights',
  },
  {
    name: 'Promotes terrorism',
  },
  {
    name: 'Spam or misleading',
  },
]

const CommentsData = [
  { message: 'Stay positive, things will get better.' },
  { message: 'Always remember to believe in yourself.' },
  { message: 'Life is too short to waste time on negativity.' },
  { message: 'Focus on the good and ignore the rest.' },
  { message: 'Chase your dreams, they will come true.' },
  { message: 'Keep pushing forward, you got this.' },
  { message: 'Be the change you wish to see in the world.' },
  { message: 'Stay true to yourself and never give up.' },
  { message: 'Happiness is a choice, choose it every day.' },
  { message: "Don't let fear hold you back, take a chance." },
  { message: 'Success is not final, failure is not fatal.' },
  { message: 'Life is a journey, enjoy the ride.' },
  { message: 'Gratitude is the key to a happier life.' },
  { message: 'Every day is a new opportunity to grow.' },
  { message: 'Be kind, for everyone you meet is fighting a battle.' },
  { message: 'Believe in yourself and all that you are.' },
  { message: 'Let your light shine, inspire others.' },
  { message: 'Do what makes you happy, life is too short.' },
  { message: 'The power of positive thinking is amazing.' },
  { message: 'Be the reason someone smiles today.' },
  { message: 'Your attitude determines your altitude.' },
  { message: 'Life is too precious, cherish every moment.' },
  { message: 'Take time to appreciate the little things.' },
  { message: 'Never give up on something you truly want.' },
  { message: 'The best things in life are the people we love.' },
  { message: "Smile, it's the universal language of kindness." },
  { message: 'Be the change you want to see in the world.' },
  { message: 'The greatest gift you can give is love and kindness.' },
  { message: 'Be yourself, everyone else is already taken.' },
  { message: 'Never let yesterday take up too much of today.' },
  { message: 'Every day is a new beginning, make it count.' },
]

const AvailabilityConfig = [
  { type: 1, title: 'offline' },
  { type: 2, title: 'online' },
  { type: 3, title: 'live' },
]

const NotificationConfig = [
  { type: 1, title: 'tweet' },
  { type: 2, title: 'video' },
  { type: 3, title: 'live' },
]

const ReactionsData = [
  { type: 1, title: 'smile', schema: 'reactionSmileCount' },
  { type: 2, title: 'love', schema: 'reactionloveCount' },
  { type: 3, title: 'haha', schema: 'reactionHahaCount' },
  { type: 4, title: 'insightful', schema: 'reactionInsightfulCount' },
  { type: 5, title: 'angry', schema: 'reactionAngryCount' },
]

module.exports = {
  globalData,
  TweetsData,
  VideosData,
  UsersData,
  AvailabilityConfig,
  ReactionsData,
  NotificationConfig,
  CategoryData,
  ReportData,
  CommentsData,
}
