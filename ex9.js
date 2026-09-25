console.log("=== Exercício 9: Depuração com console.log ===\n");

function soma(a, b) {
  console.log(`[DEBUG] Entrada parâmetro 'a': valor = ${a}, tipo = ${typeof a}`);
  console.log(`[DEBUG] Entrada parâmetro 'b': valor = ${b}, tipo = ${typeof b}`);
  console.log(`[DEBUG] Conversão de 'b' para número (Number(b)):`, Number(b));

  const resultado = a + b;

  console.log(`[DEBUG] Resultado de a + b: ${resultado}, tipo = ${typeof resultado}`);

  return resultado;
}

console.log("Iniciando chamada: soma(2, undefined)");
const resultadoFinal = soma(2, undefined);
console.log("Resultado final impresso:", resultadoFinal);

console.log(
  "\nCausa do NaN:\n" +
  "O argumento 'b' recebeu o valor 'undefined'. Ao realizar a operação de adição 'a + b',\n" +
  "o JavaScript tenta converter 'undefined' para número (Number(undefined)), o que resulta em NaN.\n" +
  "Qualquer operação matemática entre um número e NaN (2 + NaN) sempre resulta em NaN."
);
