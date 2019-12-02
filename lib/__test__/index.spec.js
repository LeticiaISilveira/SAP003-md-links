const mdLinks = require('../index.js');

const arr =[
{link: "", titulo: ""} ,
]

describe("mdLinks", () => {

  it("is a Function", () => {
    expect(typeof mdLinks).toBe("function");
  });

  it("", (done) =>{
    mdLinks("./lib/__tests__/README.md").then(result =>{
      expect(result).toEqual(arr);
      done()
    })
  })


});
