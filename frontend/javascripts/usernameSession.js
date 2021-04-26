function fillUsernameInput() {
    if (localStorage.getItem("username")) {
        var inputField = document.getElementById("inputUsername");
        inputField.value = localStorage.getItem("username");
    }
}
function submitUsername() {
    var inputField = document.getElementById("inputUsername");
    localStorage.setItem("username", inputField.value);
    document.getElementById("inputUsername").innerHTML = localStorage.getItem("username");
}
function getUsername() {
    return localStorage.getItem("username");
}
fillUsernameInput();
