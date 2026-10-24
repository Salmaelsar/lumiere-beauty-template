/* ==========================================================================
   LUMIÈRE BEAUTY — ZONA EDITABLE
   Cambia aquí los datos del salón. Mantén las comillas y las comas.
   Los textos existen en español (es) y en inglés (en): edita los dos.
   ========================================================================== */

/* Nombre, ciudad y formas de contacto. El número de WhatsApp va sin + ni espacios. */
const SALON = {
  name: "Lumière Beauty",
  city: "Madrid",
  phoneWa: "34600000000",
  phoneDisplay: "+34 600 000 000",
  email: "hola@lumierebeauty.example",
  address: "Calle de Almirante 18, 28004 Madrid",
  instagramUrl: "https://instagram.com/lumiere.beauty",
  instagramLabel: "@lumiere.beauty"
};

/*
  Fotografías. Cada ruta es el archivo que se muestra.
  Para cambiar una foto, sustituye el archivo en la carpeta fotos
  o escribe otra ruta, por ejemplo "fotos/mi-portada.jpg".

  fotos/portada.jpg     imagen principal
  fotos/peinado.jpg     presentación del salón
  fotos/butacas.jpg     galería
  fotos/cabello.jpg     galería
  fotos/maquillaje.jpg  galería
  fotos/pinceles.jpg    galería
  fotos/facial.jpg      galería
  fotos/unas.jpg        galería

  Son imágenes de muestra. Este proyecto no ha verificado su licencia.
  Antes de publicar un salón real, cámbialas por fotos cuyos derechos puedas usar.
*/
const IMAGES = {
  hero: {
    src: "fotos/portada.jpg",
    alt: {
      es: "Interior de un salón de belleza",
      en: "Beauty salon interior"
    }
  },
  about: {
    src: "fotos/peinado.jpg",
    alt: {
      es: "Acabado de un peinado en el salón",
      en: "Finished hairstyle in the salon"
    }
  },
  gallery: [
    {
      src: "fotos/butacas.jpg",
      alt: {
        es: "Butacas y espejos del salón",
        en: "Salon chairs and mirrors"
      }
    },
    {
      src: "fotos/cabello.jpg",
      alt: {
        es: "Peinado con acabado brillante",
        en: "Styled hair with a soft shine"
      }
    },
    {
      src: "fotos/maquillaje.jpg",
      alt: {
        es: "Retrato con maquillaje de ojos",
        en: "Portrait with eye makeup"
      }
    },
    {
      src: "fotos/pinceles.jpg",
      alt: {
        es: "Pinceles de maquillaje",
        en: "Makeup brushes"
      }
    },
    {
      src: "fotos/facial.jpg",
      alt: {
        es: "Tratamiento facial con mascarilla",
        en: "Facial treatment with a mask"
      }
    },
    {
      src: "fotos/unas.jpg",
      alt: {
        es: "Manicura en tono oscuro",
        en: "Dark manicure"
      }
    }
  ]
};

