var PATH = "../1 css/sakura/";

var themes = [{
    name: "sakura-vader",
    href: PATH+"sakura-vader.css",
  },
  {
    name: "Sakura (default)",
    href: PATH+"sakura.css",
  },
  {
    name: "sakura-dark",
    href: PATH+"sakura-dark.css"
  },
  {
    name: "sakura-earthly",
    href: PATH+"sakura-earthly.css",
  },
  {
    name: "sakura-ink",
    href: PATH+"sakura-ink.css"
  },
];
var current = -1;
var sakura = document.getElementById("sakura-css");

function switchSakuraTheme() {
  sakura.href = themes[(current + 1) % themes.length].href;
  current += 1;
  localStorage.setItem('current-sakura-theme', current)
}
document.getElementById('switch-theme').onclick = function(e) {
  switchSakuraTheme();
  e.preventDefault();
}