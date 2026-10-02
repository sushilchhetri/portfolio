/* =========================================================================
   🎨  SITE CONFIG: change ALL colors and images here, in one place.
   Text content (bio, jobs, project descriptions...) lives in js/data.js.
   ========================================================================= */

window.SITE_CONFIG = {
  /* ---------------------------------------------------------------- colors
     Any CSS color works: "#4f6bff", "rgb(79,107,255)", "hsl(230 100% 65%)" */
  colors: {
    primary: "#3ddc97", // main brand color: a soft Android mint green
    secondary: "#14b8a6", // second gradient color (teal)
    onPrimary: "#03140d", // text on primary buttons (dark reads best on mint)
    accent: "#a3e635", // "available" status dot (lime)
    background: "#050b09", // page background (near-black with a green tint)
    surface: "#0a1511", // cards
    border: "#16261f", // card and input borders
    text: "#e6f2ec", // main text
    muted: "#8aa597", // secondary text
  },

  /* ---------------------------------------------------------------- images
     Put files in assets/images/ and write the path here. Leave "" if none. */
  images: {
    // Your photo (square works best, at least 800×800). If empty, the hero
    // shows an animated Android phone instead.
    profile: "assets/images/profile.jpg",
    // Your CV. If empty, the "Download CV" button is hidden.
    resume: "assets/resume/Sushil_Chhetri_Senior_Android_Developer.pdf",
    // Detailed case studies with screenshots. Linked as "Download case studies (PDF)"
    // in the Projects section and in the popup of each project marked pdfCaseStudy in data.js.
    caseStudies: "assets/docs/Sushil_Chhetri_Recent_Projects.pdf",
  },

  /* ---------------------------------------------------------------- personal apps
     Look of each card in the "Personal Apps" section, matched by `id` in data.js.
     - icon:  app icon image path (e.g. "assets/images/apps/myapp.png"), or "" for a letter icon */
  personalApps: {
    roastbyai: { color: "#e040fb", icon: "assets/images/apps/roastbyai.png" },
    notistorex: { color: "#22a37a", icon: "assets/images/apps/notistorex.png" },
    galaxyhotspotchat: { color: "#2dd4bf", icon: "assets/images/apps/galaxy-hotspot-chat.png" },
    onepik: { color: "#f59e0b", icon: "assets/images/apps/onepik.png" },
  },

  /* ---------------------------------------------------------------- projects
     Look of each project card, matched by `id` in data.js.
     - color: card accent color
     - icon:  smartphone | car | truck | video | heart | lock | code | cloud | zap | bluetooth | camera
     - image: banner image path. A Play Store feature graphic (1024×500) or a
              landscape screenshot works best. If empty, a phone mockup is drawn.
     - screenshots: phone screenshots (portrait), shown on the card and as a
              gallery in the popup. Each one is { src, caption }. */
  projects: {
    giggologistics: { color: "#3ddc97", icon: "truck", image: "" },
    giggo: { color: "#a3e635", icon: "car", image: "" },
    templebliss: {
      color: "#c9a27e",
      icon: "video",
      image: "",
      screenshots: [
        { src: "assets/images/projects/templebliss/1.jpg", caption: "Customer or advisor sign-in" },
        { src: "assets/images/projects/templebliss/2.jpg", caption: "Browse live advisors" },
        { src: "assets/images/projects/templebliss/3.jpg", caption: "Chat, call or video pricing" },
        { src: "assets/images/projects/templebliss/4.jpg", caption: "Buy session minutes" },
        { src: "assets/images/projects/templebliss/5.jpg", caption: "Session history" },
        { src: "assets/images/projects/templebliss/6.jpg", caption: "Advisor earnings" },
        { src: "assets/images/projects/templebliss/7.jpg", caption: "Advisor profile & services" },
      ],
    },
    roya: {
      color: "#38bdf8",
      icon: "bluetooth",
      image: "",
      screenshots: [
        { src: "assets/images/projects/roya/1.jpg", caption: "Welcome" },
        { src: "assets/images/projects/roya/2.jpg", caption: "Guided face scan" },
        { src: "assets/images/projects/roya/3.jpg", caption: "Face Mesh capture" },
        { src: "assets/images/projects/roya/4.jpg", caption: "Configure your mask" },
        { src: "assets/images/projects/roya/5.jpg", caption: "Stripe card payment" },
        { src: "assets/images/projects/roya/6.jpg", caption: "Scanning for the mask (BLE)" },
        { src: "assets/images/projects/roya/7.jpg", caption: "Live vitals dashboard" },
      ],
    },
    vult: { color: "#ff8a4c", icon: "lock", image: "" },
  },
};

// Apply the colors immediately (this file loads in <head>, so there's no color flash)
(function () {
  var c = window.SITE_CONFIG.colors;
  var s = document.documentElement.style;
  Object.keys(c).forEach(function (k) { s.setProperty("--" + k, c[k]); });
})();