/*
  Servicios. Para añadir uno, copia un bloque { ... } y pégalo dentro de la lista.
  Los servicios con la misma categoría se agrupan solos.
  El precio se escribe tal cual: "62 €", "65 EUR" o "$70".
*/
const SERVICES = [
  {
    category: { es: "Cabello", en: "Hair" },
    name: { es: "Corte signature", en: "Signature cut" },
    detail: { es: "Consulta, corte y brushing.", en: "Consultation, cut and blow-dry." },
    time: { es: "60 min", en: "60 min" },
    price: "62 €"
  },
  {
    category: { es: "Cabello", en: "Hair" },
    name: { es: "Color luminoso", en: "Luminous colour" },
    detail: { es: "Tinte, matiz o cobertura de canas.", en: "Tint, gloss or grey coverage." },
    time: { es: "120 min", en: "120 min" },
    price: "98 €"
  },
  {
    category: { es: "Cabello", en: "Hair" },
    name: { es: "Mechas o balayage", en: "Highlights or balayage" },
    detail: { es: "Iluminación pensada para tu tono.", en: "Lightening shaped around your tone." },
    time: { es: "180 min", en: "180 min" },
    price: "145 €"
  },
  {
    category: { es: "Cabello", en: "Hair" },
    name: { es: "Recogido", en: "Occasion updo" },
    detail: { es: "Peinado para un evento o una boda.", en: "Styling for an event or a wedding." },
    time: { es: "75 min", en: "75 min" },
    price: "85 €"
  },
  {
    category: { es: "Rostro", en: "Complexion" },
    name: { es: "Ritual facial", en: "Facial ritual" },
    detail: { es: "Limpieza, tratamiento y luz.", en: "Cleanse, treatment and glow." },
    time: { es: "75 min", en: "75 min" },
    price: "89 €"
  },
  {
    category: { es: "Rostro", en: "Complexion" },
    name: { es: "Cejas", en: "Brow shaping" },
    detail: { es: "Diseño y perfilado.", en: "Design and shaping." },
    time: { es: "30 min", en: "30 min" },
    price: "24 €"
  },
  {
    category: { es: "Rostro", en: "Complexion" },
    name: { es: "Maquillaje", en: "Makeup" },
    detail: { es: "Look de día o de noche.", en: "Day or evening look." },
    time: { es: "50 min", en: "50 min" },
    price: "65 €"
  },
  {
    category: { es: "Manos", en: "Hands" },
    name: { es: "Manicura", en: "Manicure" },
    detail: { es: "Cuidado clásico y esmaltado.", en: "Classic care and polish." },
    time: { es: "45 min", en: "45 min" },
    price: "28 €"
  },
  {
    category: { es: "Manos", en: "Hands" },
    name: { es: "Semipermanente", en: "Gel manicure" },
    detail: { es: "Color de larga duración.", en: "Long-wear colour." },
    time: { es: "60 min", en: "60 min" },
    price: "38 €"
  }
];

/* Horario. closed: true atenúa el día, útil para los días sin apertura. */
const HOURS = [
  { day: { es: "Lunes", en: "Monday" }, time: { es: "Cerrado", en: "Closed" }, closed: true },
  { day: { es: "Martes", en: "Tuesday" }, time: { es: "10:00 – 20:00", en: "10:00 – 20:00" } },
  { day: { es: "Miércoles", en: "Wednesday" }, time: { es: "10:00 – 20:00", en: "10:00 – 20:00" } },
  { day: { es: "Jueves", en: "Thursday" }, time: { es: "10:00 – 20:00", en: "10:00 – 20:00" } },
  { day: { es: "Viernes", en: "Friday" }, time: { es: "10:00 – 20:00", en: "10:00 – 20:00" } },
  { day: { es: "Sábado", en: "Saturday" }, time: { es: "10:00 – 15:00", en: "10:00 – 15:00" } },
  { day: { es: "Domingo", en: "Sunday" }, time: { es: "Cerrado", en: "Closed" }, closed: true }
];

