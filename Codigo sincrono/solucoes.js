// ============================================
// SOLUÇÕES: Código Síncrono em JavaScript
// ============================================

// ============================================
// Exercício 1: Operações Matemáticas Sequenciais
// ============================================

function calcularSequencial(numero) {
  console.log('=== Exercício 1: Operações Matemáticas Sequenciais ===');
  
  // Etapa 1: Multiplique por 2
  const etapa1 = numero * 2;
  console.log(`Etapa 1 (multiplicar por 2): ${etapa1}`);
  
  // Etapa 2: Adicione 10
  const etapa2 = etapa1 + 10;
  console.log(`Etapa 2 (adicionar 10): ${etapa2}`);
  
  // Etapa 3: Divida por 5
  const etapa3 = etapa2 / 5;
  console.log(`Etapa 3 (dividir por 5): ${etapa3}`);
  
  // Resultado final
  console.log(`Resultado final: ${etapa3}\n`);
  
  return etapa3;
}

// Teste
calcularSequencial(50);

// ============================================
// Exercício 2: Processamento de Array
// ============================================

function processarArray(array) {
  console.log('=== Exercício 2: Processamento de Array ===');
  
  // Etapa 1: Array original
  console.log(`Array original: [${array}]`);
  
  // Etapa 2: Filtre pares
  const pares = array.filter(num => num % 2 === 0);
  console.log(`Pares encontrados: [${pares}]`);
  
  // Etapa 3: Multiplique por 2
  const multiplicados = pares.map(num => num * 2);
  console.log(`Multiplicados por 2: [${multiplicados}]`);
  
  // Etapa 4: Calcule a soma
  const soma = multiplicados.reduce((acc, num) => acc + num, 0);
  console.log(`Soma total: ${soma}\n`);
  
  return soma;
}

// Teste
processarArray([1, 2, 3, 4, 5, 6]);

// ============================================
// Exercício 3: Manipulação de Strings
// ============================================

function processarString(str) {
  console.log('=== Exercício 3: Manipulação de Strings ===');
  
  // Etapa 1: Original
  console.log(`Original: ${str}`);
  
  // Etapa 2: MAIÚSCULAS
  const maiusculas = str.toUpperCase();
  console.log(`Maiúsculas: ${maiusculas}`);
  
  // Etapa 3: Substitua espaços por underscore
  const comUnderscore = maiusculas.replace(/ /g, '_');
  console.log(`Com underscore: ${comUnderscore}`);
  
  // Etapa 4: Inverta
  const invertida = comUnderscore.split('').reverse().join('');
  console.log(`Invertida: ${invertida}`);
  
  console.log(`Resultado final: ${invertida}\n`);
  
  return invertida;
}

// Teste
processarString("Hello World");

// ============================================
// Exercício 4: Loop Síncrono com Acumulador
// ============================================

function somaAte(n) {
  console.log('=== Exercício 4: Loop Síncrono com Acumulador ===');
  console.log(`Somando de 1 a ${n}...`);
  
  let soma = 0;
  
  // Loop síncrono - executa linha por linha
  for (let i = 1; i <= n; i++) {
    soma += i;
    
    // Imprima a cada 10 iterações
    if (i % 10 === 0) {
      console.log(`Iteração ${i}: soma até agora = ${soma}`);
    }
  }
  
  console.log(`Soma total: ${soma}\n`);
  
  return soma;
}

// Teste
somaAte(100);

// ============================================
// Exercício 5: Operações com Objetos
// ============================================

function filtrarEOrdenarPessoas(pessoas) {
  console.log('=== Exercício 5: Operações com Objetos ===');
  
  // Etapa 1: Array original
  console.log(`Original: ${pessoas.length} pessoas`);
  
  // Etapa 2: Filtre maiores de 18
  const maioresDeIdade = pessoas.filter(p => p.idade >= 18);
  console.log(`Maiores de 18: ${maioresDeIdade.length} pessoas`);
  
  // Etapa 3: Ordene por idade (crescente)
  maioresDeIdade.sort((a, b) => a.idade - b.idade);
  console.log(`Ordenadas por idade:`);
  maioresDeIdade.forEach(p => {
    console.log(`- ${p.nome} (${p.idade} anos)`);
  });
  
  // Etapa 4: Crie um novo array com apenas nomes e idades
  const resultado = maioresDeIdade.map(p => ({
    nome: p.nome,
    idade: p.idade
  }));
  
  console.log(`Resultado final:`);
  console.log(resultado);
  console.log('');
  
  return resultado;
}

// Teste
const pessoas = [
  { nome: 'Alice', idade: 25, cidade: 'São Paulo' },
  { nome: 'Bob', idade: 17, cidade: 'Rio de Janeiro' },
  { nome: 'Charlie', idade: 30, cidade: 'Belo Horizonte' },
  { nome: 'Diana', idade: 16, cidade: 'Curitiba' },
  { nome: 'Eve', idade: 28, cidade: 'Salvador' }
];

filtrarEOrdenarPessoas(pessoas);

// ============================================
// Exercício 6: Algoritmo de Busca Linear
// ============================================

function buscaLinear(array, alvo) {
  console.log('=== Exercício 6: Algoritmo de Busca Linear ===');
  console.log(`Buscando ${alvo} no array: [${array}]`);
  
  // Itera elemento por elemento (síncrono)
  for (let i = 0; i < array.length; i++) {
    if (array[i] === alvo) {
      console.log(`Posição ${i}: ${array[i]} = ${alvo} ✓ Encontrado!`);
      console.log(`Índice do elemento: ${i}\n`);
      return i;
    } else {
      console.log(`Posição ${i}: ${array[i]} ≠ ${alvo}`);
    }
  }
  
  console.log(`Elemento não encontrado\n`);
  return -1;
}

