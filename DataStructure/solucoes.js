// ============================================
// SOLUÇÕES: Estruturas de Dados em JavaScript
// ============================================

// ============================================
// Exercício 1: Stack (Pilha)
// ============================================

class Stack {
  constructor() {
    this.items = [];
  }

  // Adiciona um elemento ao topo da pilha - O(1)
  push(element) {
    this.items.push(element);
  }

  // Remove e retorna o elemento do topo - O(1)
  pop() {
    if (this.isEmpty()) {
      return 'Pilha vazia';
    }
    return this.items.pop();
  }

  // Retorna o elemento do topo sem remover - O(1)
  peek() {
    if (this.isEmpty()) {
      return 'Pilha vazia';
    }
    return this.items[this.items.length - 1];
  }

  // Verifica se a pilha está vazia - O(1)
  isEmpty() {
    return this.items.length === 0;
  }

  // Retorna o tamanho da pilha - O(1)
  size() {
    return this.items.length;
  }

  // Imprime todos os elementos - O(n)
  print() {
    console.log(this.items.toString());
  }
}

// Teste
console.log('=== Exercício 1: Stack ===');
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); // 30
console.log(stack.pop());  // 30
console.log(stack.size()); // 2
stack.print();             // 10,20

// ============================================
// Exercício 2: Validar Parênteses Balanceados
// ============================================

function isValidParentheses(str) {
  const stack = new Stack();
  const pares = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  // Itera através de cada caractere - O(n)
  for (let char of str) {
    // Se é um parêntese de abertura, adiciona na pilha
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    }
    // Se é um parêntese de fechamento
    else if (char === ')' || char === '}' || char === ']') {
      // Se a pilha está vazia ou o parêntese não corresponde
      if (stack.isEmpty() || stack.pop() !== pares[char]) {
        return false;
      }
    }
  }

  // A pilha deve estar vazia no final
  return stack.isEmpty();
}

// Testes
console.log('\n=== Exercício 2: Parênteses Balanceados ===');
console.log(isValidParentheses("{[()]}"));   // true
console.log(isValidParentheses("([{}])"));   // true
console.log(isValidParentheses("{[(])}"));   // false
console.log(isValidParentheses("{{{"));      // false

// Complexidade: O(n) tempo, O(n) espaço

// ============================================
// Exercício 3: Queue (Fila)
// ============================================

class Queue {
  constructor() {
    this.items = [];
  }

  // Adiciona um elemento ao final da fila - O(1)
  enqueue(element) {
    this.items.push(element);
  }

  // Remove e retorna o primeiro elemento - O(n)
  // Nota: Usar shift() em array é O(n). Para fila real, usar índices é melhor
  dequeue() {
    if (this.isEmpty()) {
      return 'Fila vazia';
    }
    return this.items.shift();
  }

  // Retorna o primeiro elemento sem remover - O(1)
  front() {
    if (this.isEmpty()) {
      return 'Fila vazia';
    }
    return this.items[0];
  }

  // Verifica se a fila está vazia - O(1)
  isEmpty() {
    return this.items.length === 0;
  }

  // Retorna o tamanho - O(1)
  size() {
    return this.items.length;
  }

  // Imprime todos os elementos - O(n)
  print() {
    console.log(this.items.toString());
  }
}

// Teste
console.log('\n=== Exercício 3: Queue ===');
const queue = new Queue();
queue.enqueue('João');
queue.enqueue('Maria');
queue.enqueue('Pedro');
console.log(queue.front());   // João
console.log(queue.dequeue()); // João
console.log(queue.size());    // 2
queue.print();                // Maria,Pedro

// ============================================
// Exercício 4: Fila de Atendimento
// ============================================

class BancoFila {
  constructor() {
    this.fila = new Queue();
    this.clienteAtual = null;
  }

  // O(1) - Adiciona cliente à fila
  adicionarCliente(nome) {
    this.fila.enqueue(nome);
    console.log(`${nome} entrou na fila`);
  }

  // O(n) - Chama o próximo cliente
  chamarProximo() {
    if (this.fila.isEmpty()) {
      return 'Fila vazia';
    }
    this.clienteAtual = this.fila.dequeue();
    return `Atendendo: ${this.clienteAtual}`;
  }

  // O(1) - Mostra quem é o próximo
  proximoCliente() {
    if (this.fila.isEmpty()) {
      return 'Fila vazia';
    }
    return this.fila.front();
  }

