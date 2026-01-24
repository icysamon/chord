// Ban context menu
document.addEventListener('contextmenu', function (e) {
    if (e.target.nodeName === 'IMG') {
        e.preventDefault();
    }
}, false);

// Ban drag
document.addEventListener('dragstart', function (e) {
    if (e.target.nodeName === 'IMG') {
        e.preventDefault();
    }
}, false);