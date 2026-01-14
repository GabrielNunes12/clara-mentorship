# Clara Mentorship 🎓

Um repositório educacional focado em **aprender fundamentos de engenharia de software** através de exemplos estruturados e implementações práticas.

## 📚 Visão Geral do Projeto

Este projeto é organizado em **domínios de aprendizado** progressivos, cada um cobrindo conceitos fundamentais de programação com exemplos e exercícios em **JavaScript**.

### Estrutura Principal

```
clara-mentorship/
├── arquitetura/                      # Padrões arquiteturais
├── codigo assincrono/                # Programação assíncrona
├── Codigo sincrono/                  # Programação síncrona
├── DataStructure/                    # Estruturas de dados
├── designPatterns/                   # Padrões de design
└── README.md                         # Este arquivo
```

---

## 📖 Conteúdo por Domínio

### 1️⃣ **Código Síncrono** (`Codigo sincrono/`)

Entenda como o JavaScript executa código **sequencialmente**, linha por linha, de forma bloqueante.

#### Arquivos
- **`README.md`** - Guia completo sobre código síncrono
  - O que é código síncrono
  - Características e como funciona em JavaScript
  - Exemplos de operações matemáticas, loops e I/O
  - Vantagens e desvantagens
  - Comparação com código assíncrono

- **`exercicios.md`** - 10 exercícios práticos
  1. Operações matemáticas sequenciais
  2. Processamento de arrays
  3. Manipulação de strings
  4. Loop com acumulador
  5. Operações com objetos
  6. Busca linear
  7. Bubble sort
  8. Fibonacci recursivo
  9. Transformação de dados em cadeia
  10. Calculadora síncrona (desafio)

- **`solucoes.js`** - Soluções comentadas e executáveis
  - Todas as 10 soluções com código completo
  - Exemplos de teste para cada exercício
  - Explicações de fluxo síncrono

#### Conceitos Cobertos
✅ Execução sequencial  
✅ Loops e iteração  
✅ Manipulação de dados (arrays, strings, objetos)  
✅ Algoritmos básicos (busca, ordenação)  
✅ Recursão síncrona  

---

### 2️⃣ **Código Assíncrono** (`codigo assincrono/`)

Explore como o JavaScript executa código de forma **não-bloqueante**, usando Promises e async/await.

#### Arquivos
- **`README.md`** - Guia completo sobre código assíncrono
  - O que é código assíncrono
  - Event loop do JavaScript
  - 3 padrões principais:
    - **Callbacks** (legado)
    - **Promises** (intermediário)
    - **Async/Await** (moderno)
  - Exemplos de leitura sequencial vs paralela
  - Promise.all(), Promise.race()
  - Boas práticas

- **`exercicios.md`** - 10 exercícios práticos
  1. Primeira Promise simples
  2. Promise com rejeição
  3. Encadeamento de Promises
  4. Promise.all() - operações paralelas
  5. async/await básico
  6. Tratamento de erros com async/await
  7. Múltiplas requisições sequenciais
  8. Promise.race() - primeira a completar
  9. Mapeamento assíncrono de array
  10. Simulador de download (desafio)

- **`solucoes.js`** - Soluções comentadas e executáveis
  - Todas as 10 soluções com código completo
  - Comparação entre `.then()` e `async/await`
  - Simulações realistas de requisições e downloads
  - Medição de tempo para visualizar execução

#### Conceitos Cobertos
✅ Promises (resolução, rejeição)  
✅ Encadeamento com `.then()`  
✅ Tratamento de erros com `.catch()` e `try/catch`  
✅ Async/Await (sintaxe moderna)  
✅ Promise.all() (operações paralelas)  
✅ Promise.race() (primeira a completar)  
✅ Requisições sequenciais vs paralelas  

---

### 3️⃣ **Estruturas de Dados** (`DataStructure/`)

Aprenda sobre as estruturas de dados mais usadas, Big O e análise de complexidade.

#### Arquivos
- **`README.md`** - Guia completo sobre estruturas de dados
  - O que é uma estrutura de dados
  - **Análise Big O**:
    - Notações comuns (O(1), O(n), O(n²), etc.)
    - Visualização gráfica
    - Exemplos práticos
  - 7 estruturas principais:
    - **Array** - Acesso O(1)
    - **Linked List** - Inserção rápida no início
    - **Stack** - LIFO, operações O(1)
    - **Queue** - FIFO, operações O(1)
    - **Hash Table** - Busca rápida O(1)
    - **Binary Search Tree** - Operações O(log n)
    - **Graph** - Estruturas complexas
  - Para cada estrutura: complexidade, exemplos, casos de uso
  - Tabela comparativa rápida
  - Guia prático para escolher a estrutura correta

