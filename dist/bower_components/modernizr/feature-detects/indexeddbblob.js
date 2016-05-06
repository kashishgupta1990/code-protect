/*!
{
  "name": "IndexedDB Blob",
  "property": "indexeddbblob"
}
!*/

define(["Modernizr","addTest","prefixed","test/indexeddb"],function(e,t,d){e.addAsyncTest(function(){var n,o,c,r="detect-blob-support",a=!1;try{n=d("indexedDB",window)}catch(s){}if(!e.indexeddb||!e.indexeddb.deletedatabase)return!1;try{n.deleteDatabase(r).onsuccess=function(){o=n.open(r,1),o.onupgradeneeded=function(){o.result.createObjectStore("store")},o.onsuccess=function(){c=o.result;try{c.transaction("store","readwrite").objectStore("store").put(new Blob,"key"),a=!0}catch(e){a=!1}finally{t("indexeddbblob",a),c.close(),n.deleteDatabase(r)}}}}catch(s){t("indexeddbblob",!1)}})});