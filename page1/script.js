document.addEventListener("DOMContentLoaded", function() {
  const texts = ["𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝗗𝗮𝘁𝗮.", "𝗙𝗲𝘁𝗰𝗵𝗶𝗻𝗴 𝗮𝗹𝗹 𝘂𝘀𝗲𝗿𝘀", "𝗕𝘂𝗶𝗹𝗱𝗶𝗻𝗴 𝗚𝘂𝗶𝗹𝗱 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀"];
  let index = 0;

  function showNextText() {
    const loadingText = document.getElementById("loading-text");
    loadingText.textContent = texts[index];
    loadingText.style.animation = "none";
    loadingText.offsetHeight; // Trigger reflow
    loadingText.style.animation = null;

    index = (index + 1) % texts.length;
    setTimeout(showNextText, 5000); // 3s typing + 2s delay
  }

  showNextText();
});
