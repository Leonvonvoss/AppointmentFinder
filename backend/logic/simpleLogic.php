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

            case "queryAppointByStartDate":
                $res = $this->dh->queryAppointByStartDate($param);
                break;

            case "queryAppointsASCStartDate":
                $res = $this->dh->queryAppointsASCStartDate();
                break;

            default:
                $res = null;
                break;
        }
        return $res;
    }
}
