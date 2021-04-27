<?php
class Comment {
    public $id;
    public $comment;
    public $datePosted;
    public $tAppointID;

    /**
     * comment constructor.
     * @param $id
     * @param $comment
     * @param $datePosted
     * @param $tAppointID
     */
    public function __construct($id, $comment, $datePosted, $tAppointID)
    {
        $this->id = $id;
        $this->comment = $comment;
        $this->datePosted = $datePosted;
        $this->tAppointID = $tAppointID;
    }
}