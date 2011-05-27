var Collection = [ ];

// solves cross browser needs
document.onclick = function(e) {

  var i, j, l, element, match, target, that;

  e || ((this.ownerDocument || this.document || this).parentWindow || window).event;

  target = e.target || e.srcElement;

  if (!initialized) S.skin.init();

  if (Collection.length) {
    match = false;
    for (i = 0, l = Collection.length; l > i; ++i) {
      element = Collection[i];
      for (j in element) {
        if (RegExp('^' + element[j] + '$', 'i').test(target[j]) === false) break;
      }
      if (element[j] === target[j]) {

      S.open(target);

      if (S.gallery.length) {
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
        }
        return false;
      }

      }
    }
  }

  while (target && target.nodeType == 1) {
    if (/^(a|area)$/i.test(target.nodeName) &&
      (/^(light|shadow)box(\[(.*)\])?/).test(target.getAttribute('rel'))) {

      S.open(target);

      if (S.gallery.length) {
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
        }
        return false;
      }
    }
    target = target.parentNode;
  }

  return true;

};
