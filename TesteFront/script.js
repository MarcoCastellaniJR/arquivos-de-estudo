

function carregarConteudo(url){
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById('header').innerHTML = html;
        })
        .catch(error => console.error("Erro ao carregar o arquivo"))
}

carregarConteudo('header.html')