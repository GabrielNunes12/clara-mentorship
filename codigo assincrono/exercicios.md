# Exercícios: Código Assíncrono em JavaScript

Este arquivo contém exercícios práticos para entender e trabalhar com código assíncrono em JavaScript, usando Promises e async/await.

**👉 As soluções estão em `solucoes.js` - tente resolver por conta própria antes de consultar!**

---

## Exercício 1: Primeira Promise Simples

### 📝 Desafio

Crie uma **Promise que resolve após 2 segundos** com uma mensagem de boas-vindas.
- Resova com a mensagem: "Bem-vindo ao código assíncrono!"
- Use `.then()` para imprimir o resultado
- Imprima também quando a Promise começa

```javascript
// Exemplo de uso:
// Iniciando Promise...
// (aguarda 2 segundos)
// Bem-vindo ao código assíncrono!
```

---

## Exercício 2: Promise com Rejeição

### 📝 Desafio

Crie uma **Promise que pode rejeitar**:
- Se o número recebido é par, **resolva** com a mensagem "Número par!"
- Se o número é ímpar, **rejeite** com a mensagem "Número ímpar!"
- Use `.then()` e `.catch()` para tratar ambos os casos

```javascript
// Exemplo:
validarNumero(4);
// Output esperado:
// Validando número 4...
// Número par!

validarNumero(5);
// Output esperado:
// Validando número 5...
// Erro: Número ímpar!
```

---

## Exercício 3: Encadeamento de Promises

### 📝 Desafio

Crie **três Promises que dependem umas das outras**:
1. Primeira Promise: Aguarde 1 segundo e retorne um número (10)
2. Segunda Promise: Multiplique o resultado por 2
3. Terceira Promise: Adicione 5 ao resultado

Encadeie usando `.then()` e imprima cada passo.

```javascript
// Exemplo:
// Etapa 1: Obtendo número...
// (aguarda 1s)
// Etapa 1 completa: 10
// Etapa 2: Multiplicando por 2...
// Etapa 2 completa: 20
// Etapa 3: Adicionando 5...
// Etapa 3 completa: 25
// Resultado final: 25
```

---

## Exercício 4: Promise.all() - Operações Paralelas

### 📝 Desafio

Crie **três Promises independentes** (cada uma com um tempo diferente de resolução):
- Promise 1: Aguarde 2 segundos, retorne "Tarefa 1"
- Promise 2: Aguarde 1 segundo, retorne "Tarefa 2"
- Promise 3: Aguarde 3 segundos, retorne "Tarefa 3"

Use **Promise.all()** para aguardar todas e imprima o tempo total.

```javascript
// Exemplo:
// Iniciando 3 tarefas em paralelo...
// Tempo: 0s
// (aguarda o máximo = 3s)
// Tempo final: ~3 segundos
// Resultados: [ 'Tarefa 1', 'Tarefa 2', 'Tarefa 3' ]
```

---

## Exercício 5: async/await Básico

### 📝 Desafio

Reescreva o **Exercício 3** usando **async/await** em vez de `.then()`:
- Crie uma função assíncrona
- Use `await` para aguardar cada Promise
- Imprima o resultado de cada etapa

```javascript
// Exemplo:
// Etapa 1: Obtendo número...
// Etapa 1 completa: 10
// Etapa 2: Multiplicando por 2...
// Etapa 2 completa: 20
// Etapa 3: Adicionando 5...
// Etapa 3 completa: 25
// Resultado final: 25
```

---

## Exercício 6: Tratamento de Erros com async/await

### 📝 Desafio

Crie uma **função assíncrona que busca dados** de um "servidor":
- Simule uma chance de 50% de sucesso ou erro
- Use `try/catch` para tratar erros
- Imprima o resultado ou erro apropriado

```javascript
// Exemplo:
// Buscando dados do servidor...
// Sucesso! Dados: { id: 1, nome: 'João', email: 'joao@example.com' }

// OU

// Buscando dados do servidor...
// Erro ao buscar dados: Conexão perdida
```

---

## Exercício 7: Múltiplas Requisições Sequenciais

### 📝 Desafio

Simule **requisições a uma API** que retorna informações de usuário:
1. Requisição 1: Obtenha ID do usuário (1 segundo)
2. Requisição 2: Use o ID para obter dados do usuário (1 segundo)
3. Requisição 3: Use o ID para obter posts do usuário (1 segundo)

