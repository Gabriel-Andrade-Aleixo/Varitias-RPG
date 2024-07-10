const armas = {
    Rifle_M1A: {
        nome: "Rifle_M1A",
        descricao: "Rifle M1A com cano de 16 polegadas.",
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
        descricao: "Uma das armas lendárias, capaz de acabar com uma guerra inteira com um unico ataque. Quando ativada e lançada ela atira um bombardeio ao redor que causa 1d4 de dano cada bomba. A ativação desta habilidade gasta 60mp. É necessário ter uma força maior que 50 para poder erguer esta arma.",
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
        descricao: "Uma característica especial desta arma é a resistência ao calor dela. por conta de seu material, é uma arma extremamente leve e aguenta uma temperatura de cerca de 3851° C.",
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

    Sabre_De_Luz: {
        nome: "Sabre de luz",
        descricao:"Contém Atributos",
        imagem: "#",
        dano: "Cortante",
        usaMana: "Não",
        tipoDano: "Físico",
        dadoCritico: "19-20/x2",
        alcance: "4m",
        atkAdicional: "+7",
        valor: "2.550.000T$",
        danoAtributo: "Luta"
        
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
