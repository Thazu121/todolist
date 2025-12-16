let item = document.getElementById("item")
let btn = document.getElementById("btn")
let list = document.getElementById("list")
btn.addEventListener("click", (event) => {
   event.preventDefault()
    if(item.value.trim()==="")
         {
            alert("Enter a Task")
            return}

         let li = document.createElement("li")
    let p = document.createElement("span")
    p.textContent = item.value
    li.appendChild(p)
        item.value = ""
    const a=document.createElement("div")
       const edit = document.createElement("button")
    edit.textContent = "EDIT"
    a.appendChild(edit)


     const del = document.createElement("button")
    del.textContent = "DELETE"
    del.id="del"
a.appendChild(del)

li.appendChild(a)

list.appendChild(li)

})
edit.addEventListener("click",(e)=>{
if(edit.textContent==="EDIT"){
    text.contentEditable="true"
    text.focus()
    edit.innerText="Save"
}else{
    text.contentEditable="false"
        edit.innerText="Edit"

}
})
del.addEventListener("click",()=>{
    li.remove()
})
item.addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){btn(e)}
})
