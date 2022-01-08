const fs = require("fs")
const generateHtml = require('../src/generate')



const writeFile = (fileContent) => {
    return new Promise((resolve, reject) => {
      fs.appendFile("./output/team.html", fileContent, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: "file created!",
        });
      });
    });
  };

  module.exports = writeFile
