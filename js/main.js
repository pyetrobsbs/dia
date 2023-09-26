let temp = document.querySelector('.temp');

function PegarDia(diaSemana){
  let dia = ['segunda, ','terça, ','quarta, ','quinta, ','sexta, ','sábado, ','domingo, '];
  return dia[diaSemana];
}
function PegarDiaSMes(diaMes) {
  let mes = [' de Jarneiro de ',' de fervereiro de ', ' de março de',' de abril de ',' de maio de ',' de junho  de ',' de julho de ',' de agosto de ',' de setembro de ',' de outubro de ',' de novembro de ',' de dezembro de '];
  return mes[diaMes];
}


let data = new Date();
let diaSemana = data.getDay();
temp.innerHTML = PegarDia(diaSemana)
temp.innerHTML += data.getDate();
let diaMesa = data.getMonth();
temp.innerHTML += PegarDiaSMes(diaMesa)
temp.innerHTML += data.getFullYear()
temp.innerHTML += data.toLocaleTimeString('pt-BR', {timeStyle:'short'});