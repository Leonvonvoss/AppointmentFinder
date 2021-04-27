// Settings:
let restServer: string = "http://localhost:80/webtechnologien/SM2021/AppointmentFinderProject/AppointmentFinder/backend/serviceHandler.php";

/*$.getJSON(restServer,
    { 'method': 'queryPersonByDept', 'param': 'Faculty' },
    function (data: object) {
        $('#mainpart').text(JSON.stringify(data));
    });*/

function loadData() {

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
                newUserImage.className = "rounded-circle mx-1 mx-md-2";
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
                newTableColLocation.textContent = data[i]["location"];
                //info-col
                let newTableColInfo = <HTMLTableCellElement>  document.createElement("td");
                newTableColInfo.textContent = data[i]["info"];
                //detailsButton-col
                let newButtonDetails = <HTMLButtonElement>  document.createElement("button");
                newButtonDetails.className = "btn btn-primary btn-sm my-1";
                newButtonDetails.setAttribute("data-bs-toggle", "modal");
                newButtonDetails.setAttribute("data-bs-target", "#viewAppointDetailsModal");
                newButtonDetails.setAttribute("onclick", "viewAppoint(" + data[i]["id"] + ")");
                newButtonDetails.textContent = "Details";
                //icon for button
                let newIconDetailsButton = document.createElement("i");
                newIconDetailsButton.className = "fas fa-download fa-sm text-white-50 ms-1";
                //appending icon to button
                newButtonDetails.appendChild(newIconDetailsButton);
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

            //$('#loadData').text(JSON.stringify(data));
        }

    });
}
/*
function loadSelectData() {

    $.ajax({
        method: "GET",
        url: restServer,
        cache: false,
        data: {
            method: "",
            param: "",
        },
        dataType: "json",

        success: function (data) {
            let $quellZeitzone = $('#quellZeitzone');
            $quellZeitzone.empty();
            for (let i = 0; i < data.length; i++) {
                $quellZeitzone.append('<option value=' + data[i] + '>' + data[i] + '</option>');
            }

            let $zielZeitzone = $('#zielZeitzone');
            $zielZeitzone.empty();
            for (let i = 0; i < data.length; i++) {
                $zielZeitzone.append('<option value=' + data[i] + '>' + data[i] + '</option>');
            }

        }

    });
}

function convertData() {

    let datetimeLocal = $('#datetimeLocal').val();
    let zielZeitzone = $('#zielZeitzone').val();
    let quellZeitzone = $('#quellZeitzone').val();

    //$.post(restServer, JSON.stringify({ date: datetimeLocal, tzsource: quellZeitzone, tztarget: zielZeitzone })).then(function (response) { $('#result').text(JSON.stringify(response)); });

    $.ajax({
        method: "POST",
        url: restServer,
        cache: false,
        data: JSON.stringify({
            date: datetimeLocal,
            tzsource: quellZeitzone,
            tztarget: zielZeitzone,
        }),
        dataType: "json",

    <tr>
    <td>1</td>
    <td><img class="rounded-circle me-2" width="30" height="30" src="pages/assets/img/avatars/avatar5.jpeg">Leon</td>
        <td>Coronaparty</td>
        <td>At my hood</td>
    <td>Come all together!</td>
    <td>23.04.2021 15:00:00</td>
    <td>24.04.2021 15:00:00</td>
    <td>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#viewAppointDetailsModal" onclick="viewAppoint(1)">
    <i class="fas fa-download fa-sm text-white-50"></i>&nbsp; Details
    </button>
    </td>
    </tr>

        success: function (data) {
            $('#result').text(JSON.stringify(data));
        }

    });
}
*/