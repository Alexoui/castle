const puppeteer = require('puppeteer');


async function  recherche(link,selector){
    const results = await (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(link,{waitUntil: 'networkidle2'});

    //await page.waitForSelector('a[href*="https://www.relaischateaux.com/fr"]');
    const cue_card_links = await page.evaluate((selector) => {

    const anchors_node_list = document.querySelectorAll(selector);

    const anchors = [...anchors_node_list];
    console.log(typeof(anchors));
    console.log("Taille du tableau anchors :");
    console.log(anchors.length);
    return anchors.map(link => link.href);

  }, selector);

  console.log("Taille du tableau cue_card_links :");
  console.log(cue_card_links.length);
  console.log(cue_card_links[0]);
  nombreDePage = Number(cue_card_links[0].substr(-2,2));

   return cue_card_links;
  })();
  console.log(results);
  return results;
}
var oups = recherche('https://www.relaischateaux.com//fr/site-map/etablissements?fbclid=IwAR2KpSgIp4yhxw70jfFiuK2VOD7LCKHxlLN1W-FnSHwdqbunM-aIIJ8Bnik','#countryF > ul > li > a:nth-child(1)');
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log(oups);

//name =[];
//price =[];

const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin';

const addResto = require()
/*
for(i=0; i<1;i++){
  name.push(recherche(cue_card_links[i],'#tabProperty > div:nth-child(5) > div.row.hotelTabsHeader > div > div.hotelTabsHeaderTitle > h3'));
  //price.push(recherche(cue_card_links[i],'body > header > div > div > div > div.priceTag > div'));
  console.log(name[i]);
  //console.log(price[i]);

}*/
