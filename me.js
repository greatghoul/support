(function() {
  var build, ready;

  ready = function(fn) {
    if ((document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading')) {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  };

  build = function() {
    var container, script;
    container = document.createElement('div');
    container.style.marginBottom = '30px';
    container.style.height = '28px';
    container.style.display = 'none';
    container.innerHTML = "<a href=\"https://www.buymeacoffee.com/greatghoul\" target=\"_blank\" style=\"float: right; margin-top: 3px\"><img src=\"https://img.shields.io/badge/BUY-ME%20A%20COFFEE-orange.svg\" height=\"22\"></a>\n<a class=\"github-button\" href=\"https://github.com/greatghoul\" data-size=\"large\" data-show-count=\"true\" aria-label=\"Follow @greatghoul on GitHub\" target=\"_blank\">Follow @greatghoul</a>";
    document.body.insertBefore(container, document.body.firstChild);
    script = document.createElement('script');
    script.src = 'https://buttons.github.io/buttons.js';
    script.onload = function () {
      setTimeout(function () {
        container.style.display = 'block';
      }, 500);
    };
    return container.appendChild(script);
  };

  ready(build);

}).call(this);
