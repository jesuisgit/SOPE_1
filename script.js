// Quiz de Sistemas Operacionais - Estilo Kahoot (1 pergunta por vez)
const perguntas = [
  // Níveis do SO
  {
    pergunta: "Quais são os três principais níveis de atuação do Sistema Operacional?",
    opcoes: ["Aplicação, Middleware, Hardware", "Usuário, Kernel, Hardware", "Kernel, Memória, CPU", "Sistema, Programa, Hardware"],
    resposta: 1,
    explicacao: "Os três principais níveis do SO são: Usuário (interface com programas), Kernel (núcleo do sistema responsável pelo gerenciamento), e Hardware (onde o kernel atua diretamente para controlar recursos como CPU, memória e dispositivos)."
  },
  {
    pergunta: "Qual camada do Sistema Operacional interage diretamente com o hardware?",
    opcoes: ["Interface do usuário", "Camada de Aplicações", "Kernel", "Drivers de usuário"],
    resposta: 2,
    explicacao: "O Kernel é a parte central do SO que gerencia os recursos do sistema e se comunica diretamente com o hardware por meio de drivers e instruções de baixo nível."
  },

  // Arquiteturas de Sistemas Operacionais
  {
    pergunta: "No modelo em camadas, cada camada...",
    opcoes: ["conhece todas as outras", "acessa o hardware diretamente", "interage apenas com a inferior", "é isolada do kernel"],
    resposta: 2,
    explicacao: "No modelo em camadas, cada camada depende apenas da camada imediatamente inferior. A camada mais baixa interage diretamente com o hardware, enquanto as camadas superiores oferecem serviços de nível mais alto para aplicações e usuários, facilitando o isolamento e a manutenção."
  },
  {
    pergunta: "Qual é uma característica do modelo monolítico de SO?",
    opcoes: ["Separação rigorosa de camadas", "Melhor desempenho por estar tudo junto", "Isolamento entre drivers", "Apenas chamadas de sistema são usadas"],
    resposta: 1,
    explicacao: "O modelo monolítico possui todas as funcionalidades agrupadas em um único espaço de memória, o que pode oferecer desempenho elevado, porém dificulta o isolamento, a segurança e a manutenção do sistema."
  },
  {
    pergunta: "Qual vantagem o modelo cliente-servidor traz em relação ao modelo monolítico?",
    opcoes: ["Menor número de processos", "Execução mais lenta", "Maior isolamento e modularidade", "Menor uso de memória RAM"],
    resposta: 2,
    explicacao: "O modelo cliente-servidor divide a aplicação em partes independentes (cliente e servidor), permitindo que cada uma seja desenvolvida, escalada e mantida separadamente. Isso facilita a atualização e a correção de problemas sem afetar todo o sistema, além de aumentar a estabilidade."
  },
  {
    pergunta: "Qual é a principal ideia por trás do modelo de Máquina Virtual em Sistemas Operacionais?",
    opcoes: [
      "Permitir execução paralela de processos", 
      "Imitar outra arquitetura de hardware por meio de software", 
      "Dividir a memória física entre usuários", 
      "Fornecer acesso direto ao hardware para o usuário"
    ],
    resposta: 1,
    explicacao: "O modelo de Máquina Virtual isola o hardware real e oferece a cada usuário/programa uma ilusão de ter seu próprio sistema, permitindo múltiplos ambientes independentes em uma única máquina física."
  },

  // Máquina virtual
  {
    pergunta: "Segundo Tanenbaum, o SO funciona como...",
    opcoes: ["Um compilador", "Uma máquina física", "Uma máquina virtual", "Um gerenciador de arquivos"],
    resposta: 2,
    explicacao: "O Sistema Operacional abstrai o hardware físico complexo e oferece uma interface mais simples, controlada e segura para os programas, criando a ilusão de uma máquina estendida (ou máquina virtual) com recursos gerenciados, protegidos e padronizados."
  },

  // System Calls
  {
    pergunta: "O que é uma System Call?",
    opcoes: ["Chamada de rede", "Interrupção de hardware", "Função de usuário", "Chamada para serviços do SO"],
    resposta: 3,
    explicacao: "System Call é uma interface entre programas de espaço de usuário e o kernel do sistema operacional. Quando um programa precisa de um serviço privilegiado (como ler um arquivo, alocar memória ou criar um processo), ele faz uma chamada de sistema, que é tratada no modo kernel com segurança e controle."
  },
  {
    pergunta: "Qual a diferença entre chamadas generalizadas e específicas?",
    opcoes: [
      "Generalizadas são mais rápidas", 
      "Específicas são genéricas", 
      "Generalizadas são simples e genéricas; específicas são detalhadas e completas", 
      "Não há diferença"
    ],
    resposta: 2,
    explicacao: "Chamadas generalizadas como 'ler um arquivo' são simples e genéricas; já as específicas indicam detalhes como nome do arquivo, número de bytes a ler e destino do conteúdo, oferecendo maior controle e flexibilidade."
  },

  // Estados do processo
  {
    pergunta: "Quais são os três estados principais de um processo?",
    opcoes: ["Inicial, Rodando, Encerrado", "Executando, Pronto, Bloqueado", "Aguardando, Rodando, Encerrado", "Novo, Pronto, Em pausa"],
    resposta: 1,
    explicacao: "Executando: o processo está usando efetivamente a CPU; Pronto: está apto a executar, mas aguarda sua vez; Bloqueado: espera por um evento externo, como leitura de disco ou entrada de dados."
  },

  // Threads
  {
    pergunta: "O que são threads?",
    opcoes: ["Processos independentes", "Chamadas de sistema", "Fluxos leves de execução dentro de um processo", "Programas do kernel"],
    resposta: 2,
    explicacao: "Threads (ou threads de execução) são unidades leves de execução que compartilham o mesmo espaço de memória do processo principal. Elas permitem a realização de tarefas concorrentes, como leitura e escrita simultâneas, otimizando o uso da CPU em aplicações paralelas."
  },

  // Concorrência e exclusão mútua
  {
    pergunta: "O que é uma condição de corrida?",
    opcoes: ["Execução sequencial", "Erro causado por ordem incorreta no acesso a recursos compartilhados", "Falta de RAM", "Conflito de arquivos"],
    resposta: 1,
    explicacao: "Condição de corrida ocorre quando dois ou mais processos acessam simultaneamente dados compartilhados e o resultado depende da ordem de execução, podendo causar inconsistências."
  },
  {
    pergunta: "O que é uma seção crítica?",
    opcoes: ["Trecho do código que nunca é executado", "Código que acessa dados compartilhados e precisa de controle de acesso", "Parte do sistema que trata erros", "Função interna da CPU"],
    resposta: 1,
    explicacao: "Seção crítica é um bloco de código onde o processo acessa recursos compartilhados como arquivos, variáveis ou dispositivos. Esse trecho exige controle de concorrência para evitar conflitos."
  },
  {
    pergunta: "O que é exclusão mútua?",
    opcoes: ["Prevenção de acesso simultâneo à seção crítica", "Bloqueio de chamadas de sistema", "Execução paralela de processos", "Acesso concorrente sem conflito"],
    resposta: 0,
    explicacao: "Exclusão mútua é o princípio que garante que somente um processo por vez possa acessar a seção crítica, evitando condições de corrida e inconsistências."
  },

  // Técnicas de exclusão com espera ativa
  {
    pergunta: "Na técnica de 'Desativar Interrupções', o processo...",
    opcoes: ["Espera o outro terminar", "Desliga o computador", "Desabilita interrupções ao entrar na seção crítica", "Ativa o escalonador"],
    resposta: 2,
    explicacao: "Desativar interrupções impede que o SO troque o processo atual por outro durante a execução da seção crítica. Apesar de funcionar, é inseguro para programas de usuário e só é usado no kernel."
  },
  {
    pergunta: "Qual o problema da técnica de 'Variável de Bloqueio'?",
    opcoes: ["Não funciona em memória", "Permite dois processos entrarem juntos na seção crítica", "É muito lenta", "Bloqueia todo o sistema"],
    resposta: 1,
    explicacao: "Dois processos podem verificar a variável como livre simultaneamente e ambos entrarem na seção crítica, violando a exclusão mútua."
  },
  {
    pergunta: "Como funciona a 'Alternância Estrita'?",
    opcoes: ["Escolhe o processo mais rápido", "Permite execução paralela", "Usa variável 'turn' para alternar acesso à seção crítica", "Trava o escalonador"],
    resposta: 2,
    explicacao: "A alternância estrita depende de uma variável chamada 'turn' para decidir quem entra na seção crítica. Se não for sua vez, o processo espera. Pode ser ineficiente se o outro processo estiver inativo."
  },
  {
    pergunta: "A Solução de Peterson garante...",
    opcoes: ["Execução paralela", "Desempenho máximo", "Exclusão mútua entre dois processos", "Execução em lote"],
    resposta: 2,
    explicacao: "A Solução de Peterson utiliza duas variáveis: 'interesse', para indicar a intenção de entrar na seção crítica, e 'turn', para indicar quem deve esperar. É uma das soluções teóricas mais completas para dois processos."
  },
  {
    pergunta: "O que faz a instrução TSL (Test and Set Lock)?",
    opcoes: ["Cria threads", "Testa e troca valor de variável LOCK de forma indivisível", "Desativa o kernel", "Aloca memória para o processo"],
    resposta: 1,
    explicacao: "A instrução TSL (Test and Set Lock) verifica e modifica a variável LOCK em uma única operação atômica, impedindo que múltiplos processos entrem na seção crítica simultaneamente, mesmo em sistemas com multiprocessadores."
  }
];


