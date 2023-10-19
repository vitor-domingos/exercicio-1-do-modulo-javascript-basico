
// Solicita ao usuário seu nome e armazena a resposta em 'respostaDoPrompt'
const respostaDoPrompt = window.prompt("Qual é o seu nome?");

// Exibe o valor da resposta no console
console.log(respostaDoPrompt);

// Exibe uma janela de alerta de boas-vindas com o nome fornecido pelo usuário
const janelaDeAlerta = window.alert("Olá" + respostaDoPrompt + "seja bem-vindo(a) à minha página na web, onde eu resolvo o primeiro exercício do módulo de JavaScript básico.");
