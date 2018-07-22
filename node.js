case 'get-git':
    console.log("Entrando a GET-GIT");
    if (parameters.hasOwnProperty("user") && parameters["user"] != '') {
        var request = require('request');
        console.log("parameters[user]:  " + parameters["user"]);
        request({
            //url: 'http://ec2-13-58-216-36.us-east-2.compute.amazonaws.com:3000/MEMORIA/'+parameters["Sistemas"],
            url: 'https://api.github.com/users/' + parameters[user] + '/repos'
        }, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                let gith = JSON.parse(body);
                for (var i = 0; i < gith.length; i++) {
                    console.log("208... entro a status CODE ..... 200  host ######   " + gith[i].git_url + "-----");
                    let reply = `${responseText} ${gith[i].git_url}`;
                    rtm.sendMessage(reply, conversationId);
                }
            } else {
                console.error(response.error);
                console.log("213... entro a status CODE error .....   ######   " + response.statusCode);
            }
        });
    } else {
        console.log("217... entro a status CODE error .....   ######   ");
    }
    break;