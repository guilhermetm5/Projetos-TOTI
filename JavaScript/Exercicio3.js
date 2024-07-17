//Global variaveis
let salvar = [];
let i = 1;
// Function object Pessoa
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
function MaiorMenor(nome1, nome2) {
  if (nome1.nome !== nome2.nome) {
    console.log(`${nome1.nome} e ${nome2.nome} são nomes diferentes!`);
  } else {
    console.log(`${nome1.nome} e ${nome2.nome} tem nomes iguais!`);
  }
}
//loop para cadastrar novas pessoas
while (i != 0) {
  valor = parseInt(
    prompt('Escolhas uma das opções: 1 - Cadastrar, e 2 - Sair')
  );
  switch (valor) {
    case 1:
      let nome = prompt('Insira um nome:');
      let idade = prompt('Insira uma idade:');
      let novaPessoa = new Pessoa(nome, idade);
      salvar.push(novaPessoa);
      break;
    case 2:
      alert('Obrigado por usar nosso sistema!');
      console.log('Programa Encerrado!');
      console.log('Dados capturados:');
      for (let novaPessoa of salvar) {
        console.log(novaPessoa);
      }
      for (let a = 0; a < salvar.length; a++) {
        for (let b = a + 1; b < salvar.length; b++) {
          MaiorMenor(salvar[a], salvar[b]);
        }
      }
      i = 0;
      break;
    default:
      alert(
        'Nenhum serviço selecionado o programa foi encerrado! Confira os dados no console!'
      );
      console.log('nenhum serviço foi selecionado! Nada foi cadastrado!');
      i = 0;
  }
}
