# 🎬 Roteiro de Gravação do Vídeo (Módulo 6 - JSE1)

**Unidade Curricular:** Programação Front-end  
**Professor:** Esp. Leandro Gaudio Rosa  
**Exercícios a demonstrar:** 5, 6, 7, 8, 11 e 12  
**Tempo estimado sugerido:** 3 a 6 minutos

---

## 🛠️ Checklist e Dicas Antes de Gravar

1. **Software de Gravação:**
   - **Windows:** Pressione `Win + Alt + R` (Gravação nativa da Barra de Jogos do Windows) ou use o **OBS Studio** / **Clipchamp**.
2. **Ambiente:**
   - Deixe o **VS Code** aberto com os arquivos da pasta e o terminal integrado visível (`Ctrl + '`).
   - Deixe o navegador aberto com o arquivo `index.html` (ou uma aba em branco) pronto com o DevTools aberto (`F12`) para os exercícios 11 e 12.
3. **Dica de Áudio:**
   - Fale com clareza, em ritmo calmo, demonstrando com o cursor do mouse os pontos do código enquanto fala.

---

## 🎙️ Roteiro Passo a Passo (O que falar e o que mostrar)

---

### 🔹 1. Introdução (Aprox. 20 a 30 segundos)

- **O que mostrar na tela:** VS Code com a pasta do projeto aberta.
- **O que falar:**
  > *"Olá, professor e colegas! Neste vídeo vou apresentar a resolução prática dos exercícios 5, 6, 7, 8, 11 e 12 do Módulo 6 do curso JavaScript Essentials 1, abordando tratamento de erros, exceções e depuração no DevTools."*

---

### 🔹 2. Exercício 5: Try…Catch Básico (Aprox. 40 segundos)

- **O que mostrar na tela:** Abra o arquivo `ex5.js` no editor e rode no terminal: `node ex5.js`.
- **O que falar:**
  > *"No exercício 5, criamos a função `safeParse(jsonString)`. O método nativo `JSON.parse()` normalmente quebra a execução do script se a string for inválida.  
  > Para resolver isso, envolvemos o código em um bloco `try...catch`:  
  > Se o JSON for válido, ele é convertido e retornado no `try`. Se houver qualquer erro de conversão, o `catch` é acionado e retorna `null` com segurança, sem interromper o programa.  
  > Como vemos na saída do terminal: `{"nome": "Leandromeda"}` retorna o objeto, enquanto `'texto inválido'` retorna `null`."*

---

### 🔹 3. Exercício 6: Tratamento Condicional de Exceções (Aprox. 45 segundos)

- **O que mostrar na tela:** Abra o arquivo `ex6.js` e rode no terminal: `node ex6.js`.
- **O que falar:**
  > *"No exercício 6, aprimoramos o `safeParse` para não engolir erros desconhecidos.  
  > Dentro do `catch`, fazemos uma verificação condicional com `error instanceof SyntaxError`.  
  > Se for especificamente um erro de sintaxe do JSON, retornamos `null`. Mas se for qualquer outro tipo de erro inesperado, utilizamos a instrução `throw error` para relançar a exceção e permitir que outro nível da aplicação a trate.  
  > No teste do terminal, vemos que o erro de sintaxe retorna `null`, enquanto erros inesperados continuam sendo propagados."*

---

### 🔹 4. Exercício 7: Bloco Finally (Aprox. 35 segundos)

- **O que mostrar na tela:** Abra o arquivo `ex7.js` e rode no terminal: `node ex7.js`.
- **O que falar:**
  > *"No exercício 7, adicionamos o bloco `finally` à função `safeParse`.  
  > O `finally` possui uma característica fundamental no JavaScript: ele é executado SEMPRE, independentemente de ter dado sucesso no `try` ou erro no `catch`, e mesmo havendo um `return` anterior.  
  > Vemos no terminal que a mensagem `'Parse attempt finished'` foi impressa em ambos os cenários de teste antes do retorno final."*

---

### 🔹 5. Exercício 8: Lançando Erros Customizados (Aprox. 45 segundos)

