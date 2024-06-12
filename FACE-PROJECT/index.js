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
    choice: [
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
    choice: [
        'Consultar saldo geral do banco',
        'Verificar se tem cliente Devedor',
        'Verificar lista de cliente',
        'Modificar informação de algum cliente'
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
        'Cancelar Ação'
        ]
}]