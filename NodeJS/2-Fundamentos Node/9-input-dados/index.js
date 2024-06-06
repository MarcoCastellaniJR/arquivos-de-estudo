const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Qual a sua linguagem preferida?", (language) => {
    if(language === "Python"){
        console.log(`ESSA MERDA DE ${language}`)
    } else {
        console.log(`A minha lianguagem preferida é ${language}`)
    }
        
    readline.close()
})