const express = require('express');
const app = express();
const http = require('http');

const hostname='localhost';
const port = 3000;

const AddRecords = require('./ZohoCRM/addRecords');
app.use('/addrecord', AddRecords);

const createNotes = require('./ZohoCRM/createNotes');
app.use('/createNotes',createNotes);

const addUser = require('./ZohoCRM/addUser');
app.use('/addUser',addUser);

const generatePayment = require('./ZohoSubscription/generatePayment');
app.use('/generatePayment',generatePayment);

const generateSubscriptionLink = require('./ZohoSubscription/createSubscriptionLinks');
app.use('/generateSubscrptionLink',generateSubscriptionLink);


const server = http.createServer(app);
app.listen(port,hostname,()=>{
    console.log(`server running on http://${hostname}:${port}`)
})