/**
 * EXERCÍCIO 6: Tratamento Condicional de Exceções
 * Módulo 6: Erros, Exceções e Depuração (JSE1)
 * 
 * [ROTEIRO PARA O VÍDEO]:
 * 1. Explique a evolução em relação ao exercício 5: agora tratamos os erros de forma seletiva.
 * 2. Mostre o uso de 'error instanceof SyntaxError':
 *    - Se for um SyntaxError (erro esperado de JSON mal formatado), retornamos null com segurança.
 *    - Se for qualquer outro tipo de erro não previsto (ex.: erro de memória, TypeError, etc.),
 *      usamos 'throw error' para relançar e não "engolir" falhas inesperadas.
 * 3. Mostre a execução no console com os testes.
 */

console.log("=== Exercício 6: Tratamento Condicional de Exceções ===\n");

function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    // Verificamos o tipo específico do erro
    if (error instanceof SyntaxError) {
      // Erro esperado de sintaxe JSON: retornamos null
      return null;
    }
    // Qualquer outro erro inesperado é relançado com throw para ser tratado em outro nível
    throw error;
  }
}

// Teste 1: JSON Válido
console.log("1. JSON Válido:");
console.log(safeParse('{"nome": "Leandromeda"}'));

// Teste 2: JSON Inválido -> SyntaxError tratado condicionalmente
console.log("\n2. JSON Inválido (SyntaxError capturado e tratado):");
console.log(safeParse('texto inválido'));

// Teste 3: Demonstração didática de relançamento (rethrow)
console.log("\n3. Demonstração de relançamento caso ocorra outro erro:");
function demonstracaoRethrow() {
  try {
    try {
      // Forçando um erro do tipo TypeError dentro do fluxo
      throw new TypeError("Erro inesperado que não é de sintaxe!");
    } catch (error) {
      if (error instanceof SyntaxError) {
        return null;
      }
      // Como não é SyntaxError, relança:
      throw error;
    }
  } catch (erroRelancado) {
    console.log(`Relançamento verificado com sucesso: [${erroRelancado.name}] ${erroRelancado.message}`);
  }
}

demonstracaoRethrow();
