const fs = require("fs");
// const util = require('util');
// const readFile = util.promisify(fs.readFile)

// readFile(file,'utf8').then(data => console.log(data))

const mdLinks = (file) => {
  const links = /\[(.+?)\]\((http[s]?:\/\/[^\)]*)\)/g;
  const arr = [];

  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        reject(`Err: ${err}`);

      } else {
        const regex = data.match(links);
        regex.map((index) => {
          const title = index.match(/\[(.+?)\]/)[1];
          const href = index.match(/\((http[s]?:\/\/[^\)]*)\)/)[1];
          arr.push({ title, href });
        });

        resolve(arr);
      }
    });
  });
};

mdLinks('README.md').then(console.log)

module.exports = mdLinks;

//ate aqui
 // mdLinks()
// .then((valor)=> console.log(valor))

// const util = require('util');
// const fs = require('fs');

//  return new Promise((resolve, reject)=>{
//      if(err){
//          reject(err)

//      }else{

//      }
//  })
// const readFile = util.promisify(fs.readFile)
// readFile('README.md','utf8').then(data => console.log(data))
//==============//

