console.log("=== Exercício 4: Tipos de Erros em JS ===\n");

console.log("--- 1. ReferenceError ---");
console.log("Ocorre quando o interpretador tenta acessar uma variável ou identificador que não foi declarado ou não existe no escopo atual.");
try {
  console.log(variavelInexistente);
} catch (error) {
  console.log(`Tipo: ${error.name}`);
  console.log(`Mensagem: ${error.message}`);
}

console.log("\n--- 2. TypeError ---");
console.log("Ocorre quando uma operação é realizada em um tipo incompatível, como invocar algo que não é função ou acessar propriedades de null/undefined.");
try {
  const numero = 42;
  numero();
} catch (error) {
  console.log(`Tipo: ${error.name}`);
  console.log(`Mensagem: ${error.message}`);
}

console.log("\n--- 3. SyntaxError ---");
console.log("Ocorre quando o código viola as regras gramaticais da linguagem, ou em tempo de execução quando JSON.parse recebe uma string malformada.");
try {
  JSON.parse("{ nome: 'sem aspas duplas nas chaves' }");
} catch (error) {
  console.log(`Tipo: ${error.name}`);
  console.log(`Mensagem: ${error.message}`);
}
