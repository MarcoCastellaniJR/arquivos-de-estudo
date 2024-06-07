const x = "10";

// Checagem se X é um número

if(!Number.isInteger(x)){
    throw new Error("O valor de x não é um número inteiro")
}
console.log("Continuando o código");


try{
    x = 2
} catch(err){
    console.log(`Error:` + err)
}
console.log("Continua o código")