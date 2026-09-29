console.log("=== Exercício 6: Tratamento Condicional de Exceções ===\n");

function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    if (error instanceof SyntaxError) {
      return null;
    }
    throw error;
  }
}

console.log("1. JSON Válido:");
console.log(safeParse('{"nome": "Leandromeda"}'));

console.log("\n2. JSON Inválido (SyntaxError capturado e tratado):");
console.log(safeParse('texto inválido'));

console.log("\n3. Demonstração de relançamento caso ocorra outro erro:");
function demonstracaoRethrow() {
  try {
    try {
      throw new TypeError("Erro inesperado que não é de sintaxe!");
    } catch (error) {
      if (error instanceof SyntaxError) {
        return null;
      }
      throw error;
    }
  } catch (erroRelancado) {
    console.log(`Relançamento verificado com sucesso: [${erroRelancado.name}] ${erroRelancado.message}`);
  }
}

demonstracaoRethrow();
