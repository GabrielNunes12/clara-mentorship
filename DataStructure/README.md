# Estruturas de Dados

## O que é uma Estrutura de Dados?

Uma **estrutura de dados** é uma forma especializada de organizar e armazenar dados em um computador, de modo que possam ser acessados e modificados eficientemente. A escolha da estrutura correta pode fazer a diferença entre um programa rápido e um programa lento.

## Análise de Complexidade: Big O

### O que é Big O?

**Big O** é uma notação usada para descrever como o desempenho de um algoritmo piora conforme o tamanho da entrada cresce. Ela nos ajuda a entender a escalabilidade de uma estrutura de dados.

### Notações Comuns (da mais rápida à mais lenta)

```
O(1)      → Tempo constante - excelente
O(log n)  → Tempo logarítmico - muito bom
O(n)      → Tempo linear - bom
O(n log n)→ Tempo linearítmico - razoável
O(n²)     → Tempo quadrático - ruim
O(n³)     → Tempo cúbico - muito ruim
O(2ⁿ)     → Tempo exponencial - horrível
O(n!)     → Tempo fatorial - absurdo
```

### Visualização Gráfica

```
        Operações
           |
        n! |                                    O(n!)
           |
        2ⁿ |                            O(2ⁿ)
           |
        n³ |                    O(n³)
           |
        n² |            O(n²)
           |
      n log|        O(n log n)
         n |
         n |    O(n)
           |
      log  | O(log n)
         n |
         1 | O(1)
           |_________________________
             1  2  3  4  5  Tamanho da entrada (n)
```

### Exemplos de Cada Notação

```javascript
// O(1) - Tempo constante
function obterPrimeiro(array) {
  return array[0];
}

// O(log n) - Busca binária
function buscaBinaria(array, alvo) {
  let esquerda = 0, direita = array.length - 1;
  while (esquerda <= direita) {
    const meio = Math.floor((esquerda + direita) / 2);
    if (array[meio] === alvo) return meio;
    if (array[meio] < alvo) esquerda = meio + 1;
    else direita = meio - 1;
  }
  return -1;
}

// O(n) - Busca linear
function buscarLinear(array, alvo) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === alvo) return i;
  }
  return -1;
}

// O(n²) - Bubble sort
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

// O(n!) - Gerar todas as permutações
function permutacoes(arr) {
  if (arr.length <= 1) return [arr];
  const resultado = [];
  for (let i = 0; i < arr.length; i++) {
    const resto = arr.slice(0, i).concat(arr.slice(i + 1));
    for (let perm of permutacoes(resto)) {
      resultado.push([arr[i], ...perm]);
    }
  }
  return resultado;
}
```

---

## Estruturas de Dados Mais Usadas

### 1. Array (Lista)

**O que é**: Coleção ordenada de elementos armazenados em posições contíguas de memória.

**Complexidade de Tempo**:
| Operação | Complexidade | Notas |
|----------|-------------|-------|
| Acesso | O(1) | Direto pelo índice |
| Busca | O(n) | Precisa procurar elemento a elemento |
| Inserção no início | O(n) | Todos os elementos deslocam |
| Inserção no final | O(1) | Se houver espaço |
| Inserção no meio | O(n) | Elementos deslocam |
| Remoção | O(n) | Pode precisar deslocar |

**Complexidade de Espaço**: O(n)

```javascript
const array = [1, 2, 3, 4, 5];

// O(1) - Acesso direto
console.log(array[2]); // 3

// O(n) - Busca
const indice = array.indexOf(3); // Procura linearmente

// O(n) - Inserção no início
array.unshift(0); // [0, 1, 2, 3, 4, 5] - todos deslocam

// O(1) - Inserção no final
array.push(6); // [0, 1, 2, 3, 4, 5, 6]
```

**Quando usar**:
- Acesso frequente por índice
- Dados ordenados
- Iteração sobre todos os elementos

---

### 2. Linked List (Lista Ligada)

**O que é**: Coleção de nós, onde cada nó contém dados e uma referência para o próximo nó.

**Complexidade de Tempo**:
| Operação | Complexidade | Notas |
|----------|-------------|-------|
| Acesso | O(n) | Precisa seguir os nós |
| Busca | O(n) | Percorre nó a nó |
| Inserção no início | O(1) | Apenas cria novo nó |
| Inserção no final | O(n) | Precisa encontrar o final |
| Remoção | O(n) | Precisa encontrar o nó |

**Complexidade de Espaço**: O(n)

```javascript
// Implementação básica
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // O(1) - Inserção no início
  inserirNoInicio(data) {
    const novoNode = new Node(data);
    novoNode.next = this.head;
    this.head = novoNode;
  }

  // O(n) - Inserção no final
  inserirNoFinal(data) {
    const novoNode = new Node(data);
    if (!this.head) {
      this.head = novoNode;
      return;
    }
    let atual = this.head;
    while (atual.next) {
      atual = atual.next;
    }
    atual.next = novoNode;
  }

  // O(n) - Busca
  buscar(data) {
    let atual = this.head;
    while (atual) {
      if (atual.data === data) return true;
      atual = atual.next;
    }
    return false;
  }
}
```

