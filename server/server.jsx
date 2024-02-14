const express = require('express')
const SpotifyWebApi = require('spotify-web-api')


const app = express()

app.post('/login', (req, res)=>{
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:5173',
        clientId: 'b670599e0db04a269bec4ee564055b3a',
        clientSecret: 'e866f286aee145bf8b0938f931c6a753'
    })
})