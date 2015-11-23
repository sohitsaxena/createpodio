 var rp = require('request-promise');
 module.exports = {
 	createApp: function (spaceID, authtoken, payload, cb) {
 		var spaceID = parseInt(spaceID);
        var reqPayload = payload;
        reqPayload.space_id = spaceID;

        //category app
        rp({
            uri: "https://api.podio.com/app?oauth_token=" + authtoken,
            method: "POST",
            json: true,
            headers: {
                "content-type": "application/json"
            },
            body: reqPayload

        })
            .then(function (body) {
                return cb(null, body);
            })
            .catch(function(error){
                return cb(error, {"status": "failed"});
            });
 		// body...
 	},



 };