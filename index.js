import { Option } from "./components/Option.js"
import { Todo, UL } from "./components/Todo.js"
import { reload, submit } from "./lib/utils.js"

const forms = Array.from(document.forms)
const select = document.getElementById('categs')
const container = document.querySelector('.container')
const open_menu = document.querySelector('.open_menu')
const close_menu = document.querySelector('.close-dialog')
const menu = document.querySelector('.menu')

export let store = {
    todos: [],
    categories: [],
}

console.log(store);

forms.forEach((form) => {
    form.onsubmit = (e) => {
        e.preventDefault();

        submit(e.target, store[form.name])

        if (form.name === 'categories') {
            for (let category of store[form.name]) {
                select.append(Option(category))
            }
        } else {
            reload(store[form.name], Todo, UL, container)
        }

    }
})

open_menu.onclick = () => {
    menu.classList.add('open')
}
close_menu.onclick = () => {
    menu.classList.remove('open')
}