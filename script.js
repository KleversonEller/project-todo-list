window.onload = function () {
  //? Requisito 5 - 6

  let botaoCriaTarefas = document.querySelector('#criar-tarefa');

  botaoCriaTarefas.addEventListener('click', function () {
    let textoTarefa = document.querySelector('#texto-tarefa');
    let lista = document.querySelector('#lista-tarefas');
    let tarefa = document.createElement('li');
    tarefa.innerText = textoTarefa.value;
    lista.appendChild(tarefa);
    textoTarefa.value = '';
  });

  //! Implementa um o texto digitado no input na lista de tarefas em ordem de criação e apaga o texto do input

  //? Requisito 7

  let lista = document.querySelector('#lista-tarefas');

  lista.addEventListener('click', function (evento) {
    let tarefa = evento.target;
    tarefa.style.backgroundColor = 'rgb(128, 128, 128)';
  });

  //! Ao clicar em uma tarefa da lista pinta o fundo
};
