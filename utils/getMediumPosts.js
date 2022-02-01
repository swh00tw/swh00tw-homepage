import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

// ref: https://github.com/alekrumkamp/medium-feed-json
// ref: https://stackoverflow.com/a/60859107/17420003
const my_medium_posts_worker = axios.create({baseURL: `${process.env.my_medium_posts_worker}`});

const getMediumPosts = async () => {
    try {
        let {data: res} = await my_medium_posts_worker.get(`/`);
        //console.log(res);
        const posts = res.data.posts;
        let next = res.next;

        while (next!==null){
            const {data: subsequent_res} = await my_medium_posts_worker.get('/', {params: {next: next}});
            posts.push(...subsequent_res.data.posts);
            if (subsequent_res.hasOwnProperty('next')){
                next = subsequent_res.next;
            } else {
                next = null;
            }
        }

        return posts.reverse();
    } catch (e){
        return null
    }
}

export default getMediumPosts;