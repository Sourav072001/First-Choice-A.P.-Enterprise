(() => {
  // Shared search metadata keeps every public page discoverable and consistent.
  const page = location.pathname.split('/').pop().replace(/\.html?$/, '') || 'index';
  const pageData = {
    index: ['First Choice A.P. Enterprise | Interior & Furniture Studio', 'First Choice A.P. Enterprise creates thoughtful Kolkata interiors, custom furniture, colour stories and practical spaces for living well.'],
    about: ['About First Choice A.P. Enterprise | Kolkata Interior Studio', 'Meet First Choice A.P. Enterprise, a Kolkata interior design and furniture studio creating personal, enduring spaces.'],
    contact: ['Contact First Choice A.P. Enterprise | Kolkata', 'Contact First Choice A.P. Enterprise for interior design, furniture, paint and flooring projects in Kolkata.'],
    works: ['Interior Design Projects | First Choice A.P. Enterprise', 'Explore interior design, furniture, kitchen, paint and flooring projects by First Choice A.P. Enterprise in Kolkata.'],
    services: ['Interior Design Services | First Choice A.P. Enterprise', 'Interior design, modular kitchens, custom furniture, paint and flooring services by First Choice A.P. Enterprise in Kolkata.'],
    'interior-works': ['Interior Works Kolkata | First Choice A.P. Enterprise', 'Thoughtful residential and commercial interior works delivered by First Choice A.P. Enterprise in Kolkata.'],
    'modular-kitchen': ['Modular Kitchens Kolkata | First Choice A.P. Enterprise', 'Custom modular kitchen planning, materials and installation by First Choice A.P. Enterprise in Kolkata.'],
    'furniture-works': ['Custom Furniture Kolkata | First Choice A.P. Enterprise', 'Custom furniture, built-ins and joinery designed by First Choice A.P. Enterprise in Kolkata.'],
    'paint-works': ['Paint Works Kolkata | First Choice A.P. Enterprise', 'Colour palettes, paint finishes and wall treatments by First Choice A.P. Enterprise in Kolkata.'],
    flooring: ['Flooring Kolkata | First Choice A.P. Enterprise', 'Wood, stone, tile and resilient flooring solutions by First Choice A.P. Enterprise in Kolkata.']
  };
  const [title, description] = pageData[page] || pageData.index;
  document.title = title;
  const setMeta = (name, content, attribute = 'name') => { let element = document.head.querySelector(`meta[${attribute}="${name}"]`); if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, name); document.head.appendChild(element); } element.content = content; };
  setMeta('description', description);
  setMeta('og:title', title, 'property'); setMeta('og:description', description, 'property'); setMeta('og:type', 'website', 'property');
  const siteConfig = window.SITE_CONFIG || {};
  if (siteConfig.images?.hero) setMeta('og:image', siteConfig.images.hero, 'property');
  setMeta('twitter:card', 'summary_large_image');
  const canonical = document.createElement('link'); canonical.rel = 'canonical'; canonical.href = siteConfig.siteUrl ? `${siteConfig.siteUrl.replace(/\/$/, '')}/${page === 'index' ? '' : `${page}.html`}` : location.href.split('?')[0]; document.head.appendChild(canonical);
  const footer = document.querySelector('.footer');
  if (footer && !footer.querySelector('.creator-credit')) { const credit = document.createElement('p'); credit.className = 'creator-credit'; credit.innerHTML = '<span>PRESENTED BY</span><strong>SOURAV</strong>'; footer.appendChild(credit); }
})();