- **`exercicios.md`** - 10 exercícios para implementar
  1. Implementar uma Stack
  2. Validar parênteses balanceados
  3. Implementar uma Queue
  4. Fila de atendimento em banco
  5. Implementar uma Linked List
  6. Implementar uma Hash Table
  7. Contar frequência de caracteres
  8. Implementar uma Binary Search Tree
  9. Implementar um Graph
  10. Desafios extras (LRU Cache, Fila com Prioridade)

- **`solucoes.js`** - Soluções comentadas e executáveis
  - Implementações completas de todas as 9 estruturas
  - Análise de complexidade de tempo e espaço
  - Exemplos de teste e casos de uso
  - Operações principais (inserção, remoção, busca, etc.)

#### Conceitos Cobertos
✅ Big O notation  
✅ Análise de tempo e espaço  
✅ Arrays, Linked Lists, Stacks, Queues  
✅ Hash Tables  
✅ Binary Search Trees  
✅ Graphs (BFS, DFS)  
✅ Traversals (inorder, preorder, postorder)  

---

### 4️⃣ **Design Patterns** (`designPatterns/`)

*Pasta preparada para padrões de design e boas práticas* (conteúdo em construção)

---

### 5️⃣ **Arquitetura** (`arquitetura/`)

*Pasta preparada para padrões arquiteturais e design de sistemas* (conteúdo em construção)

---

## 🎯 Instruções para AI Agents

O arquivo `.github/copilot-instructions.md` contém instruções específicas para auxiliar AI agents (como GitHub Copilot) a ser produtivos neste codebase.

Cobre:
- Organização e estrutura do projeto
- Convenções de nomenclatura
- Foco educacional
- Como organizar novo conteúdo
- Práticas a evitar

---

## 🚀 Como Usar Este Repositório

### Para Iniciantes

1. **Comece com Código Síncrono**
   ```bash
   # Leia o README
   cat "Codigo sincrono/README.md"
   
   # Veja os exercícios
   cat "Codigo sincrono/exercicios.md"
   
   # Execute as soluções
   node "Codigo sincrono/solucoes.js"
   ```

2. **Depois explore Código Assíncrono**
   ```bash
   # Leia o README
   cat "codigo assincrono/README.md"
   
   # Veja os exercícios
   cat "codigo assincrono/exercicios.md"
   
   # Execute as soluções
   node "codigo assincrono/solucoes.js"
   ```

3. **Estude Estruturas de Dados**
   ```bash
   # Leia o README
   cat "DataStructure/README.md"
   
   # Veja os exercícios
   cat "DataStructure/exercicios.md"
   
   # Execute as soluções
   node "DataStructure/solucoes.js"
   ```

### Fluxo de Aprendizado Recomendado

```
1. Código Síncrono
   ↓
2. Código Assíncrono
   ↓
3. Estruturas de Dados
   ↓
4. Design Patterns (em breve)
   ↓
5. Arquitetura (em breve)
```

### Para Cada Exercício

1. **Leia o enunciado** em `exercicios.md`
2. **Tente resolver por conta própria**
3. **Consulte `solucoes.js`** apenas se precisar de ajuda
4. **Modifique o código** para experimentar
5. **Pratique com seus próprios exemplos**

---

## 📊 Estrutura de Cada Módulo

Cada pasta de domínio segue este padrão:

```
dominio/
├── README.md          # Guia teórico completo
├── exercicios.md      # Enunciados (sem soluções)
└── solucoes.js        # Código executável com soluções
```

### README.md

- Explicações teóricas
- Conceitos fundamentais
- Exemplos práticos
- Casos de uso
- Comparações e trade-offs

### exercicios.md

- Enunciados dos problemas
- Exemplos de entrada/saída
- Dicas de implementação
- Sem código de solução (para praticar)

### solucoes.js

- Implementações comentadas
- Exemplos executáveis
- Testes funcionando
- Análise de complexidade

---

## 🔍 Tópicos Cobertos

### Fundamentos
- ✅ Execução síncrona
- ✅ Execução assíncrona
- ✅ Promises e async/await
- ✅ Callbacks
- ✅ Event loop

### Estruturas de Dados
- ✅ Arrays
- ✅ Linked Lists
- ✅ Stacks
- ✅ Queues
- ✅ Hash Tables
- ✅ Binary Search Trees
- ✅ Graphs

