<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$msg = $_POST['msg'];
$token = "5043698437:AAFWvCnFidR9PO9lplMpa-y8sWDKLnVx30k";
$chat_id = "-703645889";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email,
  'Сообщение:' => $msg
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thanks.html');
} else {
  echo "Error";
}
?>

