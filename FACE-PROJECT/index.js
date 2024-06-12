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
        'Realizar deposito',
        'Realizar Saque Credito',
        'Realizar transferencia',
        'Cancelar conta',
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
        
    }).catch(err => console.log(err))
}

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

function clientLogin(userCPF){
    inquirer.prompt(intro).then(answer => {
        let actionIntro = answer['userAction']
        const objectUser = userOBJ(`id-client/${userCPF}.json`)
        if(actionIntro === 'Voltar para Home'){
            systemLogin()
        }
        if(actionIntro === 'Consultar Saldo'){
            console.log(`Olá ${objectUser.name}`);
            console.log(`você tem ${objectUser.balance} de saldo Atualmente`)
            
            clientLogin()
        }
        })
        }
        
        
function adminLogin(){
    inquirer.prompt(loginAdmin).then(answer => {
        let actionAdmin = answer['userAction']
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
        const dataUser = fs.readFileSync(filePath, 'utf8')// read file content
        const jsonUser = JSON.parse(dataUser)
        return jsonUser;
    }
    catch(err){
        console.log(err);
    }
}


// Valid ID Client
