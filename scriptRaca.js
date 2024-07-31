const racas = {
    Humano: {
        nome: "Humano",
        descricao: "Os humanos são conhecidos por sua adaptabilidade e resiliência.",
        imagem: "#", // Selecionar imagem
        atributos: "Versátil",
        habilidades: "Nenhuma específica",
        vida: "10",
        mana: "10",
        valor: "Padrão"
    },
    Elfo: {
        nome: "Elfo",
        descricao: "Os elfos são conhecidos por sua longevidade e afinidade com a magia.",
        imagem: "#", // Selecionar imagem
        atributos: "Agilidade",
        habilidades: "Visão Noturna, Magia Natural",
        vida: "8",
        mana: "15",
        valor: "Elevado"
    },
    Anão: {
        nome: "Anão",
        descricao: "Os anões são robustos e habilidosos em trabalhos manuais e combate.",
        imagem: "#", // Selecionar imagem
        atributos: "Força",
        habilidades: "Resistência a Veneno, Força",
        vida: "12",
        mana: "5",
        valor: "Moderado"
    },
    Orc: {
        nome: "Orc",
        descricao: "Os orcs são guerreiros ferozes e têm grande força física.",
        imagem: "#", // Selecionar imagem
        atributos: "Força",
        habilidades: "Raiva de Batalha, Regeneração",
        vida: "14",
        mana: "5",
        valor: "Baixo"
    },
    Halfling: {
        nome: "Halfling",
        descricao: "Os halflings são pequenos e ágeis, conhecidos por sua sorte.",
        imagem: "#", // Selecionar imagem
        atributos: "Destreza",
        habilidades: "Sorte, Furtividade",
        vida: "8",
        mana: "10",
        valor: "Moderado"
    },
    Tiefling: {
        nome: "Tiefling",
        descricao: "Os tieflings têm ancestrais infernais e são resistentes à magia.",
        imagem: "#", // Selecionar imagem
        atributos: "Carisma",
        habilidades: "Resistência ao Fogo, Magia Infernal",
        vida: "10",
        mana: "15",
        valor: "Elevado"
    },
    Dragonborn: {
        nome: "Dragonborn",
        descricao: "Descendentes de dragões, conhecidos por seu sopro dracônico.",
        imagem: "#", // Selecionar imagem
        atributos: "Força, Carisma",
        habilidades: "Sopro Dracônico, Resistência a Elementos",
        vida: "12",
        mana: "10",
        valor: "Elevado"
    },
    Gnomo: {
        nome: "Gnomo",
        descricao: "Gnomos são pequenos e inteligentes, com afinidade para invenções.",
        imagem: "#", // Selecionar imagem
        atributos: "Inteligência",
        habilidades: "Invenções, Magia Menor",
        vida: "8",
        mana: "15",
        valor: "Moderado"
    },
    Meio_Elfo: {
        nome: "Meio-Elfo",
        descricao: "Meio-elfos combinam as melhores características dos humanos e elfos.",
        imagem: "#", // Selecionar imagem
        atributos: "Versátil",
        habilidades: "Visão Noturna, Adaptabilidade",
        vida: "9",
        mana: "12",
        valor: "Moderado"
    },
    Drow: {
        nome: "Drow",
        descricao: "Elfos negros que vivem no subterrâneo, conhecidos por sua astúcia.",
        imagem: "#", // Selecionar imagem
        atributos: "Destreza",
        habilidades: "Visão no Escuro, Magia das Sombras",
        vida: "8",
        mana: "15",
        valor: "Elevado"
    },
    Tabaxi: {
        nome: "Tabaxi",
        descricao: "Felinos humanoides conhecidos por sua curiosidade e agilidade.",
        imagem: "#", // Selecionar imagem
        atributos: "Destreza",
        habilidades: "Velocidade, Reflexos Felinos",
        vida: "10",
        mana: "10",
        valor: "Moderado"
    },
    Tritão: {
        nome: "Tritão",
        descricao: "Seres aquáticos que protegem os oceanos e suas criaturas.",
        imagem: "#", // Selecionar imagem
        atributos: "Constituição",
        habilidades: "Respiração Aquática, Controle da Água",
        vida: "10",
        mana: "10",
        valor: "Moderado"
    },
    Aarakocra: {
        nome: "Aarakocra",
        descricao: "Aarakocra são seres aviários que dominam os céus.",
        imagem: "#", // Selecionar imagem
        atributos: "Destreza",
        habilidades: "Voo, Visão Aguçada",
        vida: "8",
        mana: "12",
        valor: "Moderado"
    },
    Goliath: {
        nome: "Goliath",
        descricao: "Gigantescos e robustos, goliaths vivem nas montanhas.",
        imagem: "#", // Selecionar imagem
        atributos: "Força",
        habilidades: "Resiliência, Força Bruta",
        vida: "14",
        mana: "5",
        valor: "Moderado"
    },
    Kenku: {
        nome: "Kenku",
        descricao: "Seres corvídeos que são mestres da imitação.",
        imagem: "#", // Selecionar imagem
        atributos: "Destreza",
        habilidades: "Imitação, Furtividade",
        vida: "8",
        mana: "10",
        valor: "Moderado"
    }
};

// Função para atualizar os detalhes da raça
function atualizarDetalhesRaca(raca) {
    document.getElementById('nomeRaca').innerText = raca.nome;
    document.getElementById('imagemRaca').src = raca.imagem;
    document.getElementById('imagemRaca').alt = raca.nome;
    document.getElementById('descricaoRaca').innerText = raca.descricao;
    document.getElementById('atributosRaca').innerText = raca.atributos;
    document.getElementById('habilidadesRaca').innerText = raca.habilidades;
    document.getElementById('vidaRaca').innerText = raca.vida;
    document.getElementById('manaRaca').innerText = raca.mana;
    document.getElementById('valorRaca').innerText = raca.valor;

    document.getElementById('detalhesRaca').style.display = 'block';
}

document.getElementById('racaSelect').addEventListener('change', function() {
    const racaSelecionada = this.value;
    const detalhesRacaDiv = document.getElementById('detalhesRaca');

    if (racaSelecionada) {
        const raca = racas[racaSelecionada];
        atualizarDetalhesRaca(raca);
    } else {
        detalhesRacaDiv.style.display = 'none';
    }
});

document.getElementById('pesquisaRaca').addEventListener('input', function() {
    const termoPesquisa = this.value.toLowerCase();

    const opcoesRacas = document.querySelectorAll('#racaSelect option');
    opcoesRacas.forEach(opcao => {
        const nomeRaca = opcao.textContent.toLowerCase();
        if (nomeRaca.includes(termoPesquisa)) {
            opcao.style.display = 'block';
        } else {
            opcao.style.display = 'none';
        }
    });
});
