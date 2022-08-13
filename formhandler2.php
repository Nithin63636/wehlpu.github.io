<?php
$name = $_POST['name'];

$visitor_email = $_POST['email'];

$subject = $_POST['subject'];

$message = $_POST['message'];

$email_from = 'cat-tinder@gmail.com';

$email_subject =' NEW message from cat-tinder';

$email_body =" User Name: $name.\n ".
            " User Email: $visitor_email .\n ".
            " Subject: $subject .\n ".
            " User message: $message .\n ";

$to   = 'naanunithi@gmail.com';

$headers ="From : $email_from \r\n";

$headers .= "Reply-to: $visitor_email   \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: web1-contact.html");
?>