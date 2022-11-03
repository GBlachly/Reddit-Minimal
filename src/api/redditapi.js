const api = 'https://www.reddit.com';

export const fetchSubredditsAPI = async () => {
    const response = await fetch(`${api}/subreddits.json`);
    const json = await response.json();

    return json.data.children.map((subreddit) => subreddit.data);
};

export const fetchPostsAPI = async (subName) => {
    const response = await fetch(`${api}/${subName}.json`);
    const json = await response.json();

    return json.data.children.map((post) => post.data);
};

export const fetchCommentsAPI = async (permalink) => {
    //const response = await fetch(`${api}${permalink}.json`);
    //const json = await response.json();

    //return json.map((item) => item.data);
};
