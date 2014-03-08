<?php
function wget($url, $timeout = 30) {
	$h = curl_init();
	curl_setopt($h, CURLOPT_ENCODING, "UTF-8" );
	curl_setopt($h, CURLOPT_URL, $url);
	curl_setopt($h, CURLOPT_HEADER, false);
	curl_setopt($h, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($h, CURLOPT_TIMEOUT, $timeout);
	$result = curl_exec($h);
	curl_close($h);
	return $result;
}

// header('content-type: text/html; charset="utf-8"');
// print mb_convert_encoding($str, 'utf-8', 'euc-jp');

// $url = 'http://www.google.co.jp/';

// $url = 'http://shopping.yahooapis.jp/ShoppingWebService/V1/itemSearch?appid=dj0zaiZpPW1sYmViYjVyakF3YSZzPWNvbnN1bWVyc2VjcmV0Jng9YWU-&category_id=635&sort=-sold&query=HDMI';
$url = 'http://shopping.yahoo.co.jp/review/item/list?store_id=sanwadirect&page_key=500-hdmi001-2';

// echo mb_convert_encoding(wget($url), 'utf-8', 'shift-jis');
echo wget($url);

?>