const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi() {
  const li = document.createElement('li')
  return li;
}

inputTarefa.addEventListener('keypress', e => {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
  }
})

function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus()
}

function criaBotao(li) {
  li.innerText += ' ';
  const botaoApagar = document.createElement('button')
  botaoApagar.innerHTML = 'Apagar';
  botaoApagar.setAttribute('class', 'apagar')
  li.appendChild(botaoApagar)

  const botaoConcluido = document.createElement('button')
  botaoConcluido.innerHTML = 'Concluir tarefa'
  botaoConcluido.setAttribute('class', 'concluir')
  li.appendChild(botaoConcluido)

  const botaoDesfazer = document.createElement('button')
  botaoDesfazer.innerHTML = 'Desfazer';
  botaoDesfazer.setAttribute('class', 'desfazer')
  li.appendChild(botaoDesfazer)
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerHTML = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotao(li);
}

btnTarefa.addEventListener('click', () => {
  if(!inputTarefa.value) return
  criaTarefa(inputTarefa.value)
})

document.addEventListener('click', e => {
  const el = e.target;
  const botaoApagar = el.classList.contains('apagar')
  const botaoConcluir = el.classList.contains('concluir')
  const botaoDesfazer = el.classList.contains('desfazer')

  if(botaoApagar) {
    el.parentElement.remove()
  }

  if(botaoConcluir) {
    el.parentElement.style.color = '#0F0'
  }

  if(botaoDesfazer) {
    if (el.parentElement.style.color === 'rgb(0, 255, 0)') {
    el.parentElement.style.color = '#000'
    } else {
      alert('Você precisa concluir a tarefa primeiro')
    }
  }
})