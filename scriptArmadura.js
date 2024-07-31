const armaduras = {
    Armadura_M1A: {
        nome: "Armadura M1A",
        descricao: "Armadura de combate moderna, leve e resistente.",
        imagem: "#", // Selecionar imagem
        defesa: "15",
        tipo: "Leve",
        usaMana: "Não",
        peso: "10kg",
        resistencia: "Alta",
        valor: "1000T$"
    },
    Peitoral_Tuatha_De: {
        nome: "Peitoral de Tuatha Dé",
        descricao: "Peitoral místico que concede proteção mágica e resistência física.",
        imagem: "#", // Selecionar imagem
        defesa: "20",
        tipo: "Místico",
        usaMana: "Sim",
        peso: "8kg",
        resistencia: "Muito Alta",
        valor: "5000T$"
    },
    Couraça_Grafeno: {
        nome: "Couraça de Grafeno",
        descricao: "Leve e extremamente resistente ao calor, feita de grafeno.",
        imagem: "#", // Selecionar imagem
        defesa: "18",
        tipo: "Leve",
        usaMana: "Não",
        peso: "5kg",
        resistencia: "Alta",
        valor: "3000T$"
    },
    Armadura_Draconiana: {
        nome: "Armadura Draconiana",
        descricao: "Forjada com escamas de dragão, oferece proteção excepcional.",
        imagem: "#", // Selecionar imagem
        defesa: "25",
        tipo: "Pesada",
        usaMana: "Não",
        peso: "20kg",
        resistencia: "Extrema",
        valor: "10000T$"
    },
    Cota_de_Malha: {
        nome: "Cota de Malha",
        descricao: "Armadura comum feita de pequenos anéis de metal interligados.",
        imagem: "#", // Selecionar imagem
        defesa: "12",
        tipo: "Leve",
        usaMana: "Não",
        peso: "15kg",
        resistencia: "Média",
        valor: "500T$"
    },
    Escudo_Celestial: {
        nome: "Escudo Celestial",
        descricao: "Escudo sagrado que concede proteção divina.",
        imagem: "#", // Selecionar imagem
        defesa: "22",
        tipo: "Místico",
        usaMana: "Sim",
        peso: "12kg",
        resistencia: "Muito Alta",
        valor: "7000T$"
    },
    Armadura_de_Couro: {
        nome: "Armadura de Couro",
        descricao: "Armadura básica feita de couro tratado.",
        imagem: "#", // Selecionar imagem
        defesa: "10",
        tipo: "Leve",
        usaMana: "Não",
        peso: "5kg",
        resistencia: "Baixa",
        valor: "200T$"
    },
    Placa_de_Titanio: {
        nome: "Placa de Titânio",
        descricao: "Armadura de placas feitas de titânio, extremamente resistente.",
        imagem: "#", // Selecionar imagem
        defesa: "30",
        tipo: "Pesada",
        usaMana: "Não",
        peso: "25kg",
        resistencia: "Extrema",
        valor: "15000T$"
    },
    Armadura_Elemental: {
        nome: "Armadura Elemental",
        descricao: "Concede resistência a danos elementais como fogo, gelo e trovão.",
        imagem: "#", // Selecionar imagem
        defesa: "20",
        tipo: "Místico",
        usaMana: "Sim",
        peso: "10kg",
        resistencia: "Alta",
        valor: "8000T$"
    },
    Manto_da_Sombra: {
        nome: "Manto da Sombra",
        descricao: "Manto que concede furtividade e resistência a ataques físicos.",
        imagem: "#", // Selecionar imagem
        defesa: "15",
        tipo: "Leve",
        usaMana: "Sim",
        peso: "3kg",
        resistencia: "Alta",
        valor: "6000T$"
    }
};

// Função para atualizar os detalhes da armadura
function atualizarDetalhesArmadura(armadura) {
    document.getElementById('nomeArmadura').innerText = armadura.nome;
    document.getElementById('imagemArmadura').src = armadura.imagem;
    document.getElementById('imagemArmadura').alt = armadura.nome;
    document.getElementById('descricaoArmadura').innerText = armadura.descricao;
    document.getElementById('defesaArmadura').innerText = armadura.defesa;
    document.getElementById('tipoArmadura').innerText = armadura.tipo;
    document.getElementById('manaArmadura').innerText = armadura.usaMana;
    document.getElementById('pesoArmadura').innerText = armadura.peso;
    document.getElementById('resistenciaArmadura').innerText = armadura.resistencia;
    document.getElementById('valorArmadura').innerText = armadura.valor;

    document.getElementById('detalhesArmadura').style.display = 'block';
}

document.getElementById('armaduraSelect').addEventListener('change', function() {
    const armaduraSelecionada = this.value;
    const detalhesArmaduraDiv = document.getElementById('detalhesArmadura');

    if (armaduraSelecionada) {
        const armadura = armaduras[armaduraSelecionada];
        atualizarDetalhesArmadura(armadura);
    } else {
        detalhesArmaduraDiv.style.display = 'none';
    }
});

document.getElementById('pesquisaArmadura').addEventListener('input', function() {
    const termoPesquisa = this.value.toLowerCase();

    const opcoesArmaduras = document.querySelectorAll('#armaduraSelect option');
    opcoesArmaduras.forEach(opcao => {
        const nomeArmadura = opcao.textContent.toLowerCase();
        if (nomeArmadura.includes(termoPesquisa)) {
            opcao.style.display = 'block';
        } else {
            opcao.style.display = 'none';
        }
    });
});
