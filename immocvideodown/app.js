var superagent = require("superagent");
var cheerio = require("cheerio");
var fs = require("fs");
var path = require("path");
var pathfile = __dirname + "\/"+"luoshannew.txt";
superagent.get("http://www.luoshan.gov.cn/").then(function (res) {

    let $ = cheerio.load(res.text);
    var filestr="";
    var fileline="";
    for (var i = 0; i < $(".lanmu ul li a").length-1; i++) {
        fileline = $(".lanmu ul li a").eq(i).text()+"\n";
        filestr =filestr+fileline;
      }
     console.log(filestr);
     console.log(pathfile);
    fs.writeFile(pathfile, filestr, function (err) {
        if (err) {
            return console.error(err);
        }});


}).catch(function (err) {
    console.log("err:lis");
    console.log(err.response);
})