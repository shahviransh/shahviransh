export type ProjectCategory = "security" | "fullstack" | "ml" | "tools";

export interface Project {
  name: string;
  tagline: string;
  summary: string;
  bullets: string[];
  stack: string[];
  categories: ProjectCategory[];
  featured?: boolean;
  period: string;
  links: { label: string; href: string; icon?: string }[];
}

export const profile = {
  name: "Viransh Shah",
  pronunciation: "Vi-ra-ansh",
  handle: "shahviransh",
  headline: "Software Developer & Security Analyst",
  roles: ["Full-Stack Developer", "Aspiring Security Analyst", "CTF Competitor", "Desktop App Tinkerer"],
  degree: "B.A.Sc. Computer Science, Minor in Statistics",
  school: "McMaster University",
  graduated: "June 2026",
  location: "Greater Toronto Area, Ontario",
  emails: [
    { address: "viranshshah@gmail.com", label: "Personal" },
    { address: "shahv47@mcmaster.ca", label: "McMaster" },
  ],
  intro:
    "I build software, then try to break it. I spent a year as the only developer on two apps for Environment and Climate Change Canada scientists, and most of my free time goes into CTFs, packet captures and log hunting.",
  secondary:
    "My team MacHackers took 2nd in Toronto and 3rd at the CyberSci Regional Finals 2025. I write code like someone is going to attack it, because someone usually does.",
  resumes: [
    {
      label: "Software Development",
      href: "/Viransh-Shah-Resume-Software-Development.pdf",
      hint: "Full-stack, desktop and product work",
      icon: "code",
    },
    {
      label: "Security Analyst",
      href: "/Viransh-Shah-Resume-Security.pdf",
      hint: "SOC, incident response and detection",
      icon: "shield",
    },
  ],
  socials: [
    { label: "GitHub", icon: "github", href: "https://github.com/shahviransh" },
    { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/viransh-shah" },
    {
      label: "TryHackMe",
      icon: "shield",
      href: "https://github.com/shahviransh/shahviransh/tree/main/TryHackMe/Certificates",
    },
    { label: "Hugging Face", icon: "model", href: "https://huggingface.co/shahviransh" },
    { label: "Email", icon: "mail", href: "mailto:viranshshah@gmail.com" },
  ],
};

export const stats = [
  { value: "2nd", label: "CyberSci 2025, Toronto", detail: "3rd at Regional Finals" },
  { value: "12 mo", label: "Federal co-op", detail: "ECCC & Canada Water Agency" },
  { value: "3.7", label: "GPA, Dean's Honours", detail: "A+ in Database, DSA, InfoSec & Networks" },
  { value: "65+", label: "TryHackMe rooms", detail: "Blue and red team" },
];

export const whoami = [
  { key: "user", value: "shahviransh" },
  { key: "role", value: "software developer / security analyst" },
  { key: "edu", value: "McMaster CS + Stats, class of '26" },
  { key: "focus", value: "secure full-stack apps, blue-team work" },
  { key: "stack", value: "Python, TypeScript, Vue, Flask, Splunk, Wireshark" },
  { key: "status", value: "open to SWE and security roles" },
];

export interface ExperienceEntry {
  org: string;
  role: string;
  period: string;
  location: string;
  kind: "Co-op" | "Leadership" | "Teaching";
  hash: string;
  bullets: string[];
  stack: string[];
  links?: { label: string; href: string }[];
}

export const cybersciPhotos = [
  {
    src: "/images/cybersci-2025-toronto-2nd.jpg",
    alt: "MacHackers holding certificates at CyberSci Regional Finals 2025 in Toronto",
    caption: "MacHackers at CyberSci Regional Finals 2025",
    width: 2560,
    height: 1920,
  },
  {
    src: "/images/cybersci-2025-toronto-score.jpg",
    alt: "CyberSci 2025 Toronto region standings. MacHackers placed 2nd with 2336 points.",
    caption: "Toronto standings: 2nd with 2336 points",
    width: 953,
    height: 596,
    contain: true,
  },
];

export const experience: ExperienceEntry[] = [
  {
    org: "Environment and Climate Change Canada & Canada Water Agency",
    role: "Full Stack Developer, IMWEBs Viewer & Nutri View",
    period: "Sept 2024 - Aug 2025",
    location: "Burlington & North York, ON",
    kind: "Co-op",
    hash: "e7c2a19",
    bullets: [
      "Only developer on IMWEBs Viewer and Nutri View, from first prototype to production. Both turn watershed and water-quality data into tables, charts and maps for federal scientists.",
      "Locked both down with bcrypt, JWT sessions that can actually be revoked, role-based access, and checks against SQL injection and path traversal.",
      "Built Nutri View's Excel-to-SQLite and shapefile-to-GeoPackage converters, plus guest permissions that deny by default and admins can change without a redeploy.",
      "Shipped signed Windows, macOS and Linux builds from one codebase with GitHub Actions, deployed on Azure VMs behind IIS over HTTPS.",
    ],
    stack: ["Vue.js", "Tauri", "Flask", "SQLite", "GeoPackage", "Azure", "IIS", "bcrypt", "RBAC", "GitHub Actions"],
    links: [
      { label: "IMWEBs Viewer", href: "https://github.com/shahviransh/ECCC-IMWEBs-Viewer" },
      { label: "Nutri View", href: "https://github.com/shahviransh/Nutri-View" },
    ],
  },
  {
    org: "McMaster Cyber Society",
    role: "Founding Executive Member",
    period: "Sept 2023 - Present",
    location: "Hamilton, ON",
    kind: "Leadership",
    hash: "4b91f0d",
    bullets: [
      "Took 2nd in Toronto and 3rd at CyberSci Regional Finals 2025 with MacHackers. Also played Advent of Cyber and CyberStart Canada.",
      "Rebuild attack chains from PCAPs, memory images and file metadata with Wireshark, tcpdump and CyberChef.",
      "Crack weak hashes with John the Ripper and replay password spraying with Hydra to see what it looks like in the logs.",
    ],
    stack: ["Wireshark", "tcpdump", "CyberChef", "Nmap", "Metasploit", "Burp Suite", "Kali Linux"],
    links: [
      {
        label: "CyberSci Toronto 2nd",
        href: "https://cybersecuritychallenge.ca/wp-content/uploads/2025/11/toronto-2nd-scaled.jpg",
      },
    ],
  },
  {
    org: "McMaster University",
    role: "Teaching Assistant, SFWRENG 2C03, 2XC3 & COMPSCI 1XD3",
    period: "Jan 2024 - Apr 2026 (3 terms)",
    location: "Hamilton, ON",
    kind: "Teaching",
    hash: "a03d6e5",
    bullets: [
      "Ran labs and tutorials for 100+ students on algorithms, data structures, Linux, Git, C and web basics (HTML, CSS, JavaScript, PHP).",
    ],
    stack: ["Algorithms", "Data Structures", "Linux", "Git", "C", "JavaScript", "PHP"],
  },
];

export const education = {
  school: "McMaster University",
  credential: "B.A.Sc. Computer Science, Minor in Statistics",
  period: "Sept 2021 - June 2026",
  location: "Hamilton, ON",
  highlights: [
    "Graduated with Distinction, Dean's Honours List (3.7 / 4.0)",
    "Faculty of Engineering Achievement Award",
    "A+ in Information Security, Networks & Security, Databases, and DSA",
  ],
};

export interface SkillGroup {
  name: string;
  icon: string;
  items: string[];
}

export const skillSides: { id: "build" | "defend"; label: string; blurb: string; groups: SkillGroup[] }[] = [
  {
    id: "build",
    label: "build",
    blurb: "What I ship products with.",
    groups: [
      {
        name: "Languages",
        icon: "code",
        items: ["Python", "TypeScript", "JavaScript", "Rust", "Java", "C", "SQL", "PHP", "Bash", "PowerShell"],
      },
      {
        name: "Frameworks",
        icon: "cpu",
        items: ["Vue.js", "React", "React Native", "Expo", "Flask", "FastAPI", "Tauri", "Electron", "Tailwind CSS", "Firebase"],
      },
      {
        name: "Data & Cloud",
        icon: "server",
        items: ["Azure", "Google Cloud", "Docker", "IIS", "PostgreSQL", "SQL Server", "MySQL", "SQLite", "REST APIs"],
      },
      {
        name: "Tooling",
        icon: "terminal",
        items: ["Git", "GitHub Actions", "Linux", "VirtualBox", "VSCode", "Cursor", "Claude Code", "Codex"],
      },
    ],
  },
  {
    id: "defend",
    label: "defend",
    blurb: "What I investigate and break things with.",
    groups: [
      {
        name: "Security Ops",
        icon: "radar",
        items: [
          "Alert triage",
          "NIST incident response",
          "Log & packet analysis",
          "Windows event logs",
          "Linux auth.log",
          "SIEM & EDR",
          "Email headers",
          "Active Directory",
          "Digital forensics",
        ],
      },
      {
        name: "Security Tools",
        icon: "shield",
        items: ["Splunk", "Wireshark", "tcpdump", "CyberChef", "Nmap", "Burp Suite", "Metasploit", "John the Ripper", "Hydra", "SQLMap", "Kali Linux"],
      },
      {
        name: "Secure Dev",
        icon: "lock",
        items: ["RBAC", "bcrypt", "JWT revocation", "Input hardening", "HTTPS & reverse proxy", "E2E encryption", "OS firewall rules"],
      },
    ],
  },
];

export const projectFilters: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "all" },
  { id: "security", label: "security" },
  { id: "fullstack", label: "full-stack" },
  { id: "ml", label: "ml" },
  { id: "tools", label: "tools" },
];

