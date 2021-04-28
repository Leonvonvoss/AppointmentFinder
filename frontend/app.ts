// Settings:
let restServer: string = "http://localhost:80/webtechnologien/SM2021/AppointmentFinderProject/AppointmentFinder/backend/serviceHandler.php";

/*$.getJSON(restServer,
    { 'method': 'queryPersonByDept', 'param': 'Faculty' },
    function (data: object) {
        $('#mainpart').text(JSON.stringify(data));
    });*/

function loadAppointsData() {

    $.ajax({
        method: "GET",
        url: restServer,
        cache: false,
        data: {
            method: "queryAppoints",
            param: "",
        },
        dataType: "json",

        success: function (data) {
            //console.log(data);
            let loadDataTable = <HTMLTableElement> document.getElementById("loadData");

            //remove Elements from table
            while (loadDataTable.lastChild) {
                loadDataTable.removeChild(loadDataTable.lastChild)
            }

            //Creating tds, a img and a button for a single row
            for (let i = 0; i < data.length; i++) {
                //row
                let newTableRow = <HTMLTableRowElement> document.createElement("tr");
                //id-col
                let newTableColID = <HTMLTableCellElement> document.createElement("td");
                newTableColID.textContent = data[i]["id"];
                //creator-col
                let newTableColCreator = <HTMLTableCellElement>  document.createElement("td");
                //creator-img
                let newUserImage = <HTMLImageElement> document.createElement("img");
                newUserImage.className = "rounded-circle me-1 me-md-2";
                newUserImage.setAttribute("width", "30");
                newUserImage.setAttribute("height", "30");
                newUserImage.setAttribute("src", "pages/assets/img/avatars/avatar5.jpeg");
                //appending img to creator col
                newTableColCreator.appendChild(newUserImage);
                newTableColCreator.appendChild(document.createTextNode(data[i]["creator"]));
                //title-col
                let newTableColTitle = <HTMLTableCellElement>  document.createElement("td");
                newTableColTitle.textContent = data[i]["title"];
                //location-col
                let newTableColLocation = <HTMLTableCellElement>  document.createElement("td");
                newTableColLocation.textContent = data[i]["locations"];
                //info-col
                let newTableColInfo = <HTMLTableCellElement>  document.createElement("td");
                newTableColInfo.textContent = data[i]["info"];
                //icon for button
                let newIconDetailsButton = document.createElement("i");
                newIconDetailsButton.className = "fas fa-download fa-sm text-white-50 me-1";
                //detailsButton-col
                let newButtonDetails = <HTMLButtonElement>  document.createElement("button");
                newButtonDetails.className = "btn btn-primary btn-sm my-1 appointTableBtn";
                newButtonDetails.setAttribute("data-bs-toggle", "modal");
                newButtonDetails.setAttribute("data-bs-target", "#viewAppointDetailsModal");
                newButtonDetails.setAttribute("onclick", "loadComments()");
                //appending icon to button
                newButtonDetails.appendChild(newIconDetailsButton);
                newButtonDetails.appendChild(document.createTextNode("Details"));
                //appending cols to row
                newTableRow.appendChild(newTableColID);
                newTableRow.appendChild(newTableColCreator);
                newTableRow.appendChild(newTableColTitle);
                newTableRow.appendChild(newTableColLocation);
                newTableRow.appendChild(newTableColInfo);
                newTableRow.appendChild(newButtonDetails);
                //appending row to table
                loadDataTable.appendChild(newTableRow);
            }
        }
    });
}

