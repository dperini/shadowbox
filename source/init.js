// list of registered objects
var Collection = [ ], Options = [ ];

// solves cross browser needs
document.onclick = function(e) {

  var i, j, l, element, target;

  e || (e = (this.parentWindow || window).event);

  element = target = e.target || e.srcElement;

  if (!initialized) S.skin.init();

  while (element && element.nodeType == 1) {
    if (/^(a|area)$/i.test(element.nodeName) &&
      (/^(light|shadow)box(\[(.*)\])?/).test(element.getAttribute('rel'))) {
      display(element);
      break;
    }
    element = element.parentNode;
  }

  if (Collection.length) {
    for (i = 0, l = Collection.length; l > i; ++i) {
      element = Collection[i];
      for (j in element) {
        if (RegExp('^' + element[j] + '$', 'i').test(target[j]) === false) break;
      }
      if (element[j] === target[j]) {
        element = S.makeObject(target, Options[i])
        display(element);
      }
    }
  }

  function display(element) {
    S.open(element);
    if (S.gallery.length) {
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
      return false;
    }
  };

};
