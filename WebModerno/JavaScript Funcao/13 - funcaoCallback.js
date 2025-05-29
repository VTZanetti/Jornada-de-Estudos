// ✅ Exemplo de Callback no Browser (Ambiente de Navegador)

// Aqui estamos acessando o primeiro elemento <body> da página HTML
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log("O Evento ocorreu!!!");
};

/*
📘 EXPLICAÇÃO DIDÁTICA:

🔁 CALLBACK:
- Uma **função callback** é uma função passada como argumento para outra função — neste caso, estamos dizendo ao navegador:
  👉 "Quando o evento `onclick` acontecer, execute esta função."

🔹 `document.getElementsByTagName('body')[0]`
  → Retorna o primeiro elemento `<body>` da página HTML (é uma coleção, então usamos `[0]`)

🔹 `.onclick = function(e) { ... }`
  → Atribuímos uma função anônima ao evento de clique. Essa função será chamada automaticamente **quando o usuário clicar** em qualquer parte do corpo da página.

🔹 `e` (ou `event`)
  → Representa o evento em si. Aqui não usamos ele diretamente, mas ele contém informações como:
    - Posição do clique (`e.clientX`, `e.clientY`)
    - Elemento clicado (`e.target`)
    - Tipo do evento (`e.type`)
    - Entre outros

💡 DICA:
- Em aplicações modernas, é comum usar `addEventListener` em vez de diretamente `onclick`, pois ele permite adicionar múltiplos ouvintes para o mesmo evento.

📌 Exemplo com `addEventListener` (forma mais moderna e flexível):
```javascript
document.body.addEventListener('click', function(e) {
    console.log("Clique detectado via addEventListener!");
});
*/