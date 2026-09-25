console.log("=== Exercício 14: Depuração Sem debugger ===\n");

const respostaParte1 = `1. COMO RETOMAR A EXECUÇÃO NORMALMENTE APÓS PAUSAR EM UM BREAKPOINT:
   - Pelo Atalho de Teclado: Pressione a tecla F8 (ou Ctrl + \\ no Chrome / Cmd + \\ no macOS).
   - Pela Interface do DevTools: Clique no botão azul "Resume script execution" (ícone de play ▶️) 
     localizado no canto superior direito do painel de depuração (Sources/Depurador).
   - Isso fará com que o código continue executando normalmente até o final (ou até encontrar outro breakpoint ativo).`;

const respostaParte2 = `2. COMO REMOVER TODOS OS BREAKPOINTS DE UMA VEZ:
   - No painel lateral direito do Sources (ou Depurador), localize a aba/seção recolhível chamada "Breakpoints".
   - Clique com o botão direito do mouse sobre qualquer breakpoint listado (ou sobre a área da lista).
   - No menu de contexto que abrir, selecione a opção "Remove all breakpoints" (ou "Remover todos os pontos de interrupção").
   - Dica extra: Se você quiser apenas ignorar temporariamente os breakpoints sem apagá-los, 
     pode clicar no botão "Deactivate breakpoints" (ícone de círculo riscado) ou usar o atalho Ctrl + F8.`;

console.log(respostaParte1);
console.log("\n" + "=".repeat(60) + "\n");
console.log(respostaParte2);
