console.log("=== Exercício 3: Confiabilidade Limitada ===\n");

const explicacaoCenarios = 
  "Cenários em que o programa não pode confiar em dados de entrada:\n" +
  "1. Formulários HTML e inputs (o valor vem como string e pode ser alterado no DOM).\n" +
  "2. Entradas do usuário via prompt() ou terminal.\n" +
  "3. Parâmetros de URL (query strings e route params).\n" +
  "4. Dados recebidos de APIs externas e requisições HTTP.\n" +
  "5. Dados armazenados em LocalStorage ou Cookies.\n\n" +
  "Tratamento de validações simples (ex.: número esperado, string recebida):\n" +
  "Converter explicitamente com Number(), verificar se não é nulo/vazio, checar se não é NaN ou infinito com Number.isFinite(), e lançar um TypeError caso o dado seja inválido.";

console.log(explicacaoCenarios + "\n");

function validarNumero(entrada) {
  if (entrada === null || entrada === undefined || (typeof entrada === "string" && entrada.trim() === "")) {
    throw new TypeError("Entrada inválida: valor não pode ser vazio.");
  }

  const numero = Number(entrada);

  if (!Number.isFinite(numero)) {
    throw new TypeError(`Esperava-se um número, mas foi recebido um valor não numérico: "${entrada}".`);
  }

  return numero;
}

const entradasParaTeste = ["42", "   100   ", "abc", "", null, undefined, 50];

entradasParaTeste.forEach((dado) => {
  try {
    const valorValido = validarNumero(dado);
    console.log(`[Sucesso] Entrada: ${JSON.stringify(dado)} -> Validado como número: ${valorValido}`);
  } catch (erro) {
    console.log(`[Erro Capturado] Entrada: ${JSON.stringify(dado)} -> Motivo: ${erro.message}`);
  }
});
