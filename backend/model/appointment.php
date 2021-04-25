<?php
/**
 * Created by PhpStorm.
 * User: leonv
 * Date: 24.04.2021
 * Time: 19:06
 */

class Appointment
{
    public $id;
    public $creator;
    public $title;
    public $location;
    public $info;
    public $startDate;
    public $endDate;

    /**
     * appointment constructor.
     * @param $id
     * @param $creator
     * @param $title
     * @param $location
     * @param $info
     * @param $startDate
     * @param $endDate
     */
    public function __construct($id, $creator, $title, $location, $info, $startDate, $endDate)
    {
        $this->id = $id;
        $this->$creator = $creator;
        $this->title = $title;
        $this->location = $location;
        $this->info = $info;
        $this->startDate = $startDate;
        $this->endDate = $endDate;
    }

}