### Análise de Algoritmos
- ✅ Big O notation
- ✅ Complexidade de tempo
- ✅ Complexidade de espaço
- ✅ Trade-offs

### Algoritmos
- ✅ Busca Linear
- ✅ Busca Binária
- ✅ Bubble Sort
- ✅ Validação de Parênteses
- ✅ BFS (Breadth First Search)
- ✅ DFS (Depth First Search)

---

## 💡 Exemplos Rápidos

### Código Síncrono
```javascript
// Executa linha por linha, bloqueante
function soma(a, b) {
  console.log('Somando...');
  const resultado = a + b;
  console.log('Resultado:', resultado);
  return resultado;
}

soma(5, 3); // Executa imediatamente
```

### Código Assíncrono
```javascript
// Não-bloqueante, executa depois
async function buscarDados() {
  console.log('Buscando...');
  const dados = await fetch('/api/dados');
  console.log('Dados:', dados);
  return dados;
}

buscarDados(); // Retorna uma Promise
console.log('Continua executando enquanto aguarda');
```

### Estrutura de Dados: Stack
```javascript
class Stack {
  constructor() {
    this.items = [];
  }
  
  push(element) { // O(1)
    this.items.push(element);
  }
  
  pop() { // O(1)
    return this.items.pop();
  }
}
```

---

## 📈 Progressão de Dificuldade

### Nível 1 - Iniciante
- Código Síncrono (Exercícios 1-5)
- Arrays básicos
- Loops simples

### Nível 2 - Intermediário
- Código Síncrono (Exercícios 6-10)
- Código Assíncrono (Exercícios 1-5)
- Estruturas básicas (Stack, Queue)

### Nível 3 - Avançado
- Código Assíncrono (Exercícios 6-10)
- Estruturas complexas (BST, Graph)
- Algoritmos de busca e ordenação
- Big O analysis

---

## 🎓 Metodologia Educacional

Este repositório segue princípios de **aprendizado progressivo**:

1. **Clareza sobre otimização** - Código legível, bem comentado
2. **Múltiplas implementações** - Mostra diferentes abordagens
3. **Contexto real** - Exemplos práticos, não abstratos
4. **Sem dependências externas** - Usa apenas JavaScript padrão
5. **Aprendizado ativo** - Exercícios antes das soluções

---

## 🛠️ Como Contribuir

Para adicionar novo conteúdo:

1. Escolha a pasta apropriada (ou crie uma se necessário)
2. Siga a estrutura: `README.md`, `exercicios.md`, `solucoes.js`
3. Mantenha o foco educacional
4. Adicione comentários explicativos
5. Inclua exemplos práticos
6. Teste o código antes de commitar

---

## 📝 Referências Rápidas

### Big O Notation
```
O(1)      Tempo constante - Excelente
O(log n)  Tempo logarítmico - Muito bom
O(n)      Tempo linear - Bom
O(n²)     Tempo quadrático - Ruim
O(2ⁿ)     Tempo exponencial - Muito ruim
```

### Comparação de Estruturas
| Estrutura | Acesso | Busca | Insert | Remove | Espaço |
|-----------|--------|-------|--------|--------|--------|
| Array | O(1) | O(n) | O(n) | O(n) | O(n) |
| Linked List | O(n) | O(n) | O(1)* | O(n) | O(n) |
| Stack | O(n) | O(n) | O(1) | O(1) | O(n) |
| Queue | O(n) | O(n) | O(1) | O(1) | O(n) |
| Hash Table | - | O(1) | O(1) | O(1) | O(n) |
| BST | O(log n) | O(log n) | O(log n) | O(log n) | O(n) |

---

## 📞 Suporte

Para dúvidas ou sugestões:
1. Revise a documentação no README de cada domínio
2. Consulte as soluções comentadas
3. Experimente modificar o código
4. Crie seus próprios exemplos

---

## 📄 Licença

Este é um projeto educacional. Sinta-se livre para usar, modificar e compartilhar para fins educacionais.

---

## 🎉 Começando Agora

```bash
# Clone o repositório
git clone <url>
cd clara-mentorship

# Explore o Código Síncrono
node "Codigo sincrono/solucoes.js"

# Explore o Código Assíncrono
node "codigo assincrono/solucoes.js"

# Explore Estruturas de Dados
node "DataStructure/solucoes.js"

# Leia a documentação
cat README.md
cat "Codigo sincrono/README.md"
cat "codigo assincrono/README.md"
cat "DataStructure/README.md"
```

---

**Happy Learning! 🚀**

*Clara Mentorship - Aprendendo Engenharia de Software, Um Conceito por Vez*