/*
  Resto de textos de la página.
  {salon} y {city} se sustituyen por SALON.name y SALON.city.
  {servicio} se sustituye por el nombre del tratamiento al reservar desde la carta.
*/
const COPY = {
  es: {
    "meta.title": "Salón de belleza en {city}",
    "meta.description": "{salon} es un salón de belleza en {city}. Cabello, piel y manos en un espacio sereno. Reserva tu cita por WhatsApp.",
    "skip": "Saltar al contenido",
    "nav.label": "Principal",
    "nav.home": "Inicio",
    "nav.about": "El salón",
    "nav.services": "Servicios",
    "nav.gallery": "Galería",
    "nav.contact": "Contacto",
    "nav.book": "Reservar",
    "nav.open": "Abrir menú",
    "nav.close": "Cerrar menú",
    "lang.group": "Idioma",
    "lang.status": "Idioma: español",
    "hero.eyebrow": "Salón de belleza · {city}",
    "hero.lead": "Menos prisa y más atención. Cabello, piel y manos en un salón pequeño, con luz cálida y tiempo de sobra para ti.",
    "hero.primary": "Reservar por WhatsApp",
    "hero.secondary": "Ver servicios",
    "about.eyebrow": "El salón",
    "about.title": "Una pausa luminosa en medio de la ciudad",
    "about.p1": "{salon} cabe en una calle tranquila de {city}. Abrimos pocos turnos para poder escuchar: qué quieres conservar, qué quieres cambiar y cómo vives el día.",
    "about.p2": "El color se piensa, la piel se trata sin agresividad y las manos se cuidan como parte del mismo gesto. Sales igual que entraste: tú, con un poco más de luz.",
    "about.s1n": "12",
    "about.s1l": "años de oficio",
    "about.s2n": "6",
    "about.s2l": "especialistas",
    "about.s3n": "30+",
    "about.s3l": "rituales",
    "services.eyebrow": "Carta",
    "services.title": "Servicios y precios",
    "services.note": "La duración es orientativa. Confirmamos la hora por WhatsApp.",
    "services.book": "Reservar",
    "services.empty": "Añade tratamientos en la lista SERVICES de script.js.",
    "gallery.eyebrow": "Galería",
    "gallery.title": "El ambiente y el resultado",
    "gallery.empty": "Añade fotografías en IMAGES.gallery, dentro de script.js.",
    "visit.eyebrow": "Visítanos",
    "visit.title": "Horarios y contacto",
    "visit.lead": "Escríbenos por WhatsApp y te proponemos hora el mismo día, siempre que quede un hueco.",
    "visit.hoursTitle": "Horario",
    "visit.contactTitle": "Contacto",
    "visit.addressLabel": "Dirección",
    "visit.phoneLabel": "Teléfono",
    "visit.emailLabel": "Correo",
    "visit.instagramLabel": "Instagram",
    "visit.directions": "Cómo llegar",
    "footer.rights": "Todos los derechos reservados.",
    "float.label": "Reservar cita por WhatsApp",
    "whatsapp.general": "Hola, me gustaría reservar una cita en {salon}.",
    "whatsapp.service": "Hola, me gustaría reservar «{servicio}» en {salon}.",
    "lightbox.close": "Cerrar",
    "lightbox.prev": "Anterior",
    "lightbox.next": "Siguiente"
  },
  en: {
    "meta.title": "Beauty salon in {city}",
    "meta.description": "{salon} is a beauty salon in {city}. Hair, skin and hands in a quiet room. Book your appointment on WhatsApp.",
    "skip": "Skip to content",
    "nav.label": "Main",
    "nav.home": "Home",
    "nav.about": "The salon",
    "nav.services": "Services",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.book": "Book",
    "nav.open": "Open menu",
    "nav.close": "Close menu",
    "lang.group": "Language",
    "lang.status": "Language: English",
    "hero.eyebrow": "Beauty salon · {city}",
    "hero.lead": "Less rush, more attention. Hair, skin and hands in a small salon, with warm light and time that is actually yours.",
    "hero.primary": "Book on WhatsApp",
    "hero.secondary": "View services",
    "about.eyebrow": "The salon",
    "about.title": "A luminous pause in the middle of the city",
    "about.p1": "{salon} sits on a quiet street in {city}. We keep the book light so we can listen: what you want to keep, what you want to change, and how you spend the day.",
    "about.p2": "Colour is considered, skin is treated gently, and hands are cared for as part of the same gesture. You leave as yourself, with a little more light.",
    "about.s1n": "12",
    "about.s1l": "years of craft",
    "about.s2n": "6",
    "about.s2l": "specialists",
    "about.s3n": "30+",
    "about.s3l": "rituals",
    "services.eyebrow": "Menu",
    "services.title": "Services and prices",
    "services.note": "Durations are a guide. We confirm the time on WhatsApp.",
    "services.book": "Book",
    "services.empty": "Add treatments to the SERVICES list in script.js.",
    "gallery.eyebrow": "Gallery",
    "gallery.title": "The room and the result",
    "gallery.empty": "Add photographs to IMAGES.gallery in script.js.",
    "visit.eyebrow": "Visit",
    "visit.title": "Hours and contact",
    "visit.lead": "Message us on WhatsApp and we will offer a time the same day, whenever there is a gap.",
    "visit.hoursTitle": "Hours",
    "visit.contactTitle": "Contact",
    "visit.addressLabel": "Address",
    "visit.phoneLabel": "Phone",
    "visit.emailLabel": "Email",
    "visit.instagramLabel": "Instagram",
    "visit.directions": "Get directions",
    "footer.rights": "All rights reserved.",
    "float.label": "Book an appointment on WhatsApp",
    "whatsapp.general": "Hello, I would like to book an appointment at {salon}.",
    "whatsapp.service": "Hello, I would like to book “{servicio}” at {salon}.",
    "lightbox.close": "Close",
    "lightbox.prev": "Previous",
    "lightbox.next": "Next"
  }
};

/* ==========================================================================
   LÓGICA DE LA PÁGINA
   Puedes dejar esta parte como está.
   ========================================================================== */

const STORAGE_KEY = "lumiere-lang";
const DESKTOP_NAV = window.matchMedia("(min-width: 900px)");

const state = {
  lang: readLang(),
  galleryIndex: 0,
  lastFocus: null
};

function readLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "es") return saved;
  } catch (error) {
    /* En algunas aperturas locales el navegador bloquea el almacenamiento. */
  }
  return "es";
}

function storeLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (error) {
    /* La página sigue pudiendo cambiar de idioma durante la visita. */
  }
}

/* Traduce un campo { es, en }. Si falta el idioma activo, usa el español. */
function tr(field) {
  if (typeof field === "string") return field;
  if (!field) return "";
  return field[state.lang] || field.es || "";
}

function interpolate(text) {
  return String(text)
    .replaceAll("{salon}", SALON.name)
    .replaceAll("{city}", SALON.city);
}

function t(key) {
  const table = COPY[state.lang] || COPY.es;
  if (table[key] == null) return null;
  return interpolate(table[key]);
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function phoneDigits() {
  return String(SALON.phoneWa).replace(/\D/g, "");
}

function bookingText(serviceName) {
  const key = serviceName ? "whatsapp.service" : "whatsapp.general";
  const message = t(key) || "";
  return message.replaceAll("{servicio}", serviceName || "");
}

function waLink(message) {
  const phone = phoneDigits();
  if (!phone) return "#contacto";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function applySalon() {
  document.querySelectorAll("[data-salon-name]").forEach((node) => {
    node.textContent = SALON.name;
  });

  const phone = document.getElementById("contact-phone");
  phone.textContent = SALON.phoneDisplay;
  phone.href = `tel:+${phoneDigits()}`;

  const email = document.getElementById("contact-email");
  email.textContent = SALON.email;
  email.href = `mailto:${SALON.email}`;

  document.getElementById("contact-address").textContent = SALON.address;
  document.getElementById("footer-address").textContent = SALON.address;

  const maps = document.getElementById("contact-maps");
  maps.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SALON.address)}`;

  [document.getElementById("contact-instagram"), document.getElementById("footer-instagram")].forEach((link) => {
    link.textContent = SALON.instagramLabel;
    link.href = SALON.instagramUrl || "#contacto";
  });

  document.getElementById("year").textContent = String(new Date().getFullYear());
}

function applyCopy() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = t(node.dataset.i18n);
    if (value != null) node.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    const value = t(node.dataset.i18nAria);
    if (value != null) node.setAttribute("aria-label", value);
  });
}

function applyImages() {
  const hero = document.getElementById("hero-image");
  hero.src = IMAGES.hero.src;
  hero.alt = tr(IMAGES.hero.alt);

  const about = document.getElementById("about-image");
  about.src = IMAGES.about.src;
  about.alt = tr(IMAGES.about.alt);
}

function updateGeneralBookLinks() {
  const href = waLink(bookingText(""));
  document.querySelectorAll("[data-book='general']").forEach((link) => {
    link.href = href;
  });
}

function renderServices() {
  const root = document.getElementById("services-root");
  root.replaceChildren();

  if (!SERVICES.length) {
    root.append(el("p", "note", t("services.empty")));
    return;
  }

  const groups = [];
  SERVICES.forEach((service) => {
    const label = tr(service.category);
    let group = groups.find((item) => item.label === label);
    if (!group) {
      group = { label, items: [] };
      groups.push(group);
    }
    group.items.push(service);
  });

  const board = el("div", "service-groups");
  groups.forEach((group) => {
    const card = el("article", "service-group");
    card.append(el("h3", "service-group__title", group.label));
    const list = el("ul", "service-list");

    group.items.forEach((service) => {
      const item = el("li", "service");
      const body = el("div", "service__body");
      body.append(el("p", "service__name", tr(service.name)));
      body.append(el("p", "service__detail", tr(service.detail)));

      const book = el("a", "service__book", t("services.book"));
      book.href = waLink(bookingText(tr(service.name)));
      book.target = "_blank";
      book.rel = "noopener noreferrer";

      item.append(body, el("p", "service__time", tr(service.time)), el("p", "service__price", service.price), book);
      list.append(item);
    });

    card.append(list);
    board.append(card);
  });

  root.append(board);
}

function renderHours() {
  const list = document.getElementById("hours-list");
  list.replaceChildren();

  HOURS.forEach((slot) => {
    const item = el("li");
    if (slot.closed) item.classList.add("is-closed");
    item.append(el("span", "hours__day", tr(slot.day)), el("span", "hours__time", tr(slot.time)));
    list.append(item);
  });
}

function renderGallery() {
  const root = document.getElementById("gallery-root");
  root.replaceChildren();

  if (!IMAGES.gallery.length) {
    root.append(el("p", "note", t("gallery.empty")));
    return;
  }

  IMAGES.gallery.forEach((image, index) => {
    const button = el("button", "gallery__item");
    button.type = "button";
    button.dataset.galleryIndex = String(index);
    button.setAttribute("aria-label", tr(image.alt));

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = tr(image.alt);
    img.width = 1200;
    img.height = 1500;
    img.loading = "lazy";
    img.decoding = "async";
    button.append(img);
    root.append(button);
  });
}

function markLanguageButtons() {
  document.querySelectorAll("[data-set-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.setLang === state.lang ? "true" : "false");
  });
}

function syncMenuButton() {
  const toggle = document.getElementById("nav-toggle");
  const open = document.body.classList.contains("nav-open");
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
  document.getElementById("nav-toggle-label").textContent = t(open ? "nav.close" : "nav.open");
  document.getElementById("nav-menu").inert = DESKTOP_NAV.matches ? false : !open;
}

function setLanguage(lang, options = {}) {
  state.lang = lang === "en" ? "en" : "es";
  storeLang(state.lang);
  document.documentElement.lang = state.lang;

  applyCopy();
  applyImages();
  renderServices();
  renderHours();
  renderGallery();
  updateGeneralBookLinks();
  markLanguageButtons();
  syncMenuButton();

  const description = t("meta.description");
  document.title = `${SALON.name} · ${t("meta.title")}`;

  const meta = document.getElementById("meta-description");
  if (meta && description) meta.setAttribute("content", description);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogTitle) ogTitle.setAttribute("content", document.title);
  if (ogDescription && description) ogDescription.setAttribute("content", description);

  if (options.announce) {
    const status = document.getElementById("lang-status");
    if (status) status.textContent = t("lang.status");
  }

  if (document.body.classList.contains("lightbox-open")) showLightboxImage();
}

function setMenuBackgroundLocked(locked) {
  document.querySelector("main").inert = locked;
  document.querySelector(".footer").inert = locked;
  document.getElementById("float-book").inert = locked;
  if (locked) {
    document.querySelector("main").setAttribute("aria-hidden", "true");
    document.querySelector(".footer").setAttribute("aria-hidden", "true");
  } else {
    document.querySelector("main").removeAttribute("aria-hidden");
    document.querySelector(".footer").removeAttribute("aria-hidden");
  }
}

function closeMenu(restoreFocus) {
  const wasOpen = document.body.classList.contains("nav-open");
  document.body.classList.remove("nav-open");
  setMenuBackgroundLocked(false);
  syncMenuButton();
  const toggle = document.getElementById("nav-toggle");
  if (wasOpen && restoreFocus && getComputedStyle(toggle).display !== "none") toggle.focus();
}

function openMenu() {
  if (DESKTOP_NAV.matches) return;
  document.body.classList.add("nav-open");
  setMenuBackgroundLocked(true);
  syncMenuButton();
  const firstLink = document.querySelector("#nav-menu a");
  if (firstLink) firstLink.focus();
}

function bindLanguage() {
  document.querySelectorAll("[data-set-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.setLang, { announce: true });
    });
  });
}

function bindNavigation() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");

  toggle.addEventListener("click", () => {
    if (document.body.classList.contains("nav-open")) closeMenu(true);
    else openMenu();
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu(false);
  });

  DESKTOP_NAV.addEventListener("change", () => {
    closeMenu(false);
  });

  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const sections = document.querySelectorAll("main section[id]");
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      menu.querySelectorAll("a").forEach((link) => {
        if (link.getAttribute("href") === `#${entry.target.id}`) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

  sections.forEach((section) => spy.observe(section));
  const homeLink = menu.querySelector('a[href="#inicio"]');
  if (homeLink) homeLink.setAttribute("aria-current", "true");
}

