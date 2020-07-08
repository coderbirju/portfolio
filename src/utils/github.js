import axios from 'axios';

let githubClientID;
let githubClientSecret;
const profileName = 'coderbirju';

if(process.env.NODE_ENV !== 'production'){
    githubClientID = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}else {
    githubClientID = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

export const getUser = async () => {
    return await axios.get(`https://api.github.com/users/${profileName}?&client_id=${githubClientID}&client_secret=${githubClientSecret}`);
}

export const getUserRepos = async () => {
    return await axios.get(`https://api.github.com/users/${profileName}/repos?per_page=20&sort=created:asc&client_id=${githubClientID}&client_secret=${githubClientSecret}`);
}