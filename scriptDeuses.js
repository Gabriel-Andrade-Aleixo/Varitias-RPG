const Deuses = {
    Bahamut: {
        nome: "Bahamut",
        descricao: "Deus dos dragões bons, associado com a justiça e a proteção.",
        imagem: "#", // Selecionar imagem
        poder: "Proteção divina e justiça",
        dominio: "Justiça e Nobreza",
        simbolo: "Dragão de platina",
    },
    Moradin: {
        nome: "Moradin",
        descricao: "Deus dos anões, da criação e da forja.",
        imagem: "#", // Selecionar imagem
        poder: "Mestre da forja e da criação",
        dominio: "Forja e Criação",
        simbolo: "Martelo e bigorna",
    },
    Pelor: {
        nome: "Pelor",
        descricao: "Deus do sol, da cura e da força.",
        imagem: "#", // Selecionar imagem
        poder: "Cura e luz divina",
        dominio: "Sol e Cura",
        simbolo: "Sol radiante",
    },
    Lolth: {
        nome: "Lolth",
        descricao: "Deusa dos drows, das aranhas e do caos.",
        imagem: "#", // Selecionar imagem
        poder: "Controle das aranhas e manipulação",
        dominio: "Aranhas e Caos",
        simbolo: "Aranha negra",
    },
    Tiamat: {
        nome: "Tiamat",
        descricao: "Deusa dos dragões malignos, associada com a ganância e o poder.",
        imagem: "#", // Selecionar imagem
        poder: "Poder dracônico e destruição",
        dominio: "Ganância e Poder",
        simbolo: "Dragão de cinco cabeças",
    },
    Corellon: {
        nome: "Corellon",
        descricao: "Deus dos elfos, da magia e das artes.",
        imagem: "#", // Selecionar imagem
        poder: "Magia e artes divinas",
        dominio: "Magia e Artes",
        simbolo: "Estrela e lua crescente",
    },
};

// Função para atualizar os detalhes do Deus
function atualizarDetalhesDeus(Deus) {
    document.getElementById('nomeDeus').innerText = Deus.nome;
    document.getElementById('imagemDeus').src = Deus.imagem;
    document.getElementById('imagemDeus').alt = Deus.nome;
    document.getElementById('descricaoDeus').innerText = Deus.descricao;
    document.getElementById('poderDeus').innerText = Deus.poder;
    document.getElementById('dominioDeus').innerText = Deus.dominio;
    document.getElementById('simboloDeus').innerText = Deus.simbolo;
    document.getElementById('detalhesDeus').style.display = 'block';
}

document.getElementById('DeusSelect').addEventListener('change', function() {
    const DeusSelecionado = this.value;
    const detalhesDeusDiv = document.getElementById('detalhesDeus');

    if (DeusSelecionado) {
        const Deus = Deuses[DeusSelecionado];
        atualizarDetalhesDeus(Deus);
    } else {
        detalhesDeusDiv.style.display = 'none';
    }
});

document.getElementById('pesquisaDeus').addEventListener('input', function() {
    const termoPesquisa = this.value.toLowerCase();

    const opcoesDeuses = document.querySelectorAll('#DeusSelect option');
    opcoesDeuses.forEach(opcao => {
        const nomeDeus = opcao.textContent.toLowerCase();
        if (nomeDeus.includes(termoPesquisa)) {
            opcao.style.display = 'block';
        } else {
            opcao.style.display = 'none';
        }
    });
});
