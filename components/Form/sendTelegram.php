<?php

$data = json_decode($_POST['data'], true);

$token = "5043698437:AAFWvCnFidR9PO9lplMpa-y8sWDKLnVx30k";
$chat_id = "-703645889";
$arr = array(
  'Имя пользователя: ' => $data['name'],
  'Телефон: ' => $data['tel'],
  'Email' => $data['email'],
  'Сообщение:' => $data['message']
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if (!$sendToTelegram) {
  echo "Error";
}
?>

