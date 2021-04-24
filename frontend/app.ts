// Settings:
let restServer: string = "http://localhost:80/webtechnologien/SM2021/1-Test/backend/serviceHandler.php";

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
            method: "queryPersons",
            param: "",
        },
        dataType: "json",

        success: function (data: object) {
            $('#mainpart').text(JSON.stringify(data));
        }

    });
}

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
            for (var i = 0; i < data.length; i++) {
                $quellZeitzone.append('<option value=' + data[i] + '>' + data[i] + '</option>');
            }

            let $zielZeitzone = $('#zielZeitzone');
            $zielZeitzone.empty();
            for (var i = 0; i < data.length; i++) {
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

        success: function (data) {
            $('#result').text(JSON.stringify(data));
        }

    });
}