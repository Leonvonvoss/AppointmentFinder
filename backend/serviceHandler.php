<?php
include("logic/simpleLogic.php");

//if method != NULL -> method = get[method] else ""
$method = isset($_GET["method"]) ? $_GET["method"] : "";
$param = isset($_GET["param"]) ? $_GET["param"] : "";


$logic = new SimpleLogic();
$result = $logic->handleRequest($method, $param);
if ($result == null) {
    response("GET", 400, null);
} else {
    response("GET", 200, $result);
}


function response($method, $httpStatus, $data)
{
    header('Content-Type: application/json');
    switch ($method) {
        case "GET":
            http_response_code($httpStatus);
            echo (json_encode($data));
            break;
        default:
            http_response_code(405);
            echo ("Method not supported yet!");
    }
}
