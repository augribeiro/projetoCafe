<?php
	$json = file_get_contents('php://input');
	file_put_contents("bd.json", json_encode(json_decode($json), JSON_PRETTY_PRINT));

	echo json_encode(array(
		"success" => true
	));
?>