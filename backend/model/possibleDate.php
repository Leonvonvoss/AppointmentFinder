<?php
class PossibleDate {
    public $id;
    public $startDate;
    public $endDate;
    public $tAppointID;

    /**
     * possibleDate constructor.
     * @param $id
     * @param $startDate
     * @param $endDate
     * @param $tAppointID
     */
    public function __construct($id, $startDate, $endDate, $tAppointID)
    {
        $this->id = $id;
        $this->startDate = $startDate;
        $this->endDate = $endDate;
        $this->appointID = $tAppointID;
    }
}