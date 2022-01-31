import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const instance = axios.create({baseURL: `https://api.github.com/users/` , headers: {
    Authorization: `token ${process.env.github_user_api_token}`
}});

const getGithubInfo = async (username) => {
    try {
        let res = await instance.get(`${username}`);
        return res.data
    } catch (e){
        return null
    }
}

export default getGithubInfo;