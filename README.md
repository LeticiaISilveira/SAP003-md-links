# Markdown Links

É uma biblioteca cuja função é extrair links de um arquivo com formato markdown (.md) e retornar um array de objetos contendo o título e o link.

## Índice

* [1. O que é Markdown](#1-oque-é-markdown)
* [2. Como instalar](#2-como-instalar)
* [3. Como utilizar](#3-como-utilizar)
* [4. Roadmap oficial do projeto](#4-roadmap)


***

## 1. O que é Markdown

Arquivos markdown possuem a extensão .md , esse tipo de arquivo foi desenvolvido em 2004, por John Gruber e Aaron Swartz, para simplificar a estruturação de um texto, o Markdown é um sistema de formatação aberto que torna a escrita e a leitura mais simples. Com uma codificação mínima, além de fácil, ele é visualmente mais "limpo" e pode ser convertido facilmente para HTML. O markdown marca alterações nos textos (subtítulos, negrito, itálico etc) apenas com os símbolos do teclado, sem usar teclas de atalho, menus, selecionando o texto e sem aquele visual complexo - para os que não estão acostumados - de HTML.

## 2. Como instalar
1-Para executar esta biblioteca você deverá ter o node e npm instalados.

2- Para a instalação, digite em seu terminal: 
`npm install https://github.com/LeticiaISilveira/SAP003-md-links`


## 3. Como utilizar
$ md-links exemplo.md

$ node
> const links = require("md-links");
> console.log(links.mdLinks('[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação'))
> // returns [{texto: Markdown , link: https://pt.wikipedia.org/wiki/Markdown }];

## 4. Roadmap oficial do projeto

versão 1.0.0 (released)
funcionalidade: extração de links de um arquivo markdown;
