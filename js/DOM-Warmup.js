

addButtonEvent()
function addButtonEvent() {
    document.getElementById("submitBtn")
        .addEventListener("click", addPost)
}


function addPost() {
    var container = document.getElementById("post-container")
    var newPost = document.createElement("p")
    var blogInput = document.getElementById("user-input")
    container.appendChild(newPost)
    newPost.innerText = blogInput.value
}
