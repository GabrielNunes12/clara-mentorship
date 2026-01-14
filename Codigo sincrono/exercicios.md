# Exercícios: Código Síncrono em JavaScript

Este arquivo contém exercícios práticos para entender e trabalhar com código síncrono em JavaScript.

**👉 As soluções estão em `solucoes.js` - tente resolver por conta própria antes de consultar!**

---

## Exercício 1: Operações Matemáticas Sequenciais

### 📝 Desafio

Crie uma função que execute **três operações matemáticas sequencialmente** e retorne o resultado final:
1. Multiplique um número por 2
2. Adicione 10 ao resultado
3. Divida por 5

A função deve imprimir o resultado de cada etapa.

```javascript
// Exemplo de uso:
calcularSequencial(50);
// Output esperado:
// Etapa 1 (multiplicar por 2): 100
// Etapa 2 (adicionar 10): 110
// Etapa 3 (dividir por 5): 22
// Resultado final: 22
```

---

## Exercício 2: Processamento de Array

### 📝 Desafio

Crie uma função que:
1. Receba um array de números
2. **Filtre** apenas os números pares
3. **Multiplique** cada um por 2
4. **Calcule a soma** de todos

Imprima o resultado de cada etapa.

```javascript
// Exemplo:
processarArray([1, 2, 3, 4, 5, 6]);
// Output esperado:
// Array original: [1, 2, 3, 4, 5, 6]
// Pares encontrados: [2, 4, 6]
// Multiplicados por 2: [4, 8, 12]
// Soma total: 24
```

---

## Exercício 3: Manipulação de Strings

### 📝 Desafio

Crie uma função que processe uma string **sequencialmente**:
1. Converta para MAIÚSCULAS
2. Substitua espaços por underscore (_)
3. Inverta a string
4. Retorne e imprima o resultado

```javascript
// Exemplo:
processarString("Hello World");
// Output esperado:
// Original: Hello World
// Maiúsculas: HELLO WORLD
// Com underscore: HELLO_WORLD
// Invertida: DLROW_OLLEH
// Resultado final: DLROW_OLLEH
```

---

## Exercício 4: Loop Síncrono com Acumulador

### 📝 Desafio

Crie uma função que:
1. Receba um número N
2. **Some todos os números** de 1 até N (1+2+3+...+N)
3. Imprima o progresso a cada 10 iterações
4. Retorne a soma total

```javascript
// Exemplo:
somaAte(100);
// Output esperado:
// Somando de 1 a 100...
// Iteração 10: soma até agora = 55
// Iteração 20: soma até agora = 210
// Iteração 30: soma até agora = 465
// ... (mais iterações)
// Soma total: 5050
```

---

## Exercício 5: Operações com Objetos

### 📝 Desafio

Crie uma função que:
1. Receba um objeto com dados de pessoas (nome, idade, cidade)
2. **Filtre** maiores de 18 anos
3. **Ordene** por idade (crescente)
4. **Crie um novo array** com apenas nomes e idades
5. Imprima o resultado

```javascript
// Exemplo:
const pessoas = [
  { nome: 'Alice', idade: 25, cidade: 'São Paulo' },
  { nome: 'Bob', idade: 17, cidade: 'Rio de Janeiro' },
  { nome: 'Charlie', idade: 30, cidade: 'Belo Horizonte' },
  { nome: 'Diana', idade: 16, cidade: 'Curitiba' },
  { nome: 'Eve', idade: 28, cidade: 'Salvador' }
];

filtrarEOrdenarPessoas(pessoas);
// Output esperado:
// Original: 5 pessoas
// Maiores de 18: 3 pessoas
// Ordenadas por idade:
// - Alice (25 anos)
// - Eve (28 anos)
// - Charlie (30 anos)
// [
//   { nome: 'Alice', idade: 25 },
//   { nome: 'Eve', idade: 28 },
//   { nome: 'Charlie', idade: 30 }
// ]
```

---

## Exercício 6: Algoritmo de Busca Linear

### 📝 Desafio

Implemente uma **busca linear** que:
1. Receba um array e um valor a buscar
2. Itere **elemento por elemento** (síncrono)
3. Imprima cada verificação
4. Retorne o índice ou -1 se não encontrar

```javascript
// Exemplo:
buscaLinear([10, 25, 30, 45, 50], 30);
// Output esperado:
// Buscando 30 no array: [10, 25, 30, 45, 50]
// Posição 0: 10 ≠ 30
// Posição 1: 25 ≠ 30
// Posição 2: 30 = 30 ✓ Encontrado!
// Índice do elemento: 2
```

