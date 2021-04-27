<?php
class Vote {
    public $id;
    public $voterName;
    public $tPossibleDatesID;

    /**
     * vote constructor.
     * @param $id
     * @param $voterName
     * @param $tPossibleDatesID
     */
    public function __construct($id, $voterName, $tPossibleDatesID)
    {
        $this->id = $id;
        $this->voterName = $voterName;
        $this->tPossibleDatesID = $tPossibleDatesID;
    }

}