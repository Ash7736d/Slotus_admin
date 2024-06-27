document.addEventListener("DOMContentLoaded", function() {
  const texts = ["𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝗗𝗮𝘁𝗮.", "𝗙𝗲𝘁𝗰𝗵𝗶𝗻𝗴 𝗮𝗹𝗹 𝘂𝘀𝗲𝗿𝘀", "𝗕𝘂𝗶𝗹𝗱𝗶𝗻𝗴 𝗚𝘂𝗶𝗹𝗱 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀"];
  let index = 0;

  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      document.getElementById("loading-text").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    } else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 2000);
    }
  }

  function startTextAnimation(i) {
    if (typeof texts[i] == 'undefined') {
      setTimeout(function() {
        startTextAnimation(0);
      }, 3000);
    }
    if (i < texts.length) {
      typeWriter(texts[i], 0, function() {
        startTextAnimation(i + 1);
      });
    }
  }
  startTextAnimation(0);
});
