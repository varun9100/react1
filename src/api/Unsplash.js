import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID DVDCdh1U1s0y8l18y8f6QyQINhqy2o85DOwhylxApv4'
    }
});