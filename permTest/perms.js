const fs = require('fs');
const readline = require('readline');
const input = require('readline-sync')

let dataFile = input.question("Which file would you like to use? ")

function findPerms(str) {
  if (str.length === 0) return "";
  if (str.length === 1) return str;
 let result = [];
 for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    for (let j = 0; j < remainingChars.length; j++) {
      result.push(currentChar + findPerms(remainingChars)[j]);
      
    }
  }
  return result
}
function trialFile(trialFile){

  fs.readFile(trialFile, function(err, data) {
    if(err) throw err;
    
    var array = data.toString().split("\n")
    
    for(k in array) {
        
      const source = array[k].split('').sort().join("")
      if(array[k].length == 0 || array[k].length == 1){ console.log(findPerms(source))}
      //else if(array[k].length == 1){console.log(findPerms(source))}
      else{
      console.log(findPerms(source).join())}
      
    }
  
  });
  
}


trialFile(dataFile)