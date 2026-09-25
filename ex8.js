/**
 * EXERCÍCIO 8: Lançando Erros Customizados
 * Módulo 6: Erros, Exceções e Depuração (JSE1)
 * 
 * [ROTEIRO PARA O VÍDEO]:
 * 1. Explique por que criamos erros customizados: ao herdar de 'Error' (extends Error), criamos
 *    um tipo semântico próprio que facilita a depuração e o tratamento seletivo no try...catch.
 * 2. Mostre a classe 'InvalidAgeError extends Error' e o 'this.name = "InvalidAgeError"'.
 * 3. Mostre a função 'checkAge(age)':
 *    - Se age < 0 ou age > 120, faz throw new InvalidAgeError("Idade fora do intervalo").
 *    - Caso contrário, retorna "Idade válida".
 * 4. Execute e mostre os 3 testes:
 *    - Idade -5  -> Captura InvalidAgeError
 *    - Idade 30  -> Retorna "Idade válida"
 *    - Idade 200 -> Captura InvalidAgeError
 */

console.log("=== Exercício 8: Lançando Erros Customizados ===\n");

// 1. Definição da classe de erro customizado
class InvalidAgeError extends Error {
  constructor(message = "Idade fora do intervalo") {
    super(message); // Chama o construtor da classe nativa Error
    this.name = "InvalidAgeError"; // Define o nome específico do erro
  }
}

// 2. Função de validação de idade
function checkAge(age) {
  if (age < 0 || age > 120) {
    throw new InvalidAgeError("Idade fora do intervalo");
  }
  return "Idade válida";
}

// 3. Testando os cenários solicitados no enunciado: -5, 30 e 200
const idadesParaTeste = [-5, 30, 200];

idadesParaTeste.forEach((idade) => {
  try {
    const resultado = checkAge(idade);
    console.log(`Idade ${idade}: Sucesso -> "${resultado}"`);
  } catch (error) {
    if (error instanceof InvalidAgeError) {
      console.log(`Idade ${idade}: Capturado [${error.name}] -> "${error.message}"`);
    } else {
      console.log(`Idade ${idade}: Erro genérico -> "${error.message}"`);
    }
  }
});
