var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Constants = require('./constants.json');

export const sendRatingPost = function(rating) {
	console.log(JSON.stringify({
        "rating": rating
    }));
    var xhr = new XMLHttpRequest();
    xhr.open("POST", Constants.serverIp, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        "rating": rating
    }));
}