define(["ModernizrProto","injectElementWithStyles"],function(t,n){var e=function(){var t=window.matchMedia||window.msMatchMedia;return t?function(n){var e=t(n);return e&&e.matches||!1}:function(t){var e=!1;return n("@media "+t+" { #modernizr { position: absolute; } }",function(t){e="absolute"==(window.getComputedStyle?window.getComputedStyle(t,null):t.currentStyle).position}),e}}();return t.mq=e,e});