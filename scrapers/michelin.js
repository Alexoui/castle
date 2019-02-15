const rp = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');
const url = 'https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-';
var jsonfile = require('jsonfile');
const addRestaurant = require('./addRestaurant');

// Scraping the starred restaurants on Michelin's website (35 pages)
async function scrapping(){
  var names=[];
  for (i = 1; i <= 35; i++) {
    await rp((url + i.toString()), function(err, resp, html) {
      if (!err){
        const $ = cheerio.load(html);
        $('div[class=poi_card-display-title]').each(function(i, elm) {
          let name = $(this).text(); // Get restaurant's name
          name = name.substring(11, name.length - 8);
          //console.log(name);
          names.push(name);
          //jsonfile.writeFile('restaurantName.json',name);
          // Cleaning the name (take of "\n      " at the begin and "    " at the end)
          //addRestaurant(name); // Add the restaurant to the DB
        });
      }
    });
  }
  console.log(names);
  fs.writeFileSync("restaurantName.json", JSON.stringify(names));
}

scrapping();
//var json = JSON.stringify(obj);
