const mdLinks = require("./lib/index.js");

mdLinks('README.md')
  .then(links => console.log(links))
  .catch(error => console.log('Error: ', error));
  

// mdLinks("./example.md")
//   .then(links => {
//     // => [{ href, text }]
//   })
//   .catch(console.error);
// console.log(mdLinks())


/*
const mdLinks = require("./lib/mdLinks.js");

mdLinks("./example.md")
  .then(links => {
    // => [{ href, text }]
  })
  .catch(console.error);*/

  /*
  const reg = /teste/


  */