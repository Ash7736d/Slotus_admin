document.addEventListener("DOMContentLoaded", function() {
  const texts = ["Loading Data..", "Fetching User Data..", "Building Guild Request..", "Setting Up Database.."];
  let index = 0;

  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      document.getElementById("loading-text").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    } else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 2000);
    }
  }

  function startTextAnimation(i) {
    if (i < texts.length) {
      typeWriter(texts[i], 0, function() {
        startTextAnimation(i + 1);
      });
    } else {
      showLoadingBar();
    }
  }

  function showLoadingBar() {
    const loadingBar = document.createElement('div');
    loadingBar.style.position = 'fixed';
    loadingBar.style.top = '0';
    loadingBar.style.left = '0';
    loadingBar.style.width = '0';
    loadingBar.style.height = '4px';
    loadingBar.style.backgroundColor = '#4285f4';
    loadingBar.style.zIndex = '9999';
    document.body.appendChild(loadingBar);

    let width = 0;
    const interval = setInterval(function() {
      if (width >= 100) {
        clearInterval(interval);
        setTimeout(function() {
          window.location.href = 'admin/Dashboard.html';
        }, 500);
      } else {
        width++;
        loadingBar.style.width = width + '%';
      }
    }, 30); // Adjust this value for the speed of the loading bar
  }

  startTextAnimation(0);
});
