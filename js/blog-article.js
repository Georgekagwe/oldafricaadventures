/* Old Africa Adventures — populates blog-article.html
   Reads ?post=<slug> from the URL (e.g. blog-article.html?post=safari-packing-list)
   and fills the page using the matching entry in js/blog-data.js.
   Text-only by design — no thumbnails anywhere on this page. */

function renderArticleBody(article) {
  const introHtml = (article.intro || []).map(p => `<p>${p}</p>`).join('');

  const sectionsHtml = (article.sections || []).map(section => {
    const paragraphs = (section.paragraphs || []).map(p => `<p>${p}</p>`).join('');
    const list = section.list && section.list.length
      ? `<ul class="check-list" style="margin-top:12px;">${section.list.map(item => `
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg> ${item}</li>
        `).join('')}</ul>`
      : '';
    return `<h2>${section.heading}</h2>${paragraphs}${list}`;
  }).join('');

  const closingHtml = article.closing ? `
    <div class="cta-banner" style="margin-top:36px;">
      <div>
        <h3>Still have questions?</h3>
        <p>${article.closing}</p>
      </div>
      <a href="quote.html" class="btn" style="background:#fff; color:var(--clay-600); white-space:nowrap;">Get a Quote →</a>
    </div>
  ` : '';

  return introHtml + sectionsHtml + closingHtml;
}

function renderArticleDetail() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('post');
  const article = typeof OAA_BLOG !== 'undefined' ? OAA_BLOG[slug] : null;

  const pageEl = document.getElementById('articlePage');
  const notFoundEl = document.getElementById('articleNotFound');

  if (!article) {
    notFoundEl.style.display = '';
    pageEl.style.display = 'none';
    return;
  }

  document.title = `${article.title} — Old Africa Adventures`;
  document.getElementById('crumbCategory').textContent = article.category;
  document.getElementById('articleMeta').innerHTML =
    `${article.category.toUpperCase()} &nbsp;&middot;&nbsp; ${article.date} &nbsp;&middot;&nbsp; ${article.readTime}`;
  document.getElementById('articleTitle').textContent = article.title;
  document.getElementById('articleBody').innerHTML = renderArticleBody(article);

  // Related articles: same category first, then fill from the rest.
  const allEntries = Object.entries(OAA_BLOG).filter(([s]) => s !== slug);
  const sameCategory = allEntries.filter(([, a]) => a.category === article.category);
  const rest = allEntries.filter(([, a]) => a.category !== article.category);
  const related = [...sameCategory, ...rest].slice(0, 3);

  document.getElementById('relatedArticles').innerHTML = related.map(([relSlug, rel]) => `
    <a class="related-post" href="blog-article.html?post=${relSlug}">
      <div><h6>${rel.title}</h6><span>${rel.date} · ${rel.readTime}</span></div>
    </a>
  `).join('');

  // Category counts are computed from what's actually in blog-data.js —
  // never hardcode these, they'll drift the moment an article is added.
  const counts = {};
  Object.values(OAA_BLOG).forEach(a => { counts[a.category] = (counts[a.category] || 0) + 1; });
  document.getElementById('categoryList').innerHTML = Object.entries(counts).map(([cat, count]) => `
    <li><a href="blog.html">${cat} <span>${count}</span></a></li>
  `).join('');

  pageEl.style.display = '';
  notFoundEl.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', renderArticleDetail);
