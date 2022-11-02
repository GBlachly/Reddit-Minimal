const api = 'https://www.reddit.com';

export const fetchSubredditsAPI = async () => {
    const response = await fetch(`${api}/subreddits.json`);
    const json = response.json();

    return json.data.children.map(subreddit => subreddit.data);
}


