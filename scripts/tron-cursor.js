/* ============================================================
   TRON CURSOR
   github.com/verifiedfinn/site-assets
   Reference via jsDelivr:
   https://cdn.jsdelivr.net/gh/verifiedfinn/site-assets@main/scripts/tron-cursor.js
   ============================================================ */

(function () {
  try {
    var BASE = "https://cdn.jsdelivr.net/gh/verifiedfinn/site-assets@main/cursors/";

    /* Firefox on Mac doesn't support .cur reliably —
       falls back to .png with explicit hotspot instead  */
    var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    var ext = isFirefox ? "png" : "cur";

    /* Hotspot: x y — adjust to match your image's tip point
       pointer: 12 2 = typical arrow tip
       text:     4 9 = typical I-beam centre                  */
var cursors = {
  default:    "url('" + BASE + "cursor_normal."   + ext + "') 0 0, auto",
  pointer:    "url('" + BASE + "cursor_link."     + ext + "') 12 2, pointer",
  text:       "url('" + BASE + "cursor_text."     + ext + "') 4 9, text",
  notAllowed: "url('" + BASE + "cursor_unavail."  + ext + "') 0 0, not-allowed"
};

    /* Base cursor on everything */
    document.documentElement.style.cursor = cursors.default;

    /* Event delegation — no jQuery dependency
       Works in Wix custom code injection and SugarCube alike  */
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