function showLightboxImage() {
  const image = IMAGES.gallery[state.galleryIndex];
  if (!image) return;
  const img = document.getElementById("lightbox-img");
  img.src = image.src;
  img.alt = tr(image.alt);
  document.getElementById("lightbox-caption").textContent = tr(image.alt);
}

function setLightboxBackgroundLocked(locked) {
  document.querySelector("main").inert = locked;
  document.querySelector(".footer").inert = locked;
  document.getElementById("float-book").inert = locked;
  document.querySelector(".nav").inert = locked;
}

function openLightbox(index) {
  if (!IMAGES.gallery[index]) return;
  if (document.body.classList.contains("nav-open")) closeMenu(false);
  state.galleryIndex = index;
  state.lastFocus = document.activeElement;
  showLightboxImage();
  const dialog = document.getElementById("lightbox");
  dialog.hidden = false;
  dialog.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  document.getElementById("lightbox-close").focus();
  setLightboxBackgroundLocked(true);
}

function closeLightbox() {
  setLightboxBackgroundLocked(false);
  const dialog = document.getElementById("lightbox");
  dialog.hidden = true;
  dialog.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  if (state.lastFocus && typeof state.lastFocus.focus === "function") state.lastFocus.focus();
}

function stepLightbox(delta) {
  const total = IMAGES.gallery.length;
  if (!total) return;
  state.galleryIndex = (state.galleryIndex + delta + total) % total;
  showLightboxImage();
}

function bindLightbox() {
  const closeButton = document.getElementById("lightbox-close");
  const prevButton = document.getElementById("lightbox-prev");
  const nextButton = document.getElementById("lightbox-next");

  document.getElementById("gallery-root").addEventListener("click", (event) => {
    const button = event.target.closest("[data-gallery-index]");
    if (!button) return;
    openLightbox(Number(button.dataset.galleryIndex));
  });

  closeButton.addEventListener("click", closeLightbox);
  document.getElementById("lightbox-backdrop").addEventListener("click", closeLightbox);
  prevButton.addEventListener("click", () => stepLightbox(-1));
  nextButton.addEventListener("click", () => stepLightbox(1));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (document.body.classList.contains("lightbox-open")) closeLightbox();
      else if (document.body.classList.contains("nav-open")) closeMenu(true);
      return;
    }

    if (!document.body.classList.contains("lightbox-open")) return;
    if (event.key === "ArrowRight") stepLightbox(1);
    if (event.key === "ArrowLeft") stepLightbox(-1);

    if (event.key !== "Tab") return;
    const focusable = [closeButton, prevButton, nextButton];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

function init() {
  applySalon();
  setLanguage(state.lang);
  bindLanguage();
  bindNavigation();
  bindLightbox();
}

init();
