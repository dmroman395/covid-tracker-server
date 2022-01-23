const axios = require('axios')
require('dotenv').config()

async function getStats(req, res) {
    var options = {
        method: 'GET',
        url: `https://coronavirus-smartable.p.rapidapi.com/stats/v1/${req.query.location}/`,
        headers: {
          'x-rapidapi-host': 'coronavirus-smartable.p.rapidapi.com',
          'x-rapidapi-key': process.env.COVID_API_KEY
        }
      };
      
      axios.request(options).then((response) => {
          res.json({stats: response.data.stats})
      }).catch(error => {
          console.error(error);
      });
}

module.exports = getStats