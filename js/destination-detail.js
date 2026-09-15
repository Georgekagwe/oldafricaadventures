/* Old Africa Adventures — populates destination-detail.html
   Reads ?place=<slug> from the URL (e.g. destination-detail.html?place=tsavo)
   and fills the page using the matching entry in js/destinations-data.js.

   Some destinations have "rich" content (moments, seasons, photography) —
   others only have the simpler original fields (highlights, bestTime,
   gallery). Everything below checks which fields exist and falls back
   gracefully, so you can upgrade destinations one at a time. */

function renderDestinationDetail() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('place');
  const data = OAA_DESTINATIONS[slug];

  const notFoundEl = document.getElementById('destNotFound');
  const contentEl = document.getElementById('destContent');

  if (!data) {
    notFoundEl.style.display = '';
    contentEl.style.display = 'none';
    return;
  }

  document.title = `${data.name} — Old Africa Adventures`;
  document.getElementById('crumbName').textContent = data.name;

  // --- Hero ---
  document.getElementById('destEyebrow').textContent = data.eyebrowTag || 'DESTINATION GUIDE';
  document.getElementById('destName').textContent = data.heroTitle || data.name;
  document.getElementById('destTagline').innerHTML = data.heroSubtitle || data.tagline || '';

  const hero = document.getElementById('destHero');
  const heroImage = data.image || `https://picsum.photos/seed/${data.seed}detail/1600/900`;
  hero.style.backgroundImage = `url('${heroImage}')`;

  if (data.heroSubtitle) {
    const actions = document.getElementById('destHeroActions');
    actions.style.display = '';
    document.getElementById('destExploreToursBtn').textContent = `Explore ${data.name} Tours`;
  }

  document.querySelectorAll('.dest-name-inline').forEach(el => { el.textContent = data.name; });

  // --- About ---
  document.getElementById('destAboutHeading').innerHTML =
    data.aboutHeading ? data.aboutHeading : `About <span class="dest-name-inline">${data.name}</span>`;
  document.getElementById('destAbout').innerHTML = data.about.map(p => `<p>${p}</p>`).join('');

  // --- Moments (rich) or Highlights (simple fallback) ---
  const momentsWrap = document.getElementById('destMomentsWrap');
  const highlightsEl = document.getElementById('destHighlights');
  if (data.moments && data.moments.length) {
    momentsWrap.style.display = '';
    document.getElementById('destMoments').innerHTML = data.moments.map(m => `
      <div class="card" style="padding:22px;">
        <div style="font-size:1.8rem; margin-bottom:10px;">${m.emoji}</div>
        <h4 style="font-size:1rem; margin-bottom:6px;">${m.title}</h4>
        <p style="font-size:0.88rem; margin:0;">${m.text}</p>
      </div>
    `).join('');
    highlightsEl.style.display = 'none';
  } else if (data.highlights && data.highlights.length) {
    highlightsEl.style.display = '';
    highlightsEl.innerHTML = `<h3 style="font-size:1.1rem; margin-bottom:12px;">Highlights</h3>` + data.highlights.map(h => `
      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg> ${h}</li>
    `).join('');
  }

  // --- Seasons (rich) or Best Time paragraph (simple fallback) ---
  const seasonsWrap = document.getElementById('destSeasonsWrap');
  const bestTimeWrap = document.getElementById('destBestTimeWrap');
  const talkToUs = document.getElementById('destTalkToUs');
  if (data.seasons && data.seasons.length) {
    seasonsWrap.style.display = '';
    bestTimeWrap.style.display = 'none';
    document.getElementById('destSeasons').innerHTML = data.seasons.map(s => `
      <div class="card" style="padding:22px;">
        <p class="eyebrow-inline">${s.range}</p>
        <h4 style="font-size:1.05rem; margin:6px 0 8px;">${s.title}</h4>
        <p style="font-size:0.9rem;">${s.text}</p>
        <p style="font-size:0.78rem; font-weight:600; color:var(--ink-500); margin:0;">Best for: ${s.bestFor.join(' · ')}</p>
      </div>
    `).join('');
    talkToUs.style.display = 'flex';
  } else {
    seasonsWrap.style.display = 'none';
    bestTimeWrap.style.display = '';
    document.getElementById('destBestTime').innerHTML =
      `${data.bestTime} See our <a href="blog-article.html?post=best-time-to-visit-kenya" style="color:var(--green-900); font-weight:600;">full seasonal guide</a> for more detail.`;
  }

  // --- Photography: bento (rich) or simple photo grid (fallback) — hidden
  // entirely when a destination has no real photos, rather than padding it
  // out with random stock placeholders. ---
  const bentoEl = document.getElementById('destPhotoBento');
  const galleryEl = document.getElementById('destGallery');
  const hasBento = data.photography && (data.photography.big || (data.photography.small && data.photography.small.length));
  const hasGalleryPhotos = data.gallery && data.gallery.length;
  if (hasBento) {
    const big = data.photography.big;
    const small = (data.photography.small || []).filter(Boolean);
    bentoEl.innerHTML = `
      <h3 style="font-size:1.3rem; margin-bottom:16px;">Photography</h3>
      <div style="display:grid; grid-template-columns: 1.4fr 1fr; gap:16px;">
        ${big ? `<img src="${big}" alt="${data.name} — featured photo" style="width:100%; height:100%; min-height:280px; object-fit:cover; border-radius:8px;">` : ''}
        <div style="display:grid; grid-template-rows: 1fr 1fr; gap:16px;">
          ${small.map((src, i) => `<img src="${src}" alt="${data.name} — photo ${i + 2}" style="width:100%; height:100%; object-fit:cover; border-radius:8px;">`).join('')}
        </div>
      </div>
    `;
    galleryEl.style.display = 'none';
  } else if (hasGalleryPhotos) {
    bentoEl.innerHTML = '';
    galleryEl.style.display = '';
    galleryEl.innerHTML = data.gallery.map((src, n) =>
      `<img src="${src}" alt="${data.name} photo ${n + 1}" style="border-radius:8px; aspect-ratio:1; object-fit:cover;">`
    ).join('');
  } else {
    bentoEl.innerHTML = '';
    galleryEl.style.display = 'none';
  }

  // --- Tours panel ---
  // Each row links through to tour-detail.html when the tour exists in
  // js/tours-data.js; anything unmatched falls back to the tours listing.
  const allTours = typeof OAA_TOURS !== 'undefined' ? OAA_TOURS : {};
  document.getElementById('destTours').innerHTML = data.tours.map((t, i) => {
    const tour = t.slug ? allTours[t.slug] : null;
    const href = tour ? `tour-detail.html?tour=${t.slug}` : 'tours.html';
    const img = (tour && tour.image) ||
      `https://picsum.photos/seed/${tour ? tour.seed : data.seed + 'mt' + (i + 1)}/200/200`;
    return `
    <a class="mini-tour" href="${href}" style="${i === data.tours.length - 1 ? 'border-bottom:none;' : ''}">
      <img src="${img}" alt="">
      <div><h6>${t.name}</h6><span>${t.price}</span></div>
      <svg class="mini-tour-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
    </a>
  `;
  }).join('');

  const viewTourBtn = document.getElementById('destViewTourBtn');
  const primaryTourSlug = data.tours[0] && data.tours[0].slug;
  viewTourBtn.href = primaryTourSlug ? `tour-detail.html?tour=${primaryTourSlug}` : 'tours.html';

  contentEl.style.display = '';
  notFoundEl.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', renderDestinationDetail);