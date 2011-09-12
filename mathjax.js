/** This is just to load MathJax automatically. */
(function() {
  "use strict";
  var node = document.createElement('script');
  node.setAttribute('type', 'text/javascript');
  node.setAttribute('src', 'file/MathJax/MathJax.js?config=TeX-AMS_HTML');
  document.getElementsByTagName("head")[0].appendChild(node);
}());
