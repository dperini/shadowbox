// solves cross browser needs
document.onclick = function(e) {

    e || ((this.ownerDocument || this.document || this).parentWindow || window).event;

    var target = e.target || e.srcElement;

    if (!initialized) S.skin.init();

    while (target && target.nodeType == 1) {
        if (target.nodeName.toUpperCase() == 'A' &&
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
