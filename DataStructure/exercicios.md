# Exercícios: Implementar Estruturas de Dados

Este arquivo contém exercícios práticos para implementar e manipular estruturas de dados em JavaScript. 

**👉 As soluções estão em `solucoes.js` - tente resolver por conta própria antes de consultar!**

---

## Exercício 1: Implementar uma Stack (Pilha)

### 📝 Desafio

Implemente uma classe `Stack` com os seguintes métodos:
- `push(element)` - Adiciona um elemento ao topo
- `pop()` - Remove e retorna o elemento do topo
- `peek()` - Retorna o elemento do topo sem remover
- `isEmpty()` - Verifica se a pilha está vazia
- `size()` - Retorna a quantidade de elementos
- `print()` - Imprime todos os elementos

**Teste seu código com este exemplo:**
```javascript
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); // Deve imprimir 30
console.log(stack.pop());  // Deve imprimir 30
console.log(stack.size()); // Deve imprimir 2
stack.print();             // Deve imprimir: 10 20
```

### ✅ Solução

👉 Veja `solucoes.js` para a solução completa!

---

## Exercício 2: Validar Parênteses Balanceados

### 📝 Desafio

Use a classe `Stack` para resolver este problema: **Verifique se uma string tem parênteses, chaves e colchetes balanceados.**

Exemplos:
- `"{[()]}"` → ✅ Válido
- `"([{}])"` → ✅ Válido
- `"{[(])}"` → ❌ Inválido
- `"{{{"` → ❌ Inválido

```javascript
function isValidParentheses(str) {
  // Implemente aqui
}

// Testes
console.log(isValidParentheses("{[()]}"));  // true
console.log(isValidParentheses("([{}])"));  // true
console.log(isValidParentheses("{[(])}"));  // false
console.log(isValidParentheses("{{{"));     // false
```

### ✅ Solução

👉 Veja `solucoes.js` para a solução completa!

---

## Exercício 3: Implementar uma Queue (Fila)

### 📝 Desafio

Implemente uma classe `Queue` com os seguintes métodos:
- `enqueue(element)` - Adiciona um elemento ao final
- `dequeue()` - Remove e retorna o primeiro elemento
- `front()` - Retorna o primeiro elemento sem remover
- `isEmpty()` - Verifica se está vazia
- `size()` - Retorna a quantidade de elementos

**Teste seu código:**
```javascript
const queue = new Queue();
queue.enqueue('João');
queue.enqueue('Maria');
queue.enqueue('Pedro');
console.log(queue.front());  // Deve imprimir 'João'
console.log(queue.dequeue()); // Deve imprimir 'João'
console.log(queue.size());   // Deve imprimir 2
```

### ✅ Solução

👉 Veja `solucoes.js` para a solução completa!

---

## Exercício 4: Fila de Atendimento

### 📝 Desafio

Use a classe `Queue` para simular um sistema de **fila de atendimento em banco**. Implemente:
- Adicionar cliente à fila
- Chamar próximo cliente
- Mostrar quem é o próximo
- Mostrar quantas pessoas estão na fila

```javascript
class BancoFila {
  constructor() {
    // Use a classe Queue
  }

  adicionarCliente(nome) {
    // Implemente
  }

  chamarProximo() {
    // Implemente
  }

  proximoCliente() {
    // Implemente
  }

  tamanhoFila() {
    // Implemente
  }
}

// Testes
const banco = new BancoFila();
banco.adicionarCliente('Alice');
banco.adicionarCliente('Bob');
banco.adicionarCliente('Charlie');
console.log(banco.proximoCliente()); // 'Alice'
console.log(banco.tamanhoFila());    // 3
console.log(banco.chamarProximo());  // 'Atendendo: Alice'
console.log(banco.tamanhoFila());    // 2
```

### ✅ Solução

👉 Veja `solucoes.js` para a solução completa!

---

## Exercício 5: Implementar uma Linked List (Lista Ligada)

### 📝 Desafio

Implemente uma classe `LinkedList` com:
- `insert(data)` - Insere no final
- `insertAtHead(data)` - Insere no início
- `remove(data)` - Remove um elemento
- `search(data)` - Busca um elemento
- `display()` - Mostra a lista
- `reverse()` - Reverte a lista

```javascript
class Node {
  // Implemente
}

class LinkedList {
  // Implemente
}

// Teste
const list = new LinkedList();
list.insert(10);
list.insert(20);
list.insert(30);
list.insertAtHead(5);
list.display(); // 5 -> 10 -> 20 -> 30 -> null
console.log(list.search(20)); // true
list.remove(20);
list.display(); // 5 -> 10 -> 30 -> null
list.reverse();
list.display(); // 30 -> 10 -> 5 -> null
```

### ✅ Solução

👉 Veja `solucoes.js` para a solução completa!

---

## Exercício 6: Implementar uma Hash Table (Tabela Hash)

### 📝 Desafio

Implemente uma classe `HashTable` com:
- `set(key, value)` - Adiciona um par chave-valor
- `get(key)` - Retorna o valor de uma chave
- `remove(key)` - Remove uma chave
- `has(key)` - Verifica se uma chave existe
- `keys()` - Retorna todas as chaves

