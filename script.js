const perguntas = [
    {
      pergunta: "Qual foi o principal componente que marcou a 2ª geração dos sistemas operacionais?",
      opcoes: ["Válvula a vácuo", "Transistor", "Microprocessador", "Circuitos integrados"],
      resposta: 1,
      explicacao: "A introdução do transistor possibilitou computadores mais confiáveis e deu origem ao processamento em lote."
    },
    {
      pergunta: "O que é o conceito de 'Time Sharing'?",
      opcoes: [
        "Processamento paralelo de dados em tempo real",
        "Execução sequencial de tarefas críticas",
        "Compartilhamento do tempo de CPU entre múltiplos usuários",
        "Execução de uma única tarefa por vez"
      ],
      resposta: 2,
      explicacao: "O Time Sharing permite que vários usuários utilizem o sistema simultaneamente, compartilhando a CPU."
    },
    {
      pergunta: "Qual SO foi inspirado no MULTICS e criado por Ken Thompson?",
      opcoes: ["DOS", "UNIX", "Mac OS", "Linux"],
      resposta: 1,
      explicacao: "O UNIX foi criado como uma versão simplificada do MULTICS por Ken Thompson e Dennis Ritchie."
    },
    {
      pergunta: "Em qual geração surgiu o conceito de multiprogramação?",
      opcoes: ["1ª Geração", "2ª Geração", "3ª Geração", "4ª Geração"],
      resposta: 2,
      explicacao: "A multiprogramação surgiu na 3ª geração com o System/360 da IBM."
    },
    {
      pergunta: "Como o sistema operacional funciona segundo Tanenbaum?",
      opcoes: [
        "Como uma interface gráfica entre usuário e hardware",
        "Como um programa independente do hardware",
        "Como uma máquina virtual que abstrai o hardware",
        "Como um interpretador de linguagem de máquina"
      ],
      resposta: 2,
      explicacao: "Tanenbaum define o SO como uma máquina virtual, ocultando os detalhes do hardware."
    },
    {
      pergunta: "O que são chamadas de sistema (system calls)?",
      opcoes: [
        "Funções matemáticas do compilador",
        "Rotinas do hardware",
        "Funções que o usuário executa no terminal",
        "Interface entre programas e o sistema operacional"
      ],
      resposta: 3,
      explicacao: "Chamadas de sistema permitem que programas interajam com recursos protegidos do SO."
    },
    {
      pergunta: "Qual arquitetura é chamada de 'a grande bagunça'?",
      opcoes: ["Sistema em camadas", "Sistema cliente-servidor", "Sistema monolítico", "Máquina virtual"],
      resposta: 2,
      explicacao: "O sistema monolítico é chamado assim por conter todas as funções num único bloco, com poucas separações."
    },
    {
      pergunta: "Qual modelo organiza o sistema em níveis hierárquicos?",
      opcoes: ["Máquina virtual", "Sistema cliente-servidor", "Sistema monolítico", "Sistema em camadas"],
      resposta: 3,
      explicacao: "O modelo em camadas separa funções por níveis, como controle de CPU, memória, E/S, etc."
    },
    {
      pergunta: "O que representa um processo no sistema operacional?",
      opcoes: [
        "Um programa armazenado em disco",
        "Um programa em execução",
        "Um thread concorrente",
        "Um comando digitado no terminal"
      ],
      resposta: 1,
      explicacao: "Processo é a execução ativa de um programa, com seu espaço de memória e registradores."
    },
    {
      pergunta: "Qual a função da tabela de processos?",
      opcoes: [
        "Armazenar arquivos de sistema",
        "Listar comandos do terminal",
        "Salvar o estado de cada processo",
        "Controlar o uso do disco rígido"
      ],
      resposta: 2,
      explicacao: "A tabela de processos armazena o estado de cada processo para que ele possa ser retomado corretamente."
    },
    {
      pergunta: "Quantos estados principais um processo pode assumir?",
      opcoes: ["2", "3", "4", "5"],
      resposta: 1,
      explicacao: "Os três principais estados são: Executando, Pronto e Bloqueado."
    },
    {
      pergunta: "O que são threads?",
      opcoes: [
        "Chamadas de sistema que controlam arquivos",
        "Programas independentes",
        "Fluxos leves de execução dentro de um processo",
        "Interrupções de software"
      ],
      resposta: 2,
      explicacao: "Threads são 'subprocessos' que compartilham o mesmo espaço de memória e recursos do processo pai."
    },
    {
      pergunta: "Qual vantagem do modelo cliente-servidor em SOs?",
      opcoes: [
        "Melhor uso de memória RAM",
        "Fácil instalação de drivers",
        "Maior estabilidade e isolamento de falhas",
        "Interface gráfica mais rápida"
      ],
      resposta: 2,
      explicacao: "O modelo cliente-servidor oferece maior estabilidade, pois isola os serviços do núcleo."
    },
    {
      pergunta: "Qual técnica de exclusão mútua é implementada com ajuda do hardware?",
      opcoes: ["Alternância Estrita", "Solução de Peterson", "Desativar Interrupções", "TSL (Test and Set Lock)"],
      resposta: 3,
      explicacao: "A instrução TSL é atômica e evita que dois processos acessem a memória crítica simultaneamente."
    },
    {
      pergunta: "O que é uma condição de corrida?",
      opcoes: [
        "Processo bloqueado por falta de memória",
        "Erro por sequência incorreta no acesso a dados compartilhados",
        "Programa tentando executar código proibido",
        "Falta de espaço no disco"
      ],
      resposta: 1,
      explicacao: "Condição de corrida ocorre quando dois processos acessam dados compartilhados simultaneamente sem controle adequado."
    },
    {
      pergunta: "Qual o papel do escalonador de processos?",
      opcoes: [
        "Selecionar qual processo será executado pela CPU",
        "Verificar erros nos arquivos do sistema",
        "Gerenciar a rede de computadores",
        "Limpar a memória RAM"
      ],
      resposta: 0,
      explicacao: "O escalonador decide qual processo pronto será executado a seguir."
    },
    {
      pergunta: "O que é pseudoparalelismo?",
      opcoes: [
        "Execução simultânea em múltiplos núcleos",
        "Vários usuários em um sistema UNIX",
        "Simulação de paralelismo com alternância rápida de processos",
        "Execução de múltiplos scripts ao mesmo tempo"
      ],
      resposta: 2,
      explicacao: "Pseudoparalelismo ocorre em sistemas com um único núcleo, alternando rapidamente entre processos."
    },
    {
      pergunta: "Qual chamada de sistema lê dados de um arquivo?",
      opcoes: ["write()", "open()", "read()", "exec()"],
      resposta: 2,
      explicacao: "A chamada `read()` permite ler dados de um arquivo no sistema operacional."
    },
    {
      pergunta: "O que significa IPC (Interprocess Communication)?",
      opcoes: [
        "Comunicação entre dispositivos",
        "Troca de dados entre processos",
        "Interface de Processamento Central",
        "Inicialização de Processos Concorrentes"
      ],
      resposta: 1,
      explicacao: "IPC é o mecanismo que permite que processos se comuniquem entre si."
    },
    {
      pergunta: "Qual técnica de exclusão mútua usa a variável 'turn'?",
      opcoes: [
        "TSL",
        "Variável de Bloqueio",
        "Alternância Estrita",
        "Desativar Interrupções"
      ],
      resposta: 2,
      explicacao: "A Alternância Estrita usa a variável 'turn' para alternar a vez de entrada na seção crítica."
    }
  ];
  
  function carregarQuiz() {
    const form = document.getElementById("quizForm");
    perguntas.forEach((q, index) => {
      const div = document.createElement("div");
      div.className = "question";
      div.id = `pergunta-${index}`;
      div.innerHTML = `<p><strong>${index + 1}.</strong> ${q.pergunta}</p>` +
        q.opcoes.map((opcao, i) => 
          `<label><input type="radio" name="q${index}" value="${i}"/> ${opcao}</label><br/>`
        ).join('');
      form.appendChild(div);
    });
  }
  
  function corrigir() {
    let acertos = 0;
    perguntas.forEach((q, index) => {
      const marcada = document.querySelector(`input[name=q${index}]:checked`);
      const divPergunta = document.getElementById(`pergunta-${index}`);
      divPergunta.classList.remove("correta", "errada");
      const explicAntiga = divPergunta.querySelector(".explicacao");
      if (explicAntiga) explicAntiga.remove();
  
      if (marcada) {
        if (parseInt(marcada.value) === q.resposta) {
          acertos++;
          divPergunta.classList.add("correta");
        } else {
          divPergunta.classList.add("errada");
          const explic = document.createElement("div");
          explic.className = "explicacao";
          explic.innerText = `Resposta correta: ${q.opcoes[q.resposta]} — ${q.explicacao}`;
          divPergunta.appendChild(explic);
        }
      } else {
        divPergunta.classList.add("errada");
        const explic = document.createElement("div");
        explic.className = "explicacao";
        explic.innerText = `Você não respondeu. Resposta correta: ${q.opcoes[q.resposta]} — ${q.explicacao}`;
        divPergunta.appendChild(explic);
      }
    });
  
    document.getElementById("resultado").innerText = `Você acertou ${acertos} de ${perguntas.length} questões.`;
  }
  
  carregarQuiz();
  