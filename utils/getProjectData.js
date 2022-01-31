const getProjectData = (pathString, projects) => {
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].detail === pathString) {
            return projects[i];
        }
    }
    return null;
}

export default getProjectData;