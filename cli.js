#! /usr/bin/env node
const mdLinks = require('./lib/index.js');
 
const path = process.argv[2]
 
mdLinks(path)
   .then((parametro)=>{
       parametro.forEach(format => console.log(`texto: ${format.titulo }\n link: ${format.link}`))
   })
   .catch(console.error);