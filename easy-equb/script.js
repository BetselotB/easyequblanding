/* Easy Equb · page behaviour */
(function () {
  "use strict";
  var doc = document.documentElement;
  doc.classList.add("js");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* ---- scroll reveal (staggered inside a group) ---- */
  var revealEls = $$("[data-reveal]");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-revealed"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el, i) {
      var sib = el.parentElement ? $$("[data-reveal]", el.parentElement).indexOf(el) : 0;
      el.style.setProperty("--d", (Math.max(sib, 0) % 4) * 0.08 + "s");
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-revealed"); });
  }

  /* ---- nav: mobile menu + language ---- */
  var toggle = $(".nav__toggle"), mobile = $(".nav__mobile");
  function closeMenu() { toggle.setAttribute("aria-expanded", "false"); mobile.hidden = true; }
  toggle.addEventListener("click", function () {
    var open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open)); mobile.hidden = open;
  });
  $$("a", mobile).forEach(function (a) { a.addEventListener("click", closeMenu); });

  var lang = $("[data-lang]"), langBtn = $(".lang__trigger", lang);
  langBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    var open = lang.classList.toggle("is-open");
    langBtn.setAttribute("aria-expanded", String(open));
  });
  document.addEventListener("click", function () { lang.classList.remove("is-open"); langBtn.setAttribute("aria-expanded", "false"); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { lang.classList.remove("is-open"); closeMenu(); } });

  /* ---- FAQ accordion ---- */
  $$(".qa").forEach(function (qa) {
    var btn = $(".qa__q", qa);
    btn.addEventListener("click", function () {
      var open = !qa.classList.contains("is-open");
      $$(".qa.is-open").forEach(function (o) { if (o !== qa) { o.classList.remove("is-open"); $(".qa__q", o).setAttribute("aria-expanded", "false"); } });
      qa.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
    });
  });

  /* ---- showcase: auto-advancing tabs ---- */
  var show = $(".show");
  var tabs = $$(".tab", show), screens = $$(".show__screen", show);
  var current = 0, DUR = 6000;
  show.style.setProperty("--dur", DUR / 1000 + "s");
  function setTab(n) {
    current = (n + tabs.length) % tabs.length;
    tabs.forEach(function (t, i) {
      var on = i === current;
      t.classList.toggle("is-active", on);
      t.classList.toggle("is-done", i < current);
      var b = $("button", t); b.setAttribute("aria-selected", String(on)); b.tabIndex = on ? 0 : -1;
      var f = $(".tab__fill", t);
      f.style.animation = "none"; void f.offsetWidth; f.style.animation = "";
    });
    screens.forEach(function (s, i) { s.classList.toggle("is-active", i === current); });
  }
  tabs.forEach(function (t, i) { t.addEventListener("click", function () { setTab(i); }); });
  tabs.forEach(function (t) {
    $(".tab__fill", t).addEventListener("animationend", function () { if (t.classList.contains("is-active")) setTab(current + 1); });
  });
  if (!reduce && "IntersectionObserver" in window) {
    new IntersectionObserver(function (en) { show.classList.toggle("is-running", en[0].isIntersecting); }, { threshold: 0.35 }).observe(show);
  }

  /* ---- browse widget: chips cycle ---- */
  function cycleChips(el, ms) {
    if (!el || reduce) return;
    var chips = $$("span", el), i = 0;
    setInterval(function () {
      chips[i].classList.remove("is-on"); i = (i + 1) % chips.length; chips[i].classList.add("is-on");
    }, ms);
  }
  cycleChips($("[data-cycle-a]"), 2400);
  cycleChips($("[data-cycle-b]"), 1600);

  /* ---- draw widget ---- */
  var draw = $("[data-draw]");
  if (draw) {
    var cells = $$(".draw__grid span", draw), label = $("[data-draw-name]", draw), head = $(".draw__lbl", draw);
    var timer;
    function showWinner(w) {
      cells.forEach(function (c) { c.classList.remove("is-hit", "is-win"); });
      cells[w].classList.add("is-win");
      label.textContent = cells[w].textContent + " wins this cycle";
      head.textContent = "Draw complete";
    }
    function run() {
      var n = cells.length, winner = Math.floor(Math.random() * n), total = 12 + winner, step = 0, delay = 90;
      head.textContent = "Draw in progress"; label.textContent = "Drawing…";
      cells.forEach(function (c) { c.classList.remove("is-win", "is-hit"); });
      (function tick() {
        cells.forEach(function (c) { c.classList.remove("is-hit"); });
        if (step >= total) { showWinner(winner); timer = setTimeout(run, 3600); return; }
        cells[step % n].classList.add("is-hit");
        step++; delay += 14;
        timer = setTimeout(tick, delay);
      })();
    }
    if (reduce) { showWinner(2); }
    else if ("IntersectionObserver" in window) {
      var started = false;
      new IntersectionObserver(function (en, o) {
        if (en[0].isIntersecting && !started) { started = true; run(); o.disconnect(); }
      }, { threshold: 0.4 }).observe(draw);
    } else { run(); }
  }

  /* ---- steps: keep the scrolling list seamless ---- */
  var sc = $(".step__scroll");
  if (sc) { $$(".row", sc).forEach(function (r) { sc.appendChild(r.cloneNode(true)); }); }

  /* ---- cookie notice ---- */
  var consent = $(".consent");
  if (!store.get("eq-consent")) consent.hidden = false;
  $$("[data-consent]", consent).forEach(function (b) {
    b.addEventListener("click", function () { store.set("eq-consent", b.getAttribute("data-consent")); consent.hidden = true; });
  });
  var reopen = $("[data-cookie-open]");
  if (reopen) reopen.addEventListener("click", function () { consent.hidden = false; });

  var y = $("[data-year]"); if (y) y.textContent = new Date().getFullYear();
})();
