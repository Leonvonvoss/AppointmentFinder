function submitUsername() {
    var inputField = document.getElementById("inputUsername").textContent;
    sessionStorage.setItem("username", inputField);
    document.getElementById("inputUsername").innerHTML = sessionStorage.getItem("username") + "dwdwd";
}
