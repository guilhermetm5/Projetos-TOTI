//chamada da API

//Selecionando elementos da página
let button = document.querySelector("#enviar");
let cep = document.querySelector("#cep");
let lista = document.querySelector("#lista");
let dataCEP;

// Funções

function conexao(cep) {
  fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    .then((resp) => resp.json())
    .then((data) => {
      dataCEP = data;
      exibir(dataCEP);
    })
    .catch((error) => console.error("Requisição falhou ", error));
}

function salvar(event) {
  event.preventDefault();
  let li = document.createElement("li");
  li.textContent = `Você escolheu: ${cep.value}`;
  lista.appendChild(li);
  conexao(cep);
}
function exibir(dataCEP) {
  let li = document.createElement("li");
  li.textContent = `Localidade: ${dataCEP.localidade}, Logradouro: ${dataCEP.logradouro}, Bairro: ${dataCEP.bairro}`;
  lista.appendChild(li)
}

// Eventos

button.addEventListener("click", salvar);
