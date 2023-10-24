import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: 48,
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(data);
    return data;
};

// const axios = require('axios');

// const options = {
//   method: 'POST',
//   url: 'https://youtube-scraper-2023.p.rapidapi.com/video_comments',
//   headers: {
//     'content-type': 'application/json',
//     'X-RapidAPI-Key': '61d9a5ef26msh6d52e420ff64876p166015jsn467e410ff94a',
//     'X-RapidAPI-Host': 'youtube-scraper-2023.p.rapidapi.com'
//   },
//   data: {
//     videoId: '48h57PspBec',
//     nextToken: ''
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }