<?php
session_start();
// unset all cookies
if (isset($_SERVER['HTTP_COOKIE'])) {
    $cookies = explode(';', $_SERVER['HTTP_COOKIE']);
    foreach($cookies as $cookie) {
        $parts = explode('=', $cookie);
        $name = trim($parts[0]);
        setcookie($name, '', time()-1000);
        setcookie($name, '', time()-1000, '/');
    }
}
// set cookie for testing purpose
setcookie("TESTING_USER", '1', time()+3600*24*365*10, '/');    //set a long time for never expire cookie
?>

