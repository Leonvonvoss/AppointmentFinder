<?php
include("./model/person.php");
include("./model/appointment.php");
class DataHandler
{

    public function queryAppoints()
    {
        $res =  $this->getDemoData();
        return $res;
    }

    public function queryAppointById($id)
    {
        $result = array();
        foreach ($this->queryAppoints() as $val) {
            if ($val[0]->id == $id) {
                array_push($result, $val);
            }
        }
        return $result;
    }

    public function queryAppointsByCreator($creator)
    {
        $result = array();
        foreach ($this->queryAppoints() as $val) {
            if ($val[0]->creator == $creator) {
                array_push($result, $val);
            }
        }
        return $result;
    }

    public function  queryAppointByTitle($title)
    {
        $result = array();
        foreach ($this->queryAppoints() as $val) {
            if ($val[0]->title == $title) {
                array_push($result, $val);
            }
        }
        return $result;
    }

    public function queryAppointByLocation($location)
    {
        $result = array();
        foreach ($this->queryAppoints() as $val) {
            if ($val[0]->location == $location) {
                array_push($result, $val);
            }
        }
        return $result;
    }

    public function queryAppointByInfo($info)
    {
        $result = array();
        foreach ($this->queryAppoints() as $val) {
            if ($val[0]->info == $info) {
                array_push($result, $val);
            }
        }
        return $result;
    }

    public function queryAppointByStartDate($startDate)
    {
        $result = array();
        foreach ($this->queryAppoints() as $val) {
            if ($val[0]->startDate == $startDate) {
                array_push($result, $val);
            }
        }
        return $result;
    }

    /*
     * Need to be fixed
     */
    public function queryAppointsASCStartDate()
    {
        $result = array();
        foreach ($this->queryAppoints() as $val) {
            if ($val[0]->startDate != "") {
                array_push($result, $val);
            }
        }

        function cb($a, $b) {
            return strtotime($a->startDate) - strtotime($b->startDate);
        }
        usort($result, 'cb');

        return $result;
    }

    private static function getDemoData()
    {
        $demoData = [
            new Appointment(1, "Leon","Coronaparty", "At my hood", "Come all together!", "23.04.2021 15:00:00", "24.04.2021 15:00:00"),
            new Appointment(2, "Lanre","Movie night", "At FH-Technikum", "Netflix!!!", "25.04.2021 15:00:00", "26.04.2021 15:00:00"),
            new Appointment(3, "Dave","Cooking dinner", "In the kitchen", "Awesome food! Bring your glass with you!", "27.04.2021 15:00:00", "28.04.2021 15:00:00"),
            new Appointment(4, "Anna","Birthday", "On the rooftop", "Musik, alkohol and fun!", "29.04.2021 15:00:00", "30.04.2021 15:00:00"),
        ];
        return $demoData;
    }
}
