var request = require('request');

class homePageActions {
    
    async registerUnsuccessfulAPICall() {
        await request.post(
            {
                url:`https://reqres.in/api/register`, 
                form: {
                    "string": 'string'
                }
            },
        function(err,response,body){
            statusMessage = response.statusMessage;
            statusCode = response.statusCode;
            console.log('--------------------------------RESPONSE BODY-------------------------------');
            console.log(response.body);
            console.log('----------------------------------------------------------------------------');
            console.log('STATUS CODE: ' + response.statusCode);
            console.log('STATUS MESSAGE: ' + response.statusMessage);
            console.log('----------------------------------------------------------------------------');
        });
    }

    async listUsersAPICall() {
        await request.get(
            {
            "url": `https://reqres.in/api/users`
            }, (error, response, body) => {
                statusMessage = response.statusMessage;
                statusCode = response.statusCode;
                console.log('--------------------------------RESPONSE BODY-------------------------------');
                console.log(response.body);
                console.log('----------------------------------------------------------------------------');
                console.log('STATUS CODE: ' + response.statusCode);
                console.log('STATUS MESSAGE: ' + response.statusMessage);
                console.log('----------------------------------------------------------------------------');
            });
    }

    async deleteUserAPICall(user = 2) {
        await request.delete(
            {
                "url": `https://reqres.in/api/users/${user}`
                }, (error, response, body) => {
                    statusMessage = response.statusMessage;
                    statusCode = response.statusCode;
                    console.log('--------------------------------RESPONSE BODY-------------------------------');
                    console.log(response.body);
                    console.log('----------------------------------------------------------------------------');
                    console.log('STATUS CODE: ' + response.statusCode);
                    console.log('STATUS MESSAGE: ' + response.statusMessage);
                    console.log('----------------------------------------------------------------------------');
                }
        );
    }

    async delayedResponseAPICall(delay = 5) {
        await request.get(
            {
            "url": `https://reqres.in/api/users?delay=${delay}`
            }, (error, response, body) => {
                statusMessage = response.statusMessage;
                statusCode = response.statusCode;
                console.log('--------------------------------RESPONSE BODY-------------------------------');
                console.log(response.body);
                console.log('----------------------------------------------------------------------------');
                console.log('STATUS CODE: ' + response.statusCode);
                console.log('STATUS MESSAGE: ' + response.statusMessage);
                console.log('----------------------------------------------------------------------------');
            });
    }
}

module.exports = homePageActions;