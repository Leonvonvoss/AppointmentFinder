window.addEventListener("load", function () {
    var div = document.getElementById("browsertype");
    var p = document.createElement("p");
    var u = document.createElement("u");
    // CHROME
    if (navigator.userAgent.indexOf("Chrome") != -1) {
        u.textContent = "Your browser is: Google Chrome";
    }
    // FIREFOX
    else if (navigator.userAgent.indexOf("Firefox") != -1) {
        u.textContent = "Your browser is: Mozilla Firefox";
    }
    // INTERNET EXPLORER
    else if (navigator.userAgent.indexOf("MSIE") != -1) {
        u.textContent = "Your browser is: Microsoft Internet Explorer";
    }
    // EDGE
    else if (navigator.userAgent.indexOf("Edge") != -1) {
        u.textContent = "Your browser is: Microsoft Edge";
    }
    // SAFARI
    else if (navigator.userAgent.indexOf("Safari") != -1) {
        u.textContent = "Your browser is: Safari";
    }
    // OPERA
    else if (navigator.userAgent.indexOf("Opera") != -1) {
        u.textContent = "Your browser is: Opera";
    }
    // YANDEX BROWSER
    else if (navigator.userAgent.indexOf("YaBrowser") != -1) {
        u.textContent = "Your browser is: YaBrowser";
    }
    // OTHERS
    else {
        u.textContent = "Your browser is: Unkown browser";
    }
    p.appendChild(u);
    div.appendChild(p);
});
