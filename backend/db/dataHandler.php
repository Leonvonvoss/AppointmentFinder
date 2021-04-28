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
        $result = array();
        foreach ($this->getAllData() as $val) {
            if ($val != null) {
                $appoint = new Appointment($val->id, $val->creator, $val->title, $val->locations, $val->info);
                array_push($result, $appoint);
            }
        }
        return $result;
    }

    public function queryAppointById($id)
    {
        $result = array();
        foreach ($this->queryAppoints() as $val) {
            if ($val->id == $id) {
                $appoint = new Appointment($val->id, $val->creator, $val->title, $val->locations, $val->info);
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
                $appoint = new Appointment($val->id, $val->creator, $val->title, $val->locations, $val->info);
                array_push($result, $appoint);
            }
        }
        return $result;
    }

    public function  queryAppointByTitle($title)
    {
        $result = array();
        foreach ($this->queryAppoints() as $val) {
            if ($val->title == $title) {
                $appoint = new Appointment($val->id, $val->creator, $val->title, $val->locations, $val->info);
                array_push($result, $appoint);
            }
        }
        return $result;
    }

    public function queryAppointByLocation($location)
    {
        $result = array();
        foreach ($this->queryAppoints() as $val) {
            if ($val->location == $location) {
                $appoint = new Appointment($val->id, $val->creator, $val->title, $val->locations, $val->info);
                array_push($result, $appoint);
            }
        }
        return $result;
    }

    public function queryAppointByInfo($info)
    {
        $result = array();
        foreach ($this->queryAppoints() as $val) {
            if ($val->info == $info) {
                $appoint = new Appointment($val->id, $val->creator, $val->title, $val->locations, $val->info);
                array_push($result, $appoint);
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

    public function queryComments()
    {
        $result = array();
        foreach ($this->getAllData() as $val) {
                $comment = new Comment($val->id, $val->creator, $val->comment, $val->datePosted, $val->tAppointID);
                array_push($result, $comment);
        }
        return $result;
    }

    public function queryCommentsbyAppointId($id)
    {
        $result = array();
        foreach ($this->getAllData() as $val) {
            if ($val->tappointid == $id) {
                $comment = new Comment($val->id, $val->creator, $val->comment, $val->datePosted, $val->tAppointID);
                array_push($result, $comment);
            }
        }
        return $result;
    }

    /*
   * All functions to POST
   */
    public function createAppoint($appointData)
    {
        $this->db = new DB();

        $this->db->query("INSERT INTO tappoint (creator, title, locations, info ) VALUES(:creator, :title, :locations, :info)");

        //Bind values
        $this->db->bind(':creator',  $appointData[1]);
        $this->db->bind(':title',  $appointData[2]);
        $this->db->bind(':locations',  $appointData[3]);
        $this->db->bind(':info', $appointData[4]);

        //Execute function
        if ($this->db->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function createComment($comment)
    {
        $this->db = new DB();

        $this->db->query("INSERT INTO tcomments (creator, comment, datePosted, tappointid) VALUES(:creator, :comment, :datePosted, :tappointid)");
        //Bind values
        $this->db->bind(':creator', $comment['creator']);
        $this->db->bind(':comment', $comment['comment']);
        $this->db->bind(':datePosted', $comment['datePosted']);
        $this->db->bind(':tappointid', $comment['tappointid']);

        //Execute function
        if ($this->db->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function createVote($vote)
    {
        $this->db = new DB();

        $this->db->query("INSERT INTO tvote (voterName, tpossibledateID) VALUES(:voterName, :tpossibledateID)");
        //Bind values
        $this->db->bind(':voterName', $vote['voterName']);
        $this->db->bind(':tpossibledateID', $vote['tpossibledateID']);

        //Execute function
        if ($this->db->execute()) {
            return true;
        } else {
            return false;
        }
    }
}
