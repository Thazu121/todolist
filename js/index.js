let item = document.getElementById("item")
let btn = document.getElementById("btn")
let list = document.getElementById("list")

btn.addEventListener("click", (event) => {
    event.preventDefault()
    if (item.value.trim() === "") {
        alert("Enter a Task")
        return
    }
    

    let li = document.createElement("li")
    let p = document.createElement("span")
    p.textContent = item.value
    li.appendChild(p)
    item.value = ""
    list.appendChild(li)


    const action = document.createElement("div")
    const edit = document.createElement("button")
    edit.textContent = "EDIT"
    action.appendChild(edit)

    edit.addEventListener("click", (e) => {
        if (edit.textContent === "EDIT") {
            p.contentEditable = "true"
            p.focus()
            edit.innerText = "Save"
        } else {
            p.contentEditable = "false"
            edit.innerText = "Edit"

        }
    })

    const del = document.createElement("button")
    del.textContent = "DELETE"
    del.id = "del"
    action.appendChild(del)
    del.addEventListener("click", () => {
        li.remove()
    })
    li.appendChild(action)

p.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        p.contentEditable = "false";
        edit.innerText = "Edit";
    }

});


})



