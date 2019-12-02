const fs = require("fs");

const mdLinks = (file) => {
  const links = /\[(.+?)\]\((http[s]?:\/\/[^\)]*)\)/g;
  const result = [];

  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        reject(`Err: ${err}`);

      } else {
        const regex = data.match(links);
        regex.map((index) => {
          const title = index.match(/\[(.+?)\]/)[1];
          const href = index.match(/\((http[s]?:\/\/[^\)]*)\)/)[1];
          result.push({ title, href });
        });
            
        resolve(result);
      }
    });
  });
};

mdLinks("README.md").then(console.log);