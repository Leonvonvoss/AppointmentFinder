"use strict";
var list = createCardList();
var clicked = 0;
var opened = 0;
function createCardList() {
    var list = [];
    var counter = 0;
    var cardid = 0;
    while (counter < 9) {
        var card = {
            id: cardid,
            path: "pic/img" + cardid + ".jpg"
        };
        list[counter] = card;
        cardid = counter + 1;
        counter++;
    }
    return list;
}
function shuffleCardList(list) {
    var counter = list.length;
    while (counter > 0) {
        var index = Math.floor(Math.random() * counter);
        counter--;
        var temp = list[counter];
        list[counter] = list[index];
        list[index] = temp;
    }
    return list;
}
function printList(list) {
    var counter = 0;
    while (counter < list.length) {
        console.log(list[counter].path);
        counter++;
    }
    return list;
}
function gameOver() {
    if (list[0].id == 0 && list[1].id == 1 && list[2].id == 2 && list[3].id == 3 && list[4].id == 4 && list[5].id == 5 && list[6].id == 6 && list[7].id == 7 && list[8].id == 8) {
        var button = document.getElementById("startbutton");
        button.style.visibility = 'visible';
        var headdiv = document.getElementById("gameover");
        while (headdiv.lastChild) {
            headdiv.removeChild(headdiv.lastChild);
        }
        var newgamediv = document.createElement("div");
        newgamediv.className = "col text-center";
        var h1 = document.createElement("h2");
        h1.textContent = "! GAME OVER !";
        newgamediv === null || newgamediv === void 0 ? void 0 : newgamediv.appendChild(h1);
        headdiv === null || headdiv === void 0 ? void 0 : headdiv.appendChild(newgamediv);
    }
}
function clickd(id) {
    var success = false;
    if (opened <= 2) {
        var img = document.getElementById(id + "");
        if (img.className != 'active') {
            if (clicked == 0) {
                clicked = id;
                opened = 1;
                img.classList.add('active');
            }
            else {
                opened = 2;
                img.classList.add('active');
                success = true;
            }
        }
        else {
            var img_1 = document.getElementById(clicked + "");
            var img2 = document.getElementById(id + "");
            img_1.classList.remove('active');
            img2.classList.remove('active');
            clicked = 0;
            opened = 0;
        }
    }
    if (success) {
        var first = 0;
        var second = 0;
        for (var i = 0; i < 9; i++) {
            if (list[i].id == clicked) {
                first = i;
            }
            else if (list[i].id == id) {
                second = i;
            }
        }
        var img = document.getElementById(clicked + "");
        var img2 = document.getElementById(id + "");
        img.classList.remove('active');
        img2.classList.remove('active');
        //swap imgs
        var temp = list[first];
        list[first] = list[second];
        list[second] = temp;
        var headdiv = document.getElementById("puzzle");
        while (headdiv.lastChild) {
            headdiv.removeChild(headdiv.lastChild);
        }
        var newgamediv = document.createElement("div");
        newgamediv.className = "row mx-5";
        newgamediv.setAttribute("id", "game");
        headdiv === null || headdiv === void 0 ? void 0 : headdiv.appendChild(newgamediv);
        addShuffeldListToGame(list);
        clicked = 0;
        opened = 0;
        //alert if game over
        gameOver();
    }
}
function addEmptyPuzzleDOM() {
    var gameover = document.getElementById("gameover");
    while (gameover.lastChild) {
        gameover.removeChild(gameover.lastChild);
    }
    var headdiv = document.getElementById("puzzle");
    var newgamediv = document.createElement("div");
    while (headdiv.lastChild) {
        headdiv.removeChild(headdiv.lastChild);
    }
    newgamediv.className = "row mx-5";
    newgamediv.setAttribute("id", "game");
    headdiv === null || headdiv === void 0 ? void 0 : headdiv.appendChild(newgamediv);
}
function addShuffeldListToGame(list) {
    var gamediv = document.getElementById("game");
    var counter = 0;
    while (counter < list.length) {
        var div = document.createElement("div");
        div.className = "col-md-4 p-0 card";
        var idcard = list[counter].id.toString();
        div.id = idcard;
        div.setAttribute("id", idcard);
        div.setAttribute("onclick", "clickd(" + idcard + ")");
        var div_thumbnail = document.createElement("div");
        div_thumbnail.classList.add("thumbnail");
        var img = document.createElement("img");
        img.src = list[counter].path;
        div_thumbnail === null || div_thumbnail === void 0 ? void 0 : div_thumbnail.appendChild(img);
        div === null || div === void 0 ? void 0 : div.appendChild(div_thumbnail);
        gamediv === null || gamediv === void 0 ? void 0 : gamediv.appendChild(div);
        counter++;
    }
}
function start() {
    addEmptyPuzzleDOM();
    list = shuffleCardList(list);
    addShuffeldListToGame(list);
    var button = document.getElementById("startbutton");
    button.style.visibility = 'hidden';
}