**Quando usar**:
- Inserções e remoções frequentes no início
- Tamanho desconhecido ou variável
- Quando o acesso aleatório não é importante

---

### 3. Stack (Pilha)

**O que é**: Estrutura LIFO (Last In, First Out) - o último a entrar é o primeiro a sair.

**Complexidade de Tempo**:
| Operação | Complexidade |
|----------|-------------|
| Push (inserir) | O(1) |
| Pop (remover) | O(1) |
| Peek (ver topo) | O(1) |

**Complexidade de Espaço**: O(n)

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  // O(1) - Adiciona ao topo
  push(element) {
    this.items.push(element);
  }

  // O(1) - Remove do topo
  pop() {
    return this.items.pop();
  }

  // O(1) - Vê o topo sem remover
  peek() {
    return this.items[this.items.length - 1];
  }

  // O(1) - Verifica se vazia
  isEmpty() {
    return this.items.length === 0;
  }
}

// Exemplo: Validar parênteses balanceados
function validarParenteses(str) {
  const stack = new Stack();
  const pares = { ')': '(', '}': '{', ']': '[' };

  for (let char of str) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.isEmpty() || stack.pop() !== pares[char]) {
        return false;
      }
    }
  }
  return stack.isEmpty();
}
```

**Quando usar**:
- Histórico de ações (undo/redo)
- Avaliação de expressões
- Busca em profundidade (DFS)
- Verificação de balanceamento de parênteses

---

### 4. Queue (Fila)

**O que é**: Estrutura FIFO (First In, First Out) - o primeiro a entrar é o primeiro a sair.

**Complexidade de Tempo**:
| Operação | Complexidade |
|----------|-------------|
| Enqueue (inserir) | O(1) |
| Dequeue (remover) | O(1) |
| Peek (ver frente) | O(1) |

**Complexidade de Espaço**: O(n)

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  // O(1) - Adiciona ao final
  enqueue(element) {
    this.items.push(element);
  }

  // O(n) - Remove da frente (pode ser otimizado)
  dequeue() {
    return this.items.shift();
  }

  // O(1) - Vê a frente
  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// Exemplo: Fila de impressão
class FilaImpressao {
  constructor() {
    this.fila = new Queue();
  }

  adicionar(documento) {
    this.fila.enqueue(documento);
    console.log(`${documento} adicionado à fila`);
  }

  imprimir() {
    if (this.fila.isEmpty()) {
      console.log('Fila vazia');
      return;
    }
    const documento = this.fila.dequeue();
    console.log(`Imprimindo: ${documento}`);
  }
}
```

**Quando usar**:
- Processamento de tarefas em ordem (jobs)
- Busca em largura (BFS)
- Sistemas de atendimento
- Simulações

---

### 5. Hash Table / Object (Tabela Hash)

**O que é**: Estrutura que mapeia chaves para valores usando uma função hash.

**Complexidade de Tempo**:
| Operação | Complexidade | Notas |
|----------|-------------|-------|
| Inserção | O(1) | Em média |
| Busca | O(1) | Em média |
| Remoção | O(1) | Em média |
| Colisão | O(n) | Pior caso |

**Complexidade de Espaço**: O(n)

```javascript
// Implementação simples com um objeto
const mapa = {};

// O(1) - Inserção
mapa['chave1'] = 'valor1';

// O(1) - Busca
console.log(mapa['chave1']); // 'valor1'

// O(1) - Remoção
delete mapa['chave1'];

// Implementação com Map (mais moderno)
const mapaModerno = new Map();

mapaModerno.set('chave1', 'valor1');
console.log(mapaModerno.get('chave1')); // 'valor1'
mapaModerno.delete('chave1');

// Exemplo: Contar frequência de caracteres
function contagemCaracteres(str) {
  const frequencia = {};
  
  for (let char of str) {
    frequencia[char] = (frequencia[char] || 0) + 1;
  }
  
  return frequencia;
}

console.log(contagemCaracteres('aabbcc'));
// { a: 2, b: 2, c: 2 }
```

**Quando usar**:
- Cache de dados
- Contagem de frequências
- Busca rápida por chave
- Mapeamentos de dados

---

### 6. Binary Search Tree (Árvore Binária de Busca)

**O que é**: Árvore onde cada nó tem no máximo 2 filhos e segue a propriedade: filhos à esquerda < nó < filhos à direita.

**Complexidade de Tempo**:
| Operação | Melhor Caso | Pior Caso |
|----------|------------|-----------|
| Busca | O(log n) | O(n) |
| Inserção | O(log n) | O(n) |
| Remoção | O(log n) | O(n) |

