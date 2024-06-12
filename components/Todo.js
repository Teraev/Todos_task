import { store } from "../index.js"

function Todo(item) {
  const li = document.createElement('li')
  let tasks = document.createElement('div')
  let p = document.createElement('p')
  let img = document.createElement('img')
  let task = document.createElement('div')
  let names = document.createElement('div')
  let input = document.createElement('input')

  task.classList.add('task')
  names.classList.add('names')
  img.classList.add('musor')
  tasks.classList.add('tasks')
  img.src = "./img/musor.svg"
  input.type = 'checkbox'

  p.innerHTML = `Due: ${item.deadline}`
  li.innerHTML = item.title

  task.append(input, names, img)
  names.append(li, p)
  tasks.append(task)

  img.onclick = () => {
    const idx = store.todos.indexOf(item);
    store.todos.splice(idx, 1);
    task.remove();
  };

  if (item.isDone === true) {
    li.classList.add('line');
    p.classList.add('line');
  }
  input.onclick = () => {
    item.isDone = !item.isDone
    li.classList.toggle('line', item.isDone);
    p.classList.toggle('line', item.isDone);
  };

  li.onclick = () => {
    const update = prompt("Введите текст:");
    if (update) {
      li.textContent = update;
    }
  }

  return tasks


}

function UL(category) {
  let block = document.createElement('div')
  let h1 = document.createElement('h1')
  let counter = document.createElement('div')

  block.classList.add('block')
  counter.classList.add('counter')

  block.setAttribute(`data-${category}`, '')
  counter.innerHTML = "0"
  h1.innerHTML = category


  block.append(h1, counter)

  return block

}

export { Todo, UL }