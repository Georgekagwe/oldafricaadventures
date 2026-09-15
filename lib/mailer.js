/**
 * Shared enquiry-mailing logic used by both:
 *   - backend/server.js   (Express server, for local development)
 *   - api/*.js            (Vercel serverless functions, for production)
 * Keeping this in one place means the two entry points can never drift apart.
 */

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: Number(process.env.SMTP_PORT) === 465, // true for port 465, false for others
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

async function sendEnquiryEmail({ subject, fields }) {
  const rows = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:6px 10px;color:#666;font-size:13px;">${k}</td><td style="padding:6px 10px;font-size:14px;"><strong>${escapeHtml(String(v))}</strong></td></tr>`)
    .join('');

  await transporter.sendMail({
    from: `"Old Africa Adventures Website" <${process.env.SMTP_USER}>`,
    to: process.env.BUSINESS_EMAIL || process.env.SMTP_USER,
    replyTo: fields.email || undefined,
    subject,
    html: `<table style="border-collapse:collapse;font-family:sans-serif;">${rows}</table>`,
  });
}

function validate(fields, required) {
  for (const key of required) {
    if (!fields[key] || String(fields[key]).trim() === '') {
      return `"${key}" is required.`;
    }
  }
  if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return 'Please provide a valid email address.';
  }
  return null;
}

// Optional: push straight into WhatsApp via Twilio. Silently does nothing
// unless TWILIO_ACCOUNT_SID is set (see backend/README.md).
async function notifyWhatsApp(text) {
  if (!process.env.TWILIO_ACCOUNT_SID) return;
  const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  await twilio.messages.create({
    from: `whatsapp:${process.env.TWILIO_WHATSAPP_FROM}`,
    to: `whatsapp:${process.env.BUSINESS_WHATSAPP_NUMBER}`,
    body: text,
  });
}

module.exports = { sendEnquiryEmail, validate, notifyWhatsApp };