**Complexidade de Espaço**: O(n)

```javascript
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // O(log n) em média
  insert(value) {
    const novoNode = new TreeNode(value);
    if (!this.root) {
      this.root = novoNode;
      return;
    }
    let atual = this.root;
    while (true) {
      if (value === atual.value) return;
      if (value < atual.value) {
        if (!atual.left) {
          atual.left = novoNode;
          return;
        }
        atual = atual.left;
      } else {
        if (!atual.right) {
          atual.right = novoNode;
          return;
        }
        atual = atual.right;
      }
    }
  }

  // O(log n) em média
  search(value) {
    let atual = this.root;
    while (atual) {
      if (value === atual.value) return true;
      if (value < atual.value) {
        atual = atual.left;
      } else {
        atual = atual.right;
      }
    }
    return false;
  }

  // Traversal em ordem (esquerda -> nó -> direita)
  inorderTraversal(node = this.root, result = []) {
    if (node) {
      this.inorderTraversal(node.left, result);
      result.push(node.value);
      this.inorderTraversal(node.right, result);
    }
    return result;
  }
}
```

**Quando usar**:
- Dados que precisam estar ordenados
- Buscas frequentes
- Inserções e remoções frequentes com ordem mantida

---

### 7. Graph (Grafo)

**O que é**: Estrutura com vértices (nós) conectados por arestas, podendo ser direcionado ou não.

**Complexidade de Tempo** (depende da representação):
| Operação | Lista de Adjacência | Matriz de Adjacência |
|----------|-------------------|-------------------|
| Adicionar vértice | O(1) | O(V²) |
| Adicionar aresta | O(1) | O(1) |
| Remover aresta | O(E/V) | O(1) |
| Buscar vizinhos | O(V + E) | O(V) |

**Complexidade de Espaço**: O(V + E) ou O(V²)

```javascript
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // O(1) - Adicionar vértice
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // O(1) - Adicionar aresta (não-direcionada)
  addEdge(vertex1, vertex2) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1);
  }

  // O(V + E) - BFS
  bfs(startVertex) {
    const visitados = new Set();
    const fila = [startVertex];
    const resultado = [];

    visitados.add(startVertex);

    while (fila.length > 0) {
      const vertex = fila.shift();
      resultado.push(vertex);

      for (let vizinho of this.adjacencyList.get(vertex)) {
        if (!visitados.has(vizinho)) {
          visitados.add(vizinho);
          fila.push(vizinho);
        }
      }
    }
    return resultado;
  }

  // O(V + E) - DFS
  dfs(startVertex, visitados = new Set(), resultado = []) {
    visitados.add(startVertex);
    resultado.push(startVertex);

    for (let vizinho of this.adjacencyList.get(startVertex)) {
      if (!visitados.has(vizinho)) {
        this.dfs(vizinho, visitados, resultado);
      }
    }
    return resultado;
  }
}
```

**Quando usar**:
- Redes sociais (conexões entre pessoas)
- Mapas e rotas
- Recomendações
- Sistemas de dependências

---

## Tabela Comparativa Rápida

| Estrutura | Acesso | Busca | Inserção | Remoção | Espaço |
|-----------|--------|-------|----------|---------|--------|
| Array | O(1) | O(n) | O(n) | O(n) | O(n) |
| Linked List | O(n) | O(n) | O(1)* | O(n) | O(n) |
| Stack | O(n) | O(n) | O(1) | O(1) | O(n) |
| Queue | O(n) | O(n) | O(1) | O(1) | O(n) |
| Hash Table | O(1) | O(1) | O(1) | O(1) | O(n) |
| BST | O(log n)* | O(log n)* | O(log n)* | O(log n)* | O(n) |
| Graph | - | O(V+E) | O(1) | O(V+E) | O(V+E) |

*Em média ou melhor caso

---

## Dicas Práticas

### Como Escolher uma Estrutura

1. **Frequência de Acesso**: Arrays são rápidos para acesso, mas lentos para inserção
2. **Frequência de Inserção/Remoção**: Linked Lists são melhores no início
3. **Necessidade de Busca Rápida**: Hash Tables ou BSTs
4. **Ordem Importante**: Arrays, BSTs ou LinkedLists ordenadas
5. **Operações em Ordem Específica**: Stacks (LIFO) ou Queues (FIFO)

### Regra Geral

```
Precisa de acesso rápido?     → Array ou Hash Table
Precisa de ordem?              → BST ou Array ordenado
Insere/remove muito?           → Linked List
Último a entrar, primeiro sai? → Stack
Primeiro a entrar, primeiro sai? → Queue
Conexões complexas?            → Graph
```

---

## Referências

Para aprender mais sobre padrões arquiteturais e design patterns relacionados a estruturas de dados, veja a pasta `designPatterns/`.
