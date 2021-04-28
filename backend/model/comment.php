<?php
class Comment {
    public $id;
    public $creator;
    public $comment;
    public $datePosted;
    public $tAppointID;

    /**
     * comment constructor.
     * @param $id
     * @param $creator;
     * @param $comment
     * @param $datePosted
     * @param $tAppointID
     */
    public function __construct($id, $creator, $comment, $datePosted, $tAppointID)
    {
        $this->id = $id;
        $this->creator = $creator;
        $this->comment = $comment;
        $this->datePosted = $datePosted;
        $this->tAppointID = $tAppointID;
    }
}