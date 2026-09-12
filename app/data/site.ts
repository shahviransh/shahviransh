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
  roles: [
    "Full-Stack Developer",
    "Security Analyst",
    "Incident Responder",
    "CTF Competitor",
  ],
  degree: "B.A.Sc. Computer Science, Minor in Statistics",
  school: "McMaster University",
  graduated: "June 2026",
  location: "Greater Toronto Area, Ontario",
  emails: [
    { address: "viranshshah@gmail.com", label: "Personal" },
    { address: "shahv47@mcmaster.ca", label: "McMaster" },
  ],
  intro:
    "I build software that has to hold up in production and in front of an attacker. Over 12 months of federal co-op I shipped a cross-platform watershed analytics platform used by Environment and Climate Change Canada scientists, and I spend the rest of my time on the defensive side - triaging alerts, reading packet captures, and competing in CTFs.",
  secondary:
    "Most recently I placed 2nd in Toronto and 3rd in Canada at CyberSci Regional Finals 2025 with MacHackers. I care about the seam between the two disciplines: code reviewed like an attacker will read it, and investigations run by someone who knows how the system was built.",
  resumes: [
    {
      label: "Software Development",
      href: "/Viransh-Shah-Resume-Software-Development.pdf",
      hint: "Full-stack, platform, and product work",
      icon: "code",
    },
    {
      label: "Security Analyst",
      href: "/Viransh-Shah-Resume-Security.pdf",
      hint: "SOC, incident response, and detection",
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
  { value: "2nd", label: "Toronto, CyberSci 2025", detail: "3rd in Canada · MacHackers" },
  { value: "12 mo", label: "Federal software co-op", detail: "ECCC & CWA" },
  { value: "3.7", label: "GPA / Dean's Honours", detail: "A+ in security courses" },
  { value: "65+", label: "TryHackMe rooms", detail: "Defensive + offensive" },
];

export const whoami = [
  { key: "user", value: "shahviransh" },
  { key: "role", value: "software developer // security analyst" },
  { key: "edu", value: "B.A.Sc. Computer Science + Statistics, McMaster '26" },
  { key: "mail", value: "viranshshah@gmail.com ·  shahv47@mcmaster.ca" },
  { key: "focus", value: "secure full-stack delivery, blue-team investigation" },
  { key: "stack", value: "Python · TypeScript · Vue · Flask · Splunk · Wireshark" },
  { key: "status", value: "graduated June 2026 - open to SWE and security analyst roles" },
];

export interface ExperienceEntry {
  org: string;
  role: string;
  period: string;
  location: string;
  kind: "Co-op" | "Leadership" | "Teaching";
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
    caption: "Toronto region standings - 2nd with 2336 points",
    width: 953,
    height: 596,
    contain: true,
  },
];

export const experience: ExperienceEntry[] = [
  {
    org: "Environment and Climate Change Canada & Canada Water Agency",
    role: "Full Stack Developer - IMWEBs Viewer & Nutri View",
    period: "Sept 2024 - Aug 2025",
    location: "Burlington & North York, Ontario",
    kind: "Co-op",
    bullets: [
      "Sole developer of IMWEBs Viewer and Nutri View from prototype to production: a cross-platform desktop and web application giving federal scientists self-serve access to watershed data through interactive tables, graphs, and maps.",
      "Cut analyst data prep from hours of manual work to zero with pipelines that converted Excel and water quality data into SQLite and merged shapefiles and rasters into GeoPackages.",
      "Secured access with bcrypt-hashed credentials, session tokens with server-side revocation, and role-based access control that defaults to deny; hardened every input path against SQL injection and path traversal.",
      "Shipped signed Windows, macOS, and Linux builds from a single codebase via GitHub Actions, and deployed behind IIS on Azure VMs over HTTPS.",
    ],
    stack: ["Vue.js", "Tauri", "Flask", "SQLite", "GeoPackage", "Azure", "IIS", "GitHub Actions"],
    links: [
      { label: "IMWEBs Viewer", href: "https://github.com/shahviransh/ECCC-IMWEBs-Viewer" },
      { label: "Nutri View", href: "https://github.com/shahviransh/Nutri-View" },
    ],
  },
  {
    org: "McMaster Cyber Society",
    role: "Founding Executive Member",
    period: "Sept 2023 - Present",
    location: "Hamilton, Ontario",
    kind: "Leadership",
    bullets: [
      "Placed 2nd in Toronto and 3rd in Canada as MacHackers at CyberSci Regional Finals 2025 against top Canadian university teams.",
      "Reconstructed attack chains from PCAP captures, memory images, and file metadata using Wireshark, tcpdump, and CyberChef.",
      "Cracked weak and reused password hashes with John the Ripper, and reproduced brute-force and password-spraying traffic with Hydra to study its detection signature.",
      "Competed across cryptography, web exploitation, forensics, and binary exploitation, plus Advent of Cyber and CyberStart Canada.",
    ],
    stack: ["Wireshark", "tcpdump", "CyberChef", "Nmap", "Metasploit", "Burp Suite", "Kali Linux"],
  },
  {
    org: "McMaster University",
    role: "Teaching Assistant - SFWRENG 2C03, 2XC3 & COMPSCI 1XD3",
    period: "Jan–Apr 2024 · Sept–Dec 2025 · Jan–Apr 2026",
    location: "Hamilton, Ontario",
    kind: "Teaching",
    bullets: [
      "Led labs and tutorials for 100+ students across three terms on algorithms, data structures, and software development.",
      "Coached students through Linux, Git, C, and web stacks, and graded design work against correctness and readability.",
    ],
    stack: ["Algorithms", "Data Structures", "C", "Linux", "Git", "Web"],
  },
];

