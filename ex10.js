console.log("=== Exercício 10: Preparação do Ambiente de Depuração ===\n");

const passosDepuracao = [
  "Passo 1: Abrir o navegador de sua preferência (Google Chrome, Microsoft Edge, Firefox, Brave, etc.) e acessar a página web da sua aplicação.",
  "Passo 2: Abrir as Ferramentas do Desenvolvedor (DevTools). Isso pode ser feito por qualquer um dos métodos abaixo:\n" +
  "   - Pressionar a tecla de atalho F12;\n" +
  "   - Pressionar o atalho Ctrl + Shift + I (Windows/Linux) ou Cmd + Option + I (macOS);\n" +
  "   - Clicar com o botão direito do mouse em qualquer ponto da página e selecionar 'Inspecionar' (Inspect).",
  "Passo 3: Localizar a barra de navegação superior das Ferramentas de Desenvolvedor (onde ficam abas como Elements, Console, Sources, Network, etc.).",
  "Passo 4: Clicar na aba 'Sources' (no Chrome, Edge e navegadores baseados em Chromium) ou 'Depurador' / 'Debugger' (no Mozilla Firefox).",
  "Passo 5: No painel esquerdo ('Navigator' ou 'Page'), navegar pela árvore de arquivos do site, localizar a pasta do projeto e clicar no arquivo JavaScript (.js) desejado para abrir o código-fonte na área central e iniciar a depuração."
];

passosDepuracao.forEach((passo) => {
  console.log(passo + "\n");
});