export const projects: Project[] = [
  {
    name: "Slicc",
    tagline: "Group bill splitting with real E2E chat",
    period: "Sept 2025 - Apr 2026",
    summary:
      "Capstone mobile app for splitting bills and picking restaurants, built by a 7-person team and shipped to Android.",
    bullets: [
      "Designed the chat encryption with TweetNaCl: X25519 key agreement, XSalsa20-Poly1305 messages and per-member group-key wrapping. Firebase only ever sees ciphertext.",
      "Built a When2Meet-style scheduler inside the chat, plus event and expense-splitting flows.",
      "Gemini reads receipts into JSON, with a 15 second timeout and on-device ML Kit OCR as the fallback.",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Firebase", "TweetNaCl", "Gemini"],
    categories: ["security", "fullstack"],
    featured: true,
    links: [{ label: "Repo", href: "https://github.com/mac-capstone/slicc" }],
  },
  {
    name: "MindVault",
    tagline: "Study lockdown enforced by your own firewall",
    period: "2025",
    summary:
      "Desktop app that closes your distractions for 1 minute to 8 hours while a study desk and offline games stay open.",
    bullets: [
      "Stricter sessions add outbound firewall rules (Windows Firewall, nftables, pf) and remove them on exit. Deny the admin prompt and nothing changes.",
      "PIN and recovery-key hashes live in a local SQLite file. API keys stay in the system keychain.",
      "The built-in tutor only does quizzes, summaries, flashcards and grading. No freeform chat box to sneak around with.",
    ],
    stack: ["Tauri", "Rust", "React", "TypeScript", "SQLite", "nftables", "pf"],
    categories: ["security", "tools"],
    featured: true,
    links: [{ label: "Repo", href: "https://github.com/shahviransh/MindVault" }],
  },
  {
    name: "Nutri View",
    tagline: "Nutrient modelling with deny-by-default guests",
    period: "Sept 2024 - Aug 2025",
    summary:
      "IMWEBs Viewer's sibling for nutrient scenarios, with admin and guest roles and data converters built in.",
    bullets: [
      "Every API route declares the permission it needs. Guest read, write, upload and download all start off and admins flip them live.",
      "Converts Excel workbooks into SQLite tables and spatial uploads into GeoPackages, so analysts stop building them by hand.",
      "bcrypt logins, revocable JWT sessions and input checks on every upload route.",
    ],
    stack: ["Vue.js", "Flask", "Tauri", "SQLite", "GeoPackage", "JWT", "RBAC", "Azure"],
    categories: ["fullstack", "security"],
    featured: true,
    links: [{ label: "Repo", href: "https://github.com/shahviransh/Nutri-View" }],
  },
  {
    name: "IMWEBs Viewer",
    tagline: "Watershed analytics for federal scientists",
    period: "Sept 2024 - Aug 2025",
    summary:
      "Desktop and web app that turns watershed model output into tables, charts and maps for ECCC scientists.",
    bullets: [
      "Solo build from prototype to production. Scientists explore the data themselves instead of asking for exports.",
      "Every data and map route needs a valid token, and logging out revokes it server-side.",
      "Signed builds for three OSes from one codebase, deployed on Azure behind IIS and HTTPS.",
    ],
    stack: ["Vue.js", "Flask", "Tauri", "SQLite", "Azure", "IIS", "GitHub Actions"],
    categories: ["fullstack"],
    featured: true,
    links: [{ label: "Repo", href: "https://github.com/shahviransh/ECCC-IMWEBs-Viewer" }],
  },
  {
    name: "CleanFade",
    tagline: "Turns Spotify down before the swear word",
    period: "2025",
    summary:
      "Cross-platform app that ducks Spotify's volume when it hears profanity in whatever is playing.",
    bullets: [
      "Captures speaker audio, transcribes it with faster-whisper and can line up synced lyrics to duck the line early.",
      "Native volume control on each OS: WASAPI on Windows, AppleScript on macOS, pactl on Linux.",
      "A Python sidecar bundled inside a Tauri app, released for all three OSes through GitHub Actions.",
    ],
    stack: ["Tauri", "Rust", "React", "Python", "faster-whisper", "PyInstaller"],
    categories: ["tools"],
    featured: true,
    links: [{ label: "Repo", href: "https://github.com/shahviransh/cleanfade" }],
  },
  {
    name: "SecTest MCP Server",
    tagline: "Kali tools for an AI assistant, over SSH",
    period: "Open source",
    summary:
      "MCP server that lets an AI assistant run security tools on an authorized Kali Linux VM.",
    bullets: [
      "Ask for an Nmap, Nikto, SQLMap, WPScan or dirb run and it happens on the VM over key-based SSH.",
      "Host and user come from Docker secrets, the key is mounted as a file, and the container runs as non-root.",
      "Built for authorized testing only, and the README says so loudly.",
    ],
    stack: ["Python", "MCP", "Docker", "SSH", "Kali Linux"],
    categories: ["security", "tools"],
    links: [{ label: "Repo", href: "https://github.com/shahviransh/Sectest-MCP-Server" }],
  },
  {
    name: "Textbook MCP Server",
    tagline: "Hardened PDF tools for AI assistants",
    period: "2025",
    summary:
      "MCP server that pulls tables of contents, summaries, flashcards and quizzes out of textbook PDFs.",
    bullets: [
      "Only OCRs the pages that actually have images, so text-heavy books stay fast.",
      "File-type checks, page and size limits, per-tool rate limits and a non-root container out of the box.",
    ],
    stack: ["Python", "MCP", "Docker", "Tesseract OCR", "pdfplumber", "Transformers"],
    categories: ["tools", "security"],
    links: [{ label: "Repo", href: "https://github.com/shahviransh/Textbook-MCP-Server" }],
  },
  {
    name: "Fraud Detection at Scale",
    tagline: "Catching fraud in 1.47M transactions",
    period: "COMPSCI 4AL3",
    summary:
      "Team fraud classifier. Our weighted ensemble hit 61.3% recall and 0.877 AUC-ROC on held-out data.",
    bullets: [
      "I led feature engineering (52+ temporal and behavioural features) and the ADASYN resampling pipeline.",
      "Built the cost-based threshold optimizer, the GPU training path (PyTorch, RAPIDS cuML) and the tuned XGBoost model.",
      "Ran the customer-location leakage analysis. A teammate owned the focal-loss network and final ensemble.",
    ],
    stack: ["PyTorch", "XGBoost", "RAPIDS cuML", "scikit-learn", "ADASYN"],
    categories: ["ml"],
    links: [{ label: "Repo", href: "https://github.com/shahviransh/COMPSCI-4AL3-Project" }],
  },
  {
    name: "20 Newsgroups",
    tagline: "ModernBERT plus an annotation study",
    period: "COMPSCI 4NL3",
    summary:
      "Three-person NLP project: fine-tuned ModernBERT-large to 72.5% accuracy and 0.715 macro F1 on 20-way topic classification.",
    bullets: [
      "Stripped headers, footers and quotes first so the model couldn't cheat off metadata.",
      "Built the annotation tool and scored agreement with Cohen's Kappa, Fleiss' Kappa and Krippendorff's Alpha.",
    ],
    stack: ["Python", "ModernBERT", "Transformers", "pandas", "scikit-learn"],
    categories: ["ml"],
    links: [{ label: "Repo", href: "https://github.com/shahviransh/COMPSCI-4NL3-Project" }],
  },
  {
    name: "Banking Transactions API",
    tagline: "Transfers that can't overdraw",
    period: "Side project",
    summary:
      "Spring Boot REST API for accounts, transfers and transaction history.",
    bullets: [
      "Clean controller, service and repository layers, with DTOs at the edge so internals never leak.",
      "BigDecimal money, synchronized transfers and matching currencies. Bad input is a 400, a missing account a 404, no funds a 422.",
      "MockMvc tests cover every one of those paths.",
    ],
    stack: ["Java 21", "Spring Boot", "Maven", "MockMvc", "Postman"],
    categories: ["fullstack"],
    links: [{ label: "Repo", href: "https://github.com/shahviransh/banking-transactions-api" }],
  },
  {
    name: "Watershed Dashboard",
    tagline: "The prototype before IMWEBs Viewer",
    period: "2024",
    summary:
      "Vue dashboard, Flask API and GeoServer-backed Leaflet map, each deployed on its own.",
    bullets: [
      "Pick a subbasin and the line and pie charts redraw from the API.",
      "Draggable panels let you compare the map against the time series side by side.",
    ],
    stack: ["Vue 3", "Flask", "Leaflet", "GeoServer", "Chart.js", "Vercel"],
    categories: ["fullstack"],
    links: [
      { label: "Frontend", href: "https://github.com/shahviransh/ECCC-Assignment-Frontend" },
      { label: "Backend", href: "https://github.com/shahviransh/ECCC-Assignment-Backend" },
    ],
  },
  {
    name: "Media Toolkit",
    tagline: "Scrapers, dedupe and video summaries",
    period: "2024",
    summary:
      "Python utilities around Google APIs: link discovery, duplicate checks, bulk image downloads and video summaries.",
    bullets: [
      "Finds duplicates in JSON catalogues by canonical URL.",
      "Turns big image dumps into static HTML galleries you can browse offline.",
    ],
    stack: ["Python", "Google APIs", "BeautifulSoup", "Docker"],
    categories: ["tools"],
    links: [{ label: "Repo", href: "https://github.com/shahviransh/GoogleAPIsProject" }],
  },
];

export interface Credential {
  name: string;
  issuer: string;
  year: string;
  href?: string;
  detail: string;
}

export const credentials: Credential[] = [
  {
    name: "Cyber Security 101",
    issuer: "TryHackMe",
    year: "2025",
    href: "https://github.com/shahviransh/shahviransh/blob/main/TryHackMe/Certificates/Cyber%20Security%20101%20Certificate%20of%20Completion.pdf",
    detail: "Working an alert, the NIST IR lifecycle, forensics, and where SIEM, IDS and firewalls fit.",
  },
  {
    name: "Pre Security",
    issuer: "TryHackMe",
    year: "2025",
    href: "https://github.com/shahviransh/shahviransh/blob/main/TryHackMe/Certificates/Pre%20Security%20Certificate%20of%20Completion.pdf",
    detail: "TCP/IP, the OSI model, Windows and Linux internals, and the command line.",
  },
];

export const securityPractice = [
  {
    title: "Splunk alert triage",
    tag: "T1053.005",
    body: "Followed a suspicious process to its hash, its parent and a scheduled-task persistence trick, then wrote it up as a timeline.",
    tools: ["Splunk", "Sysmon", "Windows"],
  },
  {
    title: "Windows & Linux logs",
    tag: "T1110.003",
    body: "Logons, new processes, group changes and service installs in Windows event logs. SSH trails in auth.log.",
    tools: ["Event Viewer", "auth.log", "PowerShell"],
  },
  {
    title: "Packets & phishing",
    tag: "T1566",
    body: "Packet captures to spot recon, and email headers (SPF, DKIM, DMARC) to call out phishing.",
    tools: ["Wireshark", "tcpdump", "Nmap", "CyberChef"],
  },
  {
    title: "Attack to detect",
    tag: "lab only",
    body: "I run SQLi, auth bypass, hash cracking and password spraying in a lab so I know exactly what each one leaves behind.",
    tools: ["Burp Suite", "SQLMap", "John the Ripper", "Hydra"],
  },
];

export const competitions = [
  { name: "CyberSci Regional Finals", result: "2nd in Toronto, 3rd overall", year: "2025" },
  { name: "Advent of Cyber", result: "Completed", year: "2024 & 2025" },
  { name: "CyberStart Canada", result: "Competed", year: "2025" },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "security", label: "Security" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
