// Settings:
var restServer = "http://localhost:80/webtechnologien/SM2021/AppointmentFinderProject/AppointmentFinder/backend/serviceHandler.php";
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
            console.log(data);
            var loadDataTable = document.getElementById("loadData");
            //remove Elements from table
            while (loadDataTable.lastChild) {
                loadDataTable.removeChild(loadDataTable.lastChild);
            }
            //Creating tds, a img and a button for a single row
            for (var i = 0; i < data.length; i++) {
                //row
                var newTableRow = document.createElement("tr");
                //id-col
                var newTableColID = document.createElement("td");
                newTableColID.textContent = data[i]["id"];
                //creator-col
                var newTableColCreator = document.createElement("td");
                //creator-img
                var newUserImage = document.createElement("img");
                newUserImage.className = "rounded-circle me-1 me-md-2";
                newUserImage.setAttribute("width", "30");
                newUserImage.setAttribute("height", "30");
                newUserImage.setAttribute("src", "pages/assets/img/avatars/avatar5.jpeg");
                //appending img to creator col
                newTableColCreator.appendChild(newUserImage);
                newTableColCreator.appendChild(document.createTextNode(data[i]["creator"]));
                //title-col
                var newTableColTitle = document.createElement("td");
                newTableColTitle.textContent = data[i]["title"];
                //location-col
                var newTableColLocation = document.createElement("td");
                newTableColLocation.textContent = data[i]["location"];
                //info-col
                var newTableColInfo = document.createElement("td");
                newTableColInfo.textContent = data[i]["info"];
                //icon for button
                var newIconDetailsButton = document.createElement("i");
                newIconDetailsButton.className = "fas fa-download fa-sm text-white-50 me-1";
                //detailsButton-col
                var newButtonDetails = document.createElement("button");
                newButtonDetails.className = "btn btn-primary btn-sm my-1 appointTableBtn";
                newButtonDetails.setAttribute("data-bs-toggle", "modal");
                newButtonDetails.setAttribute("data-bs-target", "#viewAppointDetailsModal");
                newButtonDetails.setAttribute("onclick", "viewAppoint(" + data[i]["id"] + ")");
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
/*
*   Creates a new Appoint
 */
function createAppoint() {
    $.ajax({
        method: "POST",
        url: restServer,
        cache: false,
        data: JSON.stringify({
            method: "createAppoint",
            param: "",
        }),
        dataType: "json",
        success: function (data) {
            $('#result').text(JSON.stringify(data));
        }
    });
}
/*
*   Saves changes -> votes and comments
 */
function saveChanges() {
    $.ajax({
        method: "POST",
        url: restServer,
        cache: false,
        data: JSON.stringify({
            method: "saveChanges",
            param: "",
        }),
        dataType: "json",
        success: function (data) {
            $('#result').text(JSON.stringify(data));
        }
    });
}
