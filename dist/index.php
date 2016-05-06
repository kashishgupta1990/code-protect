<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" xmlns:ng="http://angularjs.org" id="ng-app"> <!--<![endif]-->
<head>
    <!--[if lt IE 9]>
        <script type="text/javascript">
            (function() {
                window.location.href = 'upgrade.html'
            })();
        </script>
    <![endif]-->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="fragment" content="!" >
    <title>datalabs.proptiger.com</title>
    <base href="/">
    <!--[if IE]><script type="text/javascript">
        // Fix for IE ignoring relative base tags.
        // See http://stackoverflow.com/questions/3926197/html-base-tag-and-local-folder-path-with-internet-explorer
        (function() {
            var baseTag = document.getElementsByTagName('base')[0];
            baseTag.href = baseTag.href;
        })();
    </script><![endif]-->
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->


    <link rel="stylesheet" href="styles/vendor/bootstrap.min.css">
    <link rel="stylesheet" href="bower_components/ng-grid/ng-grid.min.css">
    <link rel="stylesheet" href="bower_components/angular-strap/vendor/bootstrap-datepicker.css">
    <link rel="stylesheet" href="styles/css/b2b-style.11325048.css" id="styles">

    <script type="text/javascript">
        var websiteVersion = '';            
    </script>

    <!-- Google Tag Manager -->
        <noscript>
            <iframe src="//www.googletagmanager.com/ns.html?id=GTM-NJP3S4"
                          height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
        <script>
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NJP3S4');
        </script>
    <!-- End Google Tag Manager -->

</head>

<body>
    <!--[if lt IE 7]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <!--[if lt IE 9]>
      <script src="bower_components/es5-shim/es5-shim.js"></script>
      <script src="bower_components/json3/lib/json3.min.js"></script>
    <![endif]-->

    <!-- Add your site or application content here -->
    <div b2b-save-catchment></div>

    <div class="b2bmainContainer row-full">
		<div id="views" ui-view >
            <div style="font-size:x-large; text-align:center;">
                Loading, Please Wait...
            </div>        
        </div>
    </div>
<script type="text/javascript"> <?php include "scripts/vendor/require.min.js"; ?></script>
<script type="text/javascript"> <?php include "scripts/b2bMain.8e63cfbf.js"; ?></script>
<script>require(['infra', 'b2bBootstrap']);</script>
</body>
</html>