- **O que mostrar na tela:** Abra o arquivo `ex8.js` e rode no terminal: `node ex8.js`.
- **O que falar:**
  > *"No exercício 8, criamos uma classe de erro customizado: `class InvalidAgeError extends Error`. Definimos `this.name = 'InvalidAgeError'` para identificação semântica.  
  > Na função `checkAge(age)`, validamos se a idade está fora do intervalo de 0 a 120 anos. Se estiver fora, disparamos a exceção com `throw new InvalidAgeError('Idade fora do intervalo')`. Caso contrário, retornamos `'Idade válida'`.  
  > Testando com as idades solicitadas: para `-5` e `200`, capturamos nosso `InvalidAgeError`, e para `30`, recebemos `'Idade válida'`."*

---

### 🔹 6. Exercício 11: Uso do `debugger` (Aprox. 50 segundos)

- **O que mostrar na tela:** 
  1. Abra o arquivo `ex11.js` no VS Code e mostre a palavra-chave `debugger;` na linha 11.
  2. Mude para o navegador, abra o `index.html` (ou o DevTools com `F12` na aba **Sources**).
  3. Execute o script e mostre a execução **congelada** na linha do `debugger;`.
- **O que falar:**
  > *"No exercício 11, utilizamos a instrução `debugger`.  
  > Quando as Ferramentas do Desenvolvedor estão abertas, o comando `debugger` age como um ponto de interrupção programático.  
  > Notem que a execução congelou exatamente aqui. No painel lateral 'Scope', conseguimos inspecionar o valor das variáveis em tempo real, onde `x` vale `5` e `y` vale `10`.  
  > Clicando em Resume ou apertando F8, a execução termina e exibe o resultado 10."*

---

### 🔹 7. Exercício 12: Step Over, Step Into e Step Out (Aprox. 60 segundos)

- **O que mostrar na tela:** 
  1. Abra o `ex12.js` no DevTools (aba Sources).
  2. Adicione um breakpoint na linha `return interno(n) + 1;` dentro da função `externo`.
  3. Recarregue/execute e mostre os 3 botões na barra do depurador.
- **O que falar:**
  > *"No exercício 12, temos as funções aninhadas `externo` e `interno`. Vou demonstrar os três botões essenciais de depuração:  
  > 1. **Step Into (F11):** Ao clicar nele, o depurador mergulha para dentro da função `interno(m)`, parando na primeira linha dela. Usamos quando queremos analisar o que acontece por dentro da função.  
  > 2. **Step Out (Shift + F11):** Estando dentro de `interno`, o Step Out executa o restante dela e retorna imediatamente para a função chamadora `externo`.  
  > 3. **Step Over (F10):** Se estivéssemos na linha da chamada, o Step Over executaria a função inteira de uma vez sem entrar linha por linha nela, avançando direto para o próximo passo.  
  > Ao final, o resultado da chamada `externo(4)` é `13` (4 * 3 = 12, + 1 = 13)."*

---

### 🔹 8. Conclusão (Aprox. 15 segundos)

- **O que falar:**
  > *"Com isso, demonstramos os principais conceitos de captura, relançamento, criação de erros customizados e as técnicas práticas de depuração passo a passo com DevTools. Obrigado pela atenção!"*

---

## 📤 Como Publicar no YouTube e Entregar no Classroom

1. **Acesse o YouTube Studio:** [studio.youtube.com](https://studio.youtube.com).
2. Clique em **Criar** (ícone de câmera no topo direito) > **Enviar vídeos**.
3. Selecione o arquivo de vídeo gravado do seu computador.
4. **Preencha os dados:**
   - **Título:** *Programação Front-end - Módulo 6 (Erros, Exceções e Depuração)*
   - **Visibilidade:** Escolha **"Não listado"** (Unlisted) — assim apenas quem tiver o link (seu professor) poderá assistir, sem aparecer publicamente na busca do YouTube.
5. Copie o link do vídeo gerado (ex.: `https://youtu.be/...`).
6. Cole a URL na atividade correspondente no **Google Classroom** e clique em **Entregar**.
