/* ============================================================
 * CND SHOP — данные магазина
 * Править копию и цены можно здесь, без трогания вёрстки.
 * Покупка уходит в Telegram @cnddev с префиллом сообщения.
 * ============================================================ */

const SHOP = {
  tg: {
    handle: 'cnddev',
    url: 'https://t.me/cnddev'
  },

  /* categories: OSINT | AI | TRADING | TOOLS | GAME */
  products: [
    {
      id: 'noctis',
      icon: 'fa-magnifying-glass',
      name: 'Noctis',
      cat: 'OSINT',
      badge: 'FLAGSHIP',
      tagline: 'Anti-Google search engine built for the blind spots: forums, pastes, logs, human chatter.',
      desc: 'Self-hosted search stack that indexes signal instead of SEO authority. Distributed crawlers, a normalizer pipeline and an ElasticSearch backend, exposed through a clean API layer.',
      feat: [
        'Distributed crawler + link spider',
        'Normalizer & dedupe pipeline',
        'ElasticSearch ingestion / scoring',
        'REST API + query layer',
        'Custom dump import tooling'
      ],
      price: '$199.99',
      priceNote: 'one-time · full source'
    },
    {
      id: 'noctis-grapher',
      icon: 'fa-diagram-project',
      name: 'Noctis Grapher',
      cat: 'OSINT',
      tagline: 'Interactive link analysis: persons, accounts, phones, Telegram IDs, platforms — one canvas.',
      desc: 'Build node/edge graphs from investigation data and map connections visually. Pan/zoom canvas, typed entities, export-ready layouts.',
      feat: [
        'Typed nodes & edge mapping',
        'Pan / zoom investigation canvas',
        'Persons · accounts · phones · platforms',
        'JSON export for the report'
      ],
      price: '$4.99',
      priceNote: 'one-time · full source'
    },
    {
      id: 'blackwell',
      icon: 'fa-comments',
      name: 'Blackwell',
      cat: 'TOOLS',
      tagline: 'Anonymous forum engine for Telegram: private rooms, custom display names, zero phone exposure.',
      desc: 'Private chat rooms where members join under chosen display names. aiogram + SQLite core — deploy on any small VPS and own the community layer yourself.',
      feat: [
        'Private rooms + display names',
        'No phone numbers in public',
        'aiogram + SQLite core',
        'Low footprint, easy deploy'
      ],
      price: '$49.99',
      priceNote: 'one-time · full source'
    },
    {
      id: 'mimesis',
      icon: 'fa-feather-pointed',
      name: 'Mimesis',
      cat: 'AI',
      badge: 'POPULAR',
      tagline: 'AI text humanizer that replicates your linguistic fingerprint — not a generic thesaurus swap.',
      desc: 'End-to-end humanization pipeline: extracts your sentence rhythm and register, then rewrites machine output to read like you wrote it. Formal, academic, casual modes.',
      feat: [
        'Style fingerprint extraction',
        'Sentence rhythm & filler rewrite',
        'Formal / academic register control',
        'Runs fully local, no API keys'
      ],
      price: '$14.99',
      priceNote: 'one-time · full source'
    },
    {
      id: 'aletheia-zero',
      icon: 'fa-shield-halved',
      name: 'AletheiaZero',
      cat: 'AI',
      tagline: 'Local AI-text detector: fine-tuned RoBERTa ensemble plus entropy scoring. Know what was machine-written.',
      desc: 'Dual-classifier verdict pipeline with perplexity-based fallback scoring. No cloud round-trip — the check happens on your machine.',
      feat: [
        'Dual RoBERTa fine-tuned ensemble',
        'Entropy / perplexity scoring',
        'Human-vs-model verdict',
        '100% local inference'
      ],
      price: '$17.99',
      priceNote: 'one-time · full source'
    },
    {
      id: 'kataxis',
      icon: 'fa-arrow-trend-up',
      name: 'Kataxis',
      cat: 'TRADING',
      badge: 'NEW',
      tagline: 'News feeds → keyword-bias maps → sentiment score → realtime BUY/SELL signals.',
      desc: 'Parses RSS feeds, correlates headlines against your assets through keyword-bias maps, scores sentiment and fires signals in realtime over SSE and Telegram. Tune everything from the UI — no rebuild.',
      feat: [
        'RSS → correlation pipeline',
        'Keyword-bias asset maps',
        'Realtime SSE + Telegram signals',
        'UI-tunable, no rebuild needed'
      ],
      price: '$119.99',
      priceNote: 'one-time · full source'
    },
    {
      id: 'polybot',
      icon: 'fa-chart-line',
      name: 'Polymarket Bot',
      cat: 'TRADING',
      tagline: 'Prediction-market monitor: price alerts, volume spikes and position tracking on Polymarket.',
      desc: 'FastAPI backend with a live dashboard for BTC / ETH / SOL / XRP markets. Paper-trading mode included so you validate the signal before risking a cent.',
      feat: [
        'FastAPI + WebSocket backend',
        'Price & volume spike alerts',
        'BTC / ETH / SOL / XRP markets',
        'Paper-trading mode + dashboard'
      ],
      price: '$119.99',
      priceNote: 'one-time · full source'
    },
    {
      id: 'phronesis',
      icon: 'fa-brain',
      name: 'Phronesis PI',
      cat: 'TOOLS',
      tagline: 'Self-hosted AI web chat over pi RPC: web search, artifacts, PDFs, project memory.',
      tiers: [
        {
          key: 'basic',
          label: 'BASIC',
          price: '$0',
          note: 'free · open source',
          free: true,
          link: 'https://github.com/alas-m/Phronesis-PI',
          feat: ['Web chat over pi RPC', 'Web search + citations', 'Session memory']
        },
        {
          key: 'pro',
          label: 'PRO',
          price: '$29.99',
          note: 'license',
          hot: true,
          feat: ['Everything in BASIC', 'Session groups + PROJECT.md', 'Artifacts & PDF attachments', 'Inline charts · TTS voice', 'Priority support']
        }
      ]
    },
    {
      id: 'secretbaguette',
      icon: 'fa-dice',
      name: 'SecretBaguette',
      cat: 'GAME',
      tagline: 'Secret Hitler, reimagined. Private WebSocket rooms, 2–10 players, host controls.',
      desc: 'A full remake with its own lore and saloon atmosphere. Hosts tune the table, kick guests and control the music for the whole room.',
      feat: [
        'FastAPI + WebSocket rooms',
        '5-digit room codes',
        '2–10 players · host controls',
        'Roles, avatars, saloon music'
      ],
      price: '$9.99',
      priceNote: 'one-time · full source'
    }
  ],

  /* ---------- услуги (custom builds) ---------- */
  services: [
    {
      id: 'bots',
      icon: 'fa-robot',
      title: 'Bot Development',
      desc: 'Telegram bot of any shape: moderation, automation, AI chat, games, integrations.',
      items: [
        { name: 'Moderation and security bots', price: '$400+' },
        { name: 'Utility and automation bots', price: '$300+' },
        { name: 'AI, chat, and support bots', price: '$450+' },
        { name: 'Entertainment, games, and engagement bots', price: '$600+' },
        { name: 'Information, notification, and integration bots', price: '$800+' }
      ]
    },
    {
      id: 'web',
      icon: 'fa-code',
      title: 'Web Development',
      desc: 'From a single landing page to a full-stack product with a real backend.',
      items: [
        { name: 'Web App (JS / Python)', price: '$300+' },
        { name: 'Frontend Design (HTML/CSS/JS)', price: '$60+ per page' },
        { name: 'Full-Stack Project', price: '$500+' }
      ]
    },
    {
      id: 'osint',
      icon: 'fa-user-secret',
      title: 'OSINT / Investigation',
      desc: 'Research, analytical work and custom automation for investigations.',
      items: [
        { name: 'Data Research & Reports', price: '$40+ per task' },
        { name: 'Analytical Summaries', price: '$50+ per summary' },
        { name: 'Custom OSINT Automation Tools', price: '$200+' }
      ]
    },
    {
      id: 'apps',
      icon: 'fa-mobile-screen',
      title: 'App Development',
      desc: 'Desktop, mobile and cross-platform builds — with or without a bot attached.',
      items: [
        { name: 'Windows desktop app (Python / C# / Electron)', price: '$350+' },
        { name: 'Android app (Kotlin / Java)', price: '$450+' },
        { name: 'Cross-platform (Windows + Android)', price: '$650+' },
        { name: 'App + bot bundle', price: '$750+' }
      ]
    }
  ]
};
