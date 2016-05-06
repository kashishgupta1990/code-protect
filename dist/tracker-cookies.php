<?php
include_once "proptigerApi.php";

/* GA Cookie Parser */
class GA_Parse {
	var $campaign_source; // Campaign Source
	var $campaign_name; // Campaign Name
	var $campaign_medium; // Campaign Medium
	var $campaign_content; // Campaign Content
	var $campaign_term; // Campaign Term
	var $first_visit; // Date of first visit
	var $previous_visit; // Date of previous visit
	var $current_visit_started; // Current visit started at
	var $times_visited; // Times visited
	var $pages_viewed; // Pages viewed in current session
	function __construct($cookie) {
		// If we have the cookies we can go ahead and parse them.
		if (isset ( $cookie ["__utma"] ) and isset ( $cookie ["__utmz"] )) {
			$this->cookie = $cookie;
			$this->ParseCookies ();
		}
	}
	function ParseCookies() {
		// Parse __utmz cookie
		list ( $domain_hash, $timestamp, $session_number, $campaign_numer, $campaign_data ) = explode ( '.', $this->cookie ["__utmz"], 5 );
		
		// Parse the campaign data
		$campaign_data = parse_str ( strtr ( $campaign_data, "|", "&" ) );
		
		$this->campaign_source = $utmcsr;
		$this->campaign_name = $utmccn;
		$this->campaign_medium = $utmcmd;
		if (isset ( $utmctr ))
			$this->campaign_term = $utmctr;
		if (isset ( $utmcct ))
			$this->campaign_content = $utmcct;
			
			// You should tag you campaigns manually to have a full view
			// of your adwords campaigns data.
			// The same happens with Urchin, tag manually to have your campaign data parsed properly.
		
		if (isset ( $utmgclid )) {
			$this->campaign_source = "google";
			$this->campaign_medium = "cpc";
			$this->campaign_term = $utmctr;
		}
		
		// Parse the __utma Cookie
		list ( $domain_hash, $random_id, $time_initial_visit, $time_beginning_previous_visit, $time_beginning_current_visit, $session_counter ) = explode ( '.', $this->cookie ["__utma"] );
		
		$this->first_visit = date ( "Y-m-d H:i:s", $time_initial_visit );
		$this->previous_visit = date ( "Y-m-d H:i:s", $time_beginning_previous_visit );
		$this->current_visit_started = date ( "Y-m-d H:i:s", $time_beginning_current_visit );
		$this->times_visited = $session_counter;
		$this->randomid = $random_id;
		// Parse the __utmb Cookie
		
		list ( $domain_hash, $pages_viewed, $garbage, $time_beginning_current_session ) = explode ( '.', $this->cookie ["__utmb"] );
		$this->pages_viewed = $pages_viewed;
		
		// End ParseCookies
	}
	
	// End GA_Parse
}

$requestParameters = http_build_query ( $_GET );
$apiUrl = API_URL . "app/v1/cookies?" . $requestParameters;
$cookie = array ();
if ( $_SERVER[ 'HTTP_REFERER' ] && !preg_match("/^https?:\/\/www\.proptiger\.com\//g", $_SERVER[ 'HTTP_REFERER' ] ) ) {
	$_COOKIE[ 'REFERER' ] = $_SERVER[ 'HTTP_REFERER' ];
}
foreach ( $_COOKIE as $key => $value ) {
	$value = urlencode ( $value );
	$cookie [] = "{$key}={$value}";
}

$cookie = implode ( '; ', $cookie );

$referer = $_SERVER[ 'HTTP_HOST' ] . ( $_SERVER[ 'REQUEST_URI' ] ? $_SERVER[ 'REQUEST_URI' ] : '' );
$ip = $_SERVER ["REMOTE_ADDR"];

$headers = array (
		"Content-Type: application/json",
		"Cookie: $cookie",
		"Referer: $referer",
		"IP: $ip" 
);

$ch = curl_init ();
curl_setopt ( $ch, CURLOPT_URL, $apiUrl );
curl_setopt ( $ch, CURLOPT_HEADER, true );
curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, true );
curl_setopt ( $ch, CURLOPT_HTTPHEADER, $headers );


$result = curl_exec ( $ch );

// Read coookie from API reponse
$headerArray = explode ( "\n", trim ( $result ) );
foreach ( $headerArray as $key => $val ) {
	if (strpos ( $val, 'Set-Cookie' ) !== false) {
		$val = str_replace ( 'Set-Cookie: ', '', $val );
		$val = explode ( ";", trim ( $val ) );
		$i = 0;
		
		foreach ( $val as $a => $b ) {
			$b = explode ( "=", trim ( $b ), 2 );
			if ($i == 0) {
				$cookieName = trim($b [0], '"');
				$cookieValue = trim($b [1], '"');				
			}
			if ($b [0] == 'Expires') {
				$expiry = $b [1];
			}
			$i ++;
		}
		
		$expiryTime = strtotime(urldecode(trim($expiry)));
		// Setting Cookie
		setcookie($cookieName, $cookieValue, $expiryTime,'/');
	}
}

curl_close ( $ch );

?>