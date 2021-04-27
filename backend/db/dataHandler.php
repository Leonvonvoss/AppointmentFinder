<?php
include("./model/appointment.php");
include("./model/comment.php");
include("./model/possibleDate.php");
include("./model/vote.php");
include("DB.php");

class DataHandler
{
    private $db;

    /*
     * All functions to GET
     */
    public function queryAppoints()
    {
        $res =  $this->getAllData();
        return $res;
    }

    public function queryAppointById($id)
    {
        $result = array();
        foreach ($this->queryAppoints() as $val) {
            if ($val->id == $id) {
                $appoint = new Appointment($val->id, $val->creator, $val->title, $val->location, $val->info);
                array_push($result, $appoint);
            }
        }
        return $result;
    }

    public function queryAppointsByCreator($creator)
    {
        $result = array();
        foreach ($this->queryAppoints() as $val) {
            if ($val->creator == $creator) {
                array_push($result, $val);
            }
        }
        return $result;
    }

    public function  queryAppointByTitle($title)
    {
        $result = array();
        foreach ($this->queryAppoints() as $val) {
            if ($val->title == $title) {
                array_push($result, $val);
            }
        }
        return $result;
    }

    public function queryAppointByLocation($location)
    {
        $result = array();
        foreach ($this->queryAppoints() as $val) {
            if ($val->location == $location) {
                array_push($result, $val);
            }
        }
        return $result;
    }

    public function queryAppointByInfo($info)
    {
        $result = array();
        foreach ($this->queryAppoints() as $val) {
            if ($val->info == $info) {
                array_push($result, $val);
            }
        }
        return $result;
    }

    private function getAllData(){
        $this->db = new DB();

        $this->db->query('SELECT * FROM tappoint;');
        $this->db->execute();
        $allData = $this->db->resultSet();

        return $allData;
    }

    private static function getDemoData()
    {
        $demoData = [
            new Appointment(1, "Leon","Coronaparty", "At my hood", "Come all together!"),
            new Appointment(2, "Lanre","Movie night", "At FH-Technikum", "Netflix!!!"),
            new Appointment(3, "Dave","Cooking dinner", "In the kitchen", "Awesome food! Bring your glass with you!"),
            new Appointment(4, "Anna","Birthday", "On the rooftop", "Musik, alkohol and fun!"),
        ];
        return $demoData;
    }

    /*
    * All functions to POST
    */
    public function createAppoint($appoint)
    {
        $this->db = new DB();

        $this->db->query("INSERT INTO tappoint VALUES()");
        $this->db->execute();
        $allData = $this->db->resultSet();

        return $allData;
    }
}
