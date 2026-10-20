/**
 * Site content for amazexpo.com.
 *
 * Every string here comes from the approved redesign canvas. Values that the
 * client still has to supply are kept as `⟨…⟩` markers and rendered through
 * <Pending /> so nothing is silently invented — see `src/components/ui/pending.tsx`.
 */

export const SITE = {
  name: "Amaze Expo",
  legalName: "Totely India Pvt Ltd",
  product: "Amaze Booth Design Agentic AI",
  url: "https://www.amazexpo.com",
  tagline: "AI-powered booth design and on-ground execution for exhibitions, retail and museums.",
  foundedBy: "Jyotsna Pande",
  phoneDisplay: "+91 80194 55105",
  phoneHref: "+918019455105",
  whatsapp: "https://wa.me/918019455105",
  emails: ["jp@amazexpo.com", "info@amazexpo.com"],
  grievance: "grievances@totely.co.in",
  cities: ["Hyderabad", "New Delhi", "Bengaluru"],
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/services", label: "Our Services" },
  { href: "/sectors", label: "Industry We Serve" },
  { href: "/contact", label: "Contact Us" },
] as const;

/* ---------------------------------------------------------------- Home -- */

export const STATS = [
  { value: "1,000+", label: "booth designs behind the AI" },
  { value: "850+", label: "booths built for real clients" },
  { value: "75+", label: "years of combined team experience" },
  { value: "20", label: "industry sectors served" },
] as const;

export const GENERATOR_GROUPS = [
  {
    key: "size",
    legend: "Booth size",
    options: ["3×3 m", "6×3 m", "6×6 m", "9×6 m", "12×9 m"],
    default: "6×6 m",
  },
  {
    key: "side",
    legend: "Open sides",
    options: ["1 side", "2 sides", "3 sides", "Island"],
    default: "2 sides",
  },
  {
    key: "goal",
    legend: "Your main goal",
    options: ["Generate leads", "Launch a product", "Hold meetings", "Build the brand"],
    default: "Generate leads",
  },
  {
    key: "industry",
    legend: "Industry",
    options: [
      "Food & Beverages",
      "Machine & Tools",
      "Automobiles",
      "Pharma",
      "IT & Hardware",
      "Aero Defence",
    ],
    default: "Food & Beverages",
  },
] as const;

export const GOAL_TIPS: Record<string, string> = {
  "Generate leads":
    "an open corner reception, a demo pod facing the main aisle and a lead-capture counter.",
  "Launch a product": "a central reveal plinth, an LED backdrop and a small press corner.",
  "Hold meetings":
    "two semi-private meeting pods, storage behind the brand wall and a calm reception.",
  "Build the brand": "a tall brand wall, a hanging banner (height limit checked) and a lounge.",
};

export const AGENTS = [
  { n: "01", name: "Brief", does: "AMAZE asks about your goals in plain language and writes the design brief.", out: "brief in 15 minutes" },
  { n: "02", name: "Strategy", does: "Sets the objective, visitor journey and engagement plan.", out: "booth strategy card" },
  { n: "03", name: "Design", does: "Generates 3–5 concepts with 360° views and a walkthrough.", out: "renders and video" },
  { n: "04", name: "Compliance check", does: "Checks height limits, open sides, rigging and exits.", out: "venue checklist" },
  { n: "05", name: "Cost & materials", does: "Turns the design into a bill of materials and a budget range.", out: "BOM and estimate" },
  { n: "06", name: "Build hand-off", does: "Passes the build pack to our fabrication team and tracks it.", out: "fabrication schedule" },
  { n: "07", name: "Show day", does: "Supports lead capture and staff briefings at the booth.", out: "lead list" },
  { n: "08", name: "ROI report", does: "Reports cost per lead and follow-ups after the show.", out: "ROI report" },
] as const;

