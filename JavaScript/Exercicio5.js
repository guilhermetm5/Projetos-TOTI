//chamada da API
fetch('https://viacep.com.br/ws/01001000/json/')
  .then((resp) => resp.json())
  .then((data) => (dataCEP = data))
  .catch((error) => console.error('Requisição falhou ', error));

//Selecionando elementos da página
let button = document.querySelector('#enviar');
let cep = document.querySelector('#cep');
let lista = document.querySelector('#lista');

// Funçõess
function salvar(event) {
  event.preventDefault();
  let li = document.createElement('li');
  li.textContent = `Você escolheu: ${cep.value}`;
  lista.appendChild(li);
}
//exibindo no console
console.log(cep.value);

// Eventos

button.addEventListener('click', salvar);
