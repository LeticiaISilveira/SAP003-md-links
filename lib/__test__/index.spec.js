
const mdLinks = require('../index.js');
const linksTest =[
  {title: "fs", href:"https://nodejs.org/api/fs.html"},
  {title: "path", href: "https://nodejs.org/api/path.html"} ,
  {title: "CommonJS", href:"https://nodejs.org/docs/latest-v0.10.x/api/modules.html"}
];
  
  describe("mdLinks", () => {
  
    it("is a Function", () => {
      expect(typeof mdLinks).toBe("function");
    });
  
    it("should return 3 links", (done) =>{
      mdLinks("./README.md").then(result =>{
        expect(result).toEqual(linksTest);
        done()
      })
    })
  
    it ("should return an Error ", (done) =>{
      mdLinks("./lib/__tests__/text.txt").catch(error =>{
        expect(error).toEqual("Err: Error: ENOENT: no such file or directory, open './lib/__tests__/text.txt'")
        done()
      })
    })
  
  });
  