// Teste
buscaLinear([10, 25, 30, 45, 50], 30);

// ============================================
// Exercício 7: Algoritmo Bubble Sort
// ============================================

function bubbleSort(array) {
  console.log('=== Exercício 7: Algoritmo Bubble Sort ===');
  console.log(`Array original: [${array}]`);
  
  // Crie uma cópia para não modificar o array original
  const arr = [...array];
  const n = arr.length;
  
  // Loop externo - cada passagem
  for (let i = 0; i < n - 1; i++) {
    let trocou = false;
    
    // Loop interno - comparações
    for (let j = 0; j < n - i - 1; j++) {
      // Se o elemento atual é maior que o próximo, troque
      if (arr[j] > arr[j + 1]) {
        // Troque os elementos
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        trocou = true;
      }
    }
    
    // Imprima o resultado de cada passagem
    console.log(`Passagem ${i + 1}: [${arr}]`);
    
    // Se não houve trocas, o array está ordenado
    if (!trocou) {
      break;
    }
  }
  
  console.log(`Array ordenado: [${arr}]\n`);
  
  return arr;
}

// Teste
bubbleSort([5, 2, 8, 1, 9]);

// ============================================
// Exercício 8: Fibonacci Recursivo
// ============================================

let chamadas = 0; // Contador global

function fibonacci(n) {
  chamadas++; // Conte cada chamada
  
  // Casos base
  if (n <= 1) return n;
  
  // Chamadas recursivas (síncronas)
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function calcularFibonacci(n) {
  console.log('=== Exercício 8: Fibonacci Recursivo ===');
  console.log(`Calculando Fibonacci de ${n}...`);
  
  // Resete o contador
  chamadas = 0;
  
  // Calcule fibonacci
  const resultado = fibonacci(n);
  
  console.log(`Função chamada ${chamadas} vezes`);
  console.log(`Fibonacci(${n}) = ${resultado}\n`);
  
  return resultado;
}

// Teste
calcularFibonacci(6);

// ============================================
// Exercício 9: Transformação de Dados em Cadeia
// ============================================

function processarDados(dados) {
  console.log('=== Exercício 9: Transformação de Dados em Cadeia ===');
  
  // Etapa 1: Dados originais
  console.log('Dados originais:');
  console.log(dados);
  
  // Etapa 2: Validação
  console.log('Validando...');
  const ehValido = dados.nome && dados.email && dados.idade && dados.telefone;
  if (!ehValido) {
    console.log('✗ Validação falhou');
    return null;
  }
  console.log('✓ Validação passou');
  
  // Etapa 3: Limpeza (remova espaços extras)
  console.log('Limpando dados...');
  const dadosLimpos = {
    nome: dados.nome.trim(),
    email: dados.email.trim(),
    idade: dados.idade,
    telefone: dados.telefone.trim()
  };
  console.log('Dados limpos:');
  console.log(dadosLimpos);
  
  // Etapa 4: Formatação
  console.log('Formatando dados...');
  const dadosFormatados = {
    ...dadosLimpos,
    telefone: dadosLimpos.telefone.replace(/\D/g, '') // Remove caracteres não-numéricos
  };
  console.log('Dados formatados:');
  console.log(dadosFormatados);
  
  // Etapa 5: Exportar como JSON
  console.log('Convertendo para JSON...');
  const jsonFinal = JSON.stringify(dadosFormatados);
  console.log('JSON final:');
  console.log(jsonFinal);
  console.log('');
  
  return jsonFinal;
}

// Teste
const dadosBrutos = {
  nome: '  João Silva  ',
  email: '  joao@example.com  ',
  idade: 25,
  telefone: '(11)98765-4321'
};

processarDados(dadosBrutos);

// ============================================
// Exercício 10: Desafio Final - Calculadora Síncrona
// ============================================

function calculadora(operacoes) {
  console.log('=== Exercício 10: Desafio Final - Calculadora Síncrona ===');
  
  let resultado = operacoes[0].a; // Inicie com o primeiro operando
  
  // Processe cada operação sequencialmente
  for (let i = 0; i < operacoes.length; i++) {
    const op = operacoes[i];
    const b = i === 0 ? op.b : op.a; // Na primeira, use op.b; nas demais, use op.a
    
    let novoResultado;
    
    // Execute a operação apropriada
    switch (op.operador) {
      case '+':
        novoResultado = resultado + b;
        break;
      case '-':
        novoResultado = resultado - b;
        break;
      case '*':
        novoResultado = resultado * b;
        break;
      case '/':
        if (b === 0) {
          console.log(`Operação ${i + 1}: Divisão por zero não permitida`);
          return null;
        }
        novoResultado = resultado / b;
        break;
      default:
        console.log(`Operador inválido: ${op.operador}`);
        return null;
    }
    
    // Imprima cada passo
    console.log(`Operação ${i + 1}: ${resultado} ${op.operador} ${b} = ${novoResultado}`);
    
    resultado = novoResultado;
  }
  
  console.log(`Resultado final: ${resultado}\n`);
  
  return resultado;
}

// Teste
const operacoes = [
  { operador: '+', a: 10, b: 5 },   // 10 + 5 = 15
  { operador: '*', a: 15, b: 2 },   // 15 * 2 = 30
  { operador: '-', a: 30, b: 8 },   // 30 - 8 = 22
  { operador: '/', a: 22, b: 2 }    // 22 / 2 = 11
];

calculadora(operacoes);
