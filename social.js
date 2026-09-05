const initializeSocial = () => {
  const defaults = { facebook: '', instagram: '', x: '', pinterest: '', whatsapp: '9002XXXXX2', phone: '9002XXXXX2', email: 'hello@example.com', address: 'DHAKURIA' };
  const settings = { ...defaults, ...(JSON.parse(localStorage.getItem('atelierSettings') || 'null') || {}), ...(window.SITE_CONFIG || {}) };
  const socialLinks = { facebook: settings.facebook, instagram: settings.instagram, x: settings.x, pinterest: settings.pinterest };
  const configuredAddress = document.querySelector('#studio-address');
  const configuredPhone = document.querySelector('#contact-number');
  if (configuredAddress && settings.address) configuredAddress.textContent = settings.address;
  if (configuredPhone && settings.phone) configuredPhone.textContent = settings.phone;
  const configuredEmail = document.querySelector('#contact-email');
  if (configuredEmail && settings.email) { configuredEmail.href = `mailto:${settings.email}`; configuredEmail.textContent = settings.email; }
  document.querySelectorAll('.floating-socials').forEach((element) => element.remove());
  document.querySelectorAll('.social-mini-stack').forEach((element) => element.remove());
  document.querySelectorAll('#whatsapp-link').forEach((element) => element.remove());

  const contactNumber = document.querySelector('#contact-number');
  document.querySelectorAll('.contact-details').forEach(details => { const addressElement = details.querySelector('#studio-address'); if (!addressElement || details.querySelector('.studio-map')) return; const address = addressElement.textContent.trim() || '12 Park Street, Kolkata 700016'; addressElement.textContent = address; const map = document.createElement('iframe'); map.className = 'studio-map'; map.src = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`; map.title = `Map showing ${address}`; map.loading = 'lazy'; map.referrerPolicy = 'no-referrer-when-downgrade'; details.after(map); });
  if (contactNumber && !contactNumber.nextElementSibling?.classList.contains('contact-socials')) {
    const socials = document.createElement('div');
    socials.className = 'contact-socials';
    socials.setAttribute('aria-label', 'Social media links');
    socials.innerHTML = Object.entries(socialLinks).filter(([, url]) => url).map(([name, url]) => `<a class="contact-social ${name}" href="${url}" target="_blank" rel="noreferrer" aria-label="${name} account">${name === 'facebook' ? 'f' : name === 'instagram' ? '◎' : name === 'x' ? 'X' : 'P'}</a>`).join('');
    contactNumber.after(socials);
  }
  if (!contactNumber) {
    const footer = document.querySelector('.footer');
    if (footer && !footer.querySelector('.footer-socials')) {
      const socials = document.createElement('div'); socials.className = 'contact-socials footer-socials'; socials.setAttribute('aria-label', 'Social media links'); socials.innerHTML = Object.entries(socialLinks).filter(([, url]) => url).map(([name, url]) => `<a class="contact-social ${name}" href="${url}" target="_blank" rel="noreferrer" aria-label="${name} account">${name === 'facebook' ? 'f' : name === 'instagram' ? '◎' : name === 'x' ? 'X' : 'P'}</a>`).join(''); footer.appendChild(socials);
    }
  }
  const bottomActions = document.createElement('div');
  bottomActions.className = 'bottom-actions';
  const phone = settings.phone || '9002XXXXX2';
  const whatsapp = settings.whatsapp || phone;
  bottomActions.innerHTML = `<a class="side-action side-call" href="tel:${phone.replace(/\D/g, '')}" aria-label="Call First Choice A.P. Enterprise at ${phone}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z" fill="currentColor"/></svg></a><a class="side-action side-whatsapp" href="https://wa.me/${whatsapp.replace(/\D/g, '')}" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp at ${whatsapp}"><img src="whatsapp.svg" alt=""></a>`;
  const backTop = document.querySelector('#back-top');
  if (backTop) bottomActions.appendChild(backTop);
  document.body.appendChild(bottomActions);
};
if (window.SITE_CONFIG) {
  initializeSocial();
} else {
  const configScript = document.createElement('script');
  configScript.src = 'site-config.js';
  configScript.onload = initializeSocial;
  document.head.appendChild(configScript);
}
const motionScript = document.createElement('script'); motionScript.src = 'motion.js'; document.body.appendChild(motionScript);
const mediaScript = document.createElement('script'); mediaScript.src = 'media.js'; document.body.appendChild(mediaScript);
const seoScript = document.createElement('script'); seoScript.src = 'seo.js'; document.body.appendChild(seoScript);
