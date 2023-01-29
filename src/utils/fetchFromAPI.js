const axios = require("axios");
const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search'
const options = {

    url: BASE_URL,
    params: { part: 'snippet', videoId: 'M7FIvfx5J10' },
    headers: {
        'X-RapidAPI-Key': 'cf47d563b1mshf6a90f30828f881p12e5f0jsn1d960fd90893',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});