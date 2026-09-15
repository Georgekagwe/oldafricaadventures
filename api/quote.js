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

  const { name, email, whatsapp, travelers, tripType, dates, message } = req.body || {};
  const error = validate({ name, email }, ['name', 'email']);
  if (error) return res.status(400).json({ error });

  try {
    await sendEnquiryEmail({
      subject: `New quote request from ${name}`,
      fields: { name, email, whatsapp, travelers, tripType, dates, message },
    });
    await notifyWhatsApp(`New quote request\nName: ${name}\nEmail: ${email}\nWhatsApp: ${whatsapp || '-'}\nTrip type: ${tripType || '-'}\nTravelers: ${travelers || '-'}\nDates: ${dates || '-'}\nMessage: ${message || '-'}`);
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('quote form error:', err);
    res.status(500).json({ error: 'Could not send your request right now.' });
  }
};
