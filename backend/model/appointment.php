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

    /**
     * appointment constructor.
     * @param $id
     * @param $creator
     * @param $title
     * @param $location
     * @param $info
     */
    public function __construct($id, $creator, $title, $location, $info)
    {
        $this->id = $id;
        $this->creator = $creator;
        $this->title = $title;
        $this->location = $location;
        $this->info = $info;
    }

}