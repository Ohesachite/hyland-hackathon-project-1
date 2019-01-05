function framenav (d) {
  window.top.getElementsByTagName('iframe')[0].href = d;
}

function quickswap (htmlcollection) {
  for (let i = 0; i < htmlcollection.length; i++) {
    if (htmlcollection[i].href && !(/^http/g.match(htmlcollection[i].href))) {
      htmlcollection[i].onclick = framenav(htmlcollection[i].href);
      htmlcollection[i].href = null;
    }
  }
}

function seekChildFrames (windowObj) {
  if (document.getElementsByTagName('iframe').length) {
    for (let i = 0; i < document.getElementsByTagName('iframe').length; i++) {
      seekChildFrames(document.getElementsByTagName('iframe')[i]);
    }
    quickswap(document.getElementsByTagName('a'));
  }
}

window.onload = function () {
  seekChildFrames(window);
};

if (document.getElementsByTagName('iframe').length) {
  document.getElementsByTagName('iframe').onload(seekChildFrames(parent))
}
