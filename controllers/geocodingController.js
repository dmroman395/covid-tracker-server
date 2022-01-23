const axios = require('axios')
require('dotenv').config()

async function getCountryFromCoordinates(req, res) {
    const options = {
        method: 'GET',
        url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
        params: {latlng: `${req.query.lat},${req.query.lon}`, result_type: 'country', language: 'en'},
        headers: {
          'x-rapidapi-host': 'google-maps-geocoding.p.rapidapi.com',
          'x-rapidapi-key': process.env.GEOCODING_API_KEY
        }
      };
      
    axios.request(options).then(response =>  {
        res.json({
          name: response.data.results[0].formatted_address,
          code: response.data.results[0].address_components[0].short_name
         })
     }).catch(error => {
         console.error(error);
     });
}

async function getCoordinatesFromCountry(req, res) {
  const options = {
      method: 'GET',
      url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
      params: {country: `${req.query.country}`, language: 'en'},
      headers: {
        'x-rapidapi-host': 'google-maps-geocoding.p.rapidapi.com',
        'x-rapidapi-key': process.env.GEOCODING_API_KEY
      }
    };
    
  axios.request(options).then(response =>  {
      res.json({
        ...response})
   }).catch(error => {
       console.error(error);
   });
}

module.exports =  {
  getCountryFromCoordinates,
  getCoordinatesFromCountry
}
  