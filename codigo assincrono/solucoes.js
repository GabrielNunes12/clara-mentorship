// ============================================
// SOLUÇÕES: Código Assíncrono em JavaScript
// ============================================

// ============================================
// Exercício 1: Primeira Promise Simples
// ============================================

console.log('=== Exercício 1: Primeira Promise Simples ===');
console.log('Iniciando Promise...');

const promiseBasica = new Promise((resolve) => {
  // Aguarde 2 segundos e depois resolva
  setTimeout(() => {
    resolve('Bem-vindo ao código assíncrono!');
  }, 2000);
});

promiseBasica.then((mensagem) => {
  console.log(mensagem);
  console.log('');
});

// ============================================
// Exercício 2: Promise com Rejeição
// ============================================

function validarNumero(numero) {
  console.log('=== Exercício 2: Promise com Rejeição ===');
  console.log(`Validando número ${numero}...`);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numero % 2 === 0) {
        resolve('Número par!');
      } else {
        reject('Número ímpar!');
      }
    }, 1000);
  });

  promise
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((erro) => {
      console.log(`Erro: ${erro}`);
    })
    .finally(() => {
      console.log('');
    });
}

// Teste - Um exemplo
validarNumero(4);

// ============================================
// Exercício 3: Encadeamento de Promises
// ============================================

function etapa1() {
  return new Promise((resolve) => {
    console.log('=== Exercício 3: Encadeamento de Promises ===');
    console.log('Etapa 1: Obtendo número...');
    setTimeout(() => {
      console.log('Etapa 1 completa: 10');
      resolve(10);
    }, 1000);
  });
}

function etapa2(numero) {
  return new Promise((resolve) => {
    console.log('Etapa 2: Multiplicando por 2...');
    setTimeout(() => {
      const resultado = numero * 2;
      console.log(`Etapa 2 completa: ${resultado}`);
      resolve(resultado);
    }, 1000);
  });
}

function etapa3(numero) {
  return new Promise((resolve) => {
    console.log('Etapa 3: Adicionando 5...');
    setTimeout(() => {
      const resultado = numero + 5;
      console.log(`Etapa 3 completa: ${resultado}`);
      resolve(resultado);
    }, 1000);
  });
}

// Encadeie as promises
etapa1()
  .then((resultado) => etapa2(resultado))
  .then((resultado) => etapa3(resultado))
  .then((resultado) => {
    console.log(`Resultado final: ${resultado}`);
    console.log('');
  });

// ============================================
// Exercício 4: Promise.all() - Operações Paralelas
// ============================================

function operacaoParalela() {
  console.log('=== Exercício 4: Promise.all() - Operações Paralelas ===');
  console.log('Iniciando 3 tarefas em paralelo...');
  console.log('Tempo: 0s');

  const tempoInicio = Date.now();

  const tarefa1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Tarefa 1');
    }, 2000);
  });

  const tarefa2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Tarefa 2');
    }, 1000);
  });

  const tarefa3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Tarefa 3');
    }, 3000);
  });

  Promise.all([tarefa1, tarefa2, tarefa3]).then((resultados) => {
    const tempoFinal = ((Date.now() - tempoInicio) / 1000).toFixed(1);
    console.log(`Tempo final: ~${tempoFinal} segundos`);
    console.log(`Resultados: [${resultados.join(', ')}]`);
    console.log('');
  });
}

operacaoParalela();

// ============================================
// Exercício 5: async/await Básico
// ============================================

async function processarComAsync() {
  console.log('=== Exercício 5: async/await Básico ===');

  // Etapa 1
  console.log('Etapa 1: Obtendo número...');
  const numero = await new Promise((resolve) => {
    setTimeout(() => {
      console.log('Etapa 1 completa: 10');
      resolve(10);
    }, 1000);
  });

  // Etapa 2
  console.log('Etapa 2: Multiplicando por 2...');
  const resultado2 = await new Promise((resolve) => {
    setTimeout(() => {
      const resultado = numero * 2;
      console.log(`Etapa 2 completa: ${resultado}`);
      resolve(resultado);
    }, 1000);
  });

  // Etapa 3
  console.log('Etapa 3: Adicionando 5...');
  const resultado3 = await new Promise((resolve) => {
    setTimeout(() => {
      const resultado = resultado2 + 5;
      console.log(`Etapa 3 completa: ${resultado}`);
      resolve(resultado);
    }, 1000);
  });

  console.log(`Resultado final: ${resultado3}`);
  console.log('');
}

processarComAsync();

// ============================================
// Exercício 6: Tratamento de Erros com async/await
// ============================================

async function buscarDadosDoServidor() {
  console.log('=== Exercício 6: Tratamento de Erros com async/await ===');
  console.log('Buscando dados do servidor...');

  try {
    // Simule uma chance de 50% de sucesso ou erro
    const sucesso = Math.random() > 0.5;

    const dados = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (sucesso) {
          resolve({
            id: 1,
            nome: 'João',
            email: 'joao@example.com'
          });
        } else {
          reject('Conexão perdida');
        }
      }, 1500);
    });

    console.log('Sucesso! Dados:', dados);
  } catch (erro) {
    console.log(`Erro ao buscar dados: ${erro}`);
  }
  console.log('');
}

