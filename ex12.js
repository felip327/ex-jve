/**
 * EXERCÍCIO 12: Step Over, Step Into e Step Out
 * Módulo 6: Erros, Exceções e Depuração (JSE1)
 * 
 * [ROTEIRO PARA O VÍDEO]:
 * 1. Apresente as duas funções encadeadas: 'externo(n)' chama 'interno(n) + 1', e 'interno(m)' faz 'm * 3'.
 * 2. Demonstre os três botões principais de controle do fluxo no depurador:
 *    - Step Into (F11): "Mergulha" dentro da função chamada ('interno'). Mostre o depurador pulando de 'externo' para 'interno'.
 *    - Step Out (Shift + F11): "Sai" da função atual ('interno') e retorna o controle para a função chamadora ('externo').
 *    - Step Over (F10): Executa a linha inteira por cima sem entrar dentro de 'interno', indo direto para a linha seguinte.
 * 3. Mostre o resultado final: 4 * 3 = 12; 12 + 1 = 13.
 */

console.log("=== Exercício 12: Step Over, Step Into e Step Out ===\n");

function interno(m) {
  return m * 3;
}

function externo(n) {
  return interno(n) + 1;
}

const resultado = externo(4);
console.log("Resultado da execução externo(4):", resultado); // (4 * 3) + 1 = 13

const explicacao = `
DEMONSTRAÇÃO PRÁTICA DOS COMANDOS DE DEPURAÇÃO:

Imagine um breakpoint na linha "return interno(n) + 1;" dentro da função 'externo':

1. Step Into (F11) - "Entrar na função":
   - O depurador MERGULHA para dentro de 'interno(m)'.
   - O cursor vai parar na primeira linha de 'interno' ("return m * 3;").
   - Quando usar: Quando você precisa investigar a lógica interna da função chamada.

2. Step Out (Shift + F11) - "Sair da função":
   - Enquanto estiver dentro de 'interno', o depurador executa o restante dela de uma vez e volta para 'externo'.
   - Quando usar: Quando você já terminou de analisar a função interna e quer voltar rápido para a função pai.

3. Step Over (F10) - "Passar por cima":
   - O depurador executa a chamada 'interno(n)' por completo nos bastidores SEM entrar nela linha por linha.
   - O cursor avança diretamente para a próxima linha da função atual ('externo').
   - Quando usar: Quando você já sabe que a função chamada funciona e não precisa depurá-la.
`;

console.log(explicacao);
