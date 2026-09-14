/* Old Africa Adventures — form + interaction logic
   Talks to the small Express backend in /backend (see backend/README.md). */

const OAA_API_BASE = window.OAA_API_BASE || "http://localhost:3000";
const OAA_WHATSAPP_NUMBER = "254722888937"; // international format, no plus/spaces

function showStatus(el, type, message) {
  el.textContent = message;
  el.className = `form-status show ${type}`;
}

function buildWhatsAppLink(data) {
  const lines = Object.entries(data)
    .filter(([, v]) => v)
    .map(([k, v]) => `*${k}*: ${v}`)
    .join('\n');
  const text = encodeURIComponent(`New enquiry from the website:\n${lines}`);
  return `https://wa.me/${OAA_WHATSAPP_NUMBER}?text=${text}`;
}

async function submitFormToBackend(endpoint, payload) {
  const res = await fetch(`${OAA_API_BASE}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request failed (${res.status})`);
  }
  return res.json();
}

function wireForm(formId, statusId, endpoint) {
  const form = document.getElementById(formId);
  const status = document.getElementById(statusId);
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalLabel = submitBtn ? submitBtn.textContent : '';
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }

    try {
      await submitFormToBackend(endpoint, data);
      showStatus(status, 'ok', "Thanks — we've received your message and will reply within a few hours. You can also continue on WhatsApp below.");
      form.reset();
    } catch (err) {
      showStatus(
        status,
        'err',
        `We couldn't send that automatically (${err.message}). Please try WhatsApp instead — it opens with your details pre-filled.`
      );
    } finally {
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalLabel; }
    }

    const waLink = document.getElementById(`${statusId}-wa`);
    if (waLink) waLink.href = buildWhatsAppLink(data);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  wireForm('contactForm', 'contactStatus', '/api/contact');
  wireForm('quoteForm', 'quoteStatus', '/api/quote');

  // Tabs on tour detail page
  document.querySelectorAll('.tabs').forEach(tabGroup => {
    const tabs = tabGroup.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const targetId = tab.getAttribute('data-target');
        document.querySelectorAll('.tab-panel').forEach(p => p.style.display = 'none');
        const target = document.getElementById(targetId);
        if (target) target.style.display = 'block';
      });
    });
  });

  // Destination/tour filter pills (client-side show/hide by data-category)
  document.querySelectorAll('.filters').forEach(filterBar => {
    const pills = filterBar.querySelectorAll('.filter-pill');
    const gridId = filterBar.getAttribute('data-controls');
    const grid = gridId ? document.getElementById(gridId) : null;
    if (!grid) return;
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const cat = pill.getAttribute('data-filter');
        grid.querySelectorAll('[data-category]').forEach(card => {
          card.style.display = (cat === 'all' || card.getAttribute('data-category') === cat) ? '' : 'none';
        });
      });
    });
  });
});
