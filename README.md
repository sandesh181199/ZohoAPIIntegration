# ZohoAPIIntegration

To get Access token:
1. Get your initial token by creating client application at Zoho API Console.
2. Pass initial token to "https://accounts.zoho.in/oauth/v2/token" with POST method and required headers and data to get your refresh token.
3. Using your refresh token pass it in same url to get your access token which will be passed to access the API at our end point.
4. Update the access token in config.js in configuration folder.

To start the application :
1. Install dependencies using npm install.
2. Start the application using command npm start.