export const SKILLS = [
  ["Business objectives & ROI", "It starts with why you are exhibiting — leads, launch, meetings or awareness — and turns that into the booth strategy."],
  ["Visitor psychology & behaviour", "What makes a visitor stop, enter, explore and engage: attention, movement and dwell time."],
  ["Brand communication & visual hierarchy", "What a visitor should see and understand within seconds."],
  ["Spatial intelligence", "Circulation, displays, demos, meetings, reception, storage and staff movement in every square metre."],
  ["Venue realities", "Booth size, open sides, height limits, entry points, neighbours and sightlines."],
  ["Industry & audience intelligence", "A different language and engagement plan for every sector and audience."],
  ["Immersive experience & technology", "AR/VR, screens and demos only where they add real engagement."],
  ["Materials, lighting & finishes", "Textures, light and colour chosen for the brand perception you want."],
  ["Fabrication & buildability", "Structure, materials, power and execution — from screen to show floor."],
  ["Budget & bill of materials", "A cost range and material list from AMAZE, with modular swaps to save money."],
  ["Show-day & ROI", "Lead capture at the booth and a results report after the show."],
].map(([title, body]) => ({ q: title, a: body }));

export const GENERIC_AI = [
  "Unbuildable shapes and impossible spans",
  "No idea of venue height limits or safety",
  "Ignore visitor flow and sightlines",
  "No power, lighting or fabrication logic",
];

export const AMAZE_AI = [
  "Developed on 1,000+ booth designs; 850+ booths built",
  "Venue rules checked automatically",
  "Bill of materials and budget range included",
  "Finished and built by our own team",
];

export const PROCESS = [
  { n: "01", title: "Brief", body: "Chat with AMAZE or fill the brief form · 15 min", gold: false },
  { n: "02", title: "Generate", body: "3–5 concepts with 360° views · 2–3 min", gold: true },
  { n: "03", title: "Refine", body: "Change colours, layout, materials", gold: false },
  { n: "04", title: "Cost & comply", body: "Bill of materials, budget, venue checklist", gold: true },
  { n: "05", title: "Build", body: "We fabricate and install, on time", gold: false },
  { n: "06", title: "Measure", body: "Leads and ROI report after the show", gold: true },
] as const;

export const HOME_PLANS = [
  {
    name: "AMAZE ONE",
    badge: "",
    price: "₹999",
    per: "One-time purchase · plus GST",
    for: "For one professional booth concept",
    details: "1 complete design · up to 5 presentation views",
    features: ["Booth dimensions & layout", "Brand and logo integration"],
    cta: "Get AMAZE ONE",
    href: "/services",
    featured: false,
  },
  {
    name: "AMAZE 7",
    badge: "Most popular",
    price: "₹4,999",
    per: "₹714 per design · plus GST · valid 1 month",
    for: "For exploring multiple concepts and directions",
    details: "7 complete designs · up to 5 views each",
    features: ["Multiple creative directions", "Brand and logo integration"],
    cta: "Get AMAZE 7",
    href: "/services",
    featured: true,
  },
  {
    name: "AMAZE 24",
    badge: "High volume",
    price: "₹15,199",
    per: "₹633 per design · plus GST · valid 3 months",
    for: "For teams with multiple booth requirements",
    details: "24 complete designs · up to 5 views each",
    features: ["Multiple projects and exhibitions", "Team evaluation of concepts"],
    cta: "Get AMAZE 24",
    href: "/services",
    featured: false,
  },
  {
    name: "AMAZE Enterprise",
    badge: "",
    price: "Custom",
    per: "Volume-based · contract pricing",
    for: "For agencies, stand builders, brands and organisers",
    details: "White-label experience with your brand",
    features: ["Multiple users and centralised projects", "Custom workflows and dedicated support"],
    cta: "Talk to us",
    href: "/contact",
    featured: false,
  },
] as const;

export const FAQS = [
  ["Will this replace my designer?", "No. AMAZE speeds up the first concepts. Our designers — or yours — refine every design before it is built."],
  ["Who owns the design?", "You do. Concepts you create and approve are yours to use."],
  ["Can I build with my own fabricator?", "Yes. Export the concept and specifications, or let our team build it."],
  ["Can I add my logo, colours and budget?", "Yes. Brand guidelines, colours, budget and layout are part of the brief."],
  ["Is my brief confidential?", "Yes. Briefs and brand files stay private to your account."],
  ["How is this different from ChatGPT or other AI tools?", "AMAZE was developed on real booth projects, checks venue rules and costs, and our team can build what it designs."],
].map(([q, a]) => ({ q, a }));

