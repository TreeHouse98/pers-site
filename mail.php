<?php

$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;

if ( $method === 'POST' ) {

	$name = trim($_POST["name"]);
	$email  = trim($_POST["email"]);
	$phone = trim($_POST["phone-number"]);
	$msg = trim($_POST["message"]);

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "name" && $key != "email" && $key != "phome-number" && $key != "message" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
	}
}
} else if ( $method === 'GET' ) {

    $name = trim($_POST["name"]);
    $email  = trim($_POST["email"]);
    $phone = trim($_POST["phone-number"]);
    $msg = trim($_POST["message"]);

	foreach ( $_GET as $key => $value ) {
		if ( $value != "" && $key != "name" && $key != "email" && $key != "phome-number" && $key != "message" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
	}
}
}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($msg).' <'.$email.'>' . PHP_EOL .
'Reply-To: '.$email.'' . PHP_EOL;

mail($email, adopt($msg), $message, $headers);