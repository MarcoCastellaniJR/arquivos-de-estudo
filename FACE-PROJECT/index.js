const chalk = require('chalk')
const inquirer = require('inquirer')
const fs = require('fs')

// Criar um sistema de conta com registro de transações por ID
// Dado validador vai ser ID
// Pedir nome, data de nascimento e senha de 4 digitos
// Cada registro vai ser as transações
// O usuário pode pedir para ler todas as transações
// Todas as contas vão ter uma linha de crédito baseada nas transações
// Isso será baseado em uma pontuação que começa com value 1000
// caso ele faça várias transações e mantenha o valor alto ele vai ganhando pontos
// Caso ele fique com valor zerado ele perde a linha de crédito
// A linha de crédito pode ser o valor que ele tem conta
// caso ele tente usar o credito e retirar o dinheiro ele não pode 
// pois o dinheiro é uma segurança do banco para não ter prejuízos




// Questions that we'll use for the User
const login = [{
    type: 'list',
    name: 'userAction',
    message: 'Você vai acessar um Cliente ja cadastrado ou Vai Cadastrar um nove cliente?',
    choices: [
        'Login com cliente já Existente',
        'Cadastrar novo cliente',
        'Login as Admin',
        'Sair'
    ]
}]
const loginAdmin =[{
    type:'list',
    name:'userAction',
    message:'O que você deseja fazer hoje?',
    choices: [
        'Consultar saldo geral do banco',
        'Verificar se tem cliente Devedor',
        'Verificar lista de cliente',
        'Modificar informação de algum cliente',
        'Voltar para Home'
    ]
}]
const intro = [{
    type: 'list',
    name: 'userAction',
    message: 'O que você deseja fazer hoje?',
    choices:[
        'Consultar Saldo',
        'Consultar Crédito',
        'Realizar Saque',
        'Realizar Deposito',
        'Realizar Saque Credito',
        'Realizar Transferencia',
        'Cancelar Conta',
        'Cancelar Ação',
        'Voltar para Home'
        ]
}]
const newC = [{
    type:'input',
    name: 'cName',
    message: 'Digite o seu nome completo'
    },{
        type: 'input',
        name: 'cID',
        message: 'Digite o seu nmr de CPF'
    },{
        type: 'input',
        name: 'cStreet',
        message: 'Digite o seu endereço'
    }
]
const justLogin = [{
    type:'input',
    name:'idClient',
    message: 'Digite seu CPF para logar'
}]



// Start the system
systemLogin()

function systemLogin(){
    inquirer.prompt(login).then(answer =>{
        let action = answer['userAction']
        console.log(action);
        if(action === 'Login com cliente já Existente'){
            loginSystemBased()
        }
        if(action === 'Cadastrar novo cliente'){
            newClient()
        }
        if(action === 'Login as Admin'){
            adminLogin()
        }
        if(action === 'Sair'){
            process.exit()
        }
    }).catch(err => console.log(err))
}

//    LOGIN ON THE SYSTEM
function loginSystemBased(){
    inquirer.prompt(justLogin).then(answer => {
        const idUser = answer['idClient']
        if(!checkClient(idUser)){
            console.log("You dont have an Account with this ID");
            return loginSystemBased()
        }


        clientLogin(idUser)
    }).catch(err => console.log(err))
}