/* ------------------------------------------------------ Why Choose Us -- */

export const WHY_STATS = [
  { value: "15+", label: "years of exhibition expertise" },
  { value: "850+", label: "booths executed" },
  { value: "75+", label: "years of combined team experience" },
  { value: "100", label: "booth exhibitions served" },
] as const;

export const TIMELINE = [
  { when: "⟨YEAR⟩", title: "Founded in Hyderabad", body: "Amaze Expo starts designing and building exhibition booths, with in-house concept, design and production.", photo: "First workshop or early booth", pending: true },
  { when: "2014", title: "Long-term clients", body: "Partnerships begin that continue today — including Royal Canin, an exhibition client since 2014.", photo: "Early client booth", pending: false },
  { when: "⟨YEAR⟩", title: "New Delhi and Bengaluru", body: "Operations expand to New Delhi and Bengaluru to serve the country’s biggest exhibition venues.", photo: "Team at Bharat Mandapam or BIEC", pending: true },
  { when: "⟨YEAR⟩", title: "Museums across India", body: "Government museum set-ups in New Delhi, Lucknow, Moradabad, Vijayawada and Jhansi.", photo: "Museum gallery we built", pending: true },
  { when: "⟨YEAR⟩", title: "850+ booths built", body: "Hundreds of exhibitions across 20 sectors, plus retail interiors for brands.", photo: "Collage of booths", pending: true },
  { when: "2026", title: "AMAZE agentic AI launches", body: "Our booth experience becomes an AI agent that designs, costs and checks a booth in minutes.", photo: "AMAZE product screen", pending: false },
] as const;

export const REASONS = [
  ["Seamless end-to-end service", "One brief flows from AI concept to fabrication, installation and dismantling."],
  ["Technology at the core", "AMAZE agentic AI on the Totely platform, with WhatsApp updates at every milestone."],
  ["Proven expertise", "850+ booths across 20 sectors, for clients such as ⟨CLIENT 1⟩, ⟨CLIENT 2⟩ and ⟨CLIENT 3⟩."],
  ["Pan-India execution", "Teams in Hyderabad, New Delhi and Bengaluru, with venue rules known for each hall."],
  ["Deep industry knowledge", "Sector playbooks: pharma meeting privacy, defence security, food tasting flow."],
  ["Long-term partnership", "We take time to understand the business behind every brief — some clients have been with us since 2014."],
].map(([title, body]) => ({ title, body }));

export const VERTICALS = [
  { title: "Exhibition booths", body: "Custom and modular stands, pavilions and complete show presence.", photo: "Exhibition booth" },
  { title: "Retail environments", body: "Store interiors, shop-in-shops, kiosks and brand displays.", photo: "Retail interior" },
  { title: "Museums and cultural spaces", body: "Government museum set-ups in New Delhi, Lucknow, Moradabad, Vijayawada and Jhansi.", photo: "Museum gallery" },
] as const;

export const TEAM = [
  { name: "Amit Pande", role: "Founder", line: "25+ years in leadership; founding member of IESA", pending: false },
  { name: "Jyotsna Pande", role: "⟨ROLE⟩", line: "⟨One line on experience⟩", pending: true },
  { name: "⟨NAME⟩", role: "Design lead", line: "⟨Years of experience⟩", pending: true },
  { name: "⟨NAME⟩", role: "Production lead", line: "⟨Years of experience⟩", pending: true },
] as const;

export const COMMITMENTS: { title: string; body: string; gold: boolean }[] = [
  { title: "Dedicated support", body: "One team from first brief to final dismantling.", gold: false },
  { title: "On-time delivery", body: "Planned production and disciplined on-site teams.", gold: true },
  { title: "Premium detailing", body: "Every finish and fixture handled with care.", gold: false },
  { title: "Your data stays yours", body: "Briefs and brand files are confidential. You own your approved designs.", gold: true },
];

/* ------------------------------------------------------------ Services -- */

