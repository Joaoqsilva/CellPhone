var maxDivs = 6; 
var divCount = 0; // Mantém o controle do número atual de divs criadas

// Função para adicionar uma nova div
function addDiv() {
if (divCount < maxDivs) {
var div = document.createElement("div");
div.textContent = divCount ;
document.getElementById("volume").appendChild(div);
divCount++;
containn.style.display = 'flex';

setTimeout(() => {
    var containn = document.querySelector("#volume");
    
    containn.style.display = 'none';
  }, 1000); 
  
} 

}

// Adiciona um listener de evento ao botão
document.getElementById("addDivButton").addEventListener("click", addDiv);


function TirarDiv() {
 if (volume.lastChild) {
  volume.removeChild(volume.lastChild)
  divCount--
 }
} ;


document.getElementById("tirarDiv").addEventListener("click", TirarDiv);





























// JavaScript
const diaDaSemanaO = document.querySelector('#nomeDia');
const dataO = document.querySelector('#numeroDia');
const mesO = document.querySelector('#nomeMes');

function atualizarData() {
  const dataDetoday = new Date();

  // Para obter o dia da semana como um número (0: Domingo, 1: Segunda, ..., 6: Sábado),
  // use o método getDay(), e não getVarDate().
  const diaSemanaNumero = dataDetoday.getDay();

  // Para obter o dia do mês, use o método getDate().
  const diaNumero = dataDetoday.getDate();

  // Para obter o mês como um número (0: Janeiro, 1: Fevereiro, ..., 11: Dezembro),
  // use o método getMonth().
  const mesNumero = dataDetoday.getMonth();

  // Agora, vamos atualizar o conteúdo dos elementos com os valores obtidos.
  // Mas note que precisamos converter o número do mês para o nome correspondente.

  const diasDaSemanaNames = ['Dom', 'Seg', 'Ter', 'Quar', 'Quin', 'Sex', 'Sáb'];
  const mesesNames = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

  diaDaSemanaO.textContent = diasDaSemanaNames[diaSemanaNumero] + '.,';
  dataO.textContent = diaNumero + " De ";
  mesO.textContent =  mesesNames[mesNumero];
}

// Chame a função para atualizar o conteúdo na página.
atualizarData();