export const education = {
  school: "McMaster University",
  credential: "Bachelor of Applied Science in Computer Science, Minor in Statistics",
  period: "Sept 2021 - June 2026",
  location: "Hamilton, Ontario",
  highlights: [
    "Dean's Honours List - GPA 3.7 / 4.0",
    "A+ in Information Security, Computer Networks & Security, Databases, and Algorithms",
  ],
};

export const skillGroups = [
  {
    name: "Security Operations",
    icon: "radar",
    blurb: "How I work an alert from first signal to written-up conclusion.",
    items: [
      "Alert triage",
      "Incident response (NIST lifecycle)",
      "Log & packet analysis",
      "Windows Security event logs",
      "Linux syslog & auth.log",
      "SIEM and EDR investigation",
      "Email header analysis",
      "Active Directory",
      "TCP/IP networking",
      "Digital forensics",
    ],
  },
  {
    name: "Security Tooling",
    icon: "shield",
    blurb: "Defensive tooling day to day, offensive tooling from CTF practice.",
    items: [
      "Splunk",
      "Wireshark",
      "tcpdump",
      "CyberChef",
      "Event Viewer",
      "Nmap",
      "Burp Suite",
      "Metasploit",
      "John the Ripper",
      "Hydra",
      "Gobuster",
      "SQLMap",
      "Kali Linux",
    ],
  },
  {
    name: "Languages",
    icon: "code",
    blurb: "Scripting an investigation or shipping a product feature.",
    items: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Java",
      "C",
      "SQL",
      "PowerShell",
      "Bash",
      "PHP",
      "HTML/CSS",
    ],
  },
  {
    name: "Platforms & Data",
    icon: "server",
    blurb: "What I build on, deploy to, and query.",
    items: [
      "Vue.js",
      "Nuxt",
      "React Native",
      "Flask",
      "Tauri",
      "Docker",
      "Git",
      "GitHub Actions",
      "Azure",
      "IIS",
      "GNU/Linux",
      "PostgreSQL",
      "Microsoft SQL Server",
      "MySQL",
      "SQLite",
    ],
  },
];

export const projectFilters: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "security", label: "Security" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "ml", label: "ML & Data" },
  { id: "tools", label: "Tools" },
];

