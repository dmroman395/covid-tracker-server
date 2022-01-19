const express = require('express')
const axios = require('axios')
const cors = require('cors')
const port = process.env.PORT || 3000;

const app = express()

app.use(cors())

app.get('/', (req,res) => res.send("Testing"))

app.get('/coordinates?lat=:lat&=lon=:lon', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
        params: {latlng: `${req.query.lat},${req.query.lon}`, result_type: 'country', language: 'en'},
        headers: {
          'x-rapidapi-host': 'google-maps-geocoding.p.rapidapi.com',
          'x-rapidapi-key': process.env.NEXT_PUBLIC_GEOCODING_API_KEY
        }
      };

      axios.request(options).then(response =>  {
       res.json({country: response.data.results[0].formatted_address})
    }).catch(error => {
        console.error(error);
    });
})


app.listen(port, () => {console.log(`App listening on port ${port}...`)})
