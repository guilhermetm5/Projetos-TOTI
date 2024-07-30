console.log("Projeto Turma 48");

function enviarFormulario() {
  const name = document.getElementById("name").value;
  const cpf = document.getElementById("cpf").value;
  const nascimento = document.getElementById("nascimento").value;
  const email  = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const pais = document.getElementById("pais").value;
  const estado = document.getElementById("estado").value;
  const cidade = document.getElementById("cidade").value;
  const prova1 = parseFloat(document.getElementById("prova1").value);
  const prova2 = parseFloat(document.getElementById("prova2").value);

  console.log('name = ' + name)
  console.log('cpf = ' + cpf)
  console.log('nascimento = ' + nascimento)
  console.log('email = ' + email)
  console.log('telefone = ' + telefone)
  console.log('pais = ' + pais)
  console.log('estado = ' + estado)
  console.log('cidade = ' + cidade)
  console.log('prova 1 = ' + prova1)
  console.log('prova 2 = ' + prova2)

  console.log('media = ' + ((prova1 + prova2) /2))
}
