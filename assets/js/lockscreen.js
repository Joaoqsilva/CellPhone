var dia = document.getElementById('ligar-desligar')

dia.addEventListener('click', ()=>{
    let horas = 15;

    if(horas > 06 && horas < 12){
        console.log('Bom dia')
    } 
     else if(horas > 13 && horas < 18){
        console.log('Boa tarde')
    } 
 
});

const senhaInput = document.getElementById('senha');

function inserir(numero) {
  senhaInput.value += numero;
}

function logar() {
  const senha = senhaInput.value;
  var celularunlock = document.getElementById('celular-container-unlock');
  var Ccontainer = document.getElementById ("celular-container")
  console.log('Senha digitada:', senha);
  
  if (senha === "2222" ) {
    console.log('certo')
    scrlock.style.display ="none"; 
    Ccontainer.style.display= "none";
    celularunlock.style.display ='flex'; 
  }
  else if (senha === "1111" ) {
    console.log('certo')
    scrlock.style.display ="none"; 
    Ccontainer.style.display= "none";
    celularunlock.style.display ='flex';
  }
  else if (senha === "3333" ) {
    console.log('certo')
    scrlock.style.display ="none"; 
    Ccontainer.style.display= "none";
    celularunlock.style.display ='flex';
  }else {
    alert('senha errada')
  }
  const limiteCaracteres = 2;
  if (senhaInput.value.length > limiteCaracteres) {
    senhaInput.value = senhaInput.value.slice(0, limiteCaracteres);
  }

}


function apagar() {
  senhaInput.value = senhaInput.value.slice(0, -1);
}

var ligar = document.getElementById('ligar-desligar');
var scrlock = document.getElementById('screen-lock-div');
ligar.addEventListener('click', () => {
       let celular = document.getElementById('celular');
    
       if (scrlock.style.display === 'none') {
              scrlock.style.display = 'flex';
          scrlock.style.backgroundImage = 'none';
       } else {
          scrlock.style.display = 'none';
          // Outras alterações no estilo, se necessário
       }
});

















let contador = 0;
let mDiv = 8;
let maxDiv = 0;
var mais = document.getElementById("mais");
function clickMais() {
  if (contador < mDiv) {
  var novaDiv = document.createElement("div");
  var container = document.getElementById("volume-box");
  container.appendChild(novaDiv);
  contador++;
  container.style.display = 'flex';

  setTimeout(() => {
    var container = document.getElementById("volume-box");
    container.style.display = 'none';

  }, 5000);
  
    var mais = document.getElementById("mais");
    console.log('maximo');  
  }
}


function clickMenos() {
  // Obtém o elemento container
  var container = document.getElementById("volume-box");
  container.style.display = 'flex'
  // Verifica se há uma div filho para remover
  if (container.lastChild) {
    // Remove o último filho (a última div)
    container.removeChild(container.lastChild);

    // Decrementa o contador
    contador--;
  }
};


const horas = document.getElementById('horas');
  
const minutos = document.getElementById('minutos');


const relogio = setInterval (function time() {
let dateToday = new Date();
let hr = dateToday.getHours();
let min = dateToday.getMinutes();

if (hr < 10) hr = '0' + hr;
if (min < 10) min = '0' + min;
horas.textContent = hr + ':';
minutos.textContent = min;
});




const diaDaSemana = document.querySelector('#semDay');
const data = document.querySelector('#semData');
const mes = document.querySelector('#mesData');

function infos() {
  const dataDeHoje = new Date();

  // Para obter o dia da semana como um número (0: Domingo, 1: Segunda, ..., 6: Sábado),
  // use o método getDay(), e não getVarDate().
  const diaSem = dataDeHoje.getDay();

  // Para obter o dia do mês, use o método getDate().
  const dataNumber = dataDeHoje.getDate();

  // Para obter o mês como um número (0: Janeiro, 1: Fevereiro, ..., 11: Dezembro),
  // use o método getMonth().
  const mesData = dataDeHoje.getMonth();

  // Agora, vamos atualizar o conteúdo dos elementos com os valores obtidos.
  // Porém, note que precisamos converter o número do mês para o nome correspondente.

  const diasDaSemanaNomes = ['Dom', 'Seg', 'Ter', 'Quar', 'Qui', 'Sex', 'Sáb'];
  const mesesNomes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  diaDaSemana.textContent = diasDaSemanaNomes[diaSem] + '.,';
  data.textContent = dataNumber + " De ";
  mes.textContent = mesesNomes[mesData];
}

// Chame a função para atualizar o conteúdo na página.
infos();


