/* ============================================================
   TRON CURSOR
   github.com/verifiedfinn/site-assets
   Reference via jsDelivr:
   https://cdn.jsdelivr.net/gh/verifiedfinn/site-assets@main/scripts/tron-cursor.js
   ============================================================ */
(function () {
  try {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    var BASE = "https://raw.githubusercontent.com/verifiedfinn/site-assets/main/cursors/";
    var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    var ext = isFirefox ? "png" : "cur";

    var cursors = {
      default:    "url('" + BASE + "cursor_normal."  + ext + "') 0 0, auto",
      pointer:    "url('" + BASE + "cursor_link."    + ext + "') 12 2, pointer",
      text:       "url('" + BASE + "cursor_text."    + ext + "') 16 16, text",
      notAllowed: "url('" + BASE + "cursor_unavail." + ext + "') 0 0, not-allowed"
    };

    document.documentElement.style.cursor = cursors.default;

    document.addEventListener("mouseover", function (e) {
      var t   = e.target.closest("a, button, [role='button'], input[type='submit'], input[type='button']");
      var inp = e.target.closest("input:not([type='submit']):not([type='button']), textarea, [contenteditable]");
      if (t)   { t.style.cursor   = cursors.pointer; return; }
      if (inp) { inp.style.cursor = cursors.text;    return; }
    });

    document.addEventListener("mouseout", function (e) {
      var t   = e.target.closest("a, button, [role='button'], input[type='submit'], input[type='button']");
      var inp = e.target.closest("input:not([type='submit']):not([type='button']), textarea, [contenteditable]");
      if (t)   { t.style.cursor   = ""; return; }
      if (inp) { inp.style.cursor = ""; return; }
    });

  } catch (e) {
    console.warn("[Tron Cursor] Could not apply custom cursors:", e);
  }
})();
