const express = require('express');
const got = require("got");
const bodyParser = require('body-parser');
const config = require('../Configuration/config');

const router = express.Router();
router.use(bodyParser.json());

// scope = ZohoSubscriptions.subscriptions.CREATE
// Request URL = "localhost:3000/generateSubscrptionLink"
// Method = "POST"
// Sample body =  {
//     "customer": {
//         "display_name": "Bowman Furniture",
//         "salutation": "Mr.",
//         "first_name": "Benjamin",
//         "last_name": "George",
//         "email": "benjamin.george@bowmanfurniture.com",
//         "company_name": "Bowman Furniture",
//         "billing_address": {
//             "attention": "Benjamin George",
//             "street": "Harrington Bay Street",
//             "city": "Salt Lake City",
//             "state": "CA",
//             "country": "U.S.A",
//             "zip": 92612,
//             "fax": 4527389
//         },
//         "shipping_address": {
//             "attention": "Benjamin George",
//             "street": "Harrington Bay Street",
//             "city": "Salt Lake City",
//             "state": "CA",
//             "zip": 92612,
//             "country": "U.S.A",
//             "fax": 4527389
//         },
//         "payment_terms": 1,
//         "payment_terms_label": "Due On Receipt",
//         "custom_fields": [
//             {}
//         ],
//         "place_of_contact": "TN",
//         "gst_no": "33AAAAA0000A1Z5",
//         "gst_treatment": "business_gst",
//         "vat_treatment": "non_eu",
//         "vat_reg_no": 51423456782,
//         "country_code": "DE",
//         "is_taxable": true,
//         "tax_id": "903000002345",
//         "tax_authority_id": "903000006345",
//         "tax_authority_name": "ATO",
//         "tax_exemption_id": "903000006345",
//         "tax_exemption_code": "GST FREE"
//     },
//     "plan": {
//         "plan_code": "basic-monthly",
//         "plan_description": "Monthly Basic plan",
//         "price": 50,
//         "setup_fee": 20,
//         "setup_fee_tax_id": "9030000123123",
//         "tags": [
//             {}
//         ],
//         "item_custom_fields": [
//             {}
//         ],
//         "quantity": 1,
//         "tax_exemption_id": "903000006345",
//         "tax_exemption_code": "GST FREE",
//         "setup_fee_tax_exemption_id": "9030000123098",
//         "setup_fee_tax_exemption_code": "GST FREE",
//         "exclude_trial": false,
//         "exclude_setup_fee": false,
//         "billing_cycles": -1,
//         "trial_days": 0
//     }
// }

router.post('/', function(req, res, next) {
    organization_id = "60006980805";
    async function createSubcription() {
        let url = 'https://subscriptions.zoho.in/api/v1/subscriptions';
        let access_token = config.access_token;
        let headers = {
            Authorization : "Zoho-oauthtoken "+ access_token ,
            "X-com-zoho-subscriptions-organizationid" : organization_id,
            "Content-Type": "application/json"
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
    createSubcription()
});


module.exports = router;





