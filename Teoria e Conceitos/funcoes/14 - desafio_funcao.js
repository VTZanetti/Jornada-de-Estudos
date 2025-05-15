function validarSenha(senha) {
  if (senha.length < 8) {
    return "Senha muito curta";
  }
  if (!/\d/.test(senha)) {
    return "Senha deve conter ao menos um número";
  }
  if (!/[A-Z]/.test(senha)) {
    return "Senha deve conter ao menos uma letra maiúscula";
  }
  return "Senha válida!";
}

// Exemplo de uso:
console.log(validarSenha("MinhaSenha123"));
