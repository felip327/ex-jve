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
    console.log("Parse attempt finished");
  }
}

console.log("--- Testando com JSON válido ---");
const resultadoValido = safeParse('{"nome": "Leandromeda", "status": "online"}');
console.log("Resultado retornado:", resultadoValido);

console.log("\n--- Testando com JSON inválido ---");
const resultadoInvalido = safeParse('texto inválido');
console.log("Resultado retornado:", resultadoInvalido);
