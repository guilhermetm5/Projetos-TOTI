let valor;
let i = 1;
let nome, nome1;
let idade, idade1;

while (i != 0) {
  valor = parseInt(
    prompt(
      'escolha uma opção: 1 para cadastrar 2 pessoas, 2 para comparar ou 3 para sair'
    )
  );
  switch (valor) {
    case 1:
      nome = prompt('Insira um nome:');
      idade = prompt('Insira a idade:');
      nome1 = prompt('Insira outro nome:');
      idade1 = prompt('Insira outra idade:');
      Number(idade, idade1);
      console.table({
        nome,
        idade,
        nome1,
        idade1,
      });
      break;
    case 2:
      if (idade < idade1) {
        console.log(`${nome} é mais novo que ${nome1}`);
      } else {
        console.log(`${nome} é mais velho que ${nome1}`);
      }
      if (nome == nome1) {
        console.log(`${nome} e ${nome1} tem nomes iguais`);
      } else {
        console.log(`${nome} e ${nome1} não tem nomes iguais`);
      }
      break;
    case 3:
      console.log('Programa finalizado!');
      i = 0;
      break;
    default:
      console.log('Nenhum caso escolhido');
  }
}
