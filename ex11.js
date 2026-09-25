/**
 * EXERCÍCIO 11: Uso do debugger
 * Módulo 6: Erros, Exceções e Depuração (JSE1)
 * 
 * [ROTEIRO PARA O VÍDEO]:
 * 1. Apresente o código com a função 'testeDebug(x)' contendo a instrução 'debugger;'.
 * 2. Demonstração em tela no Navegador:
 *    - Abra o DevTools (F12) e vá para a aba Sources (ou abra index.html e execute o script).
 *    - Mostre que o navegador congela a execução exatamente na linha do 'debugger;'.
 * 3. Mostre no painel lateral do DevTools:
 *    - O valor da variável 'x' (= 5) e 'y' (= 10) no painel "Scope" (Escopo Local).
 *    - A chamada da função na "Call Stack".
 * 4. Pressione Resume (F8) para concluir a execução e mostrar o resultado 10 no console.
 */

console.log("=== Exercício 11: Uso do debugger ===\n");

function testeDebug(x) {
  const y = x * 2;
  debugger; // Ponto de interrupção programático (aciona o depurador do DevTools)
  return y;
}

const resultado = testeDebug(5);
console.log("Resultado retornado por testeDebug(5):", resultado);

const relatorio = 
  "Relatório de Experiência no DevTools:\n" +
  "- Quando as Ferramentas de Desenvolvedor (F12) estão abertas, a instrução 'debugger' força a pausa da execução.\n" +
  "- O código é congelado na linha do debugger e o painel Sources abre automaticamente.\n" +
  "- É possível inspecionar as variáveis locais no painel Scope (x = 5, y = 10) e avançar passo a passo.";

console.log("\n" + relatorio);
