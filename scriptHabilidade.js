const habilidades = {
    D: [
        { nome: "Resistência Leve", descricao: "Aumenta ligeiramente a resistência física." },
        { nome: "Passos Silenciosos", descricao: "Reduz o som dos passos ao andar." },
        { nome: "Fôlego Estendido", descricao: "Permite segurar a respiração por mais tempo." },
        { nome: "Reflexos Rápidos", descricao: "Melhora a velocidade de reação." },
        { nome: "Visão Nocturna Leve", descricao: "Permite ver um pouco melhor no escuro." },
        { nome: "Regeneração Lenta", descricao: "Aumenta a taxa de recuperação de feridas." },
        { nome: "Defesa Mental Leve", descricao: "Oferece uma leve proteção contra ataques mentais." },
        { nome: "Prontidão Leve", descricao: "Aumenta a capacidade de reação em situações de perigo." },
        { nome: "Concentração Leve", descricao: "Melhora a capacidade de concentração." },
        { nome: "Manuseio Básico de Armas", descricao: "Aprimora a habilidade básica de manuseio de armas." },
        { nome: "Força Leve", descricao: "Aumenta ligeiramente a força física." },
        { nome: "Velocidade Leve", descricao: "Aumenta ligeiramente a velocidade de movimento." },
        { nome: "Fortalecimento Ósseo Leve", descricao: "Aumenta a resistência dos ossos." },
        { nome: "Resiliência ao Calor Leve", descricao: "Aumenta a resistência a altas temperaturas." },
        { nome: "Resiliência ao Frio Leve", descricao: "Aumenta a resistência a baixas temperaturas." },
        { nome: "Resistência a Venenos Leve", descricao: "Aumenta a resistência a venenos." },
        { nome: "Aprimoramento de Sabor Leve", descricao: "Aprimora ligeiramente o sentido do paladar." },
        { nome: "Audição Apurada", descricao: "Aprimora a capacidade auditiva." },
        { nome: "Equilíbrio Estável", descricao: "Melhora o equilíbrio corporal." },
        { nome: "Metabolismo Rápido", descricao: "Aumenta a velocidade do metabolismo." }
    ],
    C: [
        { nome: "Resistência Moderada", descricao: "Aumenta moderadamente a resistência física." },
        { nome: "Passos Suaves", descricao: "Reduz significativamente o som dos passos ao andar." },
        { nome: "Fôlego Prolongado", descricao: "Permite segurar a respiração por um longo período." },
        { nome: "Reflexos Afiados", descricao: "Aumenta consideravelmente a velocidade de reação." },
        { nome: "Visão Nocturna Moderada", descricao: "Permite ver melhor no escuro." },
        { nome: "Regeneração Moderada", descricao: "Aumenta a taxa de recuperação de feridas de forma moderada." },
        { nome: "Defesa Mental Moderada", descricao: "Oferece uma proteção moderada contra ataques mentais." },
        { nome: "Prontidão Moderada", descricao: "Aumenta a capacidade de reação em situações de perigo de forma moderada." },
        { nome: "Concentração Moderada", descricao: "Melhora a capacidade de concentração moderadamente." },
        { nome: "Manuseio Avançado de Armas", descricao: "Aprimora a habilidade de manuseio de armas de forma avançada." },
        { nome: "Força Moderada", descricao: "Aumenta moderadamente a força física." },
        { nome: "Velocidade Moderada", descricao: "Aumenta moderadamente a velocidade de movimento." },
        { nome: "Fortalecimento Ósseo Moderado", descricao: "Aumenta a resistência dos ossos de forma moderada." },
        { nome: "Resiliência ao Calor Moderada", descricao: "Aumenta a resistência a altas temperaturas de forma moderada." },
        { nome: "Resiliência ao Frio Moderada", descricao: "Aumenta a resistência a baixas temperaturas de forma moderada." },
        { nome: "Resistência a Venenos Moderada", descricao: "Aumenta a resistência a venenos de forma moderada." },
        { nome: "Aprimoramento de Sabor Moderado", descricao: "Aprimora moderadamente o sentido do paladar." },
        { nome: "Audição Melhorada", descricao: "Melhora consideravelmente a capacidade auditiva." },
        { nome: "Equilíbrio Avançado", descricao: "Aprimora significativamente o equilíbrio corporal." },
        { nome: "Metabolismo Melhorado", descricao: "Aumenta moderadamente a velocidade do metabolismo." }
    ],
    B: [
        { nome: "Resistência Elevada", descricao: "Aumenta significativamente a resistência física." },
        { nome: "Passos Leves", descricao: "Reduz drasticamente o som dos passos ao andar." },
        { nome: "Fôlego Longo", descricao: "Permite segurar a respiração por um longo tempo." },
        { nome: "Reflexos Rápidos", descricao: "Melhora consideravelmente a velocidade de reação." },
        { nome: "Visão Nocturna Elevada", descricao: "Permite ver muito bem no escuro." },
        { nome: "Regeneração Rápida", descricao: "Aumenta a taxa de recuperação de feridas de forma rápida." },
        { nome: "Defesa Mental Elevada", descricao: "Oferece uma proteção elevada contra ataques mentais." },
        { nome: "Prontidão Elevada", descricao: "Aumenta a capacidade de reação em situações de perigo de forma elevada." },
        { nome: "Concentração Elevada", descricao: "Melhora a capacidade de concentração significativamente." },
        { nome: "Manuseio Experiente de Armas", descricao: "Aprimora a habilidade de manuseio de armas de forma experiente." },
        { nome: "Força Elevada", descricao: "Aumenta significativamente a força física." },
        { nome: "Velocidade Elevada", descricao: "Aumenta significativamente a velocidade de movimento." },
        { nome: "Fortalecimento Ósseo Elevado", descricao: "Aumenta a resistência dos ossos de forma elevada." },
        { nome: "Resiliência ao Calor Elevada", descricao: "Aumenta a resistência a altas temperaturas de forma elevada." },
        { nome: "Resiliência ao Frio Elevada", descricao: "Aumenta a resistência a baixas temperaturas de forma elevada." },
        { nome: "Resistência a Venenos Elevada", descricao: "Aumenta a resistência a venenos de forma elevada." },
        { nome: "Aprimoramento de Sabor Elevado", descricao: "Aprimora significativamente o sentido do paladar." },
        { nome: "Audição Excelente", descricao: "Melhora significativamente a capacidade auditiva." },
        { nome: "Equilíbrio Superior", descricao: "Aprimora significativamente o equilíbrio corporal." },
        { nome: "Metabolismo Superior", descricao: "Aumenta significativamente a velocidade do metabolismo." }
    ],
    A: [
        { nome: "Resistência Superior", descricao: "Aumenta extraordinariamente a resistência física." },
        { nome: "Passos Invisíveis", descricao: "Torna os passos praticamente inaudíveis." },
        { nome: "Fôlego Sobrenatural", descricao: "Permite segurar a respiração por um período sobrenatural." },
        { nome: "Reflexos Sobrenaturais", descricao: "Melhora a velocidade de reação a níveis sobrenaturais." },
        { nome: "Visão Nocturna Superior", descricao: "Permite ver no escuro como se fosse dia." },
        { nome: "Regeneração Superior", descricao: "Aumenta a taxa de recuperação de feridas de forma extraordinária." },
        { nome: "Defesa Mental Superior", descricao: "Oferece uma proteção extraordinária contra ataques mentais." },
        { nome: "Prontidão Superior", descricao: "Aumenta a capacidade de reação em situações de perigo de forma extraordinária." },
        { nome: "Concentração Superior", descricao: "Melhora a capacidade de concentração a níveis extraordinários." },
        { nome: "Manuseio Mestre de Armas", descricao: "Aprimora a habilidade de manuseio de armas a níveis de mestre." },
        { nome: "Força Sobrenatural", descricao: "Aumenta a força física a níveis sobrenaturais." },
        { nome: "Velocidade Sobrenatural", descricao: "Aumenta a velocidade de movimento a níveis sobrenaturais." },
        { nome: "Fortalecimento Ósseo Superior", descricao: "Aumenta a resistência dos ossos de forma extraordinária." },
        { nome: "Resiliência ao Calor Superior", descricao: "Aumenta a resistência a altas temperaturas a níveis extraordinários." },
        { nome: "Resiliência ao Frio Superior", descricao: "Aumenta a resistência a baixas temperaturas a níveis extraordinários." },
        { nome: "Resistência a Venenos Superior", descricao: "Aumenta a resistência a venenos a níveis extraordinários." },
        { nome: "Aprimoramento de Sabor Superior", descricao: "Aprimora a capacidade de degustação a níveis extraordinários." },
        { nome: "Audição Suprem", descricao: "Aprimora a capacidade auditiva a níveis extraordinários." },
        { nome: "Equilíbrio Mestre", descricao: "Aprimora a capacidade de equilíbrio a níveis extraordinários." },
        { nome: "Metabolismo Mestre", descricao: "Aumenta a velocidade do metabolismo a níveis extraordinários." }
    ],
    S: [
        { nome: "Imunidade Completa", descricao: "Proporciona imunidade total a todas as doenças e venenos." },
        { nome: "Passos Fantasmagóricos", descricao: "Permite mover-se sem fazer qualquer som." },
        { nome: "Fôlego Infinito", descricao: "Permite segurar a respiração indefinidamente." },
        { nome: "Reflexos Sobre-Humanos", descricao: "Melhora a velocidade de reação a níveis sobre-humanos." },
        { nome: "Visão Noturna Perfeita", descricao: "Permite ver perfeitamente no escuro total." },
        { nome: "Regeneração Suprema", descricao: "Aumenta a taxa de recuperação de feridas a níveis supremos." },
        { nome: "Defesa Mental Suprema", descricao: "Oferece proteção suprema contra ataques mentais." },
        { nome: "Prontidão Suprema", descricao: "Aumenta a capacidade de reação em situações de perigo a níveis supremos." },
        { nome: "Concentração Inquebrável", descricao: "Permite concentração total, inabalável por distrações." },
        { nome: "Manuseio Divino de Armas", descricao: "Aprimora a habilidade de manuseio de armas a níveis divinos." },
        { nome: "Força Inigualável", descricao: "Aumenta a força física a níveis inigualáveis." },
        { nome: "Velocidade Inigualável", descricao: "Aumenta a velocidade de movimento a níveis inigualáveis." },
        { nome: "Fortalecimento Ósseo Indestrutível", descricao: "Torna os ossos praticamente indestrutíveis." },
        { nome: "Resiliência ao Calor Suprema", descricao: "Proporciona resistência total a altas temperaturas." },
        { nome: "Resiliência ao Frio Suprema", descricao: "Proporciona resistência total a baixas temperaturas." },
        { nome: "Resistência a Venenos Suprema", descricao: "Proporciona resistência total a todos os tipos de venenos." },
        { nome: "Paladar Divino", descricao: "Aprimora a capacidade de degustação a níveis divinos." },
        { nome: "Audição Divina", descricao: "Aprimora a capacidade auditiva a níveis divinos." },
        { nome: "Equilíbrio Divino", descricao: "Aprimora a capacidade de equilíbrio a níveis divinos." },
        { nome: "Metabolismo Perfeito", descricao: "Permite um metabolismo perfeito, eficiente e rápido." }
    ]
};

function showRank(rank) {
    const habilidadesList = document.getElementById('habilidades-list');
    const habilidadeDescription = document.getElementById('habilidade-description');
    habilidadesList.innerHTML = '';
    habilidadeDescription.textContent = '';

    habilidades[rank].forEach(habilidade => {
        const li = document.createElement('li');
        li.textContent = habilidade.nome;
        li.className = 'habilidade-item';
        li.onclick = () => {
            habilidadeDescription.textContent = habilidade.descricao;
        };
        habilidadesList.appendChild(li);
    });
}
