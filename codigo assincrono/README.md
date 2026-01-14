# Código Assíncrono

## O que é?

Código **assíncrono** é aquele onde as operações **não esperam umas pelas outras**. Em vez de bloquear a execução, operações longas (como requisições de rede ou leitura de arquivos) são iniciadas e o programa continua executando outras tarefas. Quando a operação termina, seu resultado é entregue via callback, Promise ou async/await.

### Características Principais

- **Não-bloqueante**: O programa continua executando enquanto aguarda operações lentas
- **Concorrente**: Múltiplas operações podem estar "em progresso" simultaneamente
- **Mais eficiente**: Aproveita melhor o tempo de espera
- **Mais complexo**: Requer padrões especiais de tratamento de resultados

## Como Funciona em JavaScript

JavaScript usa um **event loop** para gerenciar operações assíncronas. As operações são adicionadas a uma fila e processadas assim que o engine fica livre.

### Padrão 1: Callbacks (Legado)

```javascript
const fs = require('fs');

// Leitura assíncrona com callback
fs.readFile('arquivo.txt', 'utf-8', (erro, dados) => {
  if (erro) {
    console.error('Erro ao ler:', erro);
    return;
  }
  console.log('Arquivo lido:', dados);
});

console.log('Leitura iniciada, continuo aqui');
console.log('Próxima operação');

// Output:
// Leitura iniciada, continuo aqui
// Próxima operação
// Arquivo lido: [conteúdo do arquivo]
```

**Problema**: "Callback Hell" - muitos callbacks aninhados ficam ilegíveis

```javascript
// Callback Hell - difícil de ler e manter
fs.readFile('arquivo1.txt', (erro1, dados1) => {
  fs.readFile('arquivo2.txt', (erro2, dados2) => {
    fs.readFile('arquivo3.txt', (erro3, dados3) => {
      console.log(dados1, dados2, dados3);
      // ... mais código aqui
    });
  });
});
```

### Padrão 2: Promises

Promises representam um valor que pode estar disponível agora, no futuro, ou nunca.

```javascript
const fs = require('fs').promises;

// Uma Promise
const lerArquivo = fs.readFile('arquivo.txt', 'utf-8');

lerArquivo
  .then(dados => {
    console.log('Arquivo lido:', dados);
  })
  .catch(erro => {
    console.error('Erro ao ler:', erro);
  });

console.log('Leitura iniciada, continuo aqui');

// Output:
// Leitura iniciada, continuo aqui
// Arquivo lido: [conteúdo do arquivo]
```

#### Estados de uma Promise

```javascript
// Uma Promise tem 3 estados possíveis:

// 1. Pending (Pendente) - operação ainda em progresso
const promise = new Promise((resolve, reject) => {
  // ... operação assíncrona
});

// 2. Fulfilled (Resolvida) - operação completou com sucesso
const promiseResolve = Promise.resolve('Sucesso!');

// 3. Rejected (Rejeitada) - operação falhou
const promiseReject = Promise.reject('Erro!');
```

#### Encadeamento de Promises

```javascript
const fs = require('fs').promises;

fs.readFile('arquivo1.txt', 'utf-8')
  .then(dados1 => {
    console.log('Primeiro arquivo:', dados1);
    return fs.readFile('arquivo2.txt', 'utf-8');
  })
  .then(dados2 => {
    console.log('Segundo arquivo:', dados2);
    return fs.readFile('arquivo3.txt', 'utf-8');
  })
  .then(dados3 => {
    console.log('Terceiro arquivo:', dados3);
  })
  .catch(erro => {
    console.error('Erro em alguma leitura:', erro);
  });

console.log('Iniciando leituras...');
```

#### Operações Paralelas com Promise.all()

```javascript
const fs = require('fs').promises;

// Executar múltiplas operações em paralelo
Promise.all([
  fs.readFile('arquivo1.txt', 'utf-8'),
  fs.readFile('arquivo2.txt', 'utf-8'),
  fs.readFile('arquivo3.txt', 'utf-8')
])
  .then(([dados1, dados2, dados3]) => {
    console.log('Todos os arquivos lidos:');
    console.log('Arquivo 1:', dados1);
    console.log('Arquivo 2:', dados2);
    console.log('Arquivo 3:', dados3);
  })
  .catch(erro => {
    console.error('Erro ao ler algum arquivo:', erro);
  });
```

### Padrão 3: Async/Await (Recomendado)

A forma moderna e mais legível de trabalhar com código assíncrono. `async/await` é apenas "açúcar sintático" para Promises.

```javascript
const fs = require('fs').promises;

// Uma função assíncrona
async function lerArquivo() {
  try {
    const dados = await fs.readFile('arquivo.txt', 'utf-8');
    console.log('Arquivo lido:', dados);
  } catch (erro) {
    console.error('Erro ao ler:', erro);
  }
}

lerArquivo();
console.log('Leitura iniciada, continuo aqui');
```