export const PLANS = [
  {
    name: "Exhibitor Pro",
    badge: "Most popular",
    for: "Brands exhibiting at one or more shows a year",
    monthly: "⟨PRICE⟩",
    annual: "⟨ANNUAL PRICE⟩",
    custom: false,
    featured: true,
    items: ["40 concepts a month", "360° views + walkthrough video", "Venue compliance + cost estimate", "Bill of materials export"],
    cta: "Choose Exhibitor Pro",
  },
  {
    name: "Agency Studio",
    badge: "",
    for: "Agencies and stand builders",
    monthly: "⟨PRICE⟩",
    annual: "⟨ANNUAL PRICE⟩",
    custom: false,
    featured: false,
    items: ["200 concepts a month", "5 team seats", "White-label presentations", "Build hand-off to our team"],
    cta: "Choose Agency Studio",
  },
  {
    name: "Enterprise & Organiser",
    badge: "",
    for: "Large brands, pavilions, organisers",
    monthly: "Custom",
    annual: "Custom",
    custom: true,
    featured: false,
    items: ["Unlimited seats", "Venue rule packs", "White-label exhibitor portal", "Show-day lead capture + ROI report"],
    cta: "Talk to sales",
  },
] as const;

export const MANAGED = [
  { name: "Exhibition booth design", body: "AI concepts refined by our designers into 3D views, drawings and material choices.", photo: "3D render of a booth" },
  { name: "Fabrication & installation", body: "In-house production of custom and modular stands; delivery, install and dismantle.", photo: "Workshop fabrication" },
  { name: "Project management", body: "One manager and WhatsApp milestone updates from approval to handover.", photo: "Site supervisor at venue" },
  { name: "Interactive experiences", body: "AV, touch screens and product demos — only where they add engagement.", photo: "Touch screen at a booth" },
  { name: "Pavilions", body: "National, state and industry pavilions with one unified look.", photo: "Pavilion at a trade fair" },
  { name: "Retail & museum projects", body: "Store interiors, kiosks, galleries and interpretive exhibits.", photo: "Retail store or museum gallery" },
] as const;

export const BILLING_FAQ = [
  ["What counts as a concept?", "One generated booth design with its views. Edits to it do not use a new credit."],
  ["Is GST included?", "Prices are shown without GST; it is added at checkout."],
  ["Can I change plans before a show?", "Yes, upgrade or downgrade at any time."],
  ["Can I pay by UPI?", "Yes — UPI, cards and net banking."],
].map(([q, a]) => ({ q, a }));

/* ------------------------------------------------------------- Sectors -- */

export type Sector = { group: string; name: string; line: string; slug: string };

const SECTOR_ROWS = [
  ["Industrial", "Machine & Tools", "Heavy product display with smooth demos and meeting zones."],
  ["Industrial", "Electrical & Solar", "Bright, efficient displays for power and renewable brands."],
  ["Industrial", "Rubber & Chemicals", "Clean, technical booths where credibility and compliance matter."],
  ["Industrial", "Leather & Safety", "Detail-rich displays for safety gear and leather goods."],
  ["Industrial", "Automobiles", "Vehicle showcases with strong sightlines and launch journeys."],
  ["Industrial", "Agriculture", "Practical spaces for agritech, equipment and food systems."],
  ["Technology", "IT & Hardware", "Complex hardware and software stories made interactive."],
  ["Technology", "Aviation", "Aircraft, airport tech and MRO exhibits with scale."],
  ["Technology", "Aero Defence", "Authority, security and precision for defence brands."],
  ["Healthcare & Science", "Pharma", "Credible exhibits with private meetings and compliant messaging."],
  ["Healthcare & Science", "Lab Equipment", "Clean product zones and demo-ready layouts."],
  ["Healthcare & Science", "Animal & Husbandry", "Welcoming displays for veterinary, dairy and animal care."],
  ["Consumer", "Food & Beverages", "Tasting-led spaces with appetite appeal and flow."],
  ["Consumer", "Lifestyle", "Fashion, wellness and home brands built around discovery."],
  ["Consumer", "Retail Showcase", "Product ranges and merchandising stories."],
  ["Consumer", "Retail Experience", "Browsing, trials and strong brand recall."],
  ["Consumer", "Real Estate, Finance & Home", "Consultation-led spaces that build trust."],
  ["Government & Culture", "Government Sector", "Accessible pavilions for public-sector showcases."],
  ["Government & Culture", "Museum & Cultural", "Narrative spaces for heritage and culture."],
  ["Government & Culture", "Museum Experience", "Immersive galleries and educational journeys."],
] as const;

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const SECTORS: Sector[] = SECTOR_ROWS.map(([group, name, line]) => ({
  group,
  name,
  line,
  slug: slugify(name),
}));

