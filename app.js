const addTodo = () => {
    let inputField = document.getElementById('inputField').value
    console.log(inputField)

    if (inputField === " ") {
        alert(`Please Enter Some Text`)
        li
    }
    else {
        let listing = document.getElementById('listing')
        // console.log(listing)
        let li = document.createElement('li')
        let liTextNode = document.createTextNode(inputField);
        let liChild = li.appendChild(liTextNode)
        // console.log(liChild)
        listing.appendChild(li)
        console.log(li)


        let editBtn = document.createElement('button')
        let editBtnText = document.createTextNode('Edit')
        editBtn.appendChild(editBtnText)
        li.appendChild(editBtn)
        editBtn.setAttribute('onclick', "editTodo(this)")
        editBtn.setAttribute('class', "btn")
        editBtn.setAttribute('id', "edit")

        let deleteBtn = document.createElement('button')
        let deleteBtnText = document.createTextNode('Delete')
        deleteBtn.appendChild(deleteBtnText)
        li.appendChild(deleteBtn)
        deleteBtn.setAttribute("onclick", "deleteTodo(this)")
        deleteBtn.setAttribute("class", "btn")
        deleteBtn.setAttribute("id", "remove")

    }
    document.getElementById('inputField').value = " "
}
const removeAllTodo = () => {
    let listing = document.getElementById('listing').innerHTML = " "
}

const editTodo = (val) => {
    let editValue = val.parentNode.firstChild.nodeValue
    // console.log(editValue.nodeValue)
    let newValue = prompt("Edit This Value", editValue)
    val.parentNode.firstChild.nodeValue = newValue

}

const deleteTodo = (val) => {
    val.parentNode.remove()
}