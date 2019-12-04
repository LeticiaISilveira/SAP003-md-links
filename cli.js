#! /usr/bin/env node
const mdLinks = require('./lib/index.js');
 
const path = process.argv[2]
 
mdLinks(path)
   .then((parametro)=>{
       parametro.forEach(format => console.log(`texto: ${format.title }\n link: ${format.href}`))
   })
   .catch(console.error);