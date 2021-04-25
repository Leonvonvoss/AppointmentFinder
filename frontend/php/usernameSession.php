<?php
session_start(); //Start session

if(isset($_POST['inputUsername']) && !empty($_POST['inputUsername'])){
    $_SESSION['username'] = $_POST['inputUsername'];
} else if (isset($_SESSION['username']) && !empty($_SESSION['username'])) {
    $userLoggedIn = $_SESSION['username'];
}