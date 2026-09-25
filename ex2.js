console.log("=== Exercício 2: Erros sem Exceções? ===\n");

const divisaoPorZero = 10 / 0;
console.log("1. Divisão por zero (10 / 0):", divisaoPorZero);

const operacaoInvalida = "texto" * 3;
console.log("2. Operação matemática inválida ('texto' * 3):", operacaoInvalida);

const usuario = { nome: "Carlos" };
console.log("3. Propriedade inexistente (usuario.idade):", usuario.idade);

const lista = [10, 20, 30];
console.log("4. Índice fora do array (lista[10]):", lista[10]);

function somarValores(a, b) {
  return a + b;
}

const resultadoSoma = somarValores("10", "20"); 
console.log("5. Erro lógico de coerção de tipo (somar '10' + '20'):", resultadoSoma);

console.log("\nExplicação:");
console.log(
  "Em todos os casos acima, o resultado é incorreto para a intenção do programa (ocorreu um erro de lógica/operação)," +
  "\nmas o JavaScript continuou executando normalmente sem disparar nenhuma exceção (throw)."
);
