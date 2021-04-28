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
    public $locations;
    public $info;

    /**
     * appointment constructor.
     * @param $id
     * @param $creator
     * @param $title
     * @param $locations
     * @param $info
     */
    public function __construct($id, $creator, $title, $locations, $info)
    {
        $this->id = $id;
        $this->creator = $creator;
        $this->title = $title;
        $this->locations = $locations;
        $this->info = $info;
    }

}