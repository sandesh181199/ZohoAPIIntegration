const express = require('express');
const bodyParser = require('body-parser');
const config = require('../Configuration/config');
const got = require("got");

const router = express.Router();
router.use(bodyParser.json());

// Request URL = "localhost:3000/createNotes"
// Method : "POST"
// headers : {
//     "Content-Type" : "Application/json"
// }
// scope = ZohoCRM.modules.leads.All
// ZohoCRM.modules.notes.ALL
// body: {
//     "data": [
//        {
//             "Note_Title": "Contacted",
//             "Note_Content": "Need to do further tracking",
//             "Parent_Id": "412963000001376069",
//             "se_module": "Leads"
//         }
//     ]
// }

router.post('/', function(req, res, next) {
    async function addNotes() {
        let url = 'https://www.zohoapis.in/crm/v2/Leads/169553000000178007/Notes';
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
    addNotes()
});


module.exports = router;





