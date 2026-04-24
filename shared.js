// ═══════ PAMPER NAILS — SHARED NAV & FOOTER ═══════
// Edit this ONE file to update nav links, footer, and site info across all pages.

const SITE = {
  name: 'Pamper Nails',
  location: 'Royse City, TX',
  address: '224 E. Main Street',
  cityStateZip: 'Royse City, TX 75189',
  phone: '469-707-3194',
  phoneDisplay: '469 · 707 · 3194',
  phoneLink: 'tel:4697073194',
  instagram: '#',  // Replace with actual Instagram URL when ready
  facebook: '#',   // Replace with actual Facebook URL when ready
  copyright: '© 2026 Pamper Nails · All content copyright Pamper Nails'
};

// ─── Nav links. Add a page here and it shows up on every page automatically. ───
const NAV_LINKS = [
  { label: 'Home', href: 'index.html' },
  { label: 'Services', href: 'services.html' },
  { label: 'Loyalty', href: 'loyalty.html' }
];

// ─── Determine active page for underline styling ───
function getActivePage() {
  const path = window.location.pathname;
  const file = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
  return file;
}

// ─── Build Nav HTML ───
function buildNav() {
  const navEl = document.getElementById('site-nav');
  if (!navEl) return;

  // 'solid' style keeps nav opaque from the start (for inner pages without a dark hero)
  const solidAttr = navEl.dataset.style === 'solid' ? ' solid' : '';
  const active = getActivePage();

  const linksHTML = NAV_LINKS.map(l =>
    `<li><a href="${l.href}"${l.href === active ? ' class="active"' : ''}>${l.label}</a></li>`
  ).join('');

  navEl.innerHTML = `
    <nav class="site-nav${solidAttr}" id="navbar">
      <a href="index.html" class="logo">
        ${SITE.name}
        <span>${SITE.location}</span>
      </a>
      <ul>${linksHTML}</ul>
      <a href="${SITE.phoneLink}" class="phone">${SITE.phoneDisplay}</a>
    </nav>
  `;

  // Scroll effect — only for non-solid (home page with hero)
  if (!solidAttr) {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    });
  }
}

// ─── Build Footer HTML ───
function buildFooter() {
  const footerEl = document.getElementById('site-footer');
  if (!footerEl) return;

  const footerLinksHTML = NAV_LINKS.map(l => `<a href="${l.href}">${l.label}</a>`).join('');

  footerEl.innerHTML = `
    <footer>
      <div class="footer-brand">${SITE.name}</div>
      <div class="footer-links">
        ${footerLinksHTML}
        <a href="${SITE.phoneLink}">Call</a>
      </div>
      <div class="copy">${SITE.copyright}</div>
    </footer>
  `;
}

// ─── Build Visit/CTA Block (optional reusable block) ───
function buildVisit() {
  const visitEl = document.getElementById('site-visit');
  if (!visitEl) return;

  const headline = visitEl.dataset.headline || 'Your biggest commitment must always be <em>to yourself.</em>';
  const kicker = visitEl.dataset.kicker || 'Book Your Appointment Today';

  visitEl.innerHTML = `
    <section class="visit">
      <div class="visit-inner">
        <div class="kicker">${kicker}</div>
        <h2>${headline}</h2>
        <div class="address-block">
          <strong>${SITE.name}</strong><br>
          ${SITE.address}<br>
          ${SITE.cityStateZip}
        </div>
        <a href="${SITE.phoneLink}" class="call-btn">
          Call to Book <span class="num">${SITE.phoneDisplay}</span>
        </a>
      </div>
    </section>
  `;
}

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  buildFooter();
  buildVisit();
});
