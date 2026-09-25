/**
 * EXERCÍCIO 7: Bloco Finally
 * Módulo 6: Erros, Exceções e Depuração (JSE1)
 * 
 * [ROTEIRO PARA O VÍDEO]:
 * 1. Explique o papel do bloco 'finally': ele é executado SEMPRE, independentemente de
 *    o bloco try ter sido concluído com sucesso ou de ter ocorrido erro no catch.
 * 2. Ressalte que mesmo se houver 'return' dentro do try ou catch, o 'finally' ainda roda
 *    antes de a função realmente devolver o controle para quem chamou.
 * 3. Mostre a saída no console: a mensagem "Parse attempt finished" aparece tanto no caso válido
 *    quanto no caso inválido.
 */

console.log("=== Exercício 7: Bloco Finally ===\n");

function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    if (error instanceof SyntaxError) {
      return null;
    }
    throw error;
  } finally {
    // Este bloco é executado SEMPRE, ao final da tentativa
    console.log("Parse attempt finished");
  }
}

// Teste 1: Cenário com JSON válido
console.log("--- Testando com JSON válido ---");
const resultadoValido = safeParse('{"nome": "Leandromeda", "status": "online"}');
console.log("Resultado retornado:", resultadoValido);

// Teste 2: Cenário com JSON inválido (provoca SyntaxError)
console.log("\n--- Testando com JSON inválido ---");
const resultadoInvalido = safeParse('texto inválido');
console.log("Resultado retornado:", resultadoInvalido);
