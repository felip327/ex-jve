console.log("=== Exercício 5: Try…Catch Básico ===\n");

function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    return null;
  }
}

console.log("Teste 1 (Válido):", safeParse('{"nome": "Leandromeda"}'));

console.log("Teste 2 (Inválido):", safeParse('texto inválido'));

console.log("Teste 3 (Objeto com múltiplos campos):", safeParse('{"idade": 25, "ativo": true}'));
console.log("Teste 4 (JSON com erro de sintaxe):", safeParse('{ chaveSemAspas: 123 }'));
