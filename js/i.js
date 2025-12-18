const itemInput = document.getElementById("item");
const btn = document.getElementById("btn");
const list = document.getElementById("list");
const emptyMsg = document.getElementById("emptyMsg");

let editLi = null;

// Show or hide empty message
function toggleEmptyMsg() {
    emptyMsg.style.display = list.querySelectorAll('li').length === 0 ? "block" : "none";
}

// Create a button with text, class, and click handler
function createButton(text, className, onClick) {
    const button = document.createElement("button");
    button.textContent = text;
    button.classList.add(className);
    button.addEventListener("click", onClick);
    button.title = text;
    return button;
}

// Add or save task
function handleAddOrSave() {
    const taskText = itemInput.value.trim();
    if (!taskText) {
        alert("Enter a task");
        return;
    }

    if (editLi) {
        // Save edited task
        editLi.querySelector("span").textContent = taskText;
        editLi = null;
        btn.textContent = "ADD";
        itemInput.value = "";
        toggleEmptyMsg();
        itemInput.focus();
        return;
    }

    // Create new task
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);

    const actionDiv = document.createElement("div");

    // Edit button
    const editBtn = createButton("EDIT", "editBtn", () => {
        itemInput.value = span.textContent;
        itemInput.focus();
        btn.textContent = "SAVE";
        editLi = li;
    });

    // Delete button
    const delBtn = createButton("DELETE", "delBtn", () => {
        li.remove();
        if (editLi === li) {
            editLi = null;
            btn.textContent = "ADD";
            itemInput.value = "";
        }
        toggleEmptyMsg();
        itemInput.focus();
    });

    actionDiv.appendChild(editBtn);
    actionDiv.appendChild(delBtn);
    li.appendChild(actionDiv);
    list.appendChild(li);

    itemInput.value = "";
    toggleEmptyMsg();
    itemInput.focus();
}

// Initial empty message state
toggleEmptyMsg();

// Button click
btn.addEventListener("click", (e) => {
    e.preventDefault();
    handleAddOrSave();
});

// Enter key support
itemInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        handleAddOrSave();
    }
});
