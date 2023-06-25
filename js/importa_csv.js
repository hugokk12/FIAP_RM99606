function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}

let dados = loadFile('img/tabela_invest.csv')
dados=dados.split('\r\n')
let data = []
for(let i=0; i<dados.length-1;i++){
  data.push(dados[i].split(';'))
}

let tableElement = document.querySelector('#tbl_invest')

let header = data.shift()
header = header.map((entry) => `<th>${entry}</th>`).join('');

let body = data.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')

tableElement.innerHTML = `
  <thead><tr>${header}</tr></thead>
  <tbody>${body}</tbody>`
