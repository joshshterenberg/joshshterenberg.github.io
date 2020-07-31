<?php 
function IsInjected($str) { //Injection protection
    $injections = array('(\n+)',
           '(\r+)',
           '(\t+)',
           '(%0A+)',
           '(%0D+)',
           '(%08+)',
           '(%09+)'
           );
               
    $inject = join('|', $injections);
    $inject = "/$inject/i";
    
    if (preg_match($inject,$str)) {
      return true;
    } else {
      return false;
    }
}

if (isset($_POST['submit'])){ //Main, when submit is pressed
    
    $to = "olmosensemble@gmail.com";
    
    $from = $_POST['email']; // this is the sender's info from the form (names on contact.html)
    $name = $_POST['full_name'];
    $subject = $_POST['emailsubject'];
    $message = $name . " sent you the following message from the online form on olmosensemble.com:" . "\n\n" . $_POST['message'];
    $headers = "From:" . $from;
    
    if (IsInjected($from)) { //Bad value protection
        echo "Bad email value!";
        exit;
    } else if (empty($name) || empty($from)) {
        echo "Name and email are mandatory!";
        exit;
    }
    
    $subject2 = "Copy of Your Form Submission"; //info for user copy
    $message2 = "Here is a copy of your message, " . $name . "\n\n" . $_POST['message'];
    $headers2 = "From:" . $to;
    
    
    if (mail($to,$subject,$message,$headers)) {
        echo "Mail Sent. Thank you " . $full_name . ", we will contact you shortly. If you do not get an email response within 24 hours, please call (210) 269-1925."; //success form
        mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    } else {
        echo "Email not sent."
    }
    
    
    
    
} else {
    echo "Error: you need to submit the form!";
}
?>