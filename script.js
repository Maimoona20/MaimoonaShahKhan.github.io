// =========================================================
// Config — edit these to personalize the site
// =========================================================
const WHOAMI = {
  command: "whoami --verbose",
  lines: [
    { text: "name       : Maimoona Shah Khan", cls: "out" },
    { text: "role       : Cybersecurity Engineer", cls: "out" },
    { text: "focus      : Threat Detection · Incident Response · Blue Team · File Integrity Minitoring", cls: "out" },
    { text: "status     : open to opportunities", cls: "Salam" },
    { text: "", cls: "out" },
    { text: "Cybersecurity intern with hands-on SOC and detection-engineering experience across ", cls: "out" },
    { text: "SIEM, EDR, and file-integrity monitoring that I co-developed at the National Centre for Cyber Security (NED).", cls: "out" },
    { text: "Skilled in threat detection,log correlation, and endpoint security across Linux and Windows environments. ", cls: "out" },
    { text: "Computer Science graduate seeking to bring strong technical fundamentals to a SOC/Threat Detection role ", cls: "out" },
  ],
};

const STATUS_ITEMS = [
  { label: "SYSTEM", value: "online", ok: true },
  { label: "UPTIME", value: "247d 06h", ok: true },
  { label: "THREATS BLOCKED (24H)", value: "1,204", ok: true },
  { label: "OPEN INCIDENTS", value: "0", ok: true },
  { label: "LAST SCAN", value: "2 min ago", ok: true },
  { label: "FIREWALL", value: "active", ok: true },
  { label: "PATCH LEVEL", value: "up to date", ok: true },
];

// =========================================================
// Typing animation (hero terminal)
// =========================================================
function typeText(el, text, speed, onDone) {
  let i = 0;
  el.textContent = "";
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    el.textContent = text;
    onDone && onDone();
    return;
  }
  (function step() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(step, speed);
    } else {
      onDone && onDone();
    }
  })();
}

function renderWhoamiOutput() {
  const container = document.getElementById("typedOutput");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let delay = reduced ? 0 : 120;

  WHOAMI.lines.forEach((line, idx) => {
    setTimeout(() => {
      const p = document.createElement("p");
      p.className = "typed-line";
      const span = document.createElement("span");
      span.className = line.cls;
      span.textContent = line.text || "\u00A0";
      p.appendChild(span);
      container.appendChild(p);
    }, reduced ? 0 : delay * idx);
  });
}

function initHeroTyping() {
  const cmdEl = document.getElementById("typedCmd");
  const cursor = document.getElementById("typeCursor");
  if (!cmdEl) return;
  typeText(cmdEl, WHOAMI.command, 55, () => {
    renderWhoamiOutput();
  });
}

// =========================================================
// Status strip ticker
// =========================================================
function buildStatusTrack() {
  const track = document.getElementById("statusTrack");
  if (!track) return;

  const buildSegs = () =>
    STATUS_ITEMS.map(
      (item) => `
      <span class="seg">
        <span class="dot ${item.ok ? "" : "amber"}"></span>
        <b>${item.label}</b> ${item.value}
      </span>`
    ).join("");

  // duplicate content for a seamless looping ticker
  track.innerHTML = buildSegs() + buildSegs();
}

// =========================================================
// Nav active-state on scroll
// =========================================================
function initNavHighlight() {
  const links = Array.from(document.querySelectorAll(".tl-nav a"));
  const sections = links
    .map((l) => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);

  if (!("IntersectionObserver" in window) || sections.length === 0) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = "#" + entry.target.id;
          links.forEach((l) =>
            l.classList.toggle("active", l.getAttribute("href") === id)
          );
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((s) => io.observe(s));
}

// =========================================================
// Reveal-on-scroll
// =========================================================
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((i) => i.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((i) => io.observe(i));
}

// =========================================================
// Skill bars fill on view
// =========================================================
function initSkillBars() {
  const bars = document.querySelectorAll(".skill-row .bar span");
  if (!("IntersectionObserver" in window)) {
    bars.forEach((b) => (b.style.width = b.dataset.w + "%"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.style.width = el.dataset.w + "%";
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.4 }
  );
  bars.forEach((b) => io.observe(b));
}

// =========================================================
// Contact form (static demo — no backend)
// =========================================================
function initContactForm() {
  const form = document.querySelector(".term-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type=submit]");
    const original = btn.textContent;
    btn.textContent = "message queued ✓";
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      form.reset();
    }, 2200);
  });
}

// =========================================================
// Init
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
  buildStatusTrack();
  initHeroTyping();
  initNavHighlight();
  initReveal();
  initSkillBars();
  initContactForm();

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
