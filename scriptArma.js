const armas = {
    Rifle_M1A: {
        nome: "Rifle_M1A",
        descricao: "Rifle M1A com cano de 16 polegadas.",
        imagem: "#", // Selecionar imagem
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
        descricao: "Olhos místicos passados para membros da família Tuatha Dé por meio de uma cirurgia, passados de geração para geração. Permite determinar a mana, nível e força das coisas e pessoas, podendo também ver longas distâncias com facilidade, ganhando proficiência em percepção e pontaria.",
        imagem: "#", // Selecionar imagem
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
        nome: "Gáe Bolg",
        descricao: "Uma das armas lendárias, capaz de acabar com uma guerra inteira com um único ataque. Quando ativada e lançada, ela atira um bombardeio ao redor que causa 1d4 de dano cada bomba. A ativação desta habilidade gasta 60mp. É necessário ter uma força maior que 50 para poder erguer esta arma.",
        imagem: "#", // Selecionar imagem
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
        descricao: "Uma característica especial desta arma é a resistência ao calor. Por conta de seu material, é uma arma extremamente leve e aguenta uma temperatura de cerca de 3851° C.",
        imagem: "#", // Selecionar imagem
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
        descricao: "Contém atributos que a tornam super eficaz contra Dragões e Demônios, fazendo todo acerto ser dano crítico.",
        imagem: "#", // Selecionar imagem
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
    Sabre_De_Luz: {
        nome: "Sabre de luz",
        descricao: "Consiste em uma empunhadura de metal polido, que projeta uma lâmina de energia iluminada, geralmente com cerca de 1,22 metros de comprimento.",
        imagem: "#", // Selecionar imagem
        dano: "1d10+1d4",
        tipo: "Cortante",
        usaMana: "Não",
        tipoDano: "Físico",
        dadoCritico: "19-20/x2",
        alcance: "2m",
        atkAdicional: "+3",
        valor: "1.200.000T$",
        danoAtributo: "Luta/Misticismo"
    },
    Sabre_Negro: {
        nome: "Sabre Negro",
        descricao: "Uma arma poderosa envolta em mistério e trevas. Conhecida por sua capacidade de absorver a energia dos inimigos.",
        imagem: "#", // Selecionar imagem
        dano: "1d10+2",
        tipo: "Cortante",
        usaMana: "Sim",
        tipoDano: "Místico/Físico",
        dadoCritico: "19-20/x2",
        alcance: "2m",
        atkAdicional: "+4",
        valor: "1.300.000T$",
        danoAtributo: "Luta/Misticismo"
    },
    Espada_Ferro: {
        nome: "Espada de Ferro",
        descricao: "Uma espada comum feita de ferro, usada por muitos guerreiros devido à sua durabilidade e eficácia.",
        imagem: "#", // Selecionar imagem
        dano: "1d8",
        tipo: "Cortante",
        usaMana: "Não",
        tipoDano: "Físico",
        dadoCritico: "20/x2",
        alcance: "1m",
        atkAdicional: "0",
        valor: "100T$",
        danoAtributo: "Luta"
    },
    Arc_comum: {
        nome: "Arco Comum",
        descricao: "Um arco básico usado para caçar e combate a distância.",
        imagem: "#", // Selecionar imagem
        dano: "1d6",
        tipo: "Perfurante",
        usaMana: "Não",
        tipoDano: "Físico",
        dadoCritico: "20/x3",
        alcance: "100m",
        atkAdicional: "0",
        valor: "75T$",
        danoAtributo: "Pontaria"
    },
    Espada_Longa: {
        nome: "Espada Longa",
        descricao: "Uma espada clássica, usada por cavaleiros e aventureiros.",
        imagem: "#", // Selecionar imagem
        dano: "1d8",
        tipo: "Cortante",
        usaMana: "Não",
        tipoDano: "Físico",
        dadoCritico: "19-20/x2",
        alcance: "1m",
        atkAdicional: "0",
        valor: "15gp",
        danoAtributo: "Força"
    },
    Machadinha: {
        nome: "Machadinha",
        descricao: "Um pequeno machado, fácil de manejar e usar em combate corpo a corpo.",
        imagem: "#", // Selecionar imagem
        dano: "1d6",
        tipo: "Cortante",
        usaMana: "Não",
        tipoDano: "Físico",
        dadoCritico: "20/x2",
        alcance: "1m",
        atkAdicional: "0",
        valor: "5gp",
        danoAtributo: "Força"
    },
    Maça: {
        nome: "Maça",
        descricao: "Uma arma contundente usada para esmagar o inimigo.",
        imagem: "#", // Selecionar imagem
        dano: "1d6",
        tipo: "Contundente",
        usaMana: "Não",
        tipoDano: "Físico",
        dadoCritico: "20/x2",
        alcance: "1m",
        atkAdicional: "0",
        valor: "5gp",
        danoAtributo: "Força"
    },
    Arco_Longo: {
        nome: "Arco Longo",
        descricao: "Um arco de grande alcance, usado para atacar inimigos à distância.",
        imagem: "#", // Selecionar imagem
        dano: "1d8",
        tipo: "Perfurante",
        usaMana: "Não",
        tipoDano: "Físico",
        dadoCritico: "20/x3",
        alcance: "150m",
        atkAdicional: "0",
        valor: "50gp",
        danoAtributo: "Destreza"
    },
    Martelo_de_Guerra: {
        nome: "Martelo de Guerra",
        descricao: "Um martelo grande e pesado, usado para causar danos devastadores.",
        imagem: "#", // Selecionar imagem
        dano: "1d10",
        tipo: "Contundente",
        usaMana: "Não",
        tipoDano: "Físico",
        dadoCritico: "19-20/x2",
        alcance: "1m",
        atkAdicional: "0",
        valor: "15gp",
        danoAtributo: "Força"
    },
    Besta_Leve: {
        nome: "Besta Leve",
        descricao: "Uma besta pequena e fácil de carregar, ideal para ataques rápidos.",
        imagem: "#", // Selecionar imagem
        dano: "1d8",
        tipo: "Perfurante",
        usaMana: "Não",
        tipoDano: "Físico",
        dadoCritico: "19-20/x2",
        alcance: "80m",
        atkAdicional: "0",
        valor: "25gp",
        danoAtributo: "Destreza"
    },
    Espada_Curta: {
        nome: "Espada Curta",
        descricao: "Uma espada leve e rápida, ideal para combates próximos.",
        imagem: "#", // Selecionar imagem
        dano: "1d6",
        tipo: "Cortante",
        usaMana: "Não",
        tipoDano: "Físico",
        dadoCritico: "19-20/x2",
        alcance: "1m",
        atkAdicional: "0",
        valor: "10gp",
        danoAtributo: "Destreza"
    },
    Machado_Grande: {
        nome: "Machado Grande",
        descricao: "Um machado pesado, usado para causar grandes danos.",
        imagem: "#", // Selecionar imagem
        dano: "1d12",
        tipo: "Cortante",
        usaMana: "Não",
        tipoDano: "Físico",
        dadoCritico: "20/x3",
        alcance: "1m",
        atkAdicional: "0",
        valor: "30gp",
        danoAtributo: "Força"
    },
    Lança: {
        nome: "Lança",
        descricao: "Uma arma de haste longa, usada para atacar à distância ou em combate corpo a corpo.",
        imagem: "#", // Selecionar imagem
        dano: "1d8",
        tipo: "Perfurante",
        usaMana: "Não",
        tipoDano: "Físico",
        dadoCritico: "20/x2",
        alcance: "3m",
        atkAdicional: "0",
        valor: "5gp",
        danoAtributo: "Força"
    },
    Adaga: {
        nome: "Adaga",
        descricao: "Uma pequena lâmina, fácil de esconder e usada para ataques rápidos.",
        imagem: "#", // Selecionar imagem
        dano: "1d4",
        tipo: "Cortante/Perfurante",
        usaMana: "Não",
        tipoDano: "Físico",
        dadoCritico: "19-20/x2",
        alcance: "1m",
        atkAdicional: "0",
        valor: "2gp",
        danoAtributo: "Destreza"
    },
    Arco_Curto: {
        nome: "Arco Curto",
        descricao: "Um arco pequeno, ideal para ataques rápidos e furtivos.",
        imagem: "#", // Selecionar imagem
        dano: "1d6",
        tipo: "Perfurante",
        usaMana: "Não",
        tipoDano: "Físico",
        dadoCritico: "20/x3",
        alcance: "60m",
        atkAdicional: "0",
        valor: "30gp",
        danoAtributo: "Destreza"
    },
    Espada_da_Alvorada: {
        nome: "Espada da Alvorada",
        descricao: "Uma espada lendária que brilha com a luz do amanhecer, usada para banir as trevas.",
        imagem: "#", // Selecionar imagem
        dano: "1d10+2",
        tipo: "Cortante",
        usaMana: "Sim",
        tipoDano: "Místico/Físico",
        dadoCritico: "18-20/x2",
        alcance: "1m",
        atkAdicional: "+3",
        valor: "2.000gp",
        danoAtributo: "Força/Misticismo"
    },
    Excalibur: {
        nome: "Excalibur",
        descricao: "A lendária espada do Rei Arthur, imbuída de poder sagrado.",
        imagem: "#", // Selecionar imagem
        dano: "1d12+3",
        tipo: "Cortante",
        usaMana: "Sim",
        tipoDano: "Místico/Físico",
        dadoCritico: "19-20/x3",
        alcance: "1m",
        atkAdicional: "+5",
        valor: "5.000gp",
        danoAtributo: "Força/Misticismo"
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
