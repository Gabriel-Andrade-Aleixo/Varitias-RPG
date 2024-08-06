const Magias = {
    Cria_Mat_Terra: {
        nome: "Criar Matéria (Terra)",
        descricao: "Esta Magia Permite criar Matéria do nada. Sendo a convocação 'Creare' seguido pela palavra da matéria, como 'Creare Aurum' que cria ouro, enquando mais expecifica a frase melhor o encantamento, como 'Create auream bullet' que cria uma bala de ouro",
        imagem: "#", //Selecionar imagem
        dano: "1d12",
        tipo: "Distância",
        usaMana: "1mp",
        alcance: "200m",
    },
    Cria_Mat_Agua: {
        nome: "Criar Matéria (Água)",
        descricao: "Esta Magia Permite criar Água do nada. Sendo a convocação 'Creare' seguido pela palavra da matéria, como 'Creare Aqua' que cria água, enquanto mais expecifica a frase melhor o encantamento, como 'Creare puram aquam' que cria água pura",
        imagem: "#", //Selecionar imagem
        dano: "1d10",
        tipo: "Distância",
        usaMana: "1mp",
        alcance: "200m",
    },
    Cria_Mat_Fogo: {
        nome: "Criar Matéria (Fogo)",
        descricao: "Esta Magia Permite criar Fogo do nada. Sendo a convocação 'Creare' seguido pela palavra da matéria, como 'Creare Ignis' que cria fogo, enquanto mais expecifica a frase melhor o encantamento, como 'Creare ignis flamma' que cria uma chama de fogo",
        imagem: "#", //Selecionar imagem
        dano: "1d12",
        tipo: "Distância",
        usaMana: "1mp",
        alcance: "200m",
    },
    Cria_Mat_Ar: {
        nome: "Criar Matéria (Ar)",
        descricao: "Esta Magia Permite criar Ar do nada. Sendo a convocação 'Creare' seguido pela palavra da matéria, como 'Creare Aer' que cria ar, enquanto mais expecifica a frase melhor o encantamento, como 'Creare ventus' que cria vento",
        imagem: "#", //Selecionar imagem
        dano: "1d8",
        tipo: "Distância",
        usaMana: "1mp",
        alcance: "200m",
    },
    Cria_Mat_Trevas: {
        nome: "Criar Matéria (Trevas)",
        descricao: "Esta Magia Permite criar Trevas do nada. Sendo a convocação 'Creare' seguido pela palavra da matéria, como 'Creare Tenebrae' que cria trevas, enquanto mais expecifica a frase melhor o encantamento, como 'Creare obscuram tenebrae' que cria uma escuridão intensa",
        imagem: "#", //Selecionar imagem
        dano: "1d14",
        tipo: "Distância",
        usaMana: "2mp",
        alcance: "200m",
    },
    Cria_Mat_Luz: {
        nome: "Criar Matéria (Luz)",
        descricao: "Esta Magia Permite criar Luz do nada. Sendo a convocação 'Creare' seguido pela palavra da matéria, como 'Creare Lux' que cria luz, enquanto mais expecifica a frase melhor o encantamento, como 'Creare clara lux' que cria uma luz intensa",
        imagem: "#", //Selecionar imagem
        dano: "1d12",
        tipo: "Distância",
        usaMana: "2mp",
        alcance: "200m",
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