export const projects: Project[] = [
  {
    name: "IMWEBs Viewer",
    tagline: "Watershed analytics for federal scientists",
    period: "Sept 2024 - Aug 2025",
    summary:
      "Cross-platform desktop and web app built for Environment and Climate Change Canada, turning raw watershed model output into tables, graphs, and maps that scientists can explore themselves.",
    bullets: [
      "Vue 3 front end with a Flask REST API, packaged for desktop with Tauri and Electron and served on the web from the same codebase.",
      "Excel and water quality pipelines normalise model output into SQLite; shapefiles and rasters merge into GeoPackages for the map view.",
      "Signed Windows, macOS, and Linux builds released through GitHub Actions, deployed behind IIS on Azure VMs over HTTPS.",
    ],
    stack: ["Vue 3", "Flask", "Tauri", "SQLite", "GeoPackage", "Leaflet", "Azure", "IIS"],
    categories: ["fullstack"],
    featured: true,
    links: [{ label: "Repository", href: "https://github.com/shahviransh/ECCC-IMWEBs-Viewer" }],
  },
  {
    name: "Nutri View",
    tagline: "Nutrient modelling with deny-by-default access",
    period: "Sept 2024 - Aug 2025",
    summary:
      "Sibling platform to IMWEBs Viewer focused on nutrient scenarios, with a unit converter, guest permission management, and an auth model designed to fail closed.",
    bullets: [
      "bcrypt-hashed credentials and session tokens with server-side revocation, layered under role-based access control that defaults to deny.",
      "Input validation hardened against SQL injection and path traversal across every database and file-system route.",
      "Granular guest permissions let analysts share scenarios without exposing the full project tree.",
    ],
    stack: ["Vue 3", "Flask", "Tauri", "bcrypt", "RBAC", "SQLite", "Docker"],
    categories: ["fullstack", "security"],
    featured: true,
    links: [{ label: "Repository", href: "https://github.com/shahviransh/Nutri-View" }],
  },
  {
    name: "Slicc",
    tagline: "End-to-end encrypted group expense splitting",
    period: "Sept 2025 - Apr 2026",
    summary:
      "Cross-platform mobile app built by a 7-person Agile capstone team for group chat, event scheduling, and fine-grained bill splitting - released to Android.",
    bullets: [
      "Architected libsodium/NaCl end-to-end encryption with device-held private keys, so messages stay readable only to participants and never to the server or Firebase backend.",
      "Line-item bill splitting assigns individual items to specific participants with flexible split modes.",
      "Notification system covers group invites, event invites, and upcoming-event reminders.",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Firebase", "libsodium/NaCl"],
    categories: ["security", "fullstack"],
    featured: true,
    links: [{ label: "Repository", href: "https://github.com/mac-capstone/slicc" }],
  },
  {
    name: "Fraud Detection at Scale",
    tagline: "Two-stage ensemble over 1.47M transactions",
    period: "COMPSCI 4AL3",
    summary:
      "Binary classifier for fraudulent e-commerce transactions on a severely imbalanced dataset, combining recall-optimised and precision-optimised models into a weighted ensemble.",
    bullets: [
      "52+ engineered features covering temporal patterns, behavioural aggregates, and interaction terms, with ADASYN resampling applied without leaking across the train-test split.",
      "Logistic Regression and Random Forest catch candidates; a 5-layer neural network with focal loss and GPU XGBoost validate them.",
      "Final ensemble reached 61.3% recall at 26.3% precision and 0.877 AUC-ROC; checkpoints published to Hugging Face.",
    ],
    stack: ["PyTorch", "XGBoost", "RAPIDS cuML", "scikit-learn", "ADASYN", "Hugging Face"],
    categories: ["ml"],
    featured: true,
    links: [
      { label: "Repository", href: "https://github.com/shahviransh/compsci-4al3-project" },
      { label: "Models", href: "https://huggingface.co/shahviransh/fraud-detection", icon: "model" },
    ],
  },
  {
    name: "CleanFade",
    tagline: "Real-time profanity ducking for live audio",
    period: "2025",
    summary:
      "Windows desktop app that captures speaker output via loopback, transcribes it on the fly, and lowers the music volume the moment profanity is detected.",
    bullets: [
      "faster-whisper transcribes captured chunks; transcripts are matched against a profanity list and optionally aligned to synced lyrics to pre-duck upcoming lines.",
      "Tauri shell wraps a PyInstaller-packaged Python engine as a sidecar binary, with start/stop controls and live logs.",
      "Release workflow builds the sidecar and desktop bundle in CI for one-command installs.",
    ],
    stack: ["Tauri", "Rust", "React", "Python", "faster-whisper", "PyInstaller"],
    categories: ["tools"],
    featured: true,
    links: [{ label: "Repository", href: "https://github.com/shahviransh/cleanfade" }],
  },
  {
    name: "Textbook MCP Server",
    tagline: "Hardened PDF analysis for AI assistants",
    period: "2025",
    summary:
      "Model Context Protocol server that gives an AI assistant safe tools for textbook PDFs: table-of-contents extraction, chapter and page summaries, flashcards, and quiz generation.",
    bullets: [
      "Intelligent OCR detects which pages actually contain images and only runs Tesseract on those, keeping text-heavy documents fast.",
      "Defensive configuration by default: file-type validation, page and file-size limits, per-tool rate limiting, and a non-root container.",
      "Ships as a Docker image wired into the Docker MCP toolkit.",
    ],
    stack: ["Python", "MCP", "Docker", "Tesseract OCR", "PyMuPDF"],
    categories: ["tools", "security"],
    links: [{ label: "Repository", href: "https://github.com/shahviransh/textbook-mcp-server" }],
  },
  {
    name: "20 Newsgroups Annotation Study",
    tagline: "Measuring inter-annotator agreement",
    period: "COMPSCI 4NL3",
    summary:
      "Annotation pipeline for a group NLP study: sampling documents per annotator, exporting labels, scoring agreement, and driving a structured re-annotation round.",
    bullets: [
      "Agreement scoring highlights the label pairs that annotators actually disagreed on, rather than a single summary statistic.",
      "Re-annotation tooling regenerates targeted task sets so guidelines can be revised and retested.",
      "Reproducible Conda environment and report generation for the write-up.",
    ],
    stack: ["Python", "pandas", "scikit-learn", "Conda"],
    categories: ["ml"],
    links: [{ label: "Repository", href: "https://github.com/shahviransh/compsci-4nl3-project" }],
  },
  {
    name: "Media Toolkit",
    tagline: "Scrapers, dedupe checks, and video summarisation",
    period: "2024",
    summary:
      "A grab bag of Python utilities built around Google APIs: link discovery, duplicate detection over JSON catalogues, bulk image download, static gallery generation, and video summarisation.",
    bullets: [
      "Duplicate detection walks JSON catalogues by canonical URL to keep scraped indexes clean.",
      "Generated static HTML galleries make large downloaded image sets browsable offline.",
      "Containerised so the whole toolkit runs the same way anywhere.",
    ],
    stack: ["Python", "Google APIs", "BeautifulSoup", "Docker"],
    categories: ["tools"],
    links: [{ label: "Repository", href: "https://github.com/shahviransh/GoogleAPIsProject" }],
  },
  {
    name: "Watershed Data Dashboard",
    tagline: "Geospatial dashboard split across three services",
    period: "2024",
    summary:
      "The prototype that preceded IMWEBs Viewer: a Vue dashboard, a Flask API reading SQLite and shapefiles, and a GeoServer-backed Leaflet map, each deployed independently.",
    bullets: [
      "Interactive subbasin selection drives line and pie charts rendered from API responses.",
      "Draggable panel directive and Leaflet overlays let users compare map features against time series side by side.",
      "Deployed to Vercel as separate front-end and Python API services.",
    ],
    stack: ["Vue 3", "Flask", "Leaflet", "GeoServer", "Chart.js", "Vercel"],
    categories: ["fullstack"],
    links: [
      { label: "Frontend", href: "https://github.com/shahviransh/ECCC-Assignment-Frontend" },
      { label: "Backend", href: "https://github.com/shahviransh/ECCC-Assignment-Backend" },
      { label: "GeoServer", href: "https://github.com/shahviransh/ECCC-Assignment-Geoserver" },
    ],
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
    detail:
      "Defensive fundamentals end to end: working an alert, the NIST incident response lifecycle, digital forensics, and where SIEM, IDS, firewall, and vulnerability scanning fit.",
  },
  {
    name: "Pre Security",
    issuer: "TryHackMe",
    year: "2025",
    href: "https://github.com/shahviransh/shahviransh/blob/main/TryHackMe/Certificates/Pre%20Security%20Certificate%20of%20Completion.pdf",
    detail:
      "Networking and operating system groundwork: TCP/IP, the OSI model, Windows and Linux internals, and the command line as an investigative surface.",
  },
];

export const securityPractice = [
  {
    title: "Alert triage in Splunk",
    body: "Pivoted from a suspicious process to its hash, parent process, and scheduled-task persistence on a Windows host, then wrote the finding up as a timeline.",
    tools: ["Splunk", "Sysmon", "Windows"],
  },
  {
    title: "Windows and Linux log review",
    body: "Triaged Windows Security event logs for logon activity, process creation, account and group changes, and service installation; followed SSH authentication trails through Linux /var/log/auth.log.",
    tools: ["Event Viewer", "auth.log", "PowerShell"],
  },
  {
    title: "Network and protocol analysis",
    body: "Read packet captures and email protocol traffic to separate normal behaviour from reconnaissance, including Received chains with SPF, DKIM, and DMARC results for phishing triage.",
    tools: ["Wireshark", "tcpdump", "Nmap", "CyberChef"],
  },
  {
    title: "Offensive practice for detection",
    body: "Reproduced SQL injection, authentication bypass, hash cracking, and password spraying in lab environments specifically to learn what each one leaves behind in logs.",
    tools: ["Burp Suite", "SQLMap", "John the Ripper", "Hydra"],
  },
];

export const competitions = [
  {
    name: "CyberSci Regional Finals 2025",
    result: "2nd in Toronto · 3rd in Canada - MacHackers",
    year: "2025",
  },
  { name: "Advent of Cyber", result: "Completed", year: "2024 & 2025" },
  { name: "CyberStart Canada", result: "Competed", year: "2025" },
];
