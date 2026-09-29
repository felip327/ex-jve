console.log("=== Exercício 11: Uso do debugger ===\n");

function testeDebug(x) {
  const y = x * 2;
  debugger;
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
