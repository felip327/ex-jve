console.log("=== Exercício 13: Call Stack ===\n");

function interno(m) {
  console.log("Pilha de Chamadas real capturada em tempo de execução:");
  const stack = new Error().stack;
  console.log(stack);

  return m * 3;
}

function externo(n) {
  return interno(n) + 1;
}

externo(4);

const diagramaTexto = `
------------------------------------------------------------
DIAGRAMA DA CALL STACK (MOMENTO DA EXECUÇÃO DE 'interno'):
------------------------------------------------------------

Formato solicitado no enunciado (Hierarquia de chamadas):
▶ (global / script)
  ▶ externo (n = 4)
    ▶ interno (m = 4)  <-- [Executando no momento]

Visualização da Pilha no DevTools (LIFO - Topo para a Base):
┌────────────────────────────────────────┐
│  ▶ interno(4)       [TOPO DA PILHA]    │  <-- Frame ativo no momento
├────────────────────────────────────────┤
│  ▶ externo(4)                          │  <-- Aguardando o retorno de interno
├────────────────────────────────────────┤
│  ▶ (anonymous/global)                  │  <-- Ponto de entrada inicial do script
└────────────────────────────────────────┘

Explicação:
1. O escopo global invocou 'externo(4)', que foi empilhado.
2. Dentro de 'externo', a função 'interno(4)' foi invocada e empilhada no topo.
3. Quando 'interno' finalizar e retornar seu valor, ela será desempilhada (pop),
   e o controle voltará para 'externo'.
------------------------------------------------------------
`;

console.log(diagramaTexto);