```javascript
class HashTable {
  // Implemente
}

// Teste
const tabela = new HashTable();
tabela.set('nome', 'João');
tabela.set('idade', 30);
tabela.set('cidade', 'São Paulo');
console.log(tabela.get('nome'));  // 'João'
console.log(tabela.has('idade')); // true
console.log(tabela.keys());       // ['nome', 'idade', 'cidade']
tabela.remove('idade');
console.log(tabela.has('idade')); // false
```

### ✅ Solução

👉 Veja `solucoes.js` para a solução completa!

---

## Exercício 7: Contar Frequência de Caracteres

### 📝 Desafio

Use a `HashTable` para contar a frequência de cada caractere em uma string.

```javascript
function contagemCaracteres(str) {
  // Implemente
}

// Testes
console.log(contagemCaracteres('hello'));
// { h: 1, e: 1, l: 2, o: 1 }

console.log(contagemCaracteres('javascript'));
// { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }
```

### ✅ Solução

👉 Veja `solucoes.js` para a solução completa!

---

## Exercício 8: Implementar uma Binary Search Tree (BST)

### 📝 Desafio

Implemente uma classe `BinarySearchTree` com:
- `insert(value)` - Insere um valor
- `search(value)` - Busca um valor
- `inorder()` - Traversal em ordem
- `preorder()` - Traversal pré-ordem
- `postorder()` - Traversal pós-ordem
- `findMin()` - Encontra o mínimo
- `findMax()` - Encontra o máximo

```javascript
class BSTNode {
  // Implemente
}

class BinarySearchTree {
  // Implemente
}

// Teste
const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log(bst.inorder());   // [20, 30, 40, 50, 60, 70, 80]
console.log(bst.search(40));  // true
console.log(bst.search(100)); // false
console.log(bst.findMin());   // 20
console.log(bst.findMax());   // 80
```

### ✅ Solução

👉 Veja `solucoes.js` para a solução completa!

---

## Exercício 9: Desafio - Implementar um Graph (Grafo)

### 📝 Desafio

Implemente uma classe `Graph` com:
- `addVertex(vertex)` - Adiciona um vértice
- `addEdge(v1, v2)` - Adiciona uma aresta entre dois vértices
- `bfs(startVertex)` - Busca em largura
- `dfs(startVertex)` - Busca em profundidade
- `hasPath(v1, v2)` - Verifica se existe caminho entre dois vértices

```javascript
class Graph {
  // Implemente
}

// Teste
const grafo = new Graph();
grafo.addVertex('A');
grafo.addVertex('B');
grafo.addVertex('C');
grafo.addVertex('D');
grafo.addEdge('A', 'B');
grafo.addEdge('B', 'C');
grafo.addEdge('A', 'D');

console.log(grafo.bfs('A'));        // ['A', 'B', 'D', 'C']
console.log(grafo.dfs('A'));        // ['A', 'B', 'C', 'D'] ou outra ordem
console.log(grafo.hasPath('A', 'C')); // true
console.log(grafo.hasPath('C', 'A')); // false (não direcionado)
```

### ✅ Solução

👉 Veja `solucoes.js` para a solução completa!

---

## Desafios Extras

### Desafio 1: Encontrar Pares com Soma Alvo
Use uma Hash Table para encontrar dois números em um array que somem um alvo.

```javascript
function encontrarPares(array, alvo) {
  // array = [2, 3, 7, 8, 4, 1], alvo = 10
  // Resultado: [[2, 8], [3, 7]]
}
```

### Desafio 2: Implementar LRU Cache
Cache que remove o item menos recentemente usado quando cheio.

```javascript
class LRUCache {
  constructor(capacidade) {
    // Use LinkedList + Hash Table
  }

  get(key) { }
  put(key, value) { }
}
```

### Desafio 3: Implementar Fila com Prioridade
Queue onde elementos com maior prioridade saem primeiro.

```javascript
class PriorityQueue {
  constructor() { }
  enqueue(element, priority) { }
  dequeue() { }
}
```

---

## Resumo de Complexidades

| Estrutura | Acesso | Busca | Insert | Remove | Espaço |
|-----------|--------|-------|--------|--------|--------|
| Stack | O(n) | O(n) | O(1) | O(1) | O(n) |
| Queue | O(n) | O(n) | O(1) | O(n)* | O(n) |
| LinkedList | O(n) | O(n) | O(1)** | O(n) | O(n) |
| HashTable | - | O(1) | O(1) | O(1) | O(n) |
| BST | O(log n)* | O(log n)* | O(log n)* | O(log n)* | O(n) |
| Graph | - | O(V+E) | O(1) | O(E) | O(V+E) |

*Em média | **No início | *Pior caso

---

## Como Usar Este Arquivo

1. Leia o desafio e tente implementar por conta própria
2. Consulte a solução apenas se necessário
3. Modifique e teste o código para entender melhor
4. Tente os desafios extras para praticar mais
