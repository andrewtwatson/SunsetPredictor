const axios = require('axios').default;
const Constants = require('./constants.json');

export const sendRatingPost = function(inputRating) {
	console.log(JSON.stringify({
        "rating": inputRating
    }));

    console.log('http://127.0.0.1:' + Constants.serverPort);
    //axios.post('http://127.0.0.1:' + Constants.serverPort, {
    axios.post('http://localhost:8000/', {
    	rating: inputRating
    })
    .then(function(response) {
    	console.log(response);
    })
	.catch(function (error) {
		console.log(error);
	});

}