const express = require('express');
const got = require("got");
const bodyParser = require('body-parser');
const config = require('../Configuration/config');

const router = express.Router();
router.use(bodyParser.json());

// Request URL = "localhost:3000/generatePayment"
// Method = "POST"
// Sample body = {
//     "customer_id": "",
//     "payment_mode": "cash",
//     "amount": 450
// }

router.post('/', function(req, res, next) {
    organization_id = "60006980805";
    async function generatePayment() {
        let url = 'https://subscriptions.zoho.in/api/v1/payments';
        let access_token = config.access_token;
        console.log(access_token);
        let headers = {
            Authorization : "Zoho-oauthtoken "+ access_token ,
            "X-com-zoho-subscriptions-organizationid" : organization_id,
            "Content-Type": "application/json"
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
    generatePayment()
});


module.exports = router;





