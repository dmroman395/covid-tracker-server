const axios = require('axios')
require('dotenv').config()

async function getNews(req, res) {
    var options = {
        method: 'GET',
        url: `https://coronavirus-smartable.p.rapidapi.com/news/v1/${req.query.location}/`,
        headers: {
          'x-rapidapi-host': 'coronavirus-smartable.p.rapidapi.com',
          'x-rapidapi-key': process.env.COVID_API_KEY
        }
      };
      
      axios.request(options).then((response) => {
          res.send(response.data.news)
      }).catch(error => {
          console.error(error);
      });
}

module.exports = getNews