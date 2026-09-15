/* Old Africa Adventures — populates blog.html
   Reads js/blog-data.js and renders the featured article plus the grid of
   remaining articles. Text-only by design — no thumbnails. */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof OAA_BLOG === 'undefined') return;

  const entries = Object.entries(OAA_BLOG);
  const featuredEntry = entries.find(([, a]) => a.featured) || entries[0];
  const otherEntries = entries.filter(([slug]) => slug !== featuredEntry[0]);

  const [featuredSlug, featured] = featuredEntry;
  const featuredEl = document.getElementById('featuredArticle');
  featuredEl.href = `blog-article.html?post=${featuredSlug}`;
  featuredEl.innerHTML = `
    <span class="category-pill">${featured.category}</span>
    <h3>${featured.title}</h3>
    <p>${featured.excerpt}</p>
    <div class="featured-article-foot">
      <span class="card-meta" style="margin:0;">${featured.date} · ${featured.readTime}</span>
      <span class="card-link">Read Article →</span>
    </div>
  `;

  document.getElementById('blogGrid').innerHTML = otherEntries.map(([slug, a]) => `
    <a class="card blog-card" href="blog-article.html?post=${slug}">
      <div class="card-body">
        <span class="category-pill">${a.category}</span>
        <h3 style="font-size:1rem; margin-top:12px;">${a.title}</h3>
        <p class="card-meta">${a.excerpt}</p>
        <div class="card-foot">
          <span class="card-meta" style="margin:0;">${a.date} · ${a.readTime}</span>
          <span class="card-link">Read →</span>
        </div>
      </div>
    </a>
  `).join('');
});
