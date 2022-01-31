// project: {
//     name: str,
//     description: [str],
//     website: str (link) || null,
//     github: str (link) || null,
//     detail: str (link) || null,
//     img_path: str || null,
// }

const projects = [
    {   
        name: 'My homepage',
        time: 'Jan, 2022',
        description: ['The website you are reading now!'],
        website: 'https://swh00tw.vercel.app',
        github: 'https://github.com/swh00tw/swh00tw-homepage',
        detail: '/projects/myHomepage',
        img_path: '/Images/project-myhomepage.png',
        type: 'Personal side project',
        achievements: ['My first website 🔥', 'First NextJS App', 'Made in only 1 week ⚡'],
        collaborators: null,
        role: null,
        framework: ['React', 'NextJS', 'FramerMotion', 'ChakraUI', 'Vercel'],
        content: [
            'My first website! Also my first side project!',
            'I want to build a personal website after inspired by a Japanese youtuber & full-stack Developer (@devaslife). He use NextJS, ChakraUI, ThreeJS & FramerMotion to build a cute personal website. And I decide to make my own one!',
            'Why choosing NextJS rather than Create-React-App which I am more familiar with?',
            'I heard of server-side rendering in web programming course before, but the teacher didn\'t tell me the detail about it. So I using Create-React-App in previous project, which is client-side rendering. However, I want to master this popular framework and I always want to have a personal website. So, I decided to make a website with NextJS.',
            'I also learned a lot about deployment using Vercel by making this website. Strongly recommend to beginner of website deployment. Checkout Vercel\'s NextJS tutorial to learn more!',
        ]
    },
    {   
        name: 'NTUCourse Neo',
        time: 'Nov, 2021 - Jan, 2022',
        description: ['A useful and easy-to-use course management system for NTU students!'],
        website: 'https://course.myntu.me',
        github: 'https://github.com/NTUCourse-Neo',
        detail: '/projects/ntuCourseNeo',
        img_path: '/Images/project-ntucourse-neo.png',
        type: 'Team project',
        achievements: ['1000+ users in 8 hours ✨', '2000+ users in the 1st week 🎉', 'First full-stack app'],
        collaborators: [{name: 'jc-hiroto', github: 'https://github.com/jc-hiroto'}, {name: 'Wil0408', github: 'https://github.com/Wil0408'}],
        role: ['Front-end developer'],
        framework: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Auth0', 'ChakraUI', 'BeautifulSoup', 'Azure'],
        content: [
            'NTUCourse Neo was made to be an alternative to the old NTU course information website. We provide not only better user interface, but also some useful and brand new features for finding course, searching for course information and managing courses.',
            'I worked as frontend developer in our team. My job is using React to build the frontend of the website, and using Redux to manage the complex states of the website. I also took part in building backend API, enacting data schema and preprocessing data.',
            'It was the biggest project I have ever worked on. It took us nearly 2 months to finish the service in our first senior semester. We spent lots of time on it. Although the task is tough, I learned a lot from it. Aside from learning React, I also gained lots of knowledge about user authentication, deployment, etc. It was definitely a great experience and a boost to my confidence & interest on web development.',
            'Our team is going to release new features in the near future, so stay tuned!'
        ],
    },
    {   
        name: 'DS Tutor',
        time: 'June, 2021 - July, 2021',
        description: ['A data structure visualization tool for beginner of data structure.'],
        website: null,
        github: 'https://github.com/swh00tw/DS_Tutor',
        detail: '/projects/dsTutor',
        img_path: '/Images/project-ds-tutor.png',
        type: 'Team project',
        achievements: ['First Javascript project'],
        collaborators: [{name: 'tin0819tin', github: 'https://github.com/tin0819tin'}, {name: 'Ray02250418', github: 'https://github.com/Ray02250418'}],
        role: ['Front-end developer'],
        framework: ['EaselJS', 'TweenJS', 'JQuery', 'Flask'],
        content: [
            'DS Tutor is made to help newbies of data structure to learn data structure better. It provide not only a simple UI to control, but also animation and texts of data structure operations for better understanding.',
            'It was my first Javascript project. I used vanilla Javascript, html, css to build the frontend of website.',
            'Although at that time, I have not learned about React and the website looks very simple (a little bit ugly 🤣), but this experience motivated me to learn more about modern web development skills. 💪'
        ],
    },
]

export default projects;