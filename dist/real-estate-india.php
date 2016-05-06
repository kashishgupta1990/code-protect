<?php

require_once dirname(__FILE__)."/send_mail_amazon.php";
$mail_content = nl2br(print_r($_SERVER,true));
if ( $_SERVER[ 'HTTP_HOST' ] == 'beta.proptiger-ws.com' || $_SERVER[ 'HTTP_HOST' ] == 'www.proptiger.com' ) {
    sendMailFromAmazon("eng-leads@proptiger.com","Crawl Page Hit".$_SERVER['HTTP_USER_AGENT'], $mail_content,"PropTiger <no-reply@proptiger.com>","devops@proptiger.com");
}
$str = <<<EOD
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Real Estate India</title>
        <link rel="stylesheet" href="/styles/css/style.css">
        <style type="text/css">
            ::-moz-selection {
                background: #b3d4fc;
                text-shadow: none;
            }

            ::selection {
                background: #b3d4fc;
                text-shadow: none;
            }

            html {
                padding: 30px 10px;
                font-size: 20px;
                line-height: 1.4;
                color: #737373;
                background: #f0f0f0;
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
            }

            html,
            input {
                font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            }

            body {
                max-width: 800px;
                _width: 800px;
                padding: 30px 80px 50px;
                border: 1px solid #b3b3b3;
                border-radius: 4px;
                margin: 0 auto;
                box-shadow: 0 1px 10px #a7a7a7, inset 0 1px 0 #fff;
                background: #fcfcfc;
            }

            h1 {
                margin: 0 10px;
                font-size: 50px;
                text-align: center;
            }

            h1 span {
                color: #bbb;
            }

        </style>
    </head>
    <body>
            <h1>Real Estate India</h1>
        <div class="page-footer">
                
            <strong>Corporate Links</strong>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/aboutus">About Us</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/blog">Our Blog</a></li>
                <li><a href="/contactus">Contact Us</a></li>
                <li><a href="/disclaimer">Disclaimer</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
        
            <strong>Property in India</strong>
            <ul>
                <li><a href="/projects-in-gurgaon">Property in Gurgaon</a></li>
                <li><a href="/projects-in-noida">Property in Noida</a></li>
                <li><a href="/projects-in-ghaziabad">Property in Ghaziabad</a></li>
                <li><a href="/projects-in-delhi">Property in Delhi</a></li>
                <li><a href="/projects-in-mumbai">Property in Mumbai</a></li>
                <li><a href="/projects-in-pune">Property in Pune</a></li>
                <li><a href="/projects-in-bangalore">Property in Bangalore</a></li>
                <li><a href="/projects-in-chennai">Property in Chennai</a></li>
                <li><a href="/projects-in-ahmedabad">Property in Ahmedabad</a></li>
                <li><a href="/projects-in-indore">Property in Indore</a></li>
            </ul>
        
            <strong>Builders</strong>
            <ul>
                <li><a href="/unitech-100027">Unitech Group</a></li>
                <li><a href="/vatika-100003">Vatika Group</a></li>
                <li><a href="/emaar-mgf-100026">Emaar MGF</a></li>
                <li><a href="/ramprastha-100001">Ramprastha Group </a></li>
                <li><a href="/eldeco-100512">Eldeco Group</a></li>
                <li><a href="/3c-100038">3C Group</a></li>
                <li><a href="/amrapali-100029">Amrapali</a></li>
                <li><a href="/indiabulls-100022">Indiabulls</a></li>
                <li><a href="/hiranandani-102622">Hiranandani</a></li>
                <li><a href="/lodha-100089">Lodha Group</a></li>
                <li><a href="/acme-100153">ACME Group</a></li>
                <li><a href="/pra-realty-100175">PRA Realty</a></li>
                <li><a href="/kolte-patil-100168">Kolte Patil</a></li>
                <li><a href="/marvels-group-102316">Marvel Group</a></li>
                <li><a href="/all-builders">All Builders</a></li>
            </ul>
        
            <strong>Resources</strong>
            <ul>
                <li><a href="/homeloan">Home Loan</a></li>
                <li><a href="/nri">NRI Services</a></li>
                <li><a href="/faqs">How to Buy</a></li>
                <li><a href="/vaastu">Vaastu Tips</li>
                <li><a href="/">Residential Property</a></li>
            </ul>
        </div>
    </body>
</html>
EOD;

echo $str;

?>



