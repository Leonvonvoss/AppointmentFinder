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

    public function queryAppointsById($id)
    {
        $result = array();
        foreach ($this->queryAppoints() as $val) {
            if ($val[0]->id == $id) {
                array_push($result, $val);
            }
        }
        return $result;
    }

    public function queryPersonByName($name)
    {
        $result = array();
        foreach ($this->queryAppoints() as $val) {
            if ($val[0]->firstname == $name) {
                array_push($result, $val);
            }
        }
        return $result;
    }

    public function queryPersonByMail($mail)
    {
        $result = array();
        foreach ($this->queryAppoints() as $val) {
            if ($val[0]->email == $mail) {
                array_push($result, $val);
            }
        }
        return $result;
    }

    public function queryPersonByPhone($phone)
    {
        $result = array();
        foreach ($this->queryAppoints() as $val) {
            if ($val[0]->phone == $phone) {
                array_push($result, $val);
            }
        }
        return $result;
    }

    public function queryPersonByDept($dept)
    {
        $result = array();
        foreach ($this->queryAppoints() as $val) {
            if ($val->department == $dept) {
                array_push($result, $val);
            }
        }
        return $result;
    }

    private static function getDemoData()
    {

        $demoData = [
            new Person(1, "Jane", "Doe", "jane.doe@fhtw.at", 1234567, "Central IT"),
            new Person(2, "John", "Doe", "john.doe@fhtw.at", 34345654, "Help Desk"),
            new Person(3, "baby", "Doe", "baby.doe@fhtw.at", 54545455, "Management"),
            new Person(4, "Mike", "Smith", "mike.smith@fhtw.at", 343477778, "Faculty"),
        ];

        return $demoData;
    }
}
