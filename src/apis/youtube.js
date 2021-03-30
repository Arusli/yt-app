import axios from 'axios';

const KEY = 'AIzaSyAH9DcpIHLqGSZpFNBL9wpY3Hf7ZRHBFr0'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})