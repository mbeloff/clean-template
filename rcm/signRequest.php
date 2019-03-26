<?php
	$sharedSecret = "{sharedsecret}";
	$post = file_get_contents('php://input');
	$out=hash_hmac("sha256", $post, $sharedSecret);
	
	header('Content-Type: application/json');
	echo '{"signature":"'.$out.'"}';
?>