
function reload(arr, component, parent_component, place) {
    place.innerHTML = ""


    for (let item of arr) {
        const todo = component(item)

        let categoty_elem = place.querySelector(`[data-${item.category}]`)

        if (categoty_elem) {
            categoty_elem.append(todo)
        } else {
            categoty_elem = parent_component(item.category)
            categoty_elem.append(todo)
        }
        place.append(categoty_elem)
    }
}


function submit(form, arr) {
    let data = {
        id: crypto.randomUUID(),
        isDone: false
    }

    const fm = new FormData(form)

    fm.forEach((val, key) => data[key] = val)

    arr.push(data);
}



export { reload, submit }