/* Old Africa Adventures — keeps destination card photos in sync with a
   single source of truth.

   index.html and destinations.html each hardcode a destination card's
   photo directly in an <img> tag. Rather than editing the image in every
   page a destination appears on, add data-place="<slug>" to that <img>
   (slug matches the "place" used in its card's
   destination-detail.html?place=<slug> link) and this script will swap in
   that destination's `image` from js/destination-data.js once the page
   loads — so changing a photo in one place (destination-data.js) updates
   it everywhere.

   If a destination has no `image` set yet (still ""), the <img>'s existing
   src is left untouched and keeps acting as the fallback photo. Requires
   js/destination-data.js to be loaded first. */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof OAA_DESTINATIONS === 'undefined') return;

  document.querySelectorAll('img[data-place]').forEach(img => {
    const dest = OAA_DESTINATIONS[img.dataset.place];
    if (dest && dest.image) {
      img.src = dest.image;
    }
  });
});
