/* Old Africa Adventures — populates tour-detail.html
   Reads ?tour=<slug> from the URL (e.g. tour-detail.html?tour=tsavo-adventure)
   and fills the page using the matching entry in js/tours-data.js. Also
   cross-references js/destination-data.js so a tour can link back to the
   destination(s) it visits, and js/tours-data.js again to surface a few
   related tours at the bottom of the page. */

// Small inline icon set reused across the quick-facts strip, placeholder
// badges and trust list — kept here rather than duplicated per call site.
const OAA_ICONS = {
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    gauge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z"/><circle cx="12" cy="13" r="4"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>',
    cross: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>'
};

function difficultyClass(difficulty) {
    const d = (difficulty || '').toLowerCase();
    if (d === 'challenging') return 'is-challenging';
    if (d === 'moderate') return 'is-moderate';
    return 'is-easy';
}

// Marks stock/placeholder photography so it's obvious at a glance which
// images still need to be swapped for real, licensed shots before launch.
// `wrap` must already have position:relative (see .ph-media in style.css).
function flagIfPlaceholder(wrap, isPlaceholder) {
    if (!wrap || !isPlaceholder) return;
    wrap.classList.add('ph-media');
    const badge = document.createElement('span');
    badge.className = 'ph-badge';
    badge.innerHTML = `${OAA_ICONS.camera} Sample photo`;
    wrap.appendChild(badge);
}

function destSlugsFor(data) {
    if (data.destinations && data.destinations.length) return data.destinations;
    if (data.destination) return [data.destination];
    return [];
}

