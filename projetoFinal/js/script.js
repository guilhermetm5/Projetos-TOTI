//console.log('Projeto Turma 48');

const cpf = document
  .getElementById('cpf')
  .addEventListener('input', function (e) {
    const input = e.target.value;
    const cpfIsValid = /^[0-9]*$/.test(input);
    if (!cpfIsValid) {
      e.target.value = input.slice(0, -1);
      document.getElementById('cpf-erro-message').style.display = 'block';
    } else {
      document.getElementById('cpf-erro-message').style.display = 'none';
    }
  });

const students = [];

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
  students.push(student);

  renderData();
  function renderData() {
    const studentTableBody = document.getElementById('studentTableBody');
    studentTableBody.innerHTML = '';

    students.forEach((student) => {
      const row = document.createElement('tr');
      Object.values(student).forEach((value) => {
        const cell = document.createElement('td');
        cell.textContent = value;
        studentTableBody.appendChild(cell);
      });
      studentTableBody.appendChild(row);
    });
  }
}

function mascararCPF(input) {
  input = input.replace(/(\d{3})(\d)/, '$1.$2');
  input = input.replace(/(\d{3})(\d)/, '$1.$2');
  input = input.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  return input;
}