buscarDadosDoServidor();

// ============================================
// Exercício 7: Múltiplas Requisições Sequenciais
// ============================================

async function requisicoesFakeAPI() {
  console.log('=== Exercício 7: Múltiplas Requisições Sequenciais ===');

  try {
    // Requisição 1: Obtenha o ID do usuário
    console.log('Obtendo ID do usuário...');
    const id = await new Promise((resolve) => {
      setTimeout(() => {
        console.log('ID obtido: 123');
        resolve(123);
      }, 1000);
    });

    // Requisição 2: Use o ID para obter dados
    console.log(`Obtendo dados do usuário com ID ${id}...`);
    const usuario = await new Promise((resolve) => {
      setTimeout(() => {
        const dadosUsuario = {
          id: id,
          nome: 'Alice',
          email: 'alice@example.com'
        };
        console.log('Usuário:', dadosUsuario);
        resolve(dadosUsuario);
      }, 1000);
    });

    // Requisição 3: Obtenha os posts do usuário
    console.log('Obtendo posts do usuário...');
    const posts = await new Promise((resolve) => {
      setTimeout(() => {
        const listaPosts = [1, 2, 3, 4, 5];
        console.log('Posts:', listaPosts);
        resolve(listaPosts);
      }, 1000);
    });

    console.log('Tempo total: ~3 segundos (sequencial)');
  } catch (erro) {
    console.error('Erro:', erro);
  }
  console.log('');
}

requisicoesFakeAPI();

// ============================================
// Exercício 8: Promise.race() - Primeira a Completar
// ============================================

function primeiraACompletar() {
  console.log('=== Exercício 8: Promise.race() - Primeira a Completar ===');
  console.log('Iniciando corrida...');

  const tempoInicio = Date.now();

  const promiseLenta = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Lenta');
    }, 3000);
  });

  const promiseRapida = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Rápida');
    }, 1000);
  });

  const promiseMedia = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Média');
    }, 2000);
  });

  Promise.race([promiseLenta, promiseRapida, promiseMedia]).then((resultado) => {
    const tempoFinal = ((Date.now() - tempoInicio) / 1000).toFixed(1);
    console.log(`Primeira a completar: ${resultado}`);
    console.log(`Tempo total: ~${tempoFinal} segundo`);
    console.log('');
  });
}

primeiraACompletar();

// ============================================
// Exercício 9: Mapeamento Assíncrono de Array
// ============================================

async function processarArrayAssincrono() {
  console.log('=== Exercício 9: Mapeamento Assíncrono de Array ===');

  const numeros = [1, 2, 3, 4, 5];
  console.log(`Processando: [${numeros}]`);
  console.log('Aguardando processamento de 5 números...');

  const tempoInicio = Date.now();

  // Crie uma Promise para cada número
  const promises = numeros.map((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(num * 2);
      }, 500);
    });
  });

  // Aguarde todas as Promises com Promise.all()
  const resultados = await Promise.all(promises);

  const tempoFinal = ((Date.now() - tempoInicio) / 1000).toFixed(1);
  console.log(`Resultados: [${resultados}]`);
  console.log(`Tempo total: ~${tempoFinal} segundos (paralelo)`);
  console.log('');
}

processarArrayAssincrono();

// ============================================
// Exercício 10: Desafio Final - Simulador de Download
// ============================================

async function baixarArquivos(arquivos) {
  console.log('=== Exercício 10: Desafio Final - Simulador de Download ===');
  console.log(`Iniciando download de ${arquivos.length} arquivos...`);

  const tempoInicio = Date.now();

  // Crie uma Promise para cada arquivo
  const downloadPromises = arquivos.map((arquivo) => {
    console.log(`⏱ ${arquivo.nome} (${arquivo.tamanho} MB) iniciado`);

    return new Promise((resolve) => {
      // Tempo de download: 1 segundo por MB
      const tempoDownload = arquivo.tamanho * 1000;

      setTimeout(() => {
        console.log(`✓ ${arquivo.nome} (${arquivo.tamanho} MB) completado`);
        resolve(arquivo);
      }, tempoDownload);
    });
  });

  // Aguarde todos os downloads com Promise.all()
  const arquivosCompletos = await Promise.all(downloadPromises);

  console.log('Download concluído!');

  // Calcule o tamanho total
  const tamanhoTotal = arquivos.reduce((soma, arquivo) => soma + arquivo.tamanho, 0);
  console.log(`Tamanho total: ${tamanhoTotal} MB`);

  // Calcule o tempo total
  const tempoFinal = ((Date.now() - tempoInicio) / 1000).toFixed(1);
  console.log(`Tempo total: ~${tempoFinal} segundos (paralelo)`);
  console.log('');
}

// Teste
const arquivos = [
  { nome: 'arquivo1.zip', tamanho: 2 },    // 2 segundos
  { nome: 'arquivo2.pdf', tamanho: 1 },    // 1 segundo
  { nome: 'arquivo3.mp4', tamanho: 3 },    // 3 segundos
  { nome: 'arquivo4.doc', tamanho: 0.5 }   // 0.5 segundos
];

baixarArquivos(arquivos);
