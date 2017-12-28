<?php
    $Fname = $_POST['First-Name'];
    $Lname = $_POST['Last-Name'];
    $email = $_POST['Email'];
    $sub= $_POST['Subject'];
    $message = $_POST['comment'];
    $to = 'diedrickng@gmail.com';


    $body = "From: $Fname\n E-Mail: $email\n Message:\n $message";

    if ($_POST['submit']) {
        if (mailto ($to, $subject, $body)) {
	    echo '<p>Your message has been sent!</p>';
	}

?>
