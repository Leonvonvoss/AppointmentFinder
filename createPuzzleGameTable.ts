    type Card = {
        id:number;
        path:string;
    }

    let list: Array<Card> = createCardList();
    let clicked = 0;
    let opened = 0;
    
    function createCardList(): Array<Card> {
        let list: Array<Card> = [];
        let counter = 0;
        let cardid:number = 0;

        while (counter < 9) {
            let card: Card = {
                id: cardid,
                path: "pic/img" + cardid + ".jpg"
            };

            list[counter] = card;
            cardid = counter + 1;
            counter++;
        }

        return list;
    }

    function shuffleCardList(list: Array<Card>) : Array<Card> {
        let counter = list.length;

        while (counter > 0) {
            let index = Math.floor(Math.random() * counter);
            counter--;

            let temp = list[counter];
            list[counter] = list[index];
            list[index] = temp;
        }
        return list;
    }

    function printList(list: Array<Card>) {
        let counter = 0;

        while (counter < list.length) {
            console.log(list[counter].path);
            counter++;
        }
        return list;
    }

    function gameOver(){
        if (list[0].id == 0 && list[1].id == 1 && list[2].id == 2 && list[3].id == 3 && list[4].id == 4 && list[5].id == 5 && list[6].id == 6 && list[7].id == 7 && list[8].id == 8){
            let button = document.getElementById("startbutton");
            button.style.visibility = 'visible';   

            let headdiv = document.getElementById("gameover");

            while (headdiv.lastChild) {
                headdiv.removeChild(headdiv.lastChild)
            }

            let newgamediv = document.createElement("div");
            newgamediv.className = "col text-center";
            
            let h1 = document.createElement("h2");
            h1.textContent = "! GAME OVER !";

            newgamediv?.appendChild(h1);
            headdiv?.appendChild(newgamediv);
        }
    }

    function clickd(id:number){
        let success = false;

        if(opened <= 2) {
            let img = document.getElementById(id + "");
            if (img.className != 'active'){
                if (clicked == 0) {
                    clicked = id;
                    opened = 1;

                    img.classList.add('active');
                } else {
                    opened = 2;

                    img.classList.add('active');
                    success = true;
                }
            } else {
                let img = document.getElementById(clicked + "");
                let img2 = document.getElementById(id + "");
                img.classList.remove('active');
                img2.classList.remove('active');
                clicked = 0;
                opened = 0;
            }
        }
        if(success) {
            let first = 0;
            let second = 0;

            for(let i = 0; i < 9; i++){
                if(list[i].id == clicked){
                    first = i;
                } else if(list[i].id == id){
                    second = i;
                }
            }
            
            let img = document.getElementById(clicked + "");
            let img2 = document.getElementById(id + "");

            img.classList.remove('active');
            img2.classList.remove('active');

            //swap imgs
            let temp: Card = list[first];
            list[first] = list[second];
            list[second] = temp;

            let headdiv = document.getElementById("puzzle");

            while (headdiv.lastChild) {
                headdiv.removeChild(headdiv.lastChild)
            }

            let newgamediv = document.createElement("div");
            newgamediv.className = "row mx-5";
            newgamediv.setAttribute("id", "game");

            headdiv?.appendChild(newgamediv);

            addShuffeldListToGame(list);

            clicked = 0;
            opened = 0;

            //alert if game over
            gameOver();
        }
    }

    function addEmptyPuzzleDOM(){
        let gameover = document.getElementById("gameover");

        while (gameover.lastChild) {
            gameover.removeChild(gameover.lastChild)
        }

        let headdiv = document.getElementById("puzzle");
        let newgamediv = document.createElement("div");

        while (headdiv.lastChild) {
            headdiv.removeChild(headdiv.lastChild)
        }

        newgamediv.className = "row mx-5";
        newgamediv.setAttribute("id", "game");

        headdiv?.appendChild(newgamediv);
    }

    function addShuffeldListToGame(list: Array<Card>){
        let gamediv = document.getElementById("game");
        let counter = 0;
        
        while (counter < list.length) {
            let div = document.createElement("div");
            div.className = "col-md-4 p-0 card";

            let idcard: string = list[counter].id.toString();

            div.id = idcard;
            div.setAttribute("id", idcard);
            div.setAttribute("onclick", "clickd(" + idcard + ")");

            let div_thumbnail = document.createElement("div");
            div_thumbnail.classList.add("thumbnail");

            let img = document.createElement("img");
            img.src = list[counter].path;

            div_thumbnail?.appendChild(img);
            div?.appendChild(div_thumbnail);
            gamediv?.appendChild(div);

            counter++;
        }
    }

    function start(){
        addEmptyPuzzleDOM();
        list = shuffleCardList(list);
        addShuffeldListToGame(list);

        var button = document.getElementById("startbutton");
        button.style.visibility = 'hidden';
    }