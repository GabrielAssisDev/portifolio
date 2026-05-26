const NOME = "Gabriel Vinícius de Assis da Silva";
let tituloProfissional = "Estagiário de TI & Desenvolvedor de Sistemas / Dados";
let resumoPro = "Sou um profissional em transição de carreira movido pela inovação. Construí uma base sólida de relacionamento com clientes e gestão de rotinas trabalhando por anos no comércio local, experiência que me deu grande inteligência emocional e foco em resultados. Essa bagagem me impulsionou para a área de Tecnologia e Dados. Atualmente, atuo como Estagiário de TI no Clube Indica (remoto), aplicando meus conhecimentos em desenvolvimento e análise de dados. Em paralelo, busco qualificação contínua através da graduação em Ciência de Dados e do técnico em Desenvolvimento de Sistemas. Sou proativo, organizado e pronto para agregar valor a equipes que respiram tecnologia.";
let resumoBio = "Sou um profissional em início de carreira na área de Tecnologia da Informação, atualmente atuando como estagiário de TI no Clube Indica (remoto). Tenho experiência prática em criação de landing pages com WordPress, análise e organização de dados no Google Sheets. Estou cursando graduação em Ciência de Dados e técnico em Desenvolvimento de Sistemas, além de possuir certificações em programação e SQL. Tenho facilidade em aprender novas tecnologias, sou proativo, organizado e gosto de resolver problemas de forma prática e colaborativa.";

// Lista das suas duas formações atuais
let formacoes = [
    {
        curso: "Graduação: Ciência de Dados",
        instituicao: "Unicesumar",
        status: "Em andamento"
    },
    {
        curso: "Técnico: Desenvolvimento de Sistemas",
        instituicao: "Proz Educação",
        status: "Em andamento"
    }
];

let experiencias = [
    {
        cargo: "Estagiário de TI",
        empresa: "Clube Indica (Remoto)",
        periodo: "09/2025 - Atual",
        tarefas: [
            "Criação e manutenção de landing pages utilizando WordPress.",
            "Análise e organização de dados no Google Sheets.",
            "Consultas e ajustes em bancos de dados.",
            "Apoio à equipe em novos projetos de TI e testes de sistemas."
        ]
    }
];

let meusProjetos = [
    {
        titulo: "Aplicação de Estacionamento",
        descricao: "Sistema interativo desenvolvido para controle de entrada, saída e cálculo de permanência e tarifas de veículos em um estacionamento.",
        tecnologias: ["Python", "Tkinter", "sqlite3"],
        linkGithub: "https://github.com/GabrielAssisDev/pagamentos_py" 
    },
    {
        titulo: "Site de uma Padaria",
        descricao: "Software intuitivo e responsivo voltado para o gerenciamento de produtos, controle de quantidades em estoque e geração de relatórios práticos.",
        tecnologias: ["HTML","CSS"],
        linkGithub: "https://github.com/GabrielAssisDev/padaria_ebac" 
    },
    {
        titulo: "Cadastro de Clientes",
        descricao: "Software intuitivo e responsivo voltado para o gerenciamento de produtos, controle de quantidades em estoque e geração de relatórios práticos.",
        tecnologias: ["Python"],
        linkGithub: "https://github.com/GabrielAssisDev/agenda_de_dados.py" 
    },
    {
        titulo: "WGRR Motors - Site Oficial",
        descricao: "Software intuitivo e responsivo voltado para o gerenciamento de produtos, controle de quantidades em estoque e geração de relatórios práticos.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        linkGithub: "https://github.com/GabrielAssisDev/wgrr_motors_site_oficial" 
    },
    {
        titulo: "Livros publicados em 2023",
        descricao: "Lista de livros publicados pelo autor em 2023.",
        tecnologias: ["Python"],
        linkGithub: "https://github.com/GabrielAssisDev/books_of_publication_2023"
    },
    {
        titulo: "Agenda de Dados",
        descricao: "Sistema de cadastro de endereços, telefones e e-mails, com funcionalidades de cadastrar, editar e excluir.",
        tecnologias: ["Python"],
        linkGithub: "https://github.com/GabrielAssisDev/agenda_de_dados.py"
    },
];

let habilidadesTecnicas = [
    "Python", "SQL (MySQL / SQL Server)", "Git / GitHub", 
    "Noções de lógica de programação & Estrutura de dados", 
    "WordPress", "Google Sheets / Pacote Office", "VS Code"
];

// Configuração do cálculo de formatura (Focado na conclusão do técnico em Dezembro/2026)
let anoFormatura = 2026;
let mesFormatura = 12;
let diaFormatura = 31;
const DATAATUAL = new Date();
const dataFinal = new Date(anoFormatura, mesFormatura - 1, diaFormatura);

// --- FUNÇÕES DE RENDERIZAÇÃO ---

