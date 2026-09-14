const OAA_LOGO_IMG = `<img class="brand-logo" src="assets/images/logo.png" alt="Old Africa Adventures logo">`;

const NAV_LINKS = [
  { href: "index.html", label: "Home" },
  { href: "destinations.html", label: "Destinations" },
  { href: "tours.html", label: "Tours" },
  { href: "services.html", label: "Services" },
  { href: "about.html", label: "About" },
  { href: "blog.html", label: "Blog" },
];

function renderHeader() {
  const current = document.body.getAttribute('data-page') || '';
  const links = NAV_LINKS.map(l => {
    const active = l.href.replace('.html', '') === current ? ' active' : '';
    return `<a href="${l.href}" class="${active.trim()}">${l.label}</a>`;
  }).join('');

  return `
  <div class="nav">
    <a href="index.html" class="brand" aria-label="Old Africa Adventures home">
      ${OAA_LOGO_IMG}
    </a>
    <nav class="nav-links" id="navLinks">${links}</nav>
    <div class="nav-cta">
      <a href="quote.html" class="btn btn-clay btn-sm">Get a Quote</a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </div>
  </div>`;
}

function renderFooter() {
  return `
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="brand">
          ${OAA_LOGO_IMG}
        </a>
        <p>Authentic Kenyan adventures. Personal, responsible, unforgettable.</p>
        <div class="footer-social">
          <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h3l1-3h-4V9c0-.6.4-1 1-1z"/></svg></a>
          <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
          <a href="#" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z"/><path d="M8.5 8.5c.3 3 2.5 5.2 5.5 5.5.8.1 1.4-.5 1.2-1.3l-.2-.7a.9.9 0 0 0-.9-.6l-1 .1a4.6 4.6 0 0 1-2.6-2.6l.1-1a.9.9 0 0 0-.6-.9l-.7-.2c-.8-.2-1.4.4-1.3 1.2z"/></svg></a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Quick Links</h5>
        <ul>
          <li><a href="destinations.html">Destinations</a></li>
          <li><a href="tours.html">Tours</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="blog.html">Blog</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Popular Destinations</h5>
        <ul>
          <li><a href="destination-detail.html?place=maasai-mara">Maasai Mara</a></li>
          <li><a href="destination-detail.html?place=amboseli">Amboseli</a></li>
          <li><a href="destination-detail.html?place=tsavo">Tsavo</a></li>
          <li><a href="destination-detail.html?place=mt-kenya">Mt. Kenya</a></li>
          <li><a href="destination-detail.html?place=diani-beach">Diani Beach</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Contact Us</h5>
        <ul>
          <li><a href="tel:+254722888937">+254 722 888 937</a></li>
          <li><a href="mailto:oldafricaadventures@gmail.com">oldafricaadventures@gmail.com</a></li>
          <li><a href="contact.html">Nairobi, Kenya</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} Old Africa Adventures. All rights reserved.</span>
      <span>Nairobi, Kenya</span>
    </div>
  </div>`;
}

function renderWhatsAppFloat() {
  return `<a class="wa-float" id="waFloat" href="https://wa.me/254722888937?text=${encodeURIComponent("Hi Old Africa Adventures, I'd like to ask about a safari.")}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
    <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7.9-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.2.1-.2 0-.4 0-.5l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.7 2.7 0 0 0-.9 2 4.7 4.7 0 0 0 1 2.5 10.8 10.8 0 0 0 4.4 3.9c1.6.7 2.2.7 3 .6a2.6 2.6 0 0 0 1.7-1.2 2 2 0 0 0 .1-1.2c-.1-.1-.2-.2-.5-.3z"/></svg>
  </a>`;
}

function mountComponents() {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (headerEl) headerEl.innerHTML = renderHeader();
  if (footerEl) footerEl.innerHTML = renderFooter();
  document.body.insertAdjacentHTML('beforeend', renderWhatsAppFloat());

  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }
}

document.addEventListener('DOMContentLoaded', mountComponents);