/** Sector-page template copy, from the canvas. */
export const SECTOR_TEMPLATE = {
  whatVisitorsLookFor: "Clear product claims, private doctor meetings, sample desks.",
  aiRules: "Closed meeting room, compliant claims wall, secure sample storage.",
  typicalSizes: "18–72 m², 2–3 open sides · budget band ⟨₹ RANGE⟩",
};

export const SHOWS = [
  { name: "Indusfood 2027", dates: "8–10 Jan 2027", venue: "India Expo Centre & Mart, Greater Noida", sector: "Food & Beverages" },
  { name: "IMTEX 2027", dates: "21–27 Jan 2027", venue: "BIEC, Bengaluru", sector: "Machine & Tools" },
  { name: "Bharat Mobility Global Expo", dates: "4–9 Feb 2027", venue: "Bharat Mandapam & Yashobhoomi, New Delhi", sector: "Automobiles" },
  { name: "Aero India 2027", dates: "8–12 Feb 2027", venue: "Air Force Station Yelahanka, Bengaluru", sector: "Aero Defence" },
  { name: "AAHAR 2027", dates: "2–6 Mar 2027 ⟨confirm⟩", venue: "Bharat Mandapam, New Delhi", sector: "Food & Beverages" },
  { name: "analytica Lab India", dates: "21–23 Apr 2027", venue: "Jio World Convention Centre, Mumbai", sector: "Lab Equipment" },
] as const;

/* ------------------------------------------------------------ Projects -- */

export const FEATURED_PROJECT = {
  client: "Royal Canin",
  headline: "Royal Canin — a client since 2014",
  meta: "⟨Show⟩ · ⟨City⟩ · ⟨Year⟩ · ⟨Size⟩ m²",
  rows: [
    ["Goal", "⟨e.g. meet veterinarians and retail partners⟩"],
    ["What we did", "⟨Concept → fabrication → install in N days⟩"],
    ["Result", "⟨Numbers the client approves: leads, footfall, repeat years⟩"],
  ] as [string, string][],
};

export const PROJECTS = [
  ["Exhibitions", "Belstaff Experience", "Luxury brand storytelling booth · ⟨show⟩, ⟨city⟩, ⟨year⟩", "belstaff-booth-show-city.jpg"],
  ["Exhibitions", "Ben X Pavilion", "Modern pavilion with sharp product focus · ⟨show⟩, ⟨city⟩", "benx-pavilion-show-city.jpg"],
  ["Exhibitions", "⟨CLIENT⟩ at IMTEX", "Machine-tool booth with live demo zone · BIEC, Bengaluru", "client-imtex-booth-bengaluru.jpg"],
  ["Exhibitions", "⟨CLIENT⟩ at Indusfood", "Food export booth with tasting counter · Greater Noida", "client-indusfood-booth.jpg"],
  ["Retail", "⟨BRAND⟩ store interior", "Store layout, fixtures and lighting · ⟨city⟩", "brand-store-interior-city.jpg"],
  ["Retail", "⟨BRAND⟩ shop-in-shop", "Branded space inside a multi-brand store · ⟨mall⟩, ⟨city⟩", "brand-shop-in-shop-city.jpg"],
  ["Museums", "Government museum, New Delhi", "Gallery design, displays and interpretation · ⟨name of museum⟩", "museum-new-delhi-amaze-expo.jpg"],
  ["Museums", "Government museum, Lucknow", "Gallery design and exhibits · ⟨name of museum⟩", "museum-lucknow-amaze-expo.jpg"],
  ["Museums", "Government museum, Moradabad", "Gallery design and exhibits · ⟨name of museum⟩", "museum-moradabad-amaze-expo.jpg"],
  ["Museums", "Government museum, Vijayawada", "Gallery design and exhibits · ⟨name of museum⟩", "museum-vijayawada-amaze-expo.jpg"],
  ["Museums", "Government museum, Jhansi", "Gallery design and exhibits · ⟨name of museum⟩", "museum-jhansi-amaze-expo.jpg"],
].map(([type, title, meta, file]) => ({ type, title, meta, file }));