function renderTourDetail() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('tour');
    const data = OAA_TOURS[slug];

    const pageEl = document.getElementById('tourPage');
    const notFoundEl = document.getElementById('tourNotFound');

    if (!data) {
        notFoundEl.style.display = '';
        pageEl.style.display = 'none';
        return;
    }

    const destinations = typeof OAA_DESTINATIONS !== 'undefined' ? OAA_DESTINATIONS : {};

    document.title = `${data.name} — Old Africa Adventures`;
    document.getElementById('crumbName').textContent = data.name;
    document.getElementById('tourTags').innerHTML = `
    <span class="category-pill">${data.category}</span>
    ${data.difficulty ? `<span class="difficulty-pill ${difficultyClass(data.difficulty)}">${data.difficulty}</span>` : ''}
  `;
    document.getElementById('tourName').textContent = data.name;
    document.getElementById('tourShortDesc').textContent = data.shortDesc || '';
    document.getElementById('tourMeta').textContent = `${data.duration} · ${data.groupSize}`;

    // --- Hero image ---
    const heroImg = document.getElementById('tourHeroImg');
    const heroIsPlaceholder = !data.image;
    heroImg.src = data.image || `https://picsum.photos/seed/${data.seed}/1100/850`;
    heroImg.alt = data.name;
    flagIfPlaceholder(heroImg.closest('.tour-hero-media'), heroIsPlaceholder);

    // --- Price / sidebar facts ---
    document.getElementById('tourPrice').textContent = data.price.split(' / ')[0];
    document.getElementById('tourPriceUnit').textContent = `/ ${data.price.split(' / ')[1] || 'person'}`;
    document.getElementById('tourGroupSize').textContent = data.groupSize;
    document.getElementById('tourDuration').textContent = data.duration;
    document.getElementById('tourDifficulty').innerHTML = data.difficulty
        ? `<span class="difficulty-pill ${difficultyClass(data.difficulty)}">${data.difficulty}</span>`
        : '—';

    document.getElementById('tourIncludesPreview').innerHTML = data.inclusions.slice(0, 5).map(i => `
    <li>${OAA_ICONS.check} ${i}</li>
  `).join('');

    // --- Quick-facts strip ---
    const destChipsHtml = destSlugsFor(data).map(slugKey => {
        const d = destinations[slugKey];
        return d ? `<a href="destination-detail.html?place=${slugKey}">${d.name}</a>` : null;
    }).filter(Boolean).join(', ') || 'Kenya';

    document.getElementById('tourQuickFacts').innerHTML = `
    <div class="tour-quickfact">${OAA_ICONS.clock}
      <span><span class="tour-quickfact-label">Duration</span><span class="tour-quickfact-value">${data.duration}</span></span>
    </div>
    <div class="tour-quickfact">${OAA_ICONS.users}
      <span><span class="tour-quickfact-label">Group Size</span><span class="tour-quickfact-value">${data.groupSize}</span></span>
    </div>
    <div class="tour-quickfact">${OAA_ICONS.gauge}
      <span><span class="tour-quickfact-label">Difficulty</span><span class="tour-quickfact-value">${data.difficulty || 'Easy'}</span></span>
    </div>
    <div class="tour-quickfact">${OAA_ICONS.pin}
      <span><span class="tour-quickfact-label">Where You'll Go</span><span class="tour-quickfact-value">${destChipsHtml}</span></span>
    </div>
    <div class="tour-quickfact">${OAA_ICONS.calendar}
      <span><span class="tour-quickfact-label">Best Time</span><span class="tour-quickfact-value">${data.bestTime || 'Year-round'}</span></span>
    </div>
  `;

    // --- Overview tab ---
    document.getElementById('tourOverview').textContent = data.overview;

    const highlightsEl = document.getElementById('tourHighlights');
    if (data.highlights && data.highlights.length) {
        highlightsEl.style.display = '';
        highlightsEl.innerHTML = data.highlights.map(h => `
      <div class="card tour-highlight-card">
        <div class="tour-highlight-icon">${h.emoji}</div>
        <h5 style="font-size:0.95rem; margin-bottom:6px;">${h.title}</h5>
        <p style="font-size:0.86rem; margin:0; color:var(--ink-700);">${h.text}</p>
      </div>
    `).join('');
    } else {
        highlightsEl.style.display = 'none';
    }

    document.getElementById('tourWhyGo').innerHTML = data.whyGo.map(w => `
    <li>${OAA_ICONS.check} ${w}</li>
  `).join('');

    const overviewImg = document.getElementById('tourOverviewImg');
    const overviewIsPlaceholder = !data.overviewImage;
    overviewImg.src = data.overviewImage || `https://picsum.photos/seed/${data.seed}wide/900/500`;
    overviewImg.alt = `${data.name} — scenery`;
    flagIfPlaceholder(document.getElementById('tourOverviewImgWrap'), overviewIsPlaceholder);

    // Links back to the destination page(s) this tour visits, reusing the
    // richer destination content (tagline) as a short teaser.
    const destCallout = document.getElementById('tourDestCallout');
    const destSlugs = destSlugsFor(data);
    const destObjs = destSlugs.map(s => ({ slug: s, d: destinations[s] })).filter(x => x.d);
    if (destObjs.length) {
        const teaser = destObjs.length === 1
            ? (destObjs[0].d.tagline || '').replace(/<[^>]+>/g, '')
            : `Combines ${destObjs.map(x => x.d.name).join(' and ')} into a single itinerary.`;
        destCallout.style.display = '';
        destCallout.innerHTML = `
      <div class="tour-dest-callout-text">
        <strong style="font-size:0.95rem;">Where you'll go</strong>
        <p>${teaser}</p>
      </div>
      ${destObjs.map(x => `<a class="tour-dest-chip" href="destination-detail.html?place=${x.slug}">${OAA_ICONS.pin} ${x.d.name}</a>`).join('')}
    `;
    } else {
        destCallout.style.display = 'none';
    }

    // --- Itinerary tab (timeline) ---
    document.getElementById('tourItinerary').innerHTML = data.itinerary.map((day, i) => {
        const dayMatch = day.title.match(/^Day\s+([\d\-–]+)/i);
        const marker = dayMatch ? dayMatch[1] : (i + 1);
        return `
      <div class="itinerary-item">
        <div class="itinerary-marker">${marker}</div>
        <div class="itinerary-content">
          <h4>${day.title}</h4>
          <p>${day.text}</p>
        </div>
      </div>
    `;
    }).join('');

    // --- Inclusions / Exclusions ---
    document.getElementById('tourInclusions').innerHTML = data.inclusions.map(i => `
    <li>${OAA_ICONS.check} ${i}</li>
  `).join('');

    document.getElementById('tourExclusions').innerHTML = data.exclusions.map(e => `
    <li>${OAA_ICONS.cross} ${e}</li>
  `).join('');

    // --- Gallery ---
    document.getElementById('tourGallery').innerHTML = [1, 2, 3].map(n => {
        const real = data.gallery && data.gallery[n - 1];
        const src = real || `https://picsum.photos/seed/${data.seed}g${n}/400/400`;
        return `
      <div class="ph-media">
        <img src="${src}" alt="${data.name} photo ${n}" style="border-radius:8px; aspect-ratio:1; object-fit:cover; width:100%;">
        ${!real ? `<span class="ph-badge">${OAA_ICONS.camera} Sample photo</span>` : ''}
      </div>
    `;
    }).join('');

    // --- Related tours: same destination(s) first, then same category ---
    const relatedSection = document.getElementById('relatedToursSection');
    const relatedEl = document.getElementById('relatedTours');
    const sameDest = [];
    const sameCategory = [];
    Object.entries(OAA_TOURS).forEach(([otherSlug, other]) => {
        if (otherSlug === slug) return;
        const otherDests = destSlugsFor(other);
        if (destSlugs.some(s => otherDests.includes(s))) sameDest.push(otherSlug);
        else if (other.category === data.category) sameCategory.push(otherSlug);
    });
    const relatedSlugs = [...sameDest, ...sameCategory].slice(0, 3);

    if (relatedSlugs.length) {
        relatedSection.style.display = '';
        relatedEl.innerHTML = relatedSlugs.map(rSlug => {
            const r = OAA_TOURS[rSlug];
            const img = r.image || `https://picsum.photos/seed/${r.seed}/700/560`;
            return `
        <a class="card" href="tour-detail.html?tour=${rSlug}">
          <div class="card-media ph-media"><img src="${img}" alt="${r.name}">${!r.image ? `<span class="ph-badge">${OAA_ICONS.camera} Sample photo</span>` : ''}</div>
          <div class="card-body">
            <span class="card-meta">${r.duration.toUpperCase()}</span>
            <h3>${r.name}</h3>
            <p class="card-meta">${r.shortDesc}</p>
            <div class="card-foot">
              <span class="card-price">FROM<strong>${r.price}</strong></span>
              <span class="card-link">View Tour →</span>
            </div>
          </div>
        </a>
      `;
        }).join('');
    } else {
        relatedSection.style.display = 'none';
    }

    pageEl.style.display = '';
    notFoundEl.style.display = 'none';

    // Re-attach tab behaviour now that panels exist (main.js wires this on
    // DOMContentLoaded, which may have already fired before this content existed)
    const tabsGroup = document.querySelector('.tabs');
    if (tabsGroup) {
        const tabs = tabsGroup.querySelectorAll('.tab');
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
    }
}

document.addEventListener('DOMContentLoaded', renderTourDetail);
