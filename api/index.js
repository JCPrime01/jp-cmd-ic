export default async function handler(req, res) {
  const ua = (req.headers['user-agent'] || '').toLowerCase();
  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  const botUAs = ['facebookexternalhit','facebot','facebookbot','adsbot','googlebot','bingbot','twitterbot','linkedinbot','slackbot','whatsapp','telegrambot','crawler','spider','headless','phantom','python','curl','wget','java/','apache-httpclient'];
  const metaIPs = ['66.220.','69.63.','69.171.','173.252.','31.13.','157.240.','179.60.','204.15.'];
  const isBot = botUAs.some(b => ua.includes(b));
  const isMeta = metaIPs.some(r => ip.startsWith(r));
  if (isBot || isMeta) {
    res.writeHead(302, { Location: 'https://grupojogadorcaro.com.br/quem-e-jota' });
    res.end();
    return;
  }
  const links = [
    'https://chat.whatsapp.com/CfG2GrArd3wLUfp9jXVjoh',
    'https://chat.whatsapp.com/CWM4CaYO436D1j1cfa0wLs',
    'https://chat.whatsapp.com/ES23jFs5xIH2zCtwiOFAqw',
    'https://chat.whatsapp.com/KpU3HcHEhWPIVczRGkSB1T',
    'https://chat.whatsapp.com/IK8vcibKLZWFELgzFkNko6',
  ];
  const link = links[Math.floor(Math.random() * links.length)];
  res.writeHead(302, { Location: link });
  res.end();
}
