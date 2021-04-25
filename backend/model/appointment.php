<?php
/**
 * Created by PhpStorm.
 * User: leonv
 * Date: 24.04.2021
 * Time: 19:06
 */

class appointment
{
    public $id;
    public $titel;
    public $location;
    public $info;
    public $startDate;
    public $endDate;

    /**
     * appointment constructor.
     * @param $id
     * @param $titel
     * @param $location
     * @param $info
     * @param $startDate
     * @param $endDate
     */
    public function __construct($id, $titel, $location, $info, $startDate, $endDate)
    {
        $this->id = setId($id);
        $this->titel = setTitel($titel);
        $this->location = setLocation($location);
        $this->info = setInfo($info);
        $this->startDate = $this->setStartDate($startDate);
        $this->endDate = $this->setEndDate($endDate);
    }

}