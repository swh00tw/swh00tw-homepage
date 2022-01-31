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
        achievements: ['My first website!', 'First NextJS App', 'Made in only 1 week ⚡'],
        collaborators: null,
        role: null,
        framework: [],
        content: []
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
        achievements: ['1000+ users in 8 hours', '2000+ users in the 1st week', 'First full-stack app'],
        collaborators: [{name: 'jc-hiroto', github: 'https://github.com/jc-hiroto'}, {name: 'Wil0408', github: 'https://github.com/Wil0408'}],
        role: ['Front-end developer'],
        framework: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Auth0', 'ChakraUI', 'BeautifulSoup', 'Azure'],
        content: [
            'NTUCourse was made to be an alternative to the old NTU course information website. We provide not only better user interface, but also some useful and brand new features for finding course, searching for course information and managing courses',
            'I worked as frontend developer in our team. My job is using React to build the frontend of the website, and Redux to manage the complex states of the website. I also took part in building backend API, enacting data schema and data preprocessing,',
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
    },
]

export default projects;