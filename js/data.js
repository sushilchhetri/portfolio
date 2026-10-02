/* =========================================================================
   ✏️  CONTENT: all the text of the portfolio lives here.
   Colors and images are in js/config.js. Save and refresh to see changes.
   ========================================================================= */

window.PORTFOLIO = {
  name: "Sushil Chhetri",
  role: "Senior Android Developer",
  // Rotating text under the headline (typing animation)
  roles: [
    "Senior Android Developer",
    "Kotlin & Jetpack Compose",
    "MVVM + Clean Architecture",
    "BLE & ML Kit integrations",
    "Open to freelance projects",
  ],
  // The middle part is shown with a gradient highlight
  headline: ["I build ", "Android apps", " that scale and perform."],
  tagline:
    "Senior Android Developer with 5+ years of experience building production-grade apps with Kotlin and Jetpack Compose. I specialize in Bluetooth LE device communication, offline-first and Clean Architecture.",
  location: "Mohali, India",
  email: "SushilChhetri060@gmail.com",
  // Optional: shown in the contact section if set, e.g. "+91 98765 00000"
  phone: "",
  availableForWork: true,
  availabilityText: "Open to freelance projects & new opportunities",


  // Contact form delivery (no mail app needed):
  // - formSubmit: true → messages are emailed to `email` above via https://formsubmit.co (free, no account).
  //   The FIRST message sends you an activation email; click "Activate Form" once and it works from then on.
  // - formspreeId: or create a free form at https://formspree.io and paste its id (e.g. "xyzabcd"); it takes priority.
  formSubmit: true,
  // Alias from FormSubmit's activation email. Used instead of your email address in the
  // form code, so bots reading the page can't harvest your address from it.
  formSubmitId: "bfd852579c2f68f601c4f54c497a9189",
  formspreeId: "",

  socials: [
    { label: "GitHub", icon: "github", url: "https://github.com/sushilchhetri" },
    { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/sushil-chhetri-79b58b163" },
    { label: "Email", icon: "mail", url: "mailto:SushilChhetri060@gmail.com" },
  ],

  stats: [
    { value: 5, suffix: "+", label: "Years experience" },
    { value: 3, suffix: "", label: "Companies" },
    { value: 30, suffix: "%", label: "Fewer crashes & ANRs" },
    { value: 10, suffix: "K+", label: "GIGGO Partner downloads" },
  ],

  about: {
    paragraphs: [
      "I'm a Senior Android Developer who builds scalable, production-grade Android apps with Kotlin, Java, Jetpack Compose, MVVM and Clean Architecture.",
      "My work covers performance optimization, BLE and device communication, REST APIs and offline-first architecture. Memory profiling, threading fixes and lifecycle optimization have cut crash and ANR rates by about 30% in apps I've worked on.",
      "I currently work at Codknox Software Solutions in Mohali. I most recently rebuilt the GIGGO Partner app from Java to Kotlin + Jetpack Compose in one month.",
    ],
    education: [
      { title: "Master of Computer Application (MCA)", place: "Chandigarh University, Mohali (Distance Learning)", year: "2025" },
      { title: "Bachelor of Computer Application (BCA)", place: "Sri Guru Gobind Singh College, Chandigarh", year: "2019" },
      { title: "Introduction to Programming Using Java", place: "HackerRank certification", year: "" },
    ],
    yearsOfExperience: 5,
    stack: ["Kotlin", "Compose", "Coroutines", "Hilt", "Room", "BLE"],
  },

  // Shown as a scrolling ticker
  marquee: [
    "Kotlin", "Jetpack Compose", "Coroutines", "Flow", "MVVM", "Clean Architecture", "Hilt",
    "Room", "Retrofit", "WorkManager", "BLE / GATT", "ML Kit", "CameraX", "Firebase", "GitHub Actions",
  ],

  skills: [
    {
      title: "Languages & UI",
      icon: "code",
      items: ["Kotlin", "Java", "Jetpack Compose", "XML Layouts"],
    },
    {
      title: "Architecture & DI",
      icon: "layers",
      items: ["MVVM", "Clean Architecture", "SOLID Principles", "Hilt", "Dagger"],
    },
    {
      title: "Async, Network & Storage",
      icon: "zap",
      items: ["Coroutines", "Flow", "RxJava", "Retrofit", "REST APIs", "Room", "SQLite", "WorkManager"],
    },
    {
      title: "Connectivity & Vision",
      icon: "bluetooth",
      items: ["Bluetooth LE", "Bluetooth GATT", "Device Communication", "Google ML Kit", "MediaPipe", "OpenCV", "CameraX"],
    },
    {
      title: "Performance & Testing",
      icon: "shield",
      items: ["ANR Analysis", "Memory Leak Detection", "Profiling", "ProGuard / R8", "JUnit", "Mockito"],
    },
    {
      title: "Tools & DevOps",
      icon: "tool",
      items: ["Git", "GitHub Actions (CI/CD)", "Firebase", "Gradle", "Jira", "Agile", "Play Store Deployment"],
    },
  ],

  experience: [
    {
      role: "Sr. Android Developer",
      company: "Codknox Software Solutions Pvt. Ltd.",
      period: "Jul 2026 — Present",
      location: "Mohali, India",
      current: true,
      points: [
        "Rebuilt the GIGGO Partner app from Java to Kotlin + Jetpack Compose in one month, modernizing the entire UI architecture. The app has 10K+ downloads on Google Play.",
        "Building and maintaining consumer-facing Android apps using Kotlin, Jetpack Compose and MVVM Clean Architecture.",
        "Working with cross-functional teams to ship features, running code reviews and maintaining coding standards.",
      ],
      tech: ["Kotlin", "Jetpack Compose", "MVVM", "Clean Architecture"],
    },
    {
      role: "Android Developer",
      company: "Glocify Technologies Pvt. Ltd.",
      period: "Dec 2021 — Jan 2026",
      location: "Chandigarh, India",
      points: [
        "Designed and built scalable features for consumer-facing apps with high daily active usage, in a team of 2–5 engineers.",
        "Cut crash and ANR rates by about 30% through memory profiling, threading fixes and lifecycle optimization, improving Play Store ratings.",
        "Built an offline-first architecture with WorkManager, Room and REST APIs for reliability on poor connections.",
        "Implemented MVVM + Clean Architecture with Hilt, improving reusability, testability and delivery speed.",
        "Rebuilt an existing app's UI with Jetpack Compose, improving UX and candidate engagement.",
      ],
      tech: ["Kotlin", "Hilt", "Room", "WorkManager", "Compose"],
    },
    {
      role: "Junior Android Developer",
      company: "Lynhill Software",
      period: "Nov 2020 — Nov 2021",
      location: "Mohali, Punjab",
      points: [
        "Delivered 3 Android apps from scratch, handling UI, business logic and API integration on my own.",
        "Refined UI/UX with XML layouts to improve app flow and user satisfaction scores.",
        "Worked with QA to find and fix bugs, raising code quality and shrinking the bug backlog.",
      ],
      tech: ["Java", "Kotlin", "XML", "REST APIs"],
    },
  ],

  projects: [
    {
      id: "giggologistics", // colors, icon & image → js/config.js
      title: "GIGGO — Logistics App",
      description:
        "Customer-facing app of the GIGGO logistics platform, live on Google Play. Built and maintained with Kotlin, Jetpack Compose and MVVM Clean Architecture.",
      category: "Compose",
      tech: ["Kotlin", "Jetpack Compose", "MVVM", "REST APIs"],
      metrics: ["Live on Google Play"],
      featured: true,
      // Shown in the project popup
      highlights: [
        "Building and maintaining consumer-facing features with Kotlin and Jetpack Compose.",
        "MVVM + Clean Architecture for a testable, scalable codebase.",
        "Code reviews and shared coding standards with a cross-functional team.",
      ],
      links: {
        play: "https://play.google.com/store/search?q=giggo&c=apps&hl=en_IN",
      },
    },
    {
      id: "giggo", // colors, icon & image → js/config.js
      title: "GIGGO Partner — Driver/Partner App",
      description:
        "Rebuilt the entire app from Java to Kotlin + Jetpack Compose in one month. MVVM Clean Architecture, with faster load times and lower memory use after the migration.",
      category: "Compose",
      tech: ["Kotlin", "Jetpack Compose", "MVVM", "Clean Architecture"],
      metrics: ["10K+ downloads", "Live on Google Play"],
      featured: true,
      // Shown in the project popup
      highlights: [
        "Rebuilt the entire app from Java to Kotlin + Jetpack Compose in one month, modernizing the full UI.",
        "MVVM Clean Architecture with a clear separation of concerns, for better testability and long-term maintainability.",
        "Faster load times and lower memory use after the migration.",
      ],
      links: {
        play: "https://play.google.com/store/apps/details?id=ng.giglogistics.giglgopartner&hl=en_IN",
      },
    },
    {
      id: "templebliss", // colors, icon & screenshots → js/config.js
      title: "TempleBliss — Live Psychic Reading Platform",
      description:
        "Live psychic-reading platform where users connect with vetted advisors over chat, voice or video. Users browse advisors, buy minutes, book sessions and leave reviews. Advisors manage their profiles, pricing, sessions and earnings.",
      role: "Sole developer: full app architecture, Twilio integration, session and call management.",
      pdfCaseStudy: true, // shows "Download case study (PDF)" in the popup
      category: "Real-time",
      tech: ["Kotlin", "MVVM", "Hilt", "Twilio (Chat · Voice · Video)", "RxJava", "WorkManager", "Retrofit", "Firebase"],
      metrics: ["Chat · Voice · Video", "Customer + advisor modes"],
      // Shown in the project popup
      highlights: [
        "Real-time chat, voice and video sessions between users and advisors with the Twilio SDK.",
        "Session and notification management with WorkManager and RxJava, with careful call lifecycle handling.",
        "In-app payments with minute packages and session booking.",
        "Session history, reviews and feedback, plus advisor profiles, pricing and earnings.",
        "Clean MVVM architecture with Hilt dependency injection.",
      ],
      links: {},
    },
    {
      id: "roya", // colors, icon & image → js/config.js
      // Flagship: shown as the big highlighted card above the other projects
      spotlight: true,
      spotlightLabel: "Flagship project · Bluetooth LE",
      title: "Roya Medical — Smart Mask Health Tracking",
      description:
        "Health-tech app for ordering and using a custom smart medical mask. It scans the user's face with ML Kit to fit the mask, handles the full order and payment, then connects to the mask's Bluetooth LE sensor to track SpO₂, heart rate and other vitals with daily and monthly history.",
      role: "Sole developer: built the entire app from scratch.",
      pdfCaseStudy: true, // shows "Download case study (PDF)" in the popup
      category: "BLE & ML",
      tech: ["Kotlin", "Bluetooth LE / GATT", "ML Kit Face Mesh", "MVVM", "Hilt", "RxJava", "Retrofit", "Firebase Auth", "Firestore", "Stripe SDK", "Room", "WorkManager", "Custom Views", "JUnit", "Mockito"],
      metrics: ["Bluetooth LE + GATT", "Live SpO₂ & heart rate", "ML Kit Face Mesh", "Sole developer"],
      // Shown in the project popup as a step-by-step "How it works" flow
      caseStudy: [
        {
          icon: "lock",
          title: "Sign up securely",
          text: "Users create an account and sign in with Firebase Authentication.",
        },
        {
          icon: "scan",
          title: "Scan the face",
          text: "A guided scan asks the user to turn their head left, right, up and down while Google ML Kit Face Mesh captures the full set of 3D face-mesh points.",
        },
        {
          icon: "ruler",
          title: "Measure for the mask",
          text: "From the mesh points, the app calculates key facial measurements, such as the nose-to-mouth distance and overall face shape, to get the right mask fit.",
        },
        {
          icon: "smartphone",
          title: "Configure & order",
          text: "Users pick the mask color and add-ons, upload their prescription, enter an address and pay by card with the Stripe SDK.",
        },
        {
          icon: "bluetooth",
          title: "Pair the mask over BLE",
          text: "The mask carries a custom Bluetooth LE sensor. The app scans for it, connects over GATT and keeps the connection stable in the background.",
        },
        {
          icon: "heart",
          title: "Read live vitals",
          text: "SpO₂, heart rate and other vital signs stream from the device to a live dashboard.",
        },
        {
          icon: "database",
          title: "Store & sync, offline-first",
          text: "Every reading is saved to a local Room database first, then synced to the server in the background with WorkManager, so no data is lost on a bad connection.",
        },
        {
          icon: "chart",
          title: "Daily & monthly tracking",
          text: "Users follow their health trends with daily and monthly views built from the stored history.",
        },
      ],
      // Shown on the flagship card and in the popup
      highlights: [
        "Face scanning with Google ML Kit Face Mesh to measure facial distances for a custom mask fit.",
        "Bluetooth LE / GATT connection to the mask's custom sensor for live SpO₂ and heart-rate readings.",
        "Complete ordering flow: mask colors and add-ons, prescription upload, address and Stripe card payments.",
        "Offline-first storage in Room with background server sync via WorkManager, plus daily and monthly tracking.",
        "Dependency Inversion (SOLID) so health data can be mocked in unit tests with JUnit and Mockito.",
      ],
      links: {},
    },
    {
      id: "vult", // colors, icon & image → js/config.js
      title: "Vult — Private Cloud Storage",
      description:
        "Secure file storage and sharing with encrypted data handling, chunked uploads with retry logic, and background uploads tuned for poor connections.",
      category: "Security",
      tech: ["Kotlin", "Encryption", "Retrofit", "WorkManager"],
      metrics: ["Live on Google Play", "Chunked uploads"],
      // Shown in the project popup
      highlights: [
        "Secure file storage and sharing with encrypted data handling and REST API integration.",
        "Chunked file uploads with retry logic to recover from dropped connections.",
        "Background uploads tuned for low-connectivity scenarios.",
      ],
      links: {
        play: "https://play.google.com/store/apps/details?id=network.zus.vultbox.prod&hl=en_IN",
      },
    },
  ],

  // Your own apps / side projects, shown as Play Store-style cards.
  // Colors and icons for each app go in js/config.js → personalApps.
  // Example:
  // {
  //   id: "myapp",
  //   name: "My App",
  //   tagline: "One-line pitch of the app",
  //   description: "What it does and why you built it.",
  //   tags: ["Productivity"],
  //   status: "Live", // "Live" | "Beta" | "In development"
  //   links: { play: "https://play.google.com/store/apps/details?id=...", github: "" },
  // },
  personalApps: [
    {
      id: "roastbyai",
      name: "RoastByAi",
      tagline: "AI Roast Generator",
      description:
        "Turn any photo into witty AI roasts in seconds. Pick a persona (Savage, Mild, LinkedIn Mode, Brutal or Aura Check) and share the result.",
      tags: ["AI", "Entertainment"],
      status: "Live",
      links: { play: "https://play.google.com/store/apps/details?id=com.roastbyai.app&hl=en_IN" },
    },
    {
      id: "notistorex",
      name: "NotiStoreX",
      tagline: "Notification vault",
      description:
        "Saves every notification automatically, with smart filters, usage analytics and passcode lock. All data stays on the device.",
      tags: ["Productivity", "Privacy-first"],
      status: "Live",
      links: { play: "https://play.google.com/store/apps/details?id=com.notistorex.app&hl=en_IN" },
    },
    {
      id: "galaxyhotspotchat",
      name: "Galaxy Hotspot Chat",
      tagline: "Group chat without internet",
      description:
        "Create and join chat rooms over Wi-Fi or a mobile hotspot, with no internet connection needed. Host a room in a few taps and share the IP for others to join.",
      tags: ["Communication", "Offline / LAN"],
      status: "Live",
      links: { play: "https://play.google.com/store/apps/details?id=com.ConnectChat&hl=en_IN" },
    },
    {
      id: "onepik",
      name: "OnePik",
      tagline: "Anime stickers & wallpapers",
      description:
        "Fan-made One Piece sticker and wallpaper app with themed sticker packs and HD 4K wallpapers, updated regularly.",
      tags: ["Entertainment", "Stickers"],
      status: "Live",
      links: { play: "https://play.google.com/store/apps/details?id=com.onepik&hl=en_IN" },
    },
  ],

  services: [
    {
      icon: "smartphone",
      title: "Native Android Apps",
      text: "End-to-end app development in Kotlin and Jetpack Compose, from architecture to Play Store release.",
    },
    {
      icon: "refresh",
      title: "Java → Kotlin & Compose Migration",
      text: "Move legacy Java/XML apps to Kotlin, Compose and MVVM Clean Architecture, as I did for GIGGO Partner in one month.",
    },
    {
      icon: "zap",
      title: "Performance & Stability",
      text: "Fix crashes, ANRs, memory leaks and frame drops with profiling, threading and lifecycle fixes.",
    },
    {
      icon: "bluetooth",
      title: "BLE & Device Integration",
      text: "Bluetooth LE / GATT communication with health devices, wearables and IoT hardware.",
    },
    {
      icon: "camera",
      title: "ML Kit & Camera Features",
      text: "On-device vision features with Google ML Kit, MediaPipe, OpenCV and CameraX.",
    },
    {
      icon: "rocket",
      title: "Offline-first & Play Store Delivery",
      text: "Room + WorkManager sync, REST API integration, CI/CD with GitHub Actions and Play Store deployment.",
    },
  ],

  // Add real client quotes here to show a testimonials section, e.g.
  // { quote: "Delivered our app ahead of schedule...", name: "Client Name", title: "CEO, Company" }
  testimonials: [],
};
