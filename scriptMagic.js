const Magias = {
    Cria_Mat: {
        nome: "Criar Matéria",
        descricao: "Esta Magia Permite criar Matéria do nada.",
        imagem: "#", //Selecionar image.......
        dano: "1d12",
        tipo: "Distância",
        usaMana: "1mp",
        tipoDano: "Físico",
        dadoCritico: "20/x3",
        alcance: "200m",
        atkAdicional: "0",
        valor: "50T$",
        danoAtributo: "Pontaria"
    },
    Olhos_Místicos: {
        nome: "Olhos Místicos de Tuatha Dé",
        descricao: "Olhos místicos possados para membros da família Tuatha Dé por meio de uma cirurgia, Passada de geração para geração. Permite determinar a mana, nv e força das coisas e possoas, podendo também ver longas distâncias com facilidade, ganhando proeficiência em percepção e pontaria.",
        imagem: "#", //Selecionar image.......
        dano: "0",
        tipo: "Especial",
        usaMana: "Não",
        tipoDano: "Nenhum",
        dadoCritico: "0",
        alcance: "1,5km",
        atkAdicional: "0",
        valor: "0",
        danoAtributo: "0"
    },
    Gáe_Bolg: {
        nome: "Gáe_Bolg",
        descricao: "Uma das Magias lendárias, capaz de acabar com uma guerra inteira com um unico ataque. Quando ativada e lançada ela atira um bombardeio ao redor que causa 1d4 de dano cada bomba. A ativação desta habilidade gasta 60mp. É necessário ter uma força maior que 50 para poder erguer esta Magia.",
        imagem: "#", //Selecionar image.......
        dano: "1d4/3d12",
        tipo: "Mágico/Perfurante",
        usaMana: "Sim/Não",
        tipoDano: "Mágico/Físico",
        dadoCritico: "18-20/x2",
        alcance: "100m/2m",
        atkAdicional: "0/5",
        valor: "1.250.000T$",
        danoAtributo: "Misticismo/Luta"
    },
    Foice_Grafeno: {
        nome: "Foice de Grafeno",
        descricao: "Uma característica especial desta Magia é a resistência ao calor dela. por conta de seu material, é uma Magia extremamente leve e aguenta uma temperatura de cerca de 3851° C.",
        imagem: "#", //Selecionar image.......
        dano: "1d8",
        tipo: "Cortante",
        usaMana: "Não",
        tipoDano: "Físico",
        dadoCritico: "20/x2",
        alcance: "2m",
        atkAdicional: "0",
        valor: "250T$",
        danoAtributo: "Luta"
    },
    Dead_Rainbow: {
        nome: "Dead end Rainbow",
        descricao: "Contém atributos que a torna super eficaz contra Dragões e Demônios, fazendo todo acerto ser dano crítico",
        imagem: "#", //Selecionar image.......
        dano: "2d12+1d8",
        tipo: "Cortante",
        usaMana: "Não",
        tipoDano: "Físico",
        dadoCritico: "19-20/x2",
        alcance: "2m",
        atkAdicional: "+5",
        valor: "1.550.000T$",
        danoAtributo: "Luta"
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
    document.getElementById('tipoDano').innerText = Magia.tipoDano;
    document.getElementById('dadoCritico').innerText = Magia.dadoCritico;
    document.getElementById('alcance').innerText = Magia.alcance;
    document.getElementById('atkAdicional').innerText = Magia.atkAdicional;
    document.getElementById('valor').innerText = Magia.valor;
    document.getElementById('danoAtributo').innerText = Magia.danoAtributo;

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
