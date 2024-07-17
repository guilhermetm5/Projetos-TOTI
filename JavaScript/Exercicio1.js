alert('Faça um cadastro antes acessar a página!');

let nome = prompt('Seu primeiro nome:');
let sobrenome = prompt('Seu sobrenome:');
let idade = prompt('Sua idade:');

alert('Cadastrado com sucesso! Veja suas informações no console!');
console.log(`Cadastrado! informações do cadastrado: `);

Number(idade);
console.table(
  nome,
  sobrenome,
  idade,
);