---

## Exercício 7: Algoritmo Bubble Sort

### 📝 Desafio

Implemente o **Bubble Sort** (ordenação por bolha):
1. Receba um array desordenado
2. **Compare elementos adjacentes** sequencialmente
3. **Troque** se forem da ordem errada
4. Imprima o progresso a cada passagem
5. Retorne o array ordenado

```javascript
// Exemplo:
bubbleSort([5, 2, 8, 1, 9]);
// Output esperado:
// Array original: [5, 2, 8, 1, 9]
// Passagem 1: [2, 5, 1, 8, 9]
// Passagem 2: [2, 1, 5, 8, 9]
// Passagem 3: [1, 2, 5, 8, 9]
// Passagem 4: [1, 2, 5, 8, 9]
// Array ordenado: [1, 2, 5, 8, 9]
```

---

## Exercício 8: Fibonacci Recursivo

### 📝 Desafio

Implemente a **sequência de Fibonacci de forma recursiva e síncrona**:
1. Receba um número N
2. Calcule o N-ésimo número de Fibonacci
3. **Conte quantas vezes** a função é chamada
4. Imprima o número de chamadas
5. Retorne o resultado

```javascript
// Exemplo:
fibonacci(6);
// Output esperado:
// Calculando Fibonacci de 6...
// Função chamada 25 vezes
// Fibonacci(6) = 8

// Sequência: 1, 1, 2, 3, 5, 8...
```

---

## Exercício 9: Transformação de Dados em Cadeia

### 📝 Desafio

Crie uma função que processe dados **em cadeia (síncrona)**:
1. Receba um objeto com dados brutos
2. **Valide** os dados (verificar se estão completos)
3. **Limpe** (remova espaços extras)
4. **Formate** (aplique regras de formatação)
5. **Exporte** como JSON
6. Imprima o resultado

```javascript
// Exemplo:
const dadosBrutos = {
  nome: '  João Silva  ',
  email: '  joao@example.com  ',
  idade: 25,
  telefone: '(11)98765-4321'
};

processarDados(dadosBrutos);
// Output esperado:
// Dados originais:
// { nome: '  João Silva  ', email: '  joao@example.com  ', idade: 25, telefone: '(11)98765-4321' }
// ✓ Validação passou
// Dados limpos:
// { nome: 'João Silva', email: 'joao@example.com', idade: 25, telefone: '(11)98765-4321' }
// Dados formatados:
// { nome: 'João Silva', email: 'joao@example.com', idade: 25, telefone: '11987654321' }
// JSON final:
// {"nome":"João Silva","email":"joao@example.com","idade":25,"telefone":"11987654321"}
```

---

## Exercício 10: Desafio Final - Calculadora Síncrona

### 📝 Desafio

Crie uma **calculadora que execute operações sequencialmente**:
1. Receba uma array de operações (operador e dois números)
2. **Execute cada operação em ordem**
3. **Use o resultado anterior** como primeiro operando da próxima (se aplicável)
4. Imprima cada passo
5. Retorne o resultado final

```javascript
// Exemplo:
const operacoes = [
  { operador: '+', a: 10, b: 5 },   // 10 + 5 = 15
  { operador: '*', a: 15, b: 2 },   // 15 * 2 = 30
  { operador: '-', a: 30, b: 8 },   // 30 - 8 = 22
  { operador: '/', a: 22, b: 2 }    // 22 / 2 = 11
];

calculadora(operacoes);
// Output esperado:
// Operação 1: 10 + 5 = 15
// Operação 2: 15 * 2 = 30
// Operação 3: 30 - 8 = 22
// Operação 4: 22 / 2 = 11
// Resultado final: 11
```

---

## Resumo de Conceitos

Estes exercícios cobrem:
- ✅ Sequência linear de operações
- ✅ Loops síncronos
- ✅ Manipulação de dados (arrays, objetos, strings)
- ✅ Algoritmos básicos (busca, ordenação)
- ✅ Recursão síncrona
- ✅ Encadeamento de operações
- ✅ Validação e transformação de dados

**Dica**: Foque em entender como o código executa **linha por linha**, de forma sequencial e bloqueante.

---

## Como Usar

1. Leia o enunciado do exercício
2. Tente implementar a solução por conta própria
3. Consulte `solucoes.js` apenas se precisar de ajuda
4. Modifique o código para experimentar diferentes abordagens
5. Pratique com seus próprios exemplos
