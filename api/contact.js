const { sendEnquiryEmail, validate, notifyWhatsApp } = require('../lib/mailer');
const { isRateLimited } = require('../lib/rateLimit');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || req.socket?.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests, please try again in a minute.' });
  }

  const { name, email, whatsapp, message } = req.body || {};
  const error = validate({ name, email, message }, ['name', 'email', 'message']);
  if (error) return res.status(400).json({ error });

  try {
    await sendEnquiryEmail({
      subject: `New website enquiry from ${name}`,
      fields: { name, email, whatsapp, message },
    });
    await notifyWhatsApp(`New contact form enquiry\nName: ${name}\nEmail: ${email}\nWhatsApp: ${whatsapp || '-'}\nMessage: ${message}`);
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('contact form error:', err);
    res.status(500).json({ error: 'Could not send your message right now.' });
  }
};
