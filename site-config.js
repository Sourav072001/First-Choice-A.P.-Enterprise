/*
  FIRST CHOICE A.P. ENTERPRISE - SITE CONFIGURATION

  Edit this file and deploy it with the website. Images configured here are
  used across the home, works, services and about pages.
  Use local paths such as "images/hero.webp" or HTTPS image URLs only.
*/
(() => {
  // -------------------------------------------------------------------------
  // BUSINESS DETAILS: edit these values before publishing the website.
  // -------------------------------------------------------------------------
  const businessDefaults = {
    // Set these after deployment. Keep secrets out of this public file.
    siteUrl: '',
    formEndpoint: '',
    facebook: '',
    instagram: '',
    x: '',
    pinterest: '',
    whatsapp: '9002XXX032',
    phone: '9002XXX032',
    email: 'hello@example.com',
    address: 'DHAKURIA'
  };

  // -------------------------------------------------------------------------
  // SHARED IMAGES: replace any URL below with a local path or HTTPS URL.
  // Local example: "images/projects/hillside-house.webp"
  // Recommended: WebP/AVIF, descriptive filenames, and at least 1200px wide.
  // -------------------------------------------------------------------------
  const imageDefaults = {
    hero: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    about: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
    interiorDetail: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=85',
    kitchenDetail: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=85',
    furnitureDetail: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=700&q=85',
    paintDetail: 'https://images.unsplash.com/photo-1562259949-e8e7680d7828?auto=format&fit=crop&w=700&q=85',
    flooringDetail: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=85',
    interiorOne: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
    interiorTwo: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=85',
    kitchenOne: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=85',
    kitchenTwo: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=85',
    furnitureOne: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    furnitureTwo: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
    paintOne: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
    paintTwo: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=85',
    flooringOne: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=85',
    flooringTwo: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=85'
  };

  // -------------------------------------------------------------------------
  // HOMEPAGE PROJECTS: add more objects here whenever you have new work.
  // Each image needs a descriptive alt value for accessibility and SEO.
  // -------------------------------------------------------------------------
  const projectDefaults = [
    { name: 'The Hillside House', type: 'Interior design - Darjeeling', alt: 'Warm modern living room at The Hillside House', image: imageDefaults.hero },
    { name: 'Quiet Geometry', type: 'Furniture collection - Studio', alt: 'Contemporary furniture in a calm interior', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=85' },
    { name: 'The Garden Apartment', type: 'Colour story - Kolkata', alt: 'Layered Kolkata apartment interior with natural light', image: imageDefaults.about }
  ];

  // -------------------------------------------------------------------------
  // WORKS GALLERY: add one object per image. This is easier to maintain than
  // editing gallery code. Use a unique id, then choose the image key above.
  // -------------------------------------------------------------------------
  const galleryDefaults = [
    { id: 'living-room-concept', title: 'Living room concept', category: 'Interior design', alt: 'Warm living room interior with sculptural furniture', image: 'interiorOne' },
    { id: 'warm-dining-space', title: 'Warm dining space', category: 'Interior design', alt: 'Modern dining space with warm natural materials', image: 'interiorTwo' },
    { id: 'sculpted-bedroom', title: 'Sculpted bedroom', category: 'Interior design', alt: 'Calm bedroom interior with layered textures', image: 'hero' },
    { id: 'modular-kitchen', title: 'Modular kitchen layout', category: 'Modular kitchen', alt: 'Tailored modular kitchen with practical storage', image: 'kitchenOne' },
    { id: 'handleless-cabinetry', title: 'Handle-less cabinetry', category: 'Modular kitchen', alt: 'Contemporary handle-less kitchen cabinetry', image: 'kitchenTwo' },
    { id: 'custom-dining-table', title: 'Custom dining table', category: 'Furniture works', alt: 'Custom dining furniture in a considered interior', image: 'furnitureOne' },
    { id: 'built-in-storage', title: 'Built-in storage', category: 'Furniture works', alt: 'Custom built-in storage and joinery', image: 'furnitureTwo' },
    { id: 'accent-wall-finish', title: 'Accent wall finish', category: 'Paint works', alt: 'Textured accent wall finish in a residential interior', image: 'paintOne' },
    { id: 'wood-flooring-detail', title: 'Wood flooring detail', category: 'Flooring', alt: 'Warm wood flooring detail in a finished room', image: 'flooringOne' },
    { id: 'stone-tile-finish', title: 'Stone tile finish', category: 'Flooring', alt: 'Stone tile flooring with refined natural texture', image: 'flooringTwo' }
  ];

  const configured = window.SITE_CONFIG || {};
  const isSafeImage = value => {
    if (typeof value !== 'string' || !value.trim()) return false;
    try {
      const url = new URL(value, document.baseURI);
      return url.protocol === 'https:' || (url.protocol === location.protocol && url.origin === location.origin);
    } catch { return false; }
  };
  const images = Object.fromEntries(Object.entries({ ...imageDefaults, ...(configured.images || {}) }).map(([key, value]) => [key, isSafeImage(value) ? value : imageDefaults[key]]));
  const projects = (Array.isArray(configured.projects) ? configured.projects : projectDefaults).map(project => ({
    name: String(project.name || 'Featured project').slice(0, 120),
    type: String(project.type || 'Interior design').slice(0, 120),
    alt: String(project.alt || project.name || 'Interior design project').slice(0, 160),
    image: isSafeImage(project.image) ? project.image : images.hero
  }));
  const gallery = (Array.isArray(configured.gallery) ? configured.gallery : galleryDefaults).map(item => ({
    id: String(item.id || item.title || 'gallery-image').replace(/[^a-z0-9-]/gi, '-').slice(0, 80),
    title: String(item.title || 'Featured project').slice(0, 120),
    category: String(item.category || 'Interior design').slice(0, 120),
    alt: String(item.alt || item.title || 'Interior design project').slice(0, 160),
    image: isSafeImage(images[item.image]) ? images[item.image] : (isSafeImage(item.image) ? item.image : images.hero)
  }));
  const settings = { ...businessDefaults, ...configured, images, projects, gallery };
  window.SITE_CONFIG = settings;
  Object.entries(images).forEach(([key, value]) => document.documentElement.style.setProperty(`--image-${key}`, `url(${JSON.stringify(value)})`));
})();
