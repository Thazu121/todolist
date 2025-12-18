let item = document.getElementById("item")
let btn = document.getElementById("btn")
let list = document.getElementById("list")
let editLi = null
let emptyMsg = document.getElementById("emptyMsg");

function toggleEmptyMsg() {
    emptyMsg.style.display = list.querySelectorAll('li').length === 0 ? "block" : "none";
}

function createButton(text, className, onClick) {
    const button = document.createElement("button")
    button.textContent = text
    button.classList.add(className);
    button.addEventListener("click", onClick);
    button.title = text;
    return button;


}
function handleAddOrSave() {
    const taskText = item.value.trim();
    if (!taskText) {
        alert("Enter a Task");
        return;
    }
    
    if (editLi) {
        editLi.querySelector("span").textContent = taskText;
        editLi = null;
        btn.textContent = "ADD";
    } else {
        const li = document.createElement("li");
        const p = document.createElement("span");
        p.textContent = taskText;
        li.appendChild(p);

        const actionDiv = document.createElement("div");
        actionDiv.classList.add("actions");

        const editBtn = createButton("EDIT", "editBtn", () => {
            item.value = p.textContent;
            item.focus();
            btn.textContent = "SAVE";
            editLi = li;
        });

        const delBtn = createButton("DELETE", "delBtn", () => {
            li.remove();
            if (editLi === li) {
                editLi = null;
                btn.textContent = "ADD";
            }
            toggleEmptyMsg();
            item.focus();
        });

        actionDiv.appendChild(editBtn);
        actionDiv.appendChild(delBtn);
        li.appendChild(actionDiv);
        list.appendChild(li);
    }

    item.value = "";
    toggleEmptyMsg();
    item.focus();
}

toggleEmptyMsg();


btn.addEventListener("click", (e) => {
    e.preventDefault();
    handleAddOrSave();
});

item.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        handleAddOrSave();
    }
});
