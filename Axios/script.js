// O que é Axis??
// Uma biblioteca JavaScript para Requisições HTTP
// Axios é PromiseBased, ou seja, retorna promessas de suas funções
// torna muito mais simples o trabalho com apis e requisições assincronas
//muito utilizado nas empresas
// apesar disso, perdeu muita notoriedade para o recurso de fetch da JS

// para instalar o axios basta copiar o link de script externo para o nosso rojeto
// o link da documentação é https://axios-http.com/
// em projetos que utilizamos bibliotecas e frameworks, utilizamos o npm para instalar o axios

// nosso primeiro request
// para fazer uma requisição pademos utilizar o metodo get, isso vai nos trazer dados de algum local
// é recomendado utilizar o try catch para identificar possiveis erros
// como o axios é baseados em pomises, podemois utilizar as async functions

console.log();

const getData = async() => {
    try{
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users",
            // Definindo os headers
            {
                headers: {
                    "Content-Type": "application/json",

                }
            }
        )
        console.log(response)
        return response.data
    }catch(error){
        console.log(error)
    }
}
//getData()

// Exibindo os dados na tela
// Após um request é comun exibir os dados na tela;
// podemos fazer isso juntando a resposta da chamada com os nossos conhecimentos em DOM
// Criar elementos baseado no que veio da requisição

const container = document.querySelector('#nomes')

const printData = async() => {
    try{
        const data = await getData()
        console.log(data)
        data.forEach( (user) => {
            const div = document.createElement('div')
            const nameElement = document.createElement('h2')
            nameElement.textContent = user.username;
            div.appendChild(nameElement);
            container.appendChild(div);
    })
    } catch (error){
        console.log(error)
    }
    
}
printData();

// Configurando os Headers
// Os headers são configurados no moento da requisição
// podemos adicionar parametros adicionaos
// por exemplo determinar o tipo de dado que qeremos


// Requisição de POST
// Para enviar dados vamos utilizar o metodo post
// É necessário configurar a pripriedade body com os ddos a serem enviados

const form = document.querySelector('#post-form')
const titleInput = document.querySelector('#title')
const bodyInput = document.querySelector('#body')

form.addEventListener("submit", (e) => {
    e.preventDefault();
    //axios.post("https://jsonplaceholder.typicode.com/posts",
    postFetch.post("/posts",
    {body:{
        title:titleInput.value,
        body:bodyInput.value,
        userId:1

    }}
        
    )
})

// Global Axios
// Podemos alterar diretamente as configurações do Axios
// isso nos gera uma facilidade de trabalhar com os mesmos parametros em todas as requisições


// Custom instance do Axios
// A custom instance é semelhante a Global Instance
// Pórem aqui temos outras propriedades que são possíveis de configurar, como a baseURL
// Esta estratégia deve ser utilizada para personalização do nosso projeto
// OBS NÃO É RECOMENDADO UTILIZAR AS DUAS INTANCES JUNTAS ( MANUTENÇÃO, CONFIGURAÇÃO EM DOS LOCAIS)


// Interceptors
// interceptors são como middlewares
// ou seja, podemos interceptar a requisição e a resposta
// inserindo algum código entre essas duas opções
