const express = require('express')
const axios = require('axios')
const cors = require('cors')

require('dotenv').config()


const port = process.env.PORT || 3000;


const app = express()

app.use(cors())

app.get('/', (req,res) => res.send("Listening for requests..."))

app.get('/coordinates?lat=:lat&=lon=:lon', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
        params: {latlng: `42.88544,-78.87846`, result_type: 'country', language: 'en'},
        headers: {
          'x-rapidapi-host': 'google-maps-geocoding.p.rapidapi.com',
          'x-rapidapi-key': process.env.GEOCODING_API_KEY
        }
      };

      axios.request(options).then(response =>  {
       res.json({country: response.data.results[0].formatted_address})
    }).catch(error => {
        console.error(error);
    });
})


app.listen(port, () => {console.log(`App listening on port ${port}...`)})
