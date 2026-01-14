# Código Síncrono

## O que é?

Código **síncrono** é aquele onde as operações são executadas **sequencialmente**, uma após a outra. Cada linha de código espera a conclusão da linha anterior antes de ser executada. É o modelo padrão de execução em JavaScript.

### Características Principais

- **Execução linear**: O código executa de cima para baixo, linha por linha
- **Bloqueante**: Se uma operação demora, o programa inteiro fica "travado" esperando
- **Previsível**: A ordem de execução é clara e fácil de entender
- **Simples de debugar**: Os erros ocorrem na ordem esperada

## Como Funciona em JavaScript

Em JavaScript, o código síncrono é o comportamento padrão. Quando você executa uma operação, o programa espera seu resultado antes de prosseguir.

### Exemplo Básico

```javascript
// Operações síncronas - executam na ordem
console.log('Iniciando...');

const resultado = 2 + 3;
console.log(`Resultado: ${resultado}`);

console.log('Finalizando...');

// Output:
// Iniciando...
// Resultado: 5
// Finalizando...
```

### Operações de I/O Síncronas

```javascript
const fs = require('fs');

// Leitura síncrona de arquivo
const conteudo = fs.readFileSync('arquivo.txt', 'utf-8');
console.log('Arquivo lido:', conteudo);
console.log('Próxima operação');

// O programa espera a leitura terminar antes de prosseguir
```

### Loops e Cálculos

```javascript
// Operação computacionalmente cara - bloqueia o programa
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log('Calculando Fibonacci de 30...');
const resultado = fibonacci(30); // Demora alguns segundos!
console.log('Resultado:', resultado);
console.log('Próxima linha - só executa após cálculo terminar');
```

## Vantagens

✅ **Simples de entender** - A lógica flui de forma linear  
✅ **Fácil de debugar** - Os erros ocorrem na sequência esperada  
✅ **Previsível** - A ordem de execução é garantida  
✅ **Sem race conditions** - Não há disputas de dados entre operações paralelas  

## Desvantagens

❌ **Ineficiente em I/O** - Bloqueia o programa enquanto aguarda operações lentas (arquivos, rede)  
❌ **Má experiência do usuário** - Em aplicações UI, o programa congela  
❌ **Desperdício de recursos** - O processador fica ocioso enquanto aguarda I/O  
❌ **Escalabilidade** - Não consegue lidar bem com múltiplas operações simultâneas  

## Quando Usar

- Operações computacionais leves
- Scripts simples e command-line
- Cálculos matemáticos
- Processamento de dados pequenos
- Quando a simplicidade é mais importante que a performance

## Comparação: Síncrono vs Assíncrono

| Aspecto | Síncrono | Assíncrono |
|---------|----------|-----------|
| **Execução** | Sequencial, bloqueante | Não-bloqueante, paralela |
| **Complexidade** | Simples | Mais complexa |
| **I/O** | Inefficient | Eficiente |
| **Uso de Recursos** | Desperdício | Otimizado |
| **Debugging** | Fácil | Mais difícil |

## Referências

Para aprender mais sobre código assíncrono e como melhorar a performance, veja a pasta `codigo assincrono/`.
