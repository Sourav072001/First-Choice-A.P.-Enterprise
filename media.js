(() => {
  const slots = {
    'Home hero': '.hero-image',
    'Home about': '.about-image',
    'About page image': '.about-page .about-image',
    'Interior works 1': '.interior-one',
    'Interior works 2': '.interior-two',
    'Modular kitchen 1': '.kitchen-one',
    'Modular kitchen 2': '.kitchen-two',
    'Furniture works 1': '.furniture-one',
    'Furniture works 2': '.furniture-two',
    'Paint works 1': '.paint-one',
    'Paint works 2': '.paint-two',
    'Flooring 1': '.flooring-one',
    'Flooring 2': '.flooring-two'
  };
  const getMedia = () => JSON.parse(localStorage.getItem('atelierMedia') || '{}');
  const applyMedia = () => { const media = getMedia(); Object.entries(slots).forEach(([name, selector]) => { const element = document.querySelector(selector); if (element && media[name]) element.style.backgroundImage = `url("${media[name]}")`; }); };
  applyMedia();
  window.atelierMedia = { slots, getMedia, applyMedia };
})();
