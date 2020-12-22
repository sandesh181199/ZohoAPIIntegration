const express = require('express');
const got = require("got");
const bodyParser = require('body-parser');
const config = require('../Configuration/config');

const router = express.Router();
router.use(bodyParser.json());

// Request URL = "localhost:3000/addUser";
// Method = "POST"
// scope=ZohoCRM.users.ALL
// body : {
//     "users": [
//       {
//         "role": "169553000000031151",
//         "first_name": "Patricia",
//         "email": "Patricia@abcl.com",
//         "profile": "169553000000031157",
//         "last_name": "Boyle"
//       }
//     ]
//   }
// For Administrator role use profile id as "169553000000031157"
// For Standard role use profile id as "169553000000031160"

router.post('/', function(req, res) {
    async function addUser() {
        let url = 'https://www.zohoapis.in/crm/v2/users';
        let access_token = config.access_token;
        console.log(access_token);
        let headers = {
            Authorization : "Zoho-oauthtoken "+ access_token
        }

        var requestBody = req.body;
        let requestDetails = {
            method : "POST",
            headers : headers,
            body : JSON.stringify(requestBody),
            encoding: "utf8",
            throwHttpErrors : false
        };
        
        let response = await got(url, requestDetails)
        if(response != null) {
            console.log(response.statusCode);
            console.log(response.body);
            res.send(response.body);
        }
    }
    addUser()
});


module.exports = router;





