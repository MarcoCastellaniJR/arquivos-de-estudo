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
            console.log(`você tem R$${objectUser.balance} de saldo Atualmente`)
            clientLogin()
        }
        if(actionIntro === 'Consultar Crédito'){}
        if(actionIntro === 'Realizar Saque'){}
        if(actionIntro === 'Realizar Deposito'){
            console.log("primeiro");
            console.log(objectUser.balance);
            objectUser.balance = objectUser.balance + 10;
            const updateUser = JSON.stringify(objectUser)
            fs.writeFileSync(`id-client/${userCPF}.json`,updateUser,'utf8')
            console.log(`Segundo${objectUser.balance}`);
            console.log(objectUser.balance);
        }
        if(actionIntro === 'Realizar Saque Credtio'){}
        if(actionIntro === 'Realizar Transferencia'){}
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


function registerBalance(userID,typeOperation,amoutUsed){
    let stringtoRegister = `ID:${userID} - Mov:${typeOperation} - Amount:${amoutUsed}`;
    takeRegister(stringtoRegister)

}

function registerTransation(takeUserID,receiverUserID,amoutMoney){
    let stringRegister = `SendID:${takeUserID} ReceiverID<-${receiverUserID} - AmountMoney:${amoutMoney}`
    takeRegister(stringRegister)
}



function takeRegister(){
    if(!fs.existsSync(`BANKREGISTER/register.json`)){
        fs.writeFileSync(`BANKREGISTER/register.json`,"=",function (err){console.log(err)})
    }
    fs.appendFileSync(`BANKREGISTER/register.json`,`\n=${fileRegister}`,function (err){console.log(err)})

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