function loadComments() {

    $.ajax({
        method: "GET",
        url: restServer,
        cache: false,
        data: {
            method: "queryComments",
            param: "",
        },
        dataType: "json",

        success: function (data) {
            //console.log(data);
            let loadComments = <HTMLTableElement> document.getElementById("loadComments");

            //remove Elements from table
            while (loadComments.lastChild) {
                loadComments.removeChild(loadComments.lastChild)
            }

            //Creating tds, a img for a single row | $val->id, $val->creator, $val->comment, $val->datePosted, $val->tAppointID);
            for (let i = 0; i < data.length; i++) {
                //row
                let newTableRow = <HTMLTableRowElement> document.createElement("tr");
                //id-col
                let newTableColID = <HTMLTableCellElement> document.createElement("td");
                newTableColID.textContent = data[i]["id"];
                //creator-col
                let newTableColCreator = <HTMLTableCellElement>  document.createElement("td");
                //creator-img
                let newUserImage = <HTMLImageElement> document.createElement("img");
                newUserImage.className = "rounded-circle me-1 me-md-2";
                newUserImage.setAttribute("width", "30");
                newUserImage.setAttribute("height", "30");
                newUserImage.setAttribute("src", "pages/assets/img/avatars/avatar5.jpeg");
                //appending img to creator col
                newTableColCreator.appendChild(newUserImage);
                newTableColCreator.appendChild(document.createTextNode(data[i]["creator"]));
                //commentText-col
                let newTableColCommentText = <HTMLTableCellElement>  document.createElement("td");
                newTableColCommentText.textContent = data[i]["comment"];
                //datePosted-col
                let newTableColDatePosted = <HTMLTableCellElement>  document.createElement("td");
                newTableColDatePosted.textContent = data[i]["datePosted"];
                //appending cols to row
                newTableRow.appendChild(newTableColID);
                newTableRow.appendChild(newTableColCreator);
                newTableRow.appendChild(newTableColCommentText);
                //appending row to table
                loadComments.appendChild(newTableRow);
            }
        }
    });
}

/*
*   Creates a new Appoint
 */
function createAppoint() {

    if(getUsername() != "") {

        let createAppointCreator = getUsername();
        let createAppointTitleInput = <HTMLInputElement> document.getElementById("createAppointTitleInput");
        let createAppointLocationInput = <HTMLInputElement> document.getElementById("createAppointLocationInput");
        let createAppointBeginDateInput = <HTMLInputElement> document.getElementById("createAppointBeginDateInput");
        let createAppointEndDateInput = <HTMLInputElement> document.getElementById("createAppointEndDateInput");
        let createAppointInfoInput = <HTMLInputElement> document.getElementById("createAppointInfoInput");

        let appointData = {id: " ", creator: createAppointCreator, title: createAppointTitleInput.value, locations: createAppointLocationInput.value, startDate: createAppointBeginDateInput.value, endDate: createAppointEndDateInput.value, info: createAppointInfoInput.value};

        console.log(JSON.stringify(appointData));

        $.ajax({
            method: "POST",
            url: restServer,
            cache: false,
            data: JSON.stringify(
                appointData
            ),
            dataType: "json",

            success: function (data) {
                console.log(data);
                alert("Success!");
                loadAppointsData();
            },

            error: function (request, status, error) {
                  alert(request.responseText);
            }
        });
    } else {
        alert("ERROR: Username bitte eingeben (oben rechts)!");
    }
}

/*
*   Creates a new Comment
 */
/*function createComment() {

    if(getUsername() != "") {

        let createCommentCreator = getUsername();
        let createCommentTitleInput = <HTMLInputElement> document.getElementById("createAppointTitleInput");
        let createCommentTextInput = <HTMLInputElement> document.getElementById("viewComment");

        let appointData = {id: " ", creator: createAppointCreator, title: createAppointTitleInput.value, locations: createAppointLocationInput.value, startDate: createAppointBeginDateInput.value, endDate: createAppointEndDateInput.value, info: createAppointInfoInput.value};

        console.log(JSON.stringify(appointData));

        $.ajax({
            method: "POST",
            url: restServer,
            cache: false,
            data: JSON.stringify(
                appointData
            ),
            dataType: "json",

            success: function (data) {
                console.log(data);
                alert("Success!");
                loadAppointsData();
            },

            error: function (request, status, error) {
                alert(request.responseText);
            }
        });
    } else {
        alert("ERROR: Username bitte eingeben (oben rechts)!");
    }
}*/