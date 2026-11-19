// Tap anywhere to cycle the page color.
(function () {
  var hues = [0, 190, 140, 45, 280, 325]; // red, cyan, green, amber, violet, pink
  var i = 0;
  var root = document.documentElement;
  var layer = document.getElementById('ripples');
  var meta = document.querySelector('meta[name="theme-color"]');

  function nextColor(x, y) {
    i = (i + 1) % hues.length;
    var h = hues[i];

    // ripple in the new color, starting at the touch point
    var r = document.createElement('span');
    r.className = 'ripple';
    r.style.left = x + 'px';
    r.style.top = y + 'px';
    r.style.setProperty('--r', 'hsl(' + h + ' 85% 52%)');
    layer.appendChild(r);
    setTimeout(function () { r.remove(); }, 1000);

    root.style.setProperty('--h', h);
    if (navigator.vibrate) navigator.vibrate(12);
  }

  document.addEventListener('pointerdown', function (e) {
    nextColor(e.clientX, e.clientY);
  });
})();
