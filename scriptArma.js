const armas = {
    espada: {
        nome: "Espada",
        descricao: "Uma espada afiada feita de aço.",
        imagem: "img/espada.jpg", // Substitua com uma URL real da imagem
        dano: "1d12",
        tipo: "Corpo a Corpo",
        usaMana: "Não",
        tipoDano: "Corte",
        dadoCritico: "19-20/x2",
        alcance: "Corpo a Corpo",
        atkAdicional: "+2",
        valor: "50 PO",
        danoAtributo: "Força"
    },
    arco: {
        nome: "Arco",
        descricao: "Um arco longo com flechas de penas.",
        imagem: "https://example.com/bow.jpg", // Substitua com uma URL real da imagem
        dano: "1d6",
        tipo: "À Distância",
        usaMana: "Não",
        tipoDano: "Perfuração",
        dadoCritico: "20/x3",
        alcance: "18 metros",
        atkAdicional: "+1",
        valor: "30 PO",
        danoAtributo: "Destreza"
    },
    cajado: {
        nome: "Cajado",
        descricao: "Um cajado mágico com poderes místicos.",
        imagem: "https://example.com/staff.jpg", // Substitua com uma URL real da imagem
        dano: "1d4",
        tipo: "Mágico",
        usaMana: "Sim",
        tipoDano: "Mágico",
        dadoCritico: "20/x2",
        alcance: "9 metros",
        atkAdicional: "+0",
        valor: "100 PO",
        danoAtributo: "Inteligência"
    }
};

// Função para atualizar os detalhes da arma
function atualizarDetalhesArma(arma) {
    document.getElementById('nomeArma').innerText = arma.nome;
    document.getElementById('imagemArma').src = arma.imagem;
    document.getElementById('imagemArma').alt = arma.nome;
    document.getElementById('descricaoArma').innerText = arma.descricao;
    document.getElementById('danoArma').innerText = arma.dano;
    document.getElementById('tipoArma').innerText = arma.tipo;
    document.getElementById('manaArma').innerText = arma.usaMana;
    document.getElementById('tipoDano').innerText = arma.tipoDano;
    document.getElementById('dadoCritico').innerText = arma.dadoCritico;
    document.getElementById('alcance').innerText = arma.alcance;
    document.getElementById('atkAdicional').innerText = arma.atkAdicional;
    document.getElementById('valor').innerText = arma.valor;
    document.getElementById('danoAtributo').innerText = arma.danoAtributo;

    document.getElementById('detalhesArma').style.display = 'block';
}

document.getElementById('armaSelect').addEventListener('change', function() {
    const armaSelecionada = this.value;
    const detalhesArmaDiv = document.getElementById('detalhesArma');

    if (armaSelecionada) {
        const arma = armas[armaSelecionada];
        atualizarDetalhesArma(arma);
    } else {
        detalhesArmaDiv.style.display = 'none';
    }
});

document.getElementById('pesquisaArma').addEventListener('input', function() {
    const termoPesquisa = this.value.toLowerCase();

    const opcoesArmas = document.querySelectorAll('#armaSelect option');
    opcoesArmas.forEach(opcao => {
        const nomeArma = opcao.textContent.toLowerCase();
        if (nomeArma.includes(termoPesquisa)) {
            opcao.style.display = 'block';
        } else {
            opcao.style.display = 'none';
        }
    });
});
