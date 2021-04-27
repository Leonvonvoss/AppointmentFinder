<?php
include("db/dataHandler.php");

class SimpleLogic
{

    private $dh;

    function __construct()
    {
        $this->dh = new DataHandler();
    }

    function handleRequest($method, $param)
    {
        switch ($method) {

            case "queryAppoints":
                $res = $this->dh->queryAppoints();
                break;

            case "queryAppointById":
                $res = $this->dh->queryAppointById($param);
                break;

            case "queryAppointsByCreator":
                $res = $this->dh->queryAppointsByCreator($param);
                break;

            case "queryAppointByTitle":
                $res = $this->dh->queryAppointByTitle($param);
                break;

            case "queryAppointByLocation":
                $res = $this->dh->queryAppointByLocation($param);
                break;

            case "queryAppointByInfo":
                $res = $this->dh->queryAppointByInfo($param);
                break;

            case "createAppoint":
                $res = $this->dh->createAppoint($param);
                break;

            /*case "saveChanges":
                $res = $this->dh->saveChanges($param);
                break;*/

            default:
                $res = null;
                break;
        }
        return $res;
    }
}
