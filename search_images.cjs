const gis = require('g-i-s');
const fs = require('fs');

const terms = [
  '22k gold jhumka earrings tanishq',
  'diamond solitaire ring caratlane',
  'kundan bridal necklace set sabyasachi',
  'gold bangle bracelet indian',
  'diamond pendant necklace',
  'oxidised silver jhumka'
];

const results = {};
let completed = 0;

terms.forEach(term => {
  gis({ searchTerm: term, queryStringAddition: '&tbs=isz:l' }, (error, res) => {
    if (error) {
      console.error(error);
    } else {
      results[term] = res.slice(0, 10).map(r => r.url).filter(u => u.includes('https://') && !u.includes('pinterest') && !u.includes('facebook'));
    }
    completed++;
    if (completed === terms.length) {
      fs.writeFileSync('test_images.json', JSON.stringify(results, null, 2));
      console.log('Saved to test_images.json');
    }
  });
});
