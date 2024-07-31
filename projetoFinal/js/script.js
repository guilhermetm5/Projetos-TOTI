console.log('Projeto Turma 48');

class Studant {
  constructor(
    nome,
    cpf,
    nascimento,
    email,
    telefone,
    pais,
    estado,
    cidade,
    prova1,
    prova2
  ) {
    this.nome = nome;
    this.cpf = cpf;
    this.nascimento = nascimento;
    this.email = email;
    this.telefone = telefone;
    this.pais = pais;
    this.estado = estado;
    this.cidade = cidade;
    this.prova1 = prova1;
    this.prova2 = prova2;
    this.media = (prova1 + prova2) / 2;
    this.situacao = this.media >= 5 ? 'aprovado' : 'reprovado';
  }

  exibirDados() {
    return `O Aluno ${this.nome} tirou a nota ${this.prova1} na AP1 e ${
      this.prova2
    } na AP2. Com média de ${this.media.toString().replace('.', ',')} e está ${
      this.situacao
    } `;
  }
}

function enviarFormulario() {
  const nome = document.getElementById('nome').value;
  const cpf = document.getElementById('cpf').value;
  const nascimento = document.getElementById('nascimento').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const pais = document.getElementById('pais').value;
  const estado = document.getElementById('estado').value;
  const cidade = document.getElementById('cidade').value;
  const prova1 = parseFloat(document.getElementById('prova1').value);
  const prova2 = parseFloat(document.getElementById('prova2').value);

  const student = new Studant(
    nome,
    cpf,
    nascimento,
    email,
    telefone,
    pais,
    estado,
    cidade,
    prova1,
    prova2
  );
  console.log(student.exibirDados());
}
