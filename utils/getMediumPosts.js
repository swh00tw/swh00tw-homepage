import axios from 'axios';

// ref: https://stackoverflow.com/a/39646796/17420003
// rss-to-json-converter ref: https://rss2json.com/#rss_url=https%3A%2F%2Fgithub.com%2Flaravel%2Flaravel%2Freleases.atom
const medium_instance = axios.create({baseURL: `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40swh00tw`});

const getMediumPosts = async () => {
    try {
        let res = await medium_instance.get(`/`);
        // console.log('res: ',res.data.items);
        return res.data.items;
    } catch (e){
        return null
    }
}

export default getMediumPosts;