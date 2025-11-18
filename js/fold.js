(function () {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFoldHandlers);
  } else {
    initFoldHandlers();
  }

  function initFoldHandlers() {
    var foldButtons = document.getElementsByClassName("fold");
    for (var i = 0; i < foldButtons.length; i++) {
      foldButtons[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }

    // Expand any panels whose buttons are already marked as active on load
    for (var i = 0; i < foldButtons.length; i++) {
      if (foldButtons[i].classList.contains("active")) {
        var panel = foldButtons[i].nextElementSibling;
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  }
})();
