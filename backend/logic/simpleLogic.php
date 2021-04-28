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

            case "queryCommentsbyAppointId":
                $res = $this->dh->queryCommentsbyAppointId($param);
                break;

            case "queryComments":
                $res = $this->dh->queryComments();
                break;

            case "createComment":
                $res = $this->dh->createComment($param);
                break;

            case "createVote":
                $res = $this->dh->createVote($param);
                break;

            default:
                $res = null;
                break;
        }
        return $res;
    }
}