let indiceAtual = 0;
let pontuacao = 0;

function iniciarQuiz() {
  document.getElementById("tela-inicial").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  mostrarPergunta();
}

function mostrarPergunta() {
  const perguntaAtual = perguntas[indiceAtual];
  const container = document.getElementById("pergunta-container");
  const explicacaoDiv = document.getElementById("explicacao");
  const btnProximo = document.getElementById("proximoBtn");

  container.innerHTML = `<h3>${indiceAtual + 1}. ${perguntaAtual.pergunta}</h3>`;
  perguntaAtual.opcoes.forEach((opcao, i) => {
    const btn = document.createElement("button");
    btn.className = "opcao";
    btn.innerText = opcao;
    btn.onclick = () => verificarResposta(i, btn);
    container.appendChild(btn);
    atualizarProgresso();

  });

  explicacaoDiv.innerText = "";
  btnProximo.style.display = "none";
}

function verificarResposta(escolha, botaoClicado) {
  const perguntaAtual = perguntas[indiceAtual];
  const botoes = document.querySelectorAll(".opcao");
  const explicacaoDiv = document.getElementById("explicacao");

  botoes.forEach(btn => {
    btn.disabled = true;
    btn.classList.remove("correta", "errada");
  });

  if (escolha === perguntaAtual.resposta) {
    botaoClicado.classList.add("correta");
    pontuacao++;
  } else {
    botaoClicado.classList.add("errada");
    botoes[perguntaAtual.resposta].classList.add("correta");
  }

  explicacaoDiv.innerText = `Explicação: ${perguntaAtual.explicacao}`;
  document.getElementById("proximoBtn").style.display = "inline-block";
}

function proximaPergunta() {
  indiceAtual++;
  if (indiceAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  document.getElementById("quiz").style.display = "none";
  const resultado = document.getElementById("resultado");
  resultado.style.display = "block";
  resultado.innerHTML = `<h2>Fim do Quiz!</h2><p>Você acertou ${pontuacao} de ${perguntas.length} questões.</p>`;
}

function atualizarProgresso() {
  const progresso = ((indiceAtual) / perguntas.length) * 100;
  document.getElementById("progressBar").style.width = `${progresso}%`;
}

// testando push