function carregarDadosProfissionais() {
    // Injeta os dados de cabeçalho e resumo
    document.getElementById("meuNome").innerText = NOME;
    document.getElementById("tituloProfissional").innerText = tituloProfissional;
    document.getElementById("resumoPessoal").innerText = resumoPro;
    document.getElementById("resumoProfissional").innerText = resumoBio;

    // Renderiza a lista de Formações Acadêmicas
    const containerFormacao = document.getElementById("lista-formacao");
    containerFormacao.innerHTML = "";
    formacoes.forEach(f => {
        containerFormacao.innerHTML += `
            <div class="item-formacao" style="margin-bottom: 12px;">
                <strong>${f.curso}</strong> - <span>${f.instituicao}</span> (${f.status})
            </div>
        `;
    });

    // Renderiza a lista de Experiências Profissionais
    const containerExperiencia = document.getElementById("lista-experiencia");
    containerExperiencia.innerHTML = "";
    experiencias.forEach(exp => {
        let listaTarefas = exp.tarefas.map(t => `<li>${t}</li>`).join("");
        containerExperiencia.innerHTML += `
            <div class="card-experiencia" style="margin-bottom: 25px;">
                <h3>${exp.cargo} na ${exp.empresa}</h3>
                <small>${exp.periodo}</small>
                <ul>${listaTarefas}</ul>
            </div>
        `;
    });

    // Renderiza as Habilidades como tags (chips) arredondadas
    const containerHabilidades = document.getElementById("lista-habilidades");
    containerHabilidades.innerHTML = "";
    habilidadesTecnicas.forEach(hab => {
        containerHabilidades.innerHTML += `<li class="tag-habilidade">${hab}</li>`;
    });
}

function verificarStatusFormatura() {
    let anoAtual = DATAATUAL.getFullYear();
    let mesAtual = DATAATUAL.getMonth() + 1;
    let diaAtual = DATAATUAL.getDate();

    let anosRestantes = anoFormatura - anoAtual;
    let mesesRestantes = mesFormatura - mesAtual;
    let diasRestantes = diaFormatura - diaAtual;
    let elementoTexto = document.getElementById("tempoRestanteParaFormatura");

    if (DATAATUAL >= dataFinal) {
        elementoTexto.innerText = "Formação Técnica concluída!";
    } else if (anosRestantes >= 1) {
        elementoTexto.innerText = `Tempo restante para conclusão do Técnico: ${anosRestantes} ano(s), ${mesesRestantes} mês(es) e ${diasRestantes} dia(s).`;
    } else {
        elementoTexto.innerText = `Tempo restante para conclusão do Técnico: ${mesesRestantes} mês(es) e ${diasRestantes} dia(s).`;
    }
}

function renderizarProjetos() {
    const containerProjetos = document.getElementById("cards-projetos-container");
    if (!containerProjetos) return;

    containerProjetos.innerHTML = "";

    meusProjetos.forEach(projeto => {
        let tagsTech = projeto.tecnologias.map(tech => `<span class="projeto-tag">${tech}</span>`).join("");

        containerProjetos.innerHTML += `
            <div class="card-projeto">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <div class="projeto-tags-container">${tagsTech}</div>
                <a href="${projeto.linkGithub}" target="_blank" class="btn-projeto">Ver no GitHub</a>
            </div>
        `;
    });
}
// ARRAY DE CURSOS ADICIONAIS
let meusCursos = [
    {
        nome: "Data Analytics Professional Certificate",
        instituicao: "Google & CIEE / Coursera",
        ano: "2025",
        status: "Em andamento"
    },
    {
        nome: "Programador Web",
        instituicao: "IFRS",
        ano: "2025",
        status: "Concluído"
    },
    {
        nome: "SQL na Prática",
        instituicao: "NDD",
        ano: "2025",
        status: "Concluído"
    },
    {
        nome: "Assistente Administrativo",
        instituicao: "IFRS",
        ano: "2025",
        status: "Concluído"
    },
];

// --- FUNÇÃO PARA RENDERIZAR OS CURSOS ---
function renderizarCursos() {
    const containerCursos = document.getElementById("lista-certificacoes");
    if (!containerCursos) return;

    containerCursos.innerHTML = "";

    meusCursos.forEach(c => {
        // Define uma cor sutil para o status (verde para concluído, azul para em andamento)
        let corStatus = c.status === "Concluído" ? "#059669" : "#2563eb";
        let fundoStatus = c.status === "Concluído" ? "#ecfdf5" : "#eff6ff";

        containerCursos.innerHTML += `
            <div class="item-curso" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px dashed #f1f5f9;">
                <div>
                    <strong style="font-size: 1.05rem; color: #0f172a;">${c.nome}</strong>
                    <p style="font-size: 0.9rem; color: #475569; margin: 2px 0 0 0;">${c.instituicao} — ${c.ano}</p>
                </div>
                <span style="font-size: 0.8rem; font-weight: 600; color: ${corStatus}; background-color: ${fundoStatus}; padding: 4px 10px; border-radius: 12px; white-space: nowrap;">
                    ${c.status}
                </span>
            </div>
        `;
    });
}

// --- ADICIONE A CHAMADA NO FINAL DO SEU ARQUIVO ---
carregarDadosProfissionais();
verificarStatusFormatura();
renderizarProjetos();
renderizarCursos();