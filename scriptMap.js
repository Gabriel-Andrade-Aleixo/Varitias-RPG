const Lugares = {
    Waterdeep: {
        nome: "Waterdeep",
        descricao: "Conhecida como a Cidade dos Esplendores, é uma das maiores cidades e um centro de comércio.",
        imagem: "#", // Selecionar imagem
        classificacao: "Metrópole",
        localizacao: "Costa da Espada",
        caracteristica: "Centro de comércio e cultura",
    },
    BaldursGate: {
        nome: "Baldur's Gate",
        descricao: "Uma próspera cidade portuária, conhecida por sua riqueza e complexidade política.",
        imagem: "#", // Selecionar imagem
        classificacao: "Cidade Grande",
        localizacao: "Costa da Espada",
        caracteristica: "Complexidade política e riqueza",
    },
    Neverwinter: {
        nome: "Neverwinter",
        descricao: "Também conhecida como a Cidade das Mãos Hábis, famosa por suas obras de arte e arquitetura.",
        imagem: "#", // Selecionar imagem
        classificacao: "Cidade Média",
        localizacao: "Costa da Espada",
        caracteristica: "Artes e arquitetura",
    },
    Silverymoon: {
        nome: "Silverymoon",
        descricao: "Uma cidade de magia, cultura e música, muitas vezes chamada de 'a gema do Norte'.",
        imagem: "#", // Selecionar imagem
        classificacao: "Cidade Pequena",
        localizacao: "Norte de Faerûn",
        caracteristica: "Magia e cultura",
    },
    Menzoberranzan: {
        nome: "Menzoberranzan",
        descricao: "A grande cidade dos drows, localizada no Underdark, conhecida por sua arquitetura impressionante e sociedade cruel.",
        imagem: "#", // Selecionar imagem
        classificacao: "Cidade Subterrânea",
        localizacao: "Underdark",
        caracteristica: "Arquitetura drow e sociedade cruel",
    },
    Undermountain: {
        nome: "Undermountain",
        descricao: "Um enorme complexo de masmorras sob Waterdeep, cheio de perigos e tesouros.",
        imagem: "#", // Selecionar imagem
        classificacao: "Masmorra",
        localizacao: "Sob Waterdeep",
        caracteristica: "Masmorras e tesouros",
    },
};

// Função para atualizar os detalhes do Lugar
function atualizarDetalhesLugar(Lugar) {
    document.getElementById('nomeLugar').innerText = Lugar.nome;
    document.getElementById('imagemLugar').src = Lugar.imagem;
    document.getElementById('imagemLugar').alt = Lugar.nome;
    document.getElementById('descricaoLugar').innerText = Lugar.descricao;
    document.getElementById('classificacaoLugar').innerText = Lugar.classificacao;
    document.getElementById('localizacaoLugar').innerText = Lugar.localizacao;
    document.getElementById('caracteristicaLugar').innerText = Lugar.caracteristica;
    document.getElementById('detalhesLugar').style.display = 'block';
}

document.getElementById('LugarSelect').addEventListener('change', function() {
    const LugarSelecionado = this.value;
    const detalhesLugarDiv = document.getElementById('detalhesLugar');

    if (LugarSelecionado) {
        const Lugar = Lugares[LugarSelecionado];
        atualizarDetalhesLugar(Lugar);
    } else {
        detalhesLugarDiv.style.display = 'none';
    }
});

document.getElementById('pesquisaLugar').addEventListener('input', function() {
    const termoPesquisa = this.value.toLowerCase();

    const opcoesLugares = document.querySelectorAll('#LugarSelect option');
    opcoesLugares.forEach(opcao => {
        const nomeLugar = opcao.textContent.toLowerCase();
        if (nomeLugar.includes(termoPesquisa)) {
            opcao.style.display = 'block';
        } else {
            opcao.style.display = 'none';
        }
    });
});
