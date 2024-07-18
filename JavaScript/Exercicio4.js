//selecionando elementos da pagina pelo id e classe
let nome = document.querySelector('#nome');
let idade = document.querySelector('#idade');
let lista = document.querySelector('.lista');
let enviar = document.querySelector('#enviar');
let comp = document.querySelector('#comp');
let cadastrado = [];
/*função para salvar nome e idade sem recarregar a página, cria um li para exibir o conteúdo */

function pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

function MaiorMenor(nome1, nome2) {
  if (nome1.nome !== nome2.nome) {
    return `${nome1.nome} e ${nome2.nome} são nomes diferentes!`;
  } else {
    return `${nome1.nome} e ${nome2.nome} tem nomes iguais!`;
  }
}

function exibirComparacoes() {
  // Limpar a área de comparação antes de adicionar novas comparações
  comp.innerHTML = '';
  let ul = document.createElement('ul');

  for (let a = 0; a < cadastrado.length; a++) {
    for (let b = a + 1; b < cadastrado.length; b++) {
      let li = document.createElement('li');
      li.textContent = MaiorMenor(cadastrado[a], cadastrado[b]);
      ul.appendChild(li);
    }
  }

  comp.appendChild(ul);
}

function salvar(event) {
  event.preventDefault();

  let li = document.createElement('li');
  li.textContent = `Nome: ${nome.value}, idade: ${idade.value}`;
  lista.appendChild(li);

  let salvarPessoa = new pessoa(nome.value, idade.value);
  cadastrado.push(salvarPessoa);

  nome.value = '';
  idade.value = '';

  exibirComparacoes();
}

enviar.addEventListener('click', salvar);