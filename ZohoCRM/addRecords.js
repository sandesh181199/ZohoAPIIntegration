const axios = require('axios');
const express = require('express');
const got = require("got");
const bodyParser = require('body-parser');
const config = require('../Configuration/config');

const router = express.Router();
router.use(bodyParser.json());

// Request URL = "localhost:3000/addrecord";
// Method = 'POST'
// scope = ZohoCRM.modules.ALL
// header : {
//     'Content-Type' : 'application/json'
// }
// body :
// {
//     "data":[
//         {
//             "Compant" : "Stack Finance",
//             "Last_Name" : "vanwadi",
//             "First_Name" : "sandesh",
//             "Email" : "sandeshvanwadi@gmail.com",
//             "State" : "Maharashtra"
//         }
//     ],
//     "trigger" : [
//         "approval",
//         "workflow",
//         "blueprint"
//     ]
// }

router.post('/', function(req, res, next) {
    async function insertRecords() {
        let url = 'https://www.zohoapis.in/crm/v2/Leads';
        let access_token = config.access_token;
        console.log(access_token);
        let headers = {
            Authorization : "Zoho-oauthtoken "+ access_token
        }

        let requestBody = req.body;
    
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
    insertRecords()
});

module.exports = router;





