export default async function handler(req, res) {
  const ua = (req.headers['user-agent'] || '').toLowerCase();
  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim();

  const botUAs = [
    'facebookexternalhit', 'facebot', 'facebookbot',
    'adsbot', 'googlebot', 'bingbot', 'twitterbot',
    'linkedinbot', 'slackbot', 'whatsapp', 'telegrambot',
    'crawler', 'spider', 'headless', 'phantom', 'python',
    'curl', 'wget', 'java/', 'apache-httpclient'
  ];

  const metaIPs = [
    '66.220.', '69.63.', '69.171.', '173.252.',
    '31.13.', '157.240.', '179.60.', '204.15.'
  ];

  const isBot = botUAs.some(b => ua.includes(b));
  const isMeta = metaIPs.some(r => ip.startsWith(r));

  if (isBot || isMeta) {
    res.writeHead(302, { Location: 'https://grupojogadorcaro.com.br/quem-e-jota' });
    res.end();
    return;
  }

  // ── Calendário de links por dia ──────────────────────────────
  const START_DATE = new Date('2026-05-19T00:00:00-03:00'); // Dia 1 = 19/05

  const linksPorDia = {
    1: [
      'https://chat.whatsapp.com/G6ntVSdjHNWBDSol2p5vKX', // 801
      'https://chat.whatsapp.com/LfehR600yFV4SGmtZOCy2F', // 803
      'https://chat.whatsapp.com/CfG2GrArd3wLUfp9jXVjoh', // 805
      'https://chat.whatsapp.com/CWM4CaYO436D1j1cfa0wLs', // 807
    ],
    2: [
      'https://chat.whatsapp.com/ES23jFs5xIH2zCtwiOFAqw', // 808
      'https://chat.whatsapp.com/KpU3HcHEhWPIVczRGkSB1T', // 809
      'https://chat.whatsapp.com/IK8vcibKLZWFELgzFkNko6', // 811
      'https://chat.whatsapp.com/JMQXBZE9G5YDTrL8bySxmb', // 812
    ],
    3: [
      'https://chat.whatsapp.com/L06U0lGRpGy7tQId1pyFJn', // 813
      'https://chat.whatsapp.com/CBzYxjG1ScpBkAVOehvGfP', // 814
      'https://chat.whatsapp.com/JPDj6z7napWCpAZCuFfFbV', // 816
      'https://chat.whatsapp.com/K3nyk1SEUqLH5tkhSVnYPB', // 817
    ],
  };
  // ─────────────────────────────────────────────────────────────

  const now = new Date();
  const diffMs = now - START_DATE;
  const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;

  // Cicla entre dia 1, 2, 3, 1, 2, 3...
  const totalDias = Object.keys(linksPorDia).length;
  const diaAtual = ((diffDias - 1) % totalDias) + 1;
  const links = linksPorDia[diaAtual];

  const link = links[Math.floor(Math.random() * links.length)];

  res.writeHead(302, { Location: link });
  res.end();
}
