/**
 * EXERCÍCIO 5: Try…Catch Básico
 * Módulo 6: Erros, Exceções e Depuração (JSE1)
 * 
 * [ROTEIRO PARA O VÍDEO]:
 * 1. Explique que o método JSON.parse() lança um erro crítico se receber uma string que não seja JSON válido.
 * 2. Mostre o bloco try: colocamos o código suscetível a erros.
 * 3. Mostre o bloco catch: se ocorrer um erro, ele não quebra a aplicação; capturamos e retornamos null.
 * 4. Execute o arquivo e aponte os dois testes solicitados no enunciado.
 */

console.log("=== Exercício 5: Try…Catch Básico ===\n");

function safeParse(jsonString) {
  try {
    // Tenta converter a string JSON para objeto JavaScript
    return JSON.parse(jsonString);
  } catch (error) {
    // Se a string for inválida, captura a exceção e retorna null sem parar o programa
    return null;
  }
}

// Teste 1: JSON válido -> Deve retornar o objeto correspondente
console.log("Teste 1 (Válido):", safeParse('{"nome": "Leandromeda"}'));

// Teste 2: String inválida -> Deve capturar o erro e retornar null
console.log("Teste 2 (Inválido):", safeParse('texto inválido'));

// Testes adicionais para enriquecer a demonstração no vídeo
console.log("Teste 3 (Objeto com múltiplos campos):", safeParse('{"idade": 25, "ativo": true}'));
console.log("Teste 4 (JSON com erro de sintaxe):", safeParse('{ chaveSemAspas: 123 }'));