// LOGIN PARA TELA DO CLIENTE
function clientLogin(userCPF){
    inquirer.prompt(intro).then(answer => {
        let actionIntro = answer['userAction']
        const objectUser = userOBJ(`id-client/${userCPF}.json`)

        if(actionIntro === 'Consultar Saldo'){
            console.log(`Olá ${objectUser.name}`);
            console.log(chalk.green(`You have R$${objectUser.balance} in your balance now.`))
            clientLogin()
        }
        if(actionIntro === 'Consultar Crédito'){}
        if(actionIntro === 'Realizar Saque'){
            takeMoney()
            function takeMoney(){
                console.log(`Hello ${objectUser.name}, you have ${objectUser.balance} on your account`)
                inquirer.prompt([{
                    type:'input',
                    name:'amount',
                    message:'How much money you will take??'
                }])
                .then((answer) => {
                    const amount = answer['amount']
                    if(!amount || isNaN(amount)){return takeMoney()}
                    if(amount > objectUser.balance){
                        console.log(chalk.red(`You don't have this amount, choose a value smaller then ${objectUser.balance}`))
                        return takeMoney()
                    }
                    objectUser.balance = objectUser.balance-amount;
                    const updateUser = JSON.stringify(objectUser)
                    fs.writeFileSync(`id-client/${userCPF}.json`,updateUser,'utf8')
                    registerBalance(userCPF,'LESS-',amount)
                    console.log(`Now you have R$${objectUser.balance} on your account`)
                    systemLogin()
                })
                .catch()
            }
        }
        if(actionIntro === 'Realizar Deposito'){
            money()
            function money (){
                inquirer.prompt([{
                    type: 'input',
                    name:'amount',
                    message:`Quanto você deseja adicionar a conta ${objectUser.name}??`
                }])
                .then((answer) => {
                    const amount = answer['amount']
                    if(!amount || isNaN(amount)){return money()}
                    objectUser.balance = parseFloat(objectUser.balance) + parseFloat(amount);
                    const updateUser = JSON.stringify(objectUser)
                    fs.writeFileSync(`id-client/${userCPF}.json`,updateUser,'utf8')
                    registerBalance(userCPF,'ADD++',amount)
                    console.log(`Now you have R$${objectUser.balance} on your account`)
                    systemLogin()
                })
                .catch((err) => console.log(err))
            }
        }
        if(actionIntro === 'Realizar Saque Credito'){}
        if(actionIntro === 'Realizar Transferencia'){
            transfer()
            function transfer() {
                inquirer.prompt([{
                    type: 'input',
                    name: 'sendTo',
                    message: 'Type the document for who you want send the money'
                }])
                .then((answer) => {
                    const doc = answer['sendTo']
                    if(!doc || isNaN(doc)){
                        console.log(chalk.red("You don't write anithing or is not a Number"));
                        return transfer()
                    }
                    if(!checkClient(doc)){
                        console.log(chalk.red("User not in our Data-based"));
                        return transfer()
                    }
                    if(doc === userCPF){
                        console.log(chalk.red(`You can't send money to yourself`))
                    }
                    moneyTransfer()
                    function moneyTransfer() {
                        inquirer.prompt([{
                            type: 'input',
                            name:'amount',
                            message:'How much money do you want to send?'
                        }])
                        .then((answer) => {
                            const amount = answer['amount']
                            if(!amount || isNaN(amount)){
                                console.log(chalk.red("You don't write anithing or is not a Number"));
                                moneyTransfer()
                            }
                            if(amount > objectUser.balance){
                                console.log(chalk.red(`You don't have this amount, choose a value smaller then ${objectUser.balance}`))
                            }
                            const objectUserTransfer = userOBJ(`id-client/${doc}.json`)
                            objectUser.balance = parseFloat(objectUser.balance) - parseFloat(amount)
                            objectUserTransfer.balance = parseFloat(objectUserTransfer.balance) + parseFloat(amount)
                            const updateSender = JSON.stringify(objectUser)
                            const updateReceiver = JSON.stringify(objectUserTransfer)
                            fs.writeFileSync(`id-client/${userCPF}.json`,updateSender,'utf8')
                            fs.writeFileSync(`id-client/${doc}.json`,updateReceiver,'utf8')
                            registerTransation(userCPF, doc, amount)
                            console.log(chalk.green(`You ${objectUser.name} just send R$${amount} for ${objectUserTransfer.name}`))
                            systemLogin()
                        }).catch(err => console.log(err))
                        
                        
                    }
                    
                })
                .catch(err => console.log(err))
            }
        }
        if(actionIntro === 'Cancelar Conta'){}
        if(actionIntro === 'Cancelar Ação'){}

        if(actionIntro === 'Voltar para Home'){
            systemLogin()
        }
        })
        }
        
//  LOGIN ADMIN        
function adminLogin(){
    inquirer.prompt(loginAdmin).then(answer => {
        let actionAdmin = answer['userAction']
        
        if(actionAdmin === 'Consultar saldo geral do banco'){}
        if(actionAdmin === 'Verificar se tem cliente Devedor'){}
        if(actionAdmin === 'Verificar lista de cliente'){}
        if(actionAdmin === 'Modificar informação de algum cliente'){}
        if(actionAdmin === 'Voltar para Home'){
            systemLogin()
        }
    })
}
function newClient(){
    inquirer.prompt(newC).then(answer => {
        let userName = answer['cName']
        let userCPF = answer['cID']
        let userStreet = answer['cStreet']
        newClientFile(userName,userCPF,userStreet)
    })
}
// Crearted IDS/HIST/REGISTER
function newClientFile(clientName, clientCPF,clientAdress){
    if(!fs.existsSync('id-client')){
        fs.mkdirSync('id-client')
    }
    if(checkClient(clientCPF)){
        console.log("Esse cliente Já existe");
        return systemLogin();
    }
    fileSubject = `{
    "name":"${clientName}",
    "cpf":${clientCPF},
    "adress":"${clientAdress}",
    "balance":0
}`
    fs.writeFileSync(`id-client/${clientCPF}.json`,fileSubject, function (err){console.log(err)})

    systemLogin()
}

// REGISTRATION CLASSES
function registerBalance(userID,typeOperation,amoutUsed){
    let stringtoRegister = `ID:${userID} - Mov:${typeOperation} - Amount:${amoutUsed}`;
    takeRegister(stringtoRegister)

}

function registerTransation(takeUserID,receiverUserID,amoutMoney){
    let stringRegister = `===>> SendID:${takeUserID} ==>> AmountMoney:${amoutMoney} ==>> ReceiverID<-${receiverUserID} `
    takeRegister(stringRegister)
}



function takeRegister(fileRegister){
    if(!fs.existsSync(`BANKREGISTER/register.json`)){
        fs.writeFileSync(`BANKREGISTER/register.json`,"=",function (err){console.log(err)})
    }
    fs.appendFileSync(`BANKREGISTER/register.json`,`\n=> ${fileRegister}`,function (err){console.log(err)})

}


// check if client Exist
function checkClient(clientCPF){
    if(fs.existsSync(`id-client/${clientCPF}.json`)){
        return true
    }else{
        return false
    }
}
// Converter JSON to Object
function userOBJ(filePath){
    try{
        const dataUser = fs.readFileSync(filePath, {encoding:'utf8'})// read file content
        const jsonUser = JSON.parse(dataUser)
        return jsonUser;
    }
    catch(err){
        console.log(err);
    }
}


// Valid ID Client
