/* ==========================================================================
   Portfolio renderer + interactions.
   Text → js/data.js · Colors & images → js/config.js
   ========================================================================== */
(() => {
  "use strict";

  const D = window.PORTFOLIO;
  const C = window.SITE_CONFIG;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------- icons */
  const ICONS = {
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    play: '<path d="M4 3.71v16.58a.7.7 0 0 0 1.05.606l14.622-8.42a.55.55 0 0 0 0-.953L5.05 3.104A.7.7 0 0 0 4 3.71z"/><path d="M15 9 4.5 20.5"/><path d="M4.5 3.5 15 15"/>',
    x: '<path d="M4 4l11.733 16H20L8.267 4z"/><path d="M4 20l6.768-6.768m2.46-2.46L20 4"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    arrowUp: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
    arrowUpRight: '<path d="M7 17 17 7"/><path d="M7 7h10v10"/>',
    external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
    layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
    cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
    tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
    rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    smartphone: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',
    bluetooth: '<path d="m7 7 10 10-5 5V2l5 5L7 17"/>',
    camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
    car: '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
    truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
    scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="10" r="3"/><path d="M8 17c1-1.5 2.4-2 4-2s3 .5 4 2"/>',
    ruler: '<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2M11.5 9.5l2-2M8.5 6.5l2-2M17.5 15.5l2-2"/>',
    chart: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    video: '<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    cap: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
  };
  const icon = (name) =>
    `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.code}</svg>`;

  // Look of a project (color/icon/image) from config.js, with safe defaults
  const FALLBACK_COLORS = [C.colors.primary, C.colors.secondary, "#2ed3ff", "#ff8a4c", "#3ddc84", "#f06292"];
  const projectLook = (p, i) => ({
    color: FALLBACK_COLORS[i % FALLBACK_COLORS.length],
    icon: "smartphone",
    image: "",
    ...(C.projects?.[p.id] || {}),
  });

  const initials = (D.name || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  /* ------------------------------------------------------------- simple bindings */
  $$("[data-bind]").forEach((el) => (el.textContent = D[el.dataset.bind] ?? ""));
  $$("[data-icon]").forEach((el) => (el.innerHTML = icon(el.dataset.icon)));
  $("#logo-letter").textContent = (D.name || "S")[0].toUpperCase();
  $("#ph-avatar").textContent = initials;
  $("#year").textContent = new Date().getFullYear();

  // Hero name: letter-by-letter rise animation (starts when the boot screen leaves)
  const h1 = $(".hero h1");
  h1.classList.remove("reveal");
  h1.setAttribute("aria-label", D.name);
  h1.innerHTML = [...D.name].map((ch, i) => `<span class="ch" aria-hidden="true" style="--i:${i}">${esc(ch)}</span>`).join("");

  /* ------------------------------------------------------------- hero */
  $("#hero-cta").innerHTML = `
    <a href="#projects" class="btn primary">View My Work ${icon("arrow")}</a>
    ${C.images.resume ? `<a href="${esc(C.images.resume)}" class="btn" download>Download CV ${icon("download")}</a>` : ""}`;

  const socialsHTML = D.socials
    .map((s) => {
      const ext = s.url.startsWith("http");
      return `<a href="${esc(s.url)}" ${ext ? 'target="_blank" rel="noopener"' : ""} aria-label="${esc(s.label)}" title="${esc(s.label)}">${icon(s.icon)}</a>`;
    })
    .join("");
  $("#hero-socials").innerHTML = socialsHTML;
  $("#footer-socials").innerHTML = socialsHTML;

  if (D.availableForWork) $("#avail-text").textContent = D.availabilityText;
  else $("#avail-card").remove();

  // Profile photo replaces the phone mockup when set in config.js
  if (C.images.profile) {
    $("#portrait").innerHTML = `<img src="${esc(C.images.profile)}" alt="${esc(D.name)}" />`;
  } else {
    $("#ph-list").innerHTML = D.projects
      .slice(0, 3)
      .map((p, i) => {
        const look = projectLook(p, i);
        const name = p.title.split(/\s[—-]\s/)[0];
        return `<div class="ph-item">
          <span class="ph-icon" style="background:${esc(look.color)}">${icon(look.icon)}</span>
          <span class="ph-item-text"><b>${esc(name)}</b><span>${esc(p.metrics?.[0] || p.category)}</span></span>
        </div>`;
      })
      .join("");
    const tick = () => {
      const d = new Date();
      $("#ph-time").textContent = `${d.getHours()}:${String(d.getMinutes()).padStart(2, "0")}`;
    };
    tick();
    setInterval(tick, 30000);
  }

  /* ------------------------------------------------------------- projects */
  const github = D.socials.find((s) => s.icon === "github");

  // "Download case studies (PDF)" in the Projects header
  if (C.images.caseStudies) $("#case-pdf").href = C.images.caseStudies;
  else $("#case-pdf").remove();

  const projectNames = (p) => {
    const [name, subtitle] = p.title.split(/\s[—-]\s/);
    return { name, subtitle: subtitle || p.category };
  };
  const mediaHTML = (p, look) => {
    const { subtitle } = projectNames(p);
    const shots = look.screenshots || [];
    const inner = look.image
      ? `<img src="${esc(look.image)}" alt="${esc(p.title)}" loading="lazy" />`
      : shots.length
      ? `<div class="p-shots">${shots
          .slice(0, 3)
          .map((sh) => `<div class="p-shot"><img src="${esc(sh.src)}" alt="${esc(sh.caption || p.title)}" loading="lazy" /></div>`)
          .join("")}</div>`
      : `<div class="p-mock">
           <div class="p-mock-text"><b>${esc(subtitle)}</b><i style="width:90%"></i><i style="width:65%"></i><em>${esc(p.category)}</em></div>
           <div class="p-phone"><div class="p-screen"><div class="s-hero"></div><div class="s-line"></div><div class="s-line" style="width:60%"></div><div class="s-row"><span></span><span></span></div><div class="s-row"><span></span><span></span></div></div></div>
         </div>`;
    return `<div class="p-media ${look.image ? "has-img" : ""} ${shots.length && !look.image ? "has-shots" : ""}">
      ${p.featured ? `<span class="p-badge">★ Featured</span>` : ""}
      ${inner}
    </div>`;
  };

  // Animated BLE scene: mask sensor → phone (used on the flagship card and its popup)
  const bleVisualHTML = () => `
        <div class="sp-visual" aria-hidden="true">
          <div class="ble-scene">
            <div class="ble-device">
              <div class="ble-waves"><span></span><span></span><span></span></div>
              <div class="ble-core">${icon("heart")}</div>
              <small>Mask sensor</small>
            </div>
            <div class="ble-link"><i></i><i></i><i></i></div>
            <div class="ble-phone"><div class="ble-screen">
              <div class="ble-status">${icon("bluetooth")} <span>BLE · Connected</span><b></b></div>
              <small>Heart rate</small>
              <div class="ble-bpm"><strong class="bpm">72</strong> bpm</div>
              <svg class="ble-ecg" viewBox="0 0 200 50" preserveAspectRatio="none"><path d="M0 25 H38 L46 10 L54 42 L62 25 H98 L106 4 L114 46 L122 25 H160 L168 12 L176 40 L184 25 H200"/></svg>
              <div class="ble-row"><span>SpO₂</span><b>98%</b></div>
              <div class="ble-row"><span>Temp</span><b>36.6°C</b></div>
              <div class="ble-sync">${icon("refresh")} Synced offline-first</div>
            </div></div>
          </div>
        </div>`;

  // Flagship project (spotlight: true in data.js) gets a big animated card of its own
  const spotIndex = D.projects.findIndex((p) => p.spotlight);
  if (spotIndex >= 0) {
    const p = D.projects[spotIndex];
    const look = projectLook(p, spotIndex);
    const { name, subtitle } = projectNames(p);
    const link = p.links?.play || p.links?.github || p.links?.demo || "";
    $("#spotlight").innerHTML = `
      <article class="card spotlight project reveal" data-index="${spotIndex}" tabindex="0" role="button" aria-label="${esc(name)}: view details" style="--pc:${esc(look.color)}">
        ${bleVisualHTML()}
        <div class="sp-body">
          <span class="sp-label">${icon("bluetooth")} ${esc(p.spotlightLabel || "Flagship project")}</span>
          <div><h3>${esc(name)}</h3><p class="sp-sub">${esc(subtitle)}</p></div>
          ${p.role ? `<p class="p-role">${icon("award")} ${esc(p.role)}</p>` : ""}
          <p>${esc(p.description)}</p>
          ${p.highlights?.length ? `<ul class="modal-list">${p.highlights.slice(0, 3).map((h) => `<li>${esc(h)}</li>`).join("")}</ul>` : ""}
          <div class="chips">${p.tech.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
          <div class="sp-actions">
            <span class="btn primary sp-open">View case study ${icon("arrow")}</span>
            ${link ? `<a class="btn" href="${esc(link)}" target="_blank" rel="noopener">${icon("play")} Google Play</a>` : ""}
          </div>
        </div>
      </article>`;
    // Live-looking heart-rate readout
    if (!reducedMotion) {
      setInterval(() => $$(".bpm").forEach((el) => (el.textContent = 68 + Math.round(Math.random() * 9))), 1200);
    }
  }
  const gridProjects = D.projects.map((p, i) => [p, i]).filter(([p]) => !p.spotlight);

  // 3 per row normally; 2 per row when that avoids a lonely last card (e.g. 4 projects)
  const n = gridProjects.length;
  $("#projects-grid").style.setProperty("--cols", n === 4 || n === 2 ? 2 : 3);
  $("#projects-grid").innerHTML = gridProjects
    .map(([p, i]) => {
      const look = projectLook(p, i);
      const { name } = projectNames(p);
      const link = p.links?.play || p.links?.github || p.links?.demo || "";
      return `<article class="card project reveal" data-index="${i}" tabindex="0" role="button" aria-label="${esc(name)}: view details" style="--d:${(i % 3) * 0.08}s;--pc:${esc(look.color)}">
        ${mediaHTML(p, look)}
        <div class="p-body">
          <div class="p-title"><span class="p-ic">${icon(look.icon)}</span><h3>${esc(name)}</h3></div>
          <p>${esc(p.description)}</p>
          ${p.metrics?.length ? `<div class="p-metrics">${p.metrics.map((m) => `<span>${esc(m)}</span>`).join("")}</div>` : ""}
          <span class="p-more">View details ${icon("arrow")}</span>
          <div class="p-foot">
            <div class="chips">${p.tech.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
            ${link ? `<a class="p-arrow" href="${esc(link)}" target="_blank" rel="noopener" aria-label="Open ${esc(name)}">${icon("arrow")}</a>` : ""}
          </div>
        </div>
      </article>`;
    })
    .join("");

  // Project detail popup
  const modal = $("#project-modal");
  const openProject = (i) => {
    const p = D.projects[i];
    const look = projectLook(p, i);
    const { name, subtitle } = projectNames(p);
    const L = p.links || {};
    const linkBtns = [
      L.play && `<a class="btn primary" href="${esc(L.play)}" target="_blank" rel="noopener">${icon("play")} Google Play</a>`,
      L.github && `<a class="btn" href="${esc(L.github)}" target="_blank" rel="noopener">${icon("github")} Source code</a>`,
      L.demo && `<a class="btn" href="${esc(L.demo)}" target="_blank" rel="noopener">${icon("external")} Live demo</a>`,
      p.pdfCaseStudy && C.images.caseStudies && `<a class="btn" href="${esc(C.images.caseStudies)}" download>${icon("download")} Download case study (PDF)</a>`,
    ].filter(Boolean);
    modal.style.setProperty("--pc", look.color);
    $("#modal-content").innerHTML = `
      <button class="modal-close" aria-label="Close">${icon("close")}</button>
      ${p.spotlight ? `<div class="modal-ble">${bleVisualHTML()}</div>` : mediaHTML(p, look)}
      <div class="modal-body">
        <div class="modal-head"><span class="p-ic">${icon(look.icon)}</span><div><h3 id="modal-title">${esc(name)}</h3><small>${esc(subtitle)}</small></div></div>
        <p>${esc(p.description)}</p>
        ${p.role ? `<p class="p-role">${icon("award")} ${esc(p.role)}</p>` : ""}
        ${look.screenshots?.length ? `<h4>Screenshots</h4><div class="gallery">${look.screenshots
          .map((sh) => `<a class="shot" href="${esc(sh.src)}" target="_blank" rel="noopener"><img src="${esc(sh.src)}" alt="${esc(sh.caption || "")}" loading="lazy" /><span>${esc(sh.caption || "")}</span></a>`)
          .join("")}</div>` : ""}
        ${p.caseStudy?.length ? `<h4>How it works</h4><ol class="steps">${p.caseStudy
          .map((st, k) => `<li><span class="step-ic">${icon(st.icon)}<b>${k + 1}</b></span><div><strong>${esc(st.title)}</strong><p>${esc(st.text)}</p></div></li>`)
          .join("")}</ol>` : ""}
        ${p.highlights?.length ? `<h4>What I did</h4><ul class="modal-list">${p.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>` : ""}
        ${p.metrics?.length ? `<div class="p-metrics">${p.metrics.map((m) => `<span>${esc(m)}</span>`).join("")}</div>` : ""}
        <h4>Tech stack</h4>
        <div class="chips">${p.tech.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
        ${linkBtns.length ? `<div class="modal-links">${linkBtns.join("")}</div>` : ""}
      </div>`;
    $(".modal-inner", modal).scrollTop = 0;
    modal.showModal();
    document.body.classList.add("modal-open");
  };
  modal.addEventListener("close", () => document.body.classList.remove("modal-open"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.closest(".modal-close")) modal.close();
  });
  const grid = $("#projects");
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".project");
    if (card && !e.target.closest("a")) openProject(+card.dataset.index);
  });
  grid.addEventListener("keydown", (e) => {
    const card = e.target.closest(".project");
    if (card && e.target === card && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      openProject(+card.dataset.index);
    }
  });

  /* ------------------------------------------------------------- personal apps */
  const apps = D.personalApps || [];
  $("#apps-grid").style.setProperty("--cols", apps.length === 4 ? 4 : apps.length === 2 ? 2 : 3);
  $("#apps-grid").innerHTML = apps.length
    ? apps
        .map((a, i) => {
          const look = { color: FALLBACK_COLORS[i % FALLBACK_COLORS.length], icon: "", ...(C.personalApps?.[a.id] || {}) };
          const L = a.links || {};
          return `<article class="card app-card reveal" style="--d:${(i % 3) * 0.08}s;--pc:${esc(look.color)}">
            <div class="app-top">
              <div class="app-icon">${look.icon ? `<img src="${esc(look.icon)}" alt="" loading="lazy" />` : esc(a.name[0])}</div>
              <div><h3>${esc(a.name)}</h3><small>${esc(a.tagline || "")}</small>${a.status ? `<span class="app-status">${esc(a.status)}</span>` : ""}</div>
            </div>
            <p>${esc(a.description || "")}</p>
            ${a.stats?.length ? `<div class="app-stats">${a.stats.map((x) => `<span>${esc(x)}</span>`).join("")}</div>` : ""}
            ${(a.tags || a.tech)?.length ? `<div class="chips">${(a.tags || a.tech).map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>` : ""}
            <div class="app-actions">
              ${L.play ? `<a class="play-badge" href="${esc(L.play)}" target="_blank" rel="noopener">${icon("play")}<span><small>Get it on</small><b>Google Play</b></span></a>` : ""}
              ${L.github ? `<a class="btn" href="${esc(L.github)}" target="_blank" rel="noopener">${icon("github")} Source</a>` : ""}
            </div>
          </article>`;
        })
        .join("")
    : `<div class="card app-empty reveal" style="--pc:var(--primary)">
        <div class="app-icon">${icon("plus")}</div>
        <div><h3>New apps on the way</h3><p>I'm building my own Android apps on the side. They'll appear here as soon as they're live on Google Play.</p></div>
        ${github ? `<a class="btn" href="${esc(github.url)}" target="_blank" rel="noopener">${icon("github")} Follow on GitHub</a>` : ""}
      </div>`;

  /* ------------------------------------------------------------- about */
  $("#stats").innerHTML = D.stats
    .map(
      (s) => `<div class="stat"><strong><span class="count grad" data-to="${s.value}" data-dec="${s.decimals || 0}">0</span><span class="grad">${esc(s.suffix)}</span></strong><span>${esc(s.label)}</span></div>`
    )
    .join("");
  $("#about-text").innerHTML = D.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("");
  const edu = D.about.education || [];
  if (edu.length) {
    $("#edu").innerHTML = edu
      .map(
        (e) => `<li><span class="edu-ic">${icon(/certif/i.test(e.place) ? "award" : "cap")}</span>
          <span><b>${esc(e.title)}</b><small>${esc(e.place)}</small></span>
          ${e.year ? `<span class="edu-year">${esc(e.year)}</span>` : ""}</li>`
      )
      .join("");
  } else {
    $(".sub-title").remove();
  }

  // Kotlin "data class" code card
  const kw = (s) => `<span class="tk-kw">${s}</span>`;
  const ty = (s) => `<span class="tk-ty">${s}</span>`;
  const str = (s) => `<span class="tk-str">"${esc(s)}"</span>`;
  const prop = (s) => `<span class="tk-prop">${s}</span>`;
  const fn = (s) => `<span class="tk-fn">${s}</span>`;
  const num = (s) => `<span class="tk-num">${s}</span>`;
  const com = (s) => `<span class="tk-com">${s}</span>`;
  const stackRows = Math.ceil(D.about.stack.length / 3);
  const codeLines = [
    `${kw("package")} dev.portfolio`,
    ``,
    `${kw("data class")} ${ty("Developer")}(`,
    `    ${kw("val")} ${prop("name")}: ${ty("String")} = ${str(D.name)},`,
    `    ${kw("val")} ${prop("role")}: ${ty("String")} = ${str(D.role)},`,
    `    ${kw("val")} ${prop("location")}: ${ty("String")} = ${str(D.location)},`,
    `    ${kw("val")} ${prop("experience")}: ${ty("Int")} = ${num(D.about.yearsOfExperience)}, ${com("// years")}`,
    `    ${kw("val")} ${prop("stack")}: ${ty("List")}&lt;${ty("String")}&gt; = ${fn("listOf")}(`,
    ...Array.from({ length: stackRows }, (_, i) =>
      `        ${D.about.stack.slice(i * 3, i * 3 + 3).map(str).join(", ")}${i < stackRows - 1 ? "," : ""}`
    ),
    `    ),`,
    `    ${kw("val")} ${prop("openToWork")}: ${ty("Boolean")} = ${kw(String(!!D.availableForWork))}`,
    `)`,
    ``,
    `${kw("fun")} ${fn("main")}() {`,
    `    ${kw("val")} me = ${ty("Developer")}()`,
    `    ${fn("println")}(${str("Let's build something great! 🚀")})`,
    `}`,
  ];
  $("#code-card").innerHTML = `
    <div class="code-top"><i></i><i></i><i></i><span>Developer.kt</span></div>
    <div class="code-body">${codeLines.map((l, i) => `<div class="code-line"><span class="ln">${i + 1}</span><span>${l || " "}</span></div>`).join("")}</div>`;

  /* ------------------------------------------------------------- experience */
  $("#timeline").innerHTML = D.experience
    .map(
      (e) => `<li class="tl-item reveal ${e.current ? "current" : ""}">
        <span class="tl-dot"></span>
        <div class="card">
          <div class="tl-head"><h3>${esc(e.role)}</h3><span class="tl-period">${esc(e.period)}</span></div>
          <p class="tl-company"><b>${esc(e.company)}</b> · ${esc(e.location)}</p>
          <ul class="tl-points">${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
          <div class="chips">${(e.tech || []).map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
        </div>
      </li>`
    )
    .join("");

  /* ------------------------------------------------------------- skills */
  $("#skills-grid").innerHTML = D.skills
    .map(
      (s, i) => `<article class="card skill-card reveal" style="--d:${(i % 3) * 0.08}s">
        <div class="box-ic">${icon(s.icon)}</div>
        <h3>${esc(s.title)}</h3>
        <div class="chips">${s.items.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
      </article>`
    )
    .join("");

  /* ------------------------------------------------------------- services */
  $("#services-grid").innerHTML = D.services
    .map(
      (s, i) => `<article class="card service reveal" style="--d:${(i % 3) * 0.08}s">
        <span class="num">0${i + 1}</span>
        <div class="box-ic">${icon(s.icon)}</div>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.text)}</p>
      </article>`
    )
    .join("");

  /* ------------------------------------------------------------- testimonials */
  if (D.testimonials?.length) {
    $("#testimonials").hidden = false;
    $("#testimonials-grid").innerHTML = D.testimonials
      .map(
        (t) => `<figure class="card quote reveal">
          <p>${esc(t.quote)}</p>
          <figcaption><strong>${esc(t.name)}</strong><span>${esc(t.title)}</span></figcaption>
        </figure>`
      )
      .join("");
  }

  /* ------------------------------------------------------------- contact */
  const contactItems = [
    { ic: "mail", label: "Email", value: D.email, href: `mailto:${D.email}` },
    ...(D.phone ? [{ ic: "phone", label: "Phone", value: D.phone, href: `tel:${D.phone.replace(/\s/g, "")}` }] : []),
    ...D.socials
      .filter((s) => ["linkedin", "github"].includes(s.icon))
      .map((s) => ({ ic: s.icon, label: s.label, value: s.url.replace(/^https?:\/\/(www\.)?/, ""), href: s.url })),
    { ic: "pin", label: "Based in", value: D.location },
  ];
  $("#contact-list").innerHTML = contactItems
    .map((c) => {
      const inner = `<span class="c-ic">${icon(c.ic)}</span><span><small>${esc(c.label)}</small><b>${esc(c.value)}</b></span>`;
      return `<li>${c.href ? `<a href="${esc(c.href)}" ${c.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${inner}</a>` : `<div>${inner}</div>`}</li>`;
    })
    .join("");

  const form = $("#contact-form");
  const status = $("#form-status");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let ok = true;
    ["name", "email", "message"].forEach((n) => {
      const f = form.elements[n];
      const valid = f.value.trim() && (f.type !== "email" || /^\S+@\S+\.\S+$/.test(f.value));
      f.classList.toggle("invalid", !valid);
      if (!valid) ok = false;
    });
    if (!ok) {
      status.className = "form-status err";
      status.textContent = "Please fill in all fields with a valid email.";
      return;
    }
    const data = Object.fromEntries(new FormData(form));
    const subject = `[Portfolio] ${data.topic}: ${data.name}`;

    if (D.formspreeId || D.formSubmit) {
      if (location.protocol === "file:") {
        status.className = "form-status err";
        status.textContent = "The form sends once the site is online (or run it through a local server). Until then, email me directly.";
        return;
      }
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      status.className = "form-status";
      status.textContent = "Sending…";
      try {
        const res = D.formspreeId
          ? await fetch(`https://formspree.io/f/${D.formspreeId}`, {
              method: "POST",
              headers: { Accept: "application/json" },
              body: new FormData(form),
            })
          : await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(D.email)}`, {
              method: "POST",
              headers: { "Content-Type": "application/json", Accept: "application/json" },
              body: JSON.stringify({ ...data, _subject: subject, _template: "table", _captcha: "false", _replyto: data.email }),
            });
        const json = await res.json().catch(() => ({}));
        if (!res.ok || json.success === false || json.success === "false") throw new Error(json.message);
        form.reset();
        status.className = "form-status ok";
        status.textContent = "Thanks! Your message has been sent. I'll reply soon.";
      } catch {
        status.className = "form-status err";
        status.textContent = `Couldn't send right now. Please email me directly at ${D.email}.`;
      } finally {
        btn.disabled = false;
      }
    } else {
      const subject = encodeURIComponent(`[Portfolio] ${data.topic}: ${data.name}`);
      const body = encodeURIComponent(`${data.message}\n\n${data.name} (${data.email})`);
      window.location.href = `mailto:${D.email}?subject=${subject}&body=${body}`;
      status.className = "form-status ok";
      status.textContent = "Opening your email app…";
    }
  });

  /* ------------------------------------------------------------- email menu */
  // Clicking any mailto: link shows options, because mailto alone does nothing
  // on computers without a configured mail app.
  const toastEl = $("#toast");
  let toastTimer;
  const toast = (msg) => {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2600);
  };
  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
  };

  const pop = $("#email-pop");
  const closePop = () => (pop.hidden = true);
  const openPop = (anchor) => {
    const to = encodeURIComponent(D.email);
    const su = encodeURIComponent(`Hello ${D.name.split(" ")[0]}, from your portfolio`);
    pop.innerHTML = `
      <div class="ep-head">${icon("mail")}<span>${esc(D.email)}</span></div>
      <button type="button" data-act="copy" role="menuitem">${icon("copy")} Copy email address</button>
      <a role="menuitem" href="https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}" target="_blank" rel="noopener">${icon("external")} Open in Gmail</a>
      <a role="menuitem" href="https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${su}" target="_blank" rel="noopener">${icon("external")} Open in Outlook</a>`;
    pop.hidden = false;
    const r = anchor.getBoundingClientRect();
    const w = pop.offsetWidth;
    const h = pop.offsetHeight;
    const left = Math.max(12, Math.min(r.left, innerWidth - w - 12));
    const top = r.bottom + 8 + h < innerHeight ? r.bottom + 8 : Math.max(12, r.top - h - 8);
    pop.style.left = `${left}px`;
    pop.style.top = `${top}px`;
    pop.querySelector("button").focus({ preventScroll: true });
  };
  document.addEventListener("click", (e) => {
    const mail = e.target.closest('a[href^="mailto:"]');
    if (mail) {
      e.preventDefault();
      openPop(mail);
      return;
    }
    if (e.target.closest('[data-act="copy"]')) {
      copyText(D.email).then(() => toast(`Copied ${D.email}`));
      closePop();
      return;
    }
    if (!e.target.closest("#email-pop") || e.target.closest("a")) closePop();
  });
  document.addEventListener("keydown", (e) => e.key === "Escape" && closePop());
  addEventListener("scroll", closePop, { passive: true });
  let lastW = innerWidth;
  addEventListener("resize", () => innerWidth !== lastW && ((lastW = innerWidth), closePop()));

  /* ------------------------------------------------------------- mobile menu */
  const nav = $("#nav");
  const menuBtn = $("#menu-btn");
  const links = $("#nav-links");
  const setMenu = (open) => {
    links.classList.toggle("open", open);
    nav.classList.toggle("menu-open", open);
    menuBtn.setAttribute("aria-expanded", open);
    menuBtn.innerHTML = icon(open ? "close" : "menu");
  };
  setMenu(false);
  menuBtn.addEventListener("click", () => setMenu(!links.classList.contains("open")));
  links.addEventListener("click", (e) => e.target.closest("a") && setMenu(false));

  /* ------------------------------------------------------------- scroll: nav + progress */
  const progress = $(".scroll-progress");
  const fab = $("#fab-top");
  const orbit = $(".orbit");
  const parallax = !reducedMotion && window.matchMedia("(min-width: 901px)").matches;
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 10);
    const max = document.documentElement.scrollHeight - innerHeight;
    const pct = max > 0 ? y / max : 0;
    progress.style.transform = `scaleX(${pct})`;
    fab.style.setProperty("--p", pct.toFixed(4));
    fab.classList.toggle("show", y > 600);
    if (parallax && y < 1000) orbit.style.transform = `translateY(${y * 0.12}px)`;
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const sectionObs = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        $$(".nav-links a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${en.target.id}`));
      }),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  $$("main section[id]").forEach((s) => sectionObs.observe(s));

  /* ------------------------------------------------------------- reveal + counters */
  const animateCount = (el) => {
    const to = parseFloat(el.dataset.to);
    const dec = +el.dataset.dec;
    if (reducedMotion) return (el.textContent = to.toFixed(dec));
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / 1600, 1);
      el.textContent = (to * (1 - Math.pow(1 - t, 3))).toFixed(dec);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const revealObs = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        $$(".count", en.target).forEach(animateCount);
        revealObs.unobserve(en.target);
      }),
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  /* ------------------------------------------------------------- boot screen */
  const boot = $("#boot");
  const started = performance.now();
  let booted = false;
  const finishBoot = () => {
    if (booted) return;
    booted = true;
    boot.classList.add("done");
    h1.style.setProperty("--start", reducedMotion ? "0s" : ".15s");
    h1.classList.add("go");
    // Reveal what's already on screen right away; observe the rest for scrolling
    $$(".reveal").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight && r.bottom > 0) {
        el.classList.add("in");
        $$(".count", el).forEach(animateCount);
      } else revealObs.observe(el);
    });
  };
  if (reducedMotion) finishBoot();
  else {
    const wait = () => setTimeout(finishBoot, Math.max(0, 1100 - (performance.now() - started)));
    if (document.readyState === "complete") wait();
    else addEventListener("load", wait, { once: true });
    setTimeout(finishBoot, 2600); // never keep visitors waiting
  }

  /* ------------------------------------------------------------- pointer effects */
  if (window.matchMedia("(pointer: fine)").matches && !reducedMotion) {
    document.addEventListener("pointermove", (e) => {
      const card = e.target.closest(".card");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  }

  // Material-style ripple on buttons
  document.addEventListener("pointerdown", (e) => {
    const btn = e.target.closest(".btn");
    if (!btn || reducedMotion) return;
    const r = btn.getBoundingClientRect();
    const size = Math.max(r.width, r.height);
    const s = document.createElement("span");
    s.className = "ripple";
    s.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px`;
    btn.appendChild(s);
    s.addEventListener("animationend", () => s.remove());
  });
})();