Use **async/await** e imprima o progresso.

```javascript
// Exemplo:
// Obtendo ID do usuário...
// ID obtido: 123
// Obtendo dados do usuário com ID 123...
// Usuário: { id: 123, nome: 'Alice', email: 'alice@example.com' }
// Obtendo posts do usuário...
// Posts: [1, 2, 3, 4, 5]
// Tempo total: ~3 segundos
```

---

## Exercício 8: Promise.race() - Primeira a Completar

### 📝 Desafio

Crie **três Promises com tempos diferentes**:
- Promise 1: Aguarde 3 segundos, retorne "Lenta"
- Promise 2: Aguarde 1 segundo, retorne "Rápida"
- Promise 3: Aguarde 2 segundos, retorne "Média"

Use **Promise.race()** para obter o resultado da primeira a completar.

```javascript
// Exemplo:
// Iniciando corrida...
// Primeira a completar: Rápida
// Tempo total: ~1 segundo
```

---

## Exercício 9: Mapeamento Assíncrono de Array

### 📝 Desafio

Crie uma **função que processa um array de números** de forma assíncrona:
- Para cada número, aguarde 0.5 segundos
- Multiplique o número por 2
- Colete todos os resultados

Use **Promise.all()** com `map()` e imprima o resultado.

```javascript
// Exemplo:
// Processando: [1, 2, 3, 4, 5]
// Aguardando processamento de 5 números...
// Resultados: [2, 4, 6, 8, 10]
// Tempo total: ~0.5 segundos (paralelo)
```

---

## Exercício 10: Desafio Final - Simulador de Download

### 📝 Desafio

Crie um **simulador de download de múltiplos arquivos**:
- Cada arquivo tem um nome e tamanho (em MB)
- Simule o tempo de download: 1 segundo por MB
- Imprima o progresso de cada arquivo
- Quando todos terminarem, imprima o tempo total e o tamanho total

```javascript
// Exemplo:
const arquivos = [
  { nome: 'arquivo1.zip', tamanho: 2 },    // 2 segundos
  { nome: 'arquivo2.pdf', tamanho: 1 },    // 1 segundo
  { nome: 'arquivo3.mp4', tamanho: 3 },    // 3 segundos
  { nome: 'arquivo4.doc', tamanho: 0.5 }   // 0.5 segundos
];

baixarArquivos(arquivos);
// Output esperado:
// Iniciando download de 4 arquivos...
// ⏱ arquivo1.zip (2 MB) iniciado
// ⏱ arquivo2.pdf (1 MB) iniciado
// ⏱ arquivo3.mp4 (3 MB) iniciado
// ⏱ arquivo4.doc (0.5 MB) iniciado
// ✓ arquivo2.pdf (1 MB) completado
// ✓ arquivo4.doc (0.5 MB) completado
// ✓ arquivo1.zip (2 MB) completado
// ✓ arquivo3.mp4 (3 MB) completado
// Download concluído!
// Tamanho total: 6.5 MB
// Tempo total: ~3 segundos (paralelo)
```

---

## Comparação: .then() vs async/await

Para praticar, implemente alguns exercícios de ambas as formas!

### Com .then()
```javascript
function exemplo() {
  return minhaPromise()
    .then(resultado => {
      console.log(resultado);
      return outrapromise();
    })
    .catch(erro => {
      console.error(erro);
    });
}
```

### Com async/await
```javascript
async function exemplo() {
  try {
    const resultado = await minhaPromise();
    console.log(resultado);
    await outrapromise();
  } catch (erro) {
    console.error(erro);
  }
}
```

---

## Conceitos Chave

Estes exercícios cobrem:
- ✅ Criação de Promises
- ✅ Resolução e rejeição
- ✅ Encadeamento com `.then()`
- ✅ Tratamento de erros com `.catch()` e `try/catch`
- ✅ `async/await` - sintaxe moderna
- ✅ `Promise.all()` - operações paralelas
- ✅ `Promise.race()` - primeira a completar
- ✅ Requisições sequenciais
- ✅ Processamento assíncrono de arrays
- ✅ Simulações de I/O (downloads, requisições)

---

## Como Usar

1. Leia o enunciado do exercício
2. Tente implementar a solução por conta própria
3. Consulte `solucoes.js` apenas se precisar de ajuda
4. Experimente com `.then()` e `async/await`
5. Modifique os tempos e valores para entender melhor
6. Pratique com seus próprios exemplos
