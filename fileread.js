var fs=require("fs");
var path=require("path");
console.log(__dirname);
filename="123.txt";
pathfile=__dirname+"/"+filename;
console.log(">>>BEGIN>>>");
fs.readFile(pathfile,{encoding:"utf-8"},function(err,fr){
           if(err){
               console.log(err);
           }else{
               console.log(fr);
           }
});

console.log(">>>>end>>>>");