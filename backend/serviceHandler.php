<?php
include("logic/simpleLogic.php");

//if method != NULL -> method = get|post|""[method] else ""
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $method = isset($_GET["method"]) ? $_GET["method"] : "";
    $param = isset($_GET["param"]) ? $_GET["param"] : "";
} elseif ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents('php://input'));
    $param = array();
    $param = [$data->id, $data->creator, $data->title, $data->locations, $data->info];
    $method = "createAppoint";
} else {
    $method = "";
    $param = "";
}

$logic = new SimpleLogic();

$result = $logic->handleRequest($method, $param);

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if ($result == null) {
        response_method("GET", 400, null);
    } else {
        response_method("GET", 200, $result);
    }
} elseif ($_SERVER["REQUEST_METHOD"] == "POST") {
    if ($result == null) {
        response_method("POST", 400, null);
    } else {
        response_method("POST", 200, $result);
    }
} else {
    if ($result == null) {
        response_method("", 400, null);
    } else {
        response_method("", 200, $result);
    }
}

function response_method($method, $httpStatus, $data)
{
    header('Content-Type: application/json');
    switch ($method) {
        case "GET":
            http_response_code($httpStatus);
            echo(json_encode($data));
            break;

        case "POST":
            http_response_code($httpStatus);
            echo(json_encode($data));
            break;

        default:
            http_response_code(405);
            echo("Method not supported yet!");
    }
}
