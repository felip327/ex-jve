console.log("=== Exercício 8: Lançando Erros Customizados ===\n");

class InvalidAgeError extends Error {
  constructor(message = "Idade fora do intervalo") {
    super(message);
    this.name = "InvalidAgeError";
  }
}

function checkAge(age) {
  if (age < 0 || age > 120) {
    throw new InvalidAgeError("Idade fora do intervalo");
  }
  return "Idade válida";
}

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