  // O(1) - Mostra tamanho da fila
  tamanhoFila() {
    return this.fila.size();
  }
}

// Testes
console.log('\n=== Exercício 4: Fila de Atendimento ===');
const banco = new BancoFila();
banco.adicionarCliente('Alice');
banco.adicionarCliente('Bob');
banco.adicionarCliente('Charlie');
console.log(banco.proximoCliente()); // Alice
console.log(banco.tamanhoFila());    // 3
console.log(banco.chamarProximo());  // Atendendo: Alice
console.log(banco.tamanhoFila());    // 2

// ============================================
// Exercício 5: Linked List (Lista Ligada)
// ============================================

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

  // O(n) - Insere no final
  insert(data) {
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

  // O(1) - Insere no início
  insertAtHead(data) {
    const novoNode = new Node(data);
    novoNode.next = this.head;
    this.head = novoNode;
  }

  // O(n) - Remove um elemento
  remove(data) {
    if (!this.head) return;

    // Se é o primeiro elemento
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    // Busca o elemento
    let atual = this.head;
    while (atual.next) {
      if (atual.next.data === data) {
        atual.next = atual.next.next;
        return;
      }
      atual = atual.next;
    }
  }

  // O(n) - Busca um elemento
  search(data) {
    let atual = this.head;
    while (atual) {
      if (atual.data === data) return true;
      atual = atual.next;
    }
    return false;
  }

  // O(n) - Mostra a lista
  display() {
    let atual = this.head;
    let resultado = '';
    while (atual) {
      resultado += atual.data + ' -> ';
      atual = atual.next;
    }
    resultado += 'null';
    console.log(resultado);
  }

  // O(n) - Reverte a lista
  reverse() {
    let anterior = null;
    let atual = this.head;
    let proximo = null;

    while (atual) {
      proximo = atual.next;
      atual.next = anterior;
      anterior = atual;
      atual = proximo;
    }
    this.head = anterior;
  }
}

// Testes
console.log('\n=== Exercício 5: Linked List ===');
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

// ============================================
// Exercício 6: Hash Table (Tabela Hash)
// ============================================

class HashTable {
  constructor(tamanho = 50) {
    this.tabela = new Array(tamanho);
  }

  // Função hash simples
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.tabela.length;
  }

  // O(1) em média - Adiciona um par chave-valor
  set(key, value) {
    const indice = this.hash(key);
    if (!this.tabela[indice]) {
      this.tabela[indice] = {};
    }
    this.tabela[indice][key] = value;
  }

  // O(1) em média - Retorna o valor de uma chave
  get(key) {
    const indice = this.hash(key);
    if (this.tabela[indice]) {
      return this.tabela[indice][key];
    }
    return undefined;
  }

  // O(1) em média - Remove uma chave
  remove(key) {
    const indice = this.hash(key);
    if (this.tabela[indice]) {
      delete this.tabela[indice][key];
    }
  }

  // O(1) em média - Verifica se uma chave existe
  has(key) {
    const indice = this.hash(key);
    return this.tabela[indice] && this.tabela[indice][key] !== undefined;
  }

  // O(n) - Retorna todas as chaves
  keys() {
    const allKeys = [];
    for (let i = 0; i < this.tabela.length; i++) {
      if (this.tabela[i]) {
        for (let key in this.tabela[i]) {
          allKeys.push(key);
        }
      }
    }
    return allKeys;
  }

  // O(n) - Retorna todos os valores
  values() {
    const allValues = [];
    for (let i = 0; i < this.tabela.length; i++) {
      if (this.tabela[i]) {
        for (let key in this.tabela[i]) {
          allValues.push(this.tabela[i][key]);
        }
      }
    }
    return allValues;
  }
}

// Testes
console.log('\n=== Exercício 6: Hash Table ===');
const tabela = new HashTable();
tabela.set('nome', 'João');
tabela.set('idade', 30);
tabela.set('cidade', 'São Paulo');
console.log(tabela.get('nome'));  // João
console.log(tabela.has('idade')); // true
console.log(tabela.keys());       // ['nome', 'idade', 'cidade']
tabela.remove('idade');
console.log(tabela.has('idade')); // false

// ============================================
// Exercício 7: Contar Frequência de Caracteres
// ============================================

