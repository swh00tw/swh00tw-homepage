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
    },
    {   
        name: 'NTUCourse Neo',
        time: 'Nov, 2021 - Jan, 2022',
        description: ['A useful and easy-to-use course management system for NTU students!'],
        website: 'https://course.myntu.me',
        github: 'https://github.com/NTUCourse-Neo',
        detail: '/projects/ntuCourseNeo',
        img_path: '/Images/project-ntucourse-neo.png',
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