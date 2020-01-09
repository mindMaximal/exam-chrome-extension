const fs = require('fs');

const questionsBank = require("./db-07.01.20.js");
//let questionsBank = require("./db.1.json");

console.log(questionsBank.size);

let index = 0;

for (let i = 0; i < questionsBank.length; i++) {
    //console.log(i + " -- " + questionsBank[i].text);
    
    //console.log(questionsBank[i].text + "\n");
    questionsBank[i].text = questionsBank[i].text.replace(/\%.*?\%|(\%)|\»|\«|•\s|\&\;|\<|\>|br|&nbsp;|\“|\”|$|\_|\s$|\s\Z|\.$|\:|\;|\.\Z/g, "")
                                                    .replace(/\.$|\.\Z/g, "")
                                                    .replace(/\s\,/g, ",")
                                                    .replace(/\s-\s|\-|\-\s|\n|\\|\//g, " ")
                                                    .replace(/\s\;/g, ";")
                                                    .replace(/\s\./g, ".")
                                                    .replace(/\s\s|\s\s\s|\s\s\s\s|\s\s\s\s\s/g, " ")
                                                    .replace(/\s\s|\s\s\s|\s\s\s\s|\s\s\s\s\s/g, " ");
                                                

    for (let j = 0; j < questionsBank[i].answers.length; j++) {   
        //console.log("\n\t" + j);
        questionsBank[i].answers[j][0] = questionsBank[i].answers[j][0].replace(/\%.*?\%|(\%)|\(.*?\)|\(|\)|\»|\«|\;|\.|\,\Z|\,$|br|&nbsp;|\“|\”|\•|\.$/g, "")
                                                                        .replace(/\s\,/g, ",")
                                                                        .replace(/\s\;/g, ";")
                                                                        .replace(/\s\./g, ".")
                                                                        .replace(/\-|\s–\s|\s\s/g, " ")
                                                                        .replace(/\ё/g, "е")
                                                                        .replace(/\s$|\s\s|\s\Z|\.$/g, "");
                                
    }  

    index = i;
}

const fileOut = JSON.stringify(questionsBank, null, 4);

fs.writeFileSync('./db.1.json', fileOut);

console.log(index);
