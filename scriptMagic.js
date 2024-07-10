const Magias = {
    Cria_Mat: {
        nome: "Criar Matéria",
        descricao: "Esta Magia Permite criar Matéria do nada. Sendo a convocação 'Creare' seguido pela palavra da matéria, como 'Creare Aurum' que cria ouro, enquando mais expecifica a frase melhor o encantamento, como 'Create auream bullet' que cria uma bala de ouro",
        imagem: "#", //Selecionar image.......
        dano: "1d12",
        tipo: "Distância",
        usaMana: "1mp",
        alcance: "200m",
        valor: "50T$",
    },
};

// Função para atualizar os detalhes da Magia
function atualizarDetalhesMagia(Magia) {
    document.getElementById('nomeMagia').innerText = Magia.nome;
    document.getElementById('imagemMagia').src = Magia.imagem;
    document.getElementById('imagemMagia').alt = Magia.nome;
    document.getElementById('descricaoMagia').innerText = Magia.descricao;
    document.getElementById('danoMagia').innerText = Magia.dano;
    document.getElementById('tipoMagia').innerText = Magia.tipo;
    document.getElementById('manaMagia').innerText = Magia.usaMana;
    document.getElementById('alcance').innerText = Magia.alcance;
    document.getElementById('valor').innerText = Magia.valor;
    document.getElementById('detalhesMagia').style.display = 'block';
}

document.getElementById('MagiaSelect').addEventListener('change', function() {
    const MagiaSelecionada = this.value;
    const detalhesMagiaDiv = document.getElementById('detalhesMagia');

    if (MagiaSelecionada) {
        const Magia = Magias[MagiaSelecionada];
        atualizarDetalhesMagia(Magia);
    } else {
        detalhesMagiaDiv.style.display = 'none';
    }
});

document.getElementById('pesquisaMagia').addEventListener('input', function() {
    const termoPesquisa = this.value.toLowerCase();

    const opcoesMagias = document.querySelectorAll('#MagiaSelect option');
    opcoesMagias.forEach(opcao => {
        const nomeMagia = opcao.textContent.toLowerCase();
        if (nomeMagia.includes(termoPesquisa)) {
            opcao.style.display = 'block';
        } else {
            opcao.style.display = 'none';
        }
    });
});