#### Leitura Sequencial

```javascript
const fs = require('fs').promises;

async function lerArquivosSequencial() {
  try {
    console.log('Iniciando leitura...');
    
    const dados1 = await fs.readFile('arquivo1.txt', 'utf-8');
    console.log('Arquivo 1 lido:', dados1);
    
    const dados2 = await fs.readFile('arquivo2.txt', 'utf-8');
    console.log('Arquivo 2 lido:', dados2);
    
    const dados3 = await fs.readFile('arquivo3.txt', 'utf-8');
    console.log('Arquivo 3 lido:', dados3);
    
    return [dados1, dados2, dados3];
  } catch (erro) {
    console.error('Erro:', erro);
  }
}

lerArquivosSequencial();
```

#### Leitura Paralela com Async/Await

```javascript
const fs = require('fs').promises;

async function lerArquivosParalelo() {
  try {
    console.log('Iniciando leitura em paralelo...');
    
    // Inicia todas as operações simultaneamente
    const promises = [
      fs.readFile('arquivo1.txt', 'utf-8'),
      fs.readFile('arquivo2.txt', 'utf-8'),
      fs.readFile('arquivo3.txt', 'utf-8')
    ];
    
    const [dados1, dados2, dados3] = await Promise.all(promises);
    console.log('Todos lidos:');
    console.log('Arquivo 1:', dados1);
    console.log('Arquivo 2:', dados2);
    console.log('Arquivo 3:', dados3);
  } catch (erro) {
    console.error('Erro:', erro);
  }
}

lerArquivosParalelo();
```

#### Tratamento de Erros Elegante

```javascript
const fs = require('fs').promises;

async function processar() {
  try {
    const dados = await fs.readFile('arquivo.txt', 'utf-8');
    const processado = dados.toUpperCase();
    return processado;
  } catch (erro) {
    if (erro.code === 'ENOENT') {
      console.error('Arquivo não encontrado');
    } else {
      console.error('Erro desconhecido:', erro);
    }
    throw erro; // Re-lança o erro se necessário
  }
}
```

## Comparação: Callbacks vs Promises vs Async/Await

```javascript
// Callbacks - Legado
fs.readFile('arquivo.txt', (erro, dados) => {
  if (erro) console.error(erro);
  console.log(dados);
});

// Promises - Intermédio
fs.promises.readFile('arquivo.txt', 'utf-8')
  .then(dados => console.log(dados))
  .catch(erro => console.error(erro));

// Async/Await - Moderno
async function ler() {
  try {
    const dados = await fs.promises.readFile('arquivo.txt', 'utf-8');
    console.log(dados);
  } catch (erro) {
    console.error(erro);
  }
}
```

## Vantagens do Código Assíncrono

✅ **Não-bloqueante** - O programa continua responsivo  
✅ **Eficiente** - Aproveita o tempo de espera de I/O  
✅ **Escalável** - Pode lidar com muitas operações simultâneas  
✅ **Melhor UX** - Aplicações UI não ficam congeladas  
✅ **Moderno** - É o padrão em JavaScript moderno  

## Desvantagens

❌ **Mais complexo** - Requer compreensão do event loop  
❌ **Debugging difícil** - A ordem de execução pode ser não-óbvia  
❌ **Race conditions** - Múltiplas operações podem gerar conflitos  
❌ **Curva de aprendizado** - Mais desafiador para iniciantes  

## Quando Usar

- Requisições HTTP (APIs, dados da web)
- Leitura/escrita de arquivos
- Operações de banco de dados
- Timers e eventos (setTimeout, listeners)
- Qualquer aplicação que precisa ser responsiva
- Sistemas com múltiplas operações simultâneas

## Boas Práticas

### ✅ Use async/await
```javascript
// Bom
async function buscarDados() {
  const dados = await fetch('/api/dados');
  return dados.json();
}
```

### ❌ Evite callback hell
```javascript
// Ruim - evitar!
fetch('/api/1', (erro, dados1) => {
  fetch('/api/2', (erro, dados2) => {
    fetch('/api/3', (erro, dados3) => {
      // ...
    });
  });
});
```

### ✅ Use Promise.all() para operações paralelas
```javascript
// Bom - executa tudo em paralelo
const [resultado1, resultado2] = await Promise.all([
  fetch('/api/1'),
  fetch('/api/2')
]);
```

### ✅ Sempre trate erros
```javascript
// Bom
try {
  const dados = await fetch('/api/dados').then(r => r.json());
} catch (erro) {
  console.error('Erro:', erro);
}
```

## Referências

Para entender o contexto de código síncrono, veja a pasta `Codigo sincrono/`.