export const PROJECT_TYPES = ["All", "Exhibitions", "Retail", "Museums"];

/* ------------------------------------------------------------- Contact -- */

export const ENQUIRY_PATHS = [
  { id: "free", title: "Generate Your AI Booth Design", sub: "Brief AMAZE and get your concepts", form: "Generate your AI booth design", submit: "Create my account", needsShow: true, isOrganiser: false, isDemo: false },
  { id: "demo", title: "Book a demo", sub: "20 minutes with our team", form: "Book a 20-minute demo", submit: "Book my demo", needsShow: false, isOrganiser: false, isDemo: true },
  { id: "quote", title: "Get a build quote", sub: "Design + fabrication for your show", form: "Request a design + build quote", submit: "Send my brief", needsShow: true, isOrganiser: false, isDemo: false },
  { id: "org", title: "Organiser / partner", sub: "White-label AMAZE for your show", form: "Partner with Amaze Expo", submit: "Send enquiry", needsShow: false, isOrganiser: true, isDemo: false },
] as const;

export const OFFICES = [
  { city: "Hyderabad", tag: "Head office", region: "Telangana", hours: "Mon–Sat, ⟨hours⟩", address: "⟨Full street address, exactly as on Google Business Profile⟩" },
  { city: "New Delhi", tag: "", region: "Delhi", hours: "Mon–Sat, ⟨hours⟩", address: "⟨Full street address, exactly as on Google Business Profile⟩" },
  { city: "Bengaluru", tag: "", region: "Karnataka", hours: "Mon–Sat, ⟨hours⟩", address: "⟨Full street address, exactly as on Google Business Profile⟩" },
] as const;

export const BUDGET_BANDS = [
  "Not sure yet",
  "Under ₹5 lakh",
  "₹5–15 lakh",
  "₹15–40 lakh",
  "Above ₹40 lakh",
];

/* ------------------------------------------------------ SEO (per route) -- */

/**
 * Per-route SEO copy from the redesign's SEO artboard.
 *
 * These titles already end in "| Amaze Expo", so pages reference them with
 * `title: { absolute: … }` — otherwise the root layout's `title.template`
 * appends the brand a second time.
 */
export const SEO_PAGES = {
  "/": {
    title: "AI Exhibition Booth Design & Build | Amaze Expo",
    description:
      "Design your exhibition booth with AI in minutes, then have it built by a team with 850+ booths delivered. Generate your first concept in minutes.",
  },
  "/why-choose-us": {
    title: "Why Amaze Expo | 75+ Years of Exhibition Experience",
    description:
      "The team behind AMAZE AI: exhibition, retail and museum projects across India.",
  },
  "/services": {
    title: "AI Booth Design Plans & Stand Fabrication | Amaze Expo",
    description:
      "Subscribe to AMAZE AI booth design, or hire us to design, fabricate and install your stand across India.",
  },
  "/sectors": {
    title: "Exhibition Stand Design by Industry | Amaze Expo",
    description:
      "Booth design for 20 sectors — food, machine tools, automobiles, defence, pharma — plus upcoming Indian shows.",
  },
  "/projects": {
    title: "Exhibition, Retail & Museum Projects | Amaze Expo",
    description:
      "Booths, retail spaces and government museum projects we designed and built across India.",
  },
  "/contact": {
    title: "Contact Amaze Expo | Stand Designers, Hyderabad · Delhi · Bengaluru",
    description:
      "Generate your AI booth design or get a build quote. Call +91 80194 55105 or WhatsApp us.",
  },
} as const;

export type RoutePath = keyof typeof SEO_PAGES;
