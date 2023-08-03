<?php
   header('Location: index.php');
   
   $to = "23432-az@mail.ru";
   $userName = clear_data(@$_POST['userName']);
   $number = clear_data(@$_POST['number']);
   $text = clear_data(@$_POST['text']);

   $from = "exaple@mail.com";
   $subject = "Тема сообщения";

   $subject = "=?utf-8?B?".base64_encode($subject)."?=";
   $headers = "From: $from\r\nReply-to: $from\r\nContent-type:text/plain; charset=utf-8\r\n"; 
    
    $message = 'Имя: '. $userName."\n" . 'Номер: ' . $number."\n" . 'Сообщение: ' . $text."\n";
    
    function clear_data($val) {
        $val = trim((string)$val);
        $val = stripslashes($val);
        $val = htmlspecialchars($val);
        return $val;
    }
    
   mail($to, $subject, $message, $headers);

?>