function contagemCaracteres(str) {
  const frequencia = new HashTable();

  // Itera cada caractere - O(n)
  for (let char of str) {
    if (frequencia.has(char)) {
      // Incrementa se já existe - O(1)
      frequencia.set(char, frequencia.get(char) + 1);
    } else {
      // Adiciona se não existe - O(1)
      frequencia.set(char, 1);
    }
  }

  // Converte para objeto simples
  const resultado = {};
  frequencia.keys().forEach(key => {
    resultado[key] = frequencia.get(key);
  });

  return resultado;
}

// Testes
console.log('\n=== Exercício 7: Contagem de Caracteres ===');
console.log(contagemCaracteres('hello'));
// { h: 1, e: 1, l: 2, o: 1 }

console.log(contagemCaracteres('javascript'));
// { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }

// Complexidade: O(n) tempo, O(k) espaço (k = caracteres únicos)

// ============================================
// Exercício 8: Binary Search Tree (BST)
// ============================================

class BSTNode {
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

  // O(log n) em média - Insere um valor
  insert(value) {
    const novoNode = new BSTNode(value);
    if (!this.root) {
      this.root = novoNode;
      return;
    }

    let atual = this.root;
    while (true) {
      if (value === atual.value) return; // Não permite duplicatas
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

  // O(log n) em média - Busca um valor
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

  // O(n) - Traversal em ordem (esquerda, raiz, direita)
  inorder(node = this.root, resultado = []) {
    if (node) {
      this.inorder(node.left, resultado);
      resultado.push(node.value);
      this.inorder(node.right, resultado);
    }
    return resultado;
  }

  // O(n) - Traversal pré-ordem (raiz, esquerda, direita)
  preorder(node = this.root, resultado = []) {
    if (node) {
      resultado.push(node.value);
      this.preorder(node.left, resultado);
      this.preorder(node.right, resultado);
    }
    return resultado;
  }

  // O(n) - Traversal pós-ordem (esquerda, direita, raiz)
  postorder(node = this.root, resultado = []) {
    if (node) {
      this.postorder(node.left, resultado);
      this.postorder(node.right, resultado);
      resultado.push(node.value);
    }
    return resultado;
  }

  // O(log n) em média - Encontra o mínimo
  findMin(node = this.root) {
    if (!node) return null;
    while (node.left) {
      node = node.left;
    }
    return node.value;
  }

  // O(log n) em média - Encontra o máximo
  findMax(node = this.root) {
    if (!node) return null;
    while (node.right) {
      node = node.right;
    }
    return node.value;
  }
}

// Testes
console.log('\n=== Exercício 8: Binary Search Tree ===');
const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log(bst.inorder());   // [20, 30, 40, 50, 60, 70, 80]
console.log(bst.preorder());  // [50, 30, 20, 40, 70, 60, 80]
console.log(bst.postorder()); // [20, 40, 30, 60, 80, 70, 50]
console.log(bst.search(40));  // true
console.log(bst.search(100)); // false
console.log(bst.findMin());   // 20
console.log(bst.findMax());   // 80

// ============================================
// Exercício 9: Graph (Grafo)
// ============================================

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // O(1) - Adiciona um vértice
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // O(1) - Adiciona uma aresta (não-direcionada)
  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);
    this.adjacencyList.get(v1).push(v2);
    this.adjacencyList.get(v2).push(v1);
  }

  // O(V + E) - Busca em largura (BFS)
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

  // O(V + E) - Busca em profundidade (DFS)
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

  // O(V + E) - Verifica se existe caminho entre dois vértices
  hasPath(v1, v2) {
    const visitados = new Set();

    const dfsHelper = (vertex) => {
      if (vertex === v2) return true;
      visitados.add(vertex);

      for (let vizinho of this.adjacencyList.get(vertex)) {
        if (!visitados.has(vizinho)) {
          if (dfsHelper(vizinho)) return true;
        }
      }
      return false;
    };

    return dfsHelper(v1);
  }
}

// Testes
console.log('\n=== Exercício 9: Graph ===');
const grafo = new Graph();
grafo.addVertex('A');
grafo.addVertex('B');
grafo.addVertex('C');
grafo.addVertex('D');
grafo.addEdge('A', 'B');
grafo.addEdge('B', 'C');
grafo.addEdge('A', 'D');

console.log(grafo.bfs('A'));         // ['A', 'B', 'D', 'C']
console.log(grafo.dfs('A'));         // ['A', 'B', 'C', 'D']
console.log(grafo.hasPath('A', 'C')); // true
console.log(grafo.hasPath('C', 'A')); // true
