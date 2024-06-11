// modulos externos 
const inquirer = require('inquirer')
const chalk = require('chalk')

// Modulos Internos
const fs = require('fs')

console.log("Iniciamos o Accounts");



const questions = [
    {
        type: 'list',
        name: 'action',
        message: 'Oque você deseja fazer?',
        choices: [
            'Criar conta',
            'Consultar saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ]
    }
];
start()
function start(){
    inquirer.prompt(questions).then(answers => {
        const action = answers['action']
        console.log('Resposta:', answers.action);
        if(action === 'Criar conta'){
            createAccount()
        }
        else if(action === 'Consultar saldo'){
            getBalance()
        }
        else if(action === 'Depositar'){
            deposit()
        }
        else if(action === 'Sacar'){
            getMoney()
        }
        else if(action === 'Sair'){
            console.log(chalk.bgBlue.black(`Obrigado por usar o Accounts!!!`));
            process.exit()
        }
    })
}


// Create an Account
function createAccount(){
    console.log(chalk.bgGreen.black("Parabéns por escolher o nosso banco!"))
    console.log(chalk.green("Defina as opções da sua conta a seguir"));
    buildAccount()
}

function buildAccount(){
    inquirer.prompt([{
        name: 'accountName',
        message: 'Digite o seu nome para a sua Conta'
    }]).then(answer => {
        let accountName = answer['accountName']
        console.info(accountName);
        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
        }
        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black("Usuário já tem uma conta criada"));
            buildAccount();
            return;
        }
        fs.writeFileSync(`accounts/${accountName}.json`, `{"balance":0}`, function(err){
            console.log(err);
            })
        console.log(chalk.green(`Parabéns, a conta foi criada no nome ${accountName}`));
        start()
    }).catch(err => console.log(err))
}

// Add an amount to user account
function deposit(){
    inquirer.prompt([{
        name:'accountName',
        message:'Qual o nome da sua conta?'
    }])
    .then((answer)=>{
        let accountName = answer['accountName']
        if(!checkAccount(accountName)){
            return deposit()
        }
        inquirer.prompt([{
            name: 'amount',
            message:'Quanto você deseja Depositar?'
        }])
        .then((answer) =>{
            const amount = answer['amount']
            //add an amount
            addAmount(accountName,amount)
            start()
        })
        .catch(err => console.log(err))


    })
    .catch(err => console.log(err))
}

function checkAccount(accountName){
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black("Usuário Não tem uma conta criada"));
        return false
    }else{
        return true
    }
}

function addAmount(accountName,amount){
    const account = getAccount(accountName)
    if(!amount){
        console.log(chalk.bgRed.black("Ocorreu um erro, tente novamente mais tarde"));
        return deposit()
    }
    account.balance = parseFloat(amount) + parseFloat(account.balance)
    fs.writeFileSync(`accounts/${accountName}.json`,
        JSON.stringify(account)
    )
    console.log(chalk.bgGreen(`Foi adicionado o valor de R$:${amount} na sua conta`));
    console.log(chalk.bgGreen(`Agora sua conta tem R$:${account.balance}`));
}


function getAccount(accountName){
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`,{
        encoding: 'utf8',
        flag: 'r'
    })
    return JSON.parse(accountJSON)
}


function removeMoney(accountName, amount) {
    const account = getAccount(accountName)
    
    if(account.balance < amount){
        console.log(chalk.bgRed(`You don't have this amount of money`))
        return amountRemove(accountName)
    }
    account.balance = parseFloat(account.balance) - parseFloat(amount)
    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(account))
    console.log(chalk.bgYellow(`You had took $${amount} from you bank Account`))
    console.log(chalk.bgGreen(`Now you have $${account.balance} on your Bank Account`))
    start()
}



function getBalance(){
    inquirer.prompt([{
        name:'accountName',
        message:'Qual o nome da Conta?'
    }])
    .then((answer) => {
        if(!checkAccount(answer.accountName)){
            return getBalance()
        }
        const value = getAccount(answer.accountName)
        console.log(chalk.blue(`You have D$${value.balance} on your Account`));
        return start()
    })
    .catch(err => console.log(err))
}

function getMoney(){
    inquirer.prompt([{
        name:'accountName',
        message:'Qual o nome da Conta?'
    }])
    .then((answer) => {
        const accountData = answer['accountName']
        if(!checkAccount(accountData)){
            return getMoney()
        }
        amountRemove(accountData)
            
        
    })
    .catch(err => console.log(err))
}

function amountRemove(accountData){
    inquirer.prompt([
        {
            name:'amount',
            message:'Quando você deseja retirar?'
        }
    ])
    .then((answer) => {
        const amount = answer['amount']
        if(!amount){
            console.log(chalk.bgRed.black("Ocorreu um erro, tente novamente mais tarde--"));
            console.log(amount);
            return amountRemove()
        }
        removeMoney(accountData, amount)
    })
    .catch(err => console.log(err))
}