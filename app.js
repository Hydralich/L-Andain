const $ = s => document.querySelector(s);

const ICONS = {
  home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1z"/>',
  key:'<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9 2 2-2 2 2 2-3 3"/>',
  bed:'<path d="M3 18v-7m18 7v-7M3 15h18v4M5 15v-5h14v5M5 10V6h14v4"/>',
  bath:'<path d="M3 11v3a7 7 0 0 0 7 7h4a7 7 0 0 0 7-7v-3H3ZM6 11V6a3 3 0 0 1 6 0v1"/>',
  flame:'<path d="M12 22c4 0 7-3 7-7 0-4-4-7-4-10-3 1-3 5-4 7-1-2-2-3-2-6-3 2-5 5-5 9a8 8 0 0 0 8 7z"/>',
  coffee:'<path d="M4 8h13v7a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6V8zm13 2h2a3 3 0 0 1 0 6h-2M7 3v2m5-2v2"/>',
  tree:'<path d="m12 3 7 9h-4l4 6H5l4-6H5l7-9zM12 18v4"/>',
  map:'<path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2V5zm6-2v16m6-14v16"/>',
  door:'<path d="M5 22V3h14v19M9 22V8h6v14M12 14h.01"/>',
  shield:'<path d="m12 22 8-5V5l-8-3-8 3v12zM9 12l2 2 4-5"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/>',
  arrow:'<path d="m5 12 14 0m-6-6 6 6-6 6"/>',
  back:'<path d="m15 5-7 7 7 7"/>',
  chevron:'<path d="m9 18 6-6-6-6"/>',
  phone:'<path d="M6 2h12v20H6zM11 18h2"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/>',
  foot:'<path d="M4 18c2-5 2-10 7-10 4 0 5 3 5 5s4 2 4 5-4 4-8 4H7c-2 0-4-1-3-4zM7 5h.01M11 3h.01M15 4h.01"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.5 1.5m11.2 11.2 1.5 1.5M19.1 4.9l-1.5 1.5M6.4 17.6l-1.5 1.5"/>',
  tv:'<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 22h8m-4-4v4"/>',
  utensils:'<path d="M3 2v8a3 3 0 0 0 6 0V2M6 2v20m12-20v20m0-20c-4 3-4 9 0 10"/>',
  sparkle:'<path d="m12 2 2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2z"/>',
  wifi:'<path d="M2 9a15 15 0 0 1 20 0M5 12a10 10 0 0 1 14 0M9 16a5 5 0 0 1 6 0M12 20h.01"/>',
  list:'<path d="M9 6h12M9 12h12M9 18h12M3 6h.01M3 12h.01M3 18h.01"/>'
};

function icon(name, size = 20) {
  return `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ICONS.sparkle}</svg>`;
}

const words = {
  de: {
    guide:'Ihr Gästeführer', welcome:'Willkommen im L’Andain', hero:'Fühlen Sie sich wie zu Hause, mitten im Tal der Molignée.', place:'Sommière · Tal der Molignée',
    sections:'Alles für Ihren Aufenthalt', sectionsSub:'Die wichtigsten Informationen auf einen Blick.', spaces:'In der Ferienunterkunft', spacesSub:'Fragen zu einem Gerät? Wir helfen Ihnen.', explore:'Die Umgebung entdecken',
    exploreSub:'Spaziergänge, Kulturerbe und unsere Lieblingsadressen.', go:'Ausflugsziele entdecken', arrival:'Meine Anreise', house:'Die Unterkunft', discover:'Entdecken', departure:'Meine Abreise', all:'Alles anzeigen',
    search:'Gerät oder Ausflugsziel suchen …', quick:'Weitere Informationen', tips:'Brauchen Sie Hilfe?', tipsText:'Wenn ein Gerät nicht wie erwartet funktioniert, wenden Sie sich bitte an uns, statt es selbst zu reparieren.',
    back:'Zurück', share:'Link zu dieser Seite kopieren', copied:'Link kopiert!', photolater:'Foto folgt', areas:'Räume und Ausstattung', stays:'Damit Ihr Aufenthalt gut beginnt …', nearby:'Rund um L’Andain',
    open:'Informationen ansehen', noresults:'Keine Ergebnisse. Versuchen Sie einen anderen Suchbegriff.', source:'Version 8.0 · Gästeführer', general:'Allgemeine Informationen', activities:'Ausflugsziele und Aktivitäten', trails:'Spaziergänge und Wanderungen',
    restaurants:'Unsere Restauranttipps', intro:'Ein praktischer Gästeführer – keine technische Bedienungsanleitung.'
  },
  fr: {
    guide:'Votre guide de séjour', welcome:'Bienvenue à l’Andain', hero:'Prenez le temps de vous sentir chez vous, au cœur de la vallée de la Molignée.', place:'Sommière · Vallée de la Molignée',
    sections:'Tout pour votre séjour', sectionsSub:'Les essentiels, à portée de main.', spaces:'À l’intérieur du gîte', spacesSub:'Une question sur un équipement ? On vous guide.', explore:'Explorer les environs',
    exploreSub:'Balades, patrimoine et bonnes adresses.', go:'Voir les idées de sorties', arrival:'Mon arrivée', house:'Le logement', discover:'Découvrir', departure:'Mon départ', all:'Tout voir',
    search:'Rechercher un équipement ou une activité…', quick:'Accès rapide', tips:'Besoin d’aide ?', tipsText:'Si un appareil ne fonctionne pas comme prévu, contactez-nous plutôt que de tenter une réparation.',
    back:'Retour', share:'Copier le lien de cette fiche', copied:'Lien copié !', photolater:'Photo à ajouter', areas:'Les pièces et équipements', stays:'Pour bien commencer…', nearby:'Autour de l’Andain',
    open:'Consulter la fiche', noresults:'Aucun résultat. Essayez un autre mot.', source:'Version 6 · Équipements & sites illustrés', general:'Informations générales', activities:'Sites & activités', trails:'Balades et randonnées',
    restaurants:'Nos adresses gourmandes', intro:'Un petit guide pensé pour les voyageurs, pas une notice technique.'
  },
  en: {
    guide:'Your stay guide', welcome:'Welcome to L’Andain', hero:'Make yourself at home in the heart of the Molignée Valley.', place:'Sommière · Molignée Valley',
    sections:'Everything for your stay', sectionsSub:'All the essentials at your fingertips.', spaces:'Inside the cottage', spacesSub:'Questions about an appliance? We can help.', explore:'Explore the area',
    exploreSub:'Walks, heritage and our favourite places.', go:'Explore the area', arrival:'Check-in', house:'The cottage', discover:'Explore', departure:'Check-out', all:'See all',
    search:'Search for an appliance or activity…', quick:'Quick access', tips:'Need a hand?', tipsText:'If something is not working as expected, please contact us rather than trying to repair it.',
    back:'Back', share:'Copy link to this guide', copied:'Link copied!', photolater:'Photo coming soon', areas:'Rooms and appliances', stays:'Make yourself at home…', nearby:'Around L’Andain',
    open:'Open guide', noresults:'No results. Try another search.', source:'Version 6 · Equipment & tourism photos', general:'General information', activities:'Places & activities', trails:'Walks and hikes',
    restaurants:'Our favourite restaurants', intro:'A friendly guide for guests, not a technical manual.'
  },
  nl: {
    guide:'Uw verblijfgids', welcome:'Welkom in L’Andain', hero:'Voel u helemaal thuis in het hart van de Molignéevallei.', place:'Sommière · Molignéevallei',
    sections:'Alles voor uw verblijf', sectionsSub:'Alle praktische informatie binnen handbereik.', spaces:'In het vakantieverblijf', spacesSub:'Vraag over een toestel? Wij helpen u.', explore:'Ontdek de streek',
    exploreSub:'Wandelingen, erfgoed en onze favoriete adresjes.', go:'Ontdek de streek', arrival:'Aankomst', house:'Het verblijf', discover:'Ontdekken', departure:'Vertrek', all:'Alles bekijken',
    search:'Zoek een toestel of activiteit…', quick:'Snelle toegang', tips:'Hulp nodig?', tipsText:'Werkt er iets niet zoals verwacht? Neem dan contact op in plaats van zelf te repareren.',
    back:'Terug', share:'Link naar deze fiche kopiëren', copied:'Link gekopieerd!', photolater:'Foto volgt', areas:'Kamers en toestellen', stays:'Geniet van uw verblijf…', nearby:'Rond L’Andain',
    open:'Open de fiche', noresults:'Geen resultaten. Probeer een andere zoekterm.', source:'Versie 6 · Foto’s van toestellen & uitstappen', general:'Praktische informatie', activities:'Bezienswaardigheden & activiteiten', trails:'Wandelingen',
    restaurants:'Onze eetadresjes', intro:'Een gastvriendelijke gids, geen technische handleiding.'
  }
};

const v3 = {
  de:{home:'Startseite',help:'Nützliche Informationen',reviews:'Hat Ihnen Ihr Aufenthalt gefallen?',reviewNote:'Mit einer kurzen Bewertung helfen Sie unserer kleinen Ferienunterkunft, bekannter zu werden. Vielen Dank!',google:'Google-Bewertung schreiben',googlePending:'Google-Link folgt',airbnb:'Auf Airbnb bewerten',airbnbHint:'Über Ihre Buchung, nach der Abreise',checklist:'Ihre Checkliste für die Abreise',progress:'Aufgaben erledigt',reset:'Alle Häkchen entfernen',saved:'Ihr Fortschritt wird auf diesem Gerät gespeichert.',roomsHelp:'Wählen Sie einen Raum',discoverHelp:'Wählen Sie aus, was Sie interessiert',step:'Schritt',backTo:'Zurück zu',contact:'Kontakt',wifi:'Das WLAN-Passwort finden Sie in der Unterkunft',cleaning:'Die Endreinigung ist im Mietpreis enthalten. Wir übernehmen sie nach Ihrer Abreise.'},
  fr:{home:'Accueil',help:'Informations utiles',reviews:'Votre séjour vous a plu ?',reviewNote:'Un petit avis aide notre jeune gîte à se faire connaître. Merci !',google:'Donner un avis Google',googlePending:'Lien Google à ajouter',airbnb:'Évaluer sur Airbnb',airbnbHint:'Depuis la réservation, après le départ',checklist:'Votre checklist de départ',progress:'tâches terminées',reset:'Tout décocher',saved:'Votre progression reste enregistrée sur cet appareil.',roomsHelp:'Choisissez une pièce',discoverHelp:'Choisissez ce qui vous fait envie',step:'Étape',backTo:'Retour vers',contact:'Contact',wifi:'Code Wi-Fi imprimé dans le gîte',cleaning:'Le nettoyage est compris dans la location, nous nous en occuperons après votre départ.'},
  en:{home:'Home',help:'Useful information',reviews:'Enjoyed your stay?',reviewNote:'A short review helps our little cottage grow. Thank you!',google:'Leave a Google review',googlePending:'Google review link coming soon',airbnb:'Review on Airbnb',airbnbHint:'From your booking, after check-out',checklist:'Your check-out checklist',progress:'tasks completed',reset:'Uncheck all',saved:'Your progress is saved on this device.',roomsHelp:'Choose a room',discoverHelp:'Choose what interests you',step:'Step',backTo:'Back to',contact:'Contact',wifi:'Wi-Fi code printed inside the cottage',cleaning:'Cleaning is included in your stay. We will take care of it after you leave.'},
  nl:{home:'Start',help:'Praktische info',reviews:'Genoten van uw verblijf?',reviewNote:'Een beoordeling helpt ons nieuwe vakantiehuisje groeien. Dank u!',google:'Google-review schrijven',googlePending:'Google-reviewlink volgt',airbnb:'Beoordelen op Airbnb',airbnbHint:'Via uw reservering, na vertrek',checklist:'Checklist voor vertrek',progress:'taken voltooid',reset:'Alles uitvinken',saved:'Uw voortgang wordt op dit toestel bewaard.',roomsHelp:'Kies een ruimte',discoverHelp:'Kies uw thema',step:'Stap',backTo:'Terug naar',contact:'Contact',wifi:'Wifi-code is in het verblijf afgedrukt',cleaning:'De schoonmaak is inbegrepen in uw verblijf. Wij zorgen hiervoor na uw vertrek.'}
};

const REVIEW_LINKS = {
  google:'https://g.page/r/CQKH22k4JCGxEBM/review',
  airbnb:'https://www.airbnb.com/trips'
};

const stoveManual = {
  de:{controls:'Bedienfeld des Pelletofens', legend:'Erklärung der Tasten und Anzeigen'},
  fr:{controls:'Tableau de commande du poêle', legend:'Légende des boutons et indicateurs'},
  en:{controls:'Stove control panel', legend:'Legend of buttons and indicators'},
  nl:{controls:'Bedieningspaneel van de kachel', legend:'Legenda van knoppen en indicatoren'}
};

const ROOM_ORDER = [['bathroom','bath'],['bedroom','bed'],['living','flame'],['kitchen','utensils'],['outdoor','tree'],['safety','shield']];
const DISCOVER_GROUPS = [['ruins','home'],['abbeys','home'],['activities','sparkle'],['hikes','foot'],['food','utensils']];

const ROOM_TILE_IMAGES = {
  bathroom:'./assets/photos/bathroom-button.webp',
  bedroom:'./assets/photos/bedroom-main.webp',
  living:'./assets/photos/living-button.webp',
  kitchen:'./assets/photos/kitchen-main.webp',
  outdoor:'./assets/photos/outdoor-button.webp',
  safety:'./assets/photos/safety-main.webp'
};

const ROOM_HEADER_IMAGES = {
  bathroom:'./assets/photos/bathroom-header.webp',
  bedroom:'./assets/photos/bedroom-header.webp',
  living:'./assets/photos/living-header.webp',
  kitchen:'./assets/photos/kitchen-main.webp',
  outdoor:'./assets/photos/outdoor-main.webp',
  safety:'./assets/photos/safety-main.webp'
};

const TOPIC_IMAGES = {
  safety:'./assets/photos/safety-main.webp',
  bath:'./assets/photos/bathroom-bath.webp',
  towel:'./assets/photos/bathroom-towel.webp',
  bed:'./assets/photos/bedroom-bed.webp',
  charging:'./assets/photos/bedroom-main.webp',
  bedheating:'./assets/photos/bedroom-bed.webp',
  gardenaccess:'./assets/photos/bedroom-main.webp',
  stove:'./assets/photos/living-stove.webp',
  tv:'./assets/photos/living-tv.webp',
  playstation:'./assets/photos/living-playstation.webp',
  oven:'./assets/photos/kitchen-oven.webp',
  microwave:'./assets/photos/kitchen-main.webp',
  induction:'./assets/photos/kitchen-main.webp',
  coffee:'./assets/photos/kitchen-coffee.webp',
  dishwasher:'./assets/photos/kitchen-dishwasher.webp',
  otherappliances:'./assets/photos/kitchen-detail.webp',
  waste:'./assets/photos/kitchen-waste.webp',
  garden:'./assets/photos/outdoor-garden.webp',
  smoking:'./assets/photos/outdoor-door.webp',
  lighting:'./assets/photos/outdoor-main.webp'
};

const GUIDE_GALLERIES = {
  oven:['./assets/photos/kitchen-oven.webp','./assets/photos/kitchen-oven-controls.webp'],
  microwave:['./assets/photos/kitchen-microwave.webp']
};

const DISCOVER_GALLERIES = {
  montaigle:['./assets/photos/montaigle-1.webp','./assets/photos/montaigle-2.webp','./assets/photos/montaigle-3.webp'],
  poilvache:['./assets/photos/poilvache-1.webp','./assets/photos/poilvache-2.webp'],
  maredsous:['./assets/photos/maredsous-1.webp','./assets/photos/maredsous-2.webp','./assets/photos/maredsous-3.webp'],
  leffe:['./assets/photos/leffe-1.webp','./assets/photos/leffe-2.webp'],
  maisonleffe:['./assets/photos/leffe-3.webp','./assets/photos/maisonleffe-1.webp','./assets/photos/maisonleffe-2.webp'],
  draisines:['./assets/photos/draisines-1.webp','./assets/photos/draisines-2.webp','./assets/photos/draisines-3.webp'],
  dinantevasion:['./assets/photos/dinantevasion-1.webp','./assets/photos/dinantevasion-2.webp','./assets/photos/dinantevasion-3.webp'],
  dinant:['./assets/photos/dinant-1.webp']
};

const itemIcon = {
  times:'clock', parking:'door', keys:'key', bath:'bath', towel:'sun', bed:'bed', charging:'phone', bedheating:'flame', gardenaccess:'tree',
  stove:'flame', tv:'tv', playstation:'tv', oven:'utensils', microwave:'utensils', induction:'flame', coffee:'coffee', dishwasher:'utensils', otherappliances:'utensils', waste:'list',
  garden:'tree', smoking:'tree', lighting:'sun', reviews:'sparkle', montaigle:'home', poilvache:'home', maredsous:'home', leffe:'home', maisonleffe:'home', draisines:'foot',
  dinantevasion:'sparkle', dinant:'map', tokyowalk:'foot', fondsvau:'foot', weillen:'foot', flavionmontaigle:'foot', falaenwalk:'foot', vitoulet:'utensils', walhere:'utensils', artiste:'utensils', forgetoi:'utensils'
};

let state = { lang:'fr', section:'home', id:'', data:null, query:'', filter:'all' };
const root = $('#app');
const cache = {};

const escapeHTML = x => String(x ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const cleanTitle = t => String(t || '').replace(/^\d+\.\s*/, '').replace(/\s*[–-]\s*CADEL\s+CRISTAL3\s+7\.0\s+UP/ig, '');
const sectionIcon = id => ROOM_ORDER.find(([section]) => section === id)?.[1] || 'home';
const isDiscoverGroup = group => ['ruins','abbeys','activities','hikes','food'].includes(group);
const labelTopics = () => state.lang === 'fr' ? 'équipements et infos' : state.lang === 'nl' ? 'onderwerpen' : 'topics';
const roomTilePhoto = id => ROOM_TILE_IMAGES[id] || ROOM_HEADER_IMAGES[id] || '';
const roomPhoto = id => ROOM_HEADER_IMAGES[id] || ROOM_TILE_IMAGES[id] || '';
const topicPhotos = (id, group) => GUIDE_GALLERIES[id]?.length ? GUIDE_GALLERIES[id] : (DISCOVER_GALLERIES[id]?.length ? DISCOVER_GALLERIES[id] : (TOPIC_IMAGES[id] ? [TOPIC_IMAGES[id]] : (roomPhoto(group) ? [roomPhoto(group)] : [])));
const topicPhoto = (id, group) => topicPhotos(id, group)[0] || '';
const photoStyle = (path, overlay='dark') => {
  if (!path) return '';
  const gradient = overlay === 'light'
    ? 'linear-gradient(180deg, rgba(40,21,16,0.18), rgba(40,21,16,0.48))'
    : 'linear-gradient(180deg, rgba(39,17,20,0.16), rgba(39,17,20,0.78))';
  return `style="background-image:${gradient}, url('${path}');"`;
};

const thumbStyle = path => path ? `style="background-image:linear-gradient(180deg, rgba(39,17,20,0.14), rgba(39,17,20,0.48)), url('${path}');"` : '';

function galleryHTML(images, iconName, label) {
  if (!images.length) {
    return `<div class="detailHero">${iconText(iconName || 'sparkle', 85)}<span>${escapeHTML(words[state.lang].photolater)}</span></div>`;
  }
  if (images.length === 1) {
    return `<div class="detailHero photoHero" ${photoStyle(images[0])}><div class="photoOverlayContent">${iconText(iconName || 'sparkle', 85)}</div></div>`;
  }
  return `<div class="galleryHero" data-gallery><div class="galleryTrack">${images.map((img, i) => `<div class="gallerySlide${i===0 ? ' active' : ''}"><img src="${img}" alt="${escapeHTML(label)} ${i+1}" loading="lazy"></div>`).join('')}</div><button class="galleryNav prev pressable" type="button" data-gallery-prev aria-label="Previous image">${iconText('back',18)}</button><button class="galleryNav next pressable" type="button" data-gallery-next aria-label="Next image">${iconText('arrow',18)}</button><div class="galleryBadge">${iconText(iconName || 'sparkle',16)} <span>${images.length}</span></div><div class="galleryDots">${images.map((_, i) => `<button type="button" class="galleryDot${i===0 ? ' active' : ''}" data-gallery-dot="${i}" aria-label="Image ${i+1}"></button>`).join('')}</div></div>`;
}

function iconText(name, size = 20) {
  return icon(name, size);
}

function linkify(str) {
  return escapeHTML(str)
    .replace(/(https?:\/\/[^\s<>]+)/g, raw => `<a href="${raw.replaceAll('&amp;','&')}" target="_blank" rel="noopener noreferrer">${raw}</a>`)
    .replace(/\b([\w.+-]+@[\w.-]+\.[A-Za-z]{2,})\b/g, '<a href="mailto:$1">$1</a>')
    .replace(/\n/g, '<br>');
}

function isBodyHeading(txt) {
  return txt.length < 67 && !txt.includes(':') && !txt.startsWith('http') && !/^[+\d]/.test(txt) && !txt.includes('@') && !/[.!?]$/.test(txt);
}

function isNoticeLine(txt) {
  return /^(Important|Attention|Warning|Belangrijk|Let op|Ne débranchez|Never unplug|Trek nooit|Wichtig|Achtung|Ziehen Sie niemals)/i.test(txt);
}

function isCautionHeading(txt) {
  return /(pr[ée]cautions?|veilig|voorzorg|safety|precaution|vorsichtsmaßnahme|sicherheit)/i.test(txt);
}

function stoveFiguresHTML() {
  const labels = stoveManual[state.lang];
  return `<div class="manualFigures"><figure class="manualFigure"><img src="./assets/photos/stove-controls.png" alt="${escapeHTML(labels.controls)}" loading="lazy"><figcaption>${escapeHTML(labels.controls)}</figcaption></figure><figure class="manualFigure"><img src="./assets/photos/stove-legend.png" alt="${escapeHTML(labels.legend)}" loading="lazy"><figcaption>${escapeHTML(labels.legend)}</figcaption></figure></div>`;
}

function stoveBodyHTML(arr) {
  const lines = (arr || []).map(line => line.trim()).filter(Boolean);
  if (!lines.length) return '';

  const intro = [];
  const sections = [];
  let current = null;

  lines.forEach((txt, index) => {
    if (index === 0 && !isBodyHeading(txt)) {
      intro.push(txt);
      return;
    }
    if (isBodyHeading(txt)) {
      current = { title: txt, items: [], caution: isCautionHeading(txt) };
      sections.push(current);
      return;
    }
    if (!current) {
      intro.push(txt);
      return;
    }
    current.items.push(txt);
  });

  const introHTML = intro.map(txt => isNoticeLine(txt)
    ? `<p class="notice">${linkify(txt)}</p>`
    : `<p>${linkify(txt)}</p>`).join('');

  const sectionsHTML = sections.map(section => {
    if (!section.items.length) return '';
    if (section.caution) {
      return `<section class="stoveSequence stoveSafety"><h3>${escapeHTML(section.title)}</h3><div class="stoveTips">${section.items.map(item => `<div class="stoveTip${isNoticeLine(item) ? ' isNotice' : ''}"><span class="stoveTipMarker" aria-hidden="true"></span><p>${linkify(item)}</p></div>`).join('')}</div></section>`;
    }
    return `<section class="stoveSequence"><h3>${escapeHTML(section.title)}</h3><div class="stepSequence">${section.items.map((item, i) => `<div class="step stepFlow${isNoticeLine(item) ? ' stepWarn' : ''}"><span class="stepNumber">${i + 1}</span><div class="stepContent"><p>${linkify(item)}</p></div></div>`).join('')}</div></section>`;
  }).join('');

  return `<div class="stoveGuide">${introHTML}${stoveFiguresHTML()}${sectionsHTML}</div>`;
}

function bathBodyHTML(arr) {
  // Preserve the original multilingual text while presenting the five actions as a sequence.
  const lines = (arr || []).flatMap(part => String(part).split('\n')).map(x => x.trim()).filter(Boolean);
  const intro = lines[0] || '';
  const heading = lines[1] || '';
  const important = lines[2] || '';
  const steps = lines.slice(3, 8).map(line => line.replace(/^\d+[.)]\s*/, ''));
  const advice = lines.slice(8);
  return `<div class="bathGuide"><p class="bathIntro">${linkify(intro)}</p>
    <section class="bathImportant" role="note" aria-label="${escapeHTML(important.split(':')[0])}">
      <span class="bathImportantIcon" aria-hidden="true">!</span>
      <p><strong>${escapeHTML(important.split(':')[0])} :</strong>${linkify(important.includes(':') ? important.slice(important.indexOf(':') + 1) : '')}</p>
    </section>
    <section class="stoveSequence bathSequence"><h3>${escapeHTML(heading)}</h3><div class="stepSequence">
      ${steps.map((step, index) => `<div class="step stepFlow"><span class="stepNumber">${index + 1}</span><div class="stepContent"><p>${linkify(step)}</p></div></div>`).join('')}
    </div></section>
    <section class="bathAdvice">${advice.map((line, i) => `<p class="${i === 0 || i === advice.length - 1 ? 'bathCaution' : ''}">${linkify(line)}</p>`).join('')}</section>
  </div>`;
}

function coffeeBodyHTML(arr) {
  const lines = (arr || []).map(line => String(line).trim()).filter(Boolean);
  const introduction = lines.slice(0, 2);
  const steps = lines.slice(2, 7).map(line => line.replace(/^\d+[.)]\s*/, ''));
  const conclusion = lines.slice(7);
  return `<div class="coffeeGuide">${introduction.map(line => `<p>${linkify(line)}</p>`).join('')}
    <section class="stoveSequence coffeeSequence"><div class="stepSequence">
      ${steps.map((step, index) => `<div class="step stepFlow"><span class="stepNumber">${index + 1}</span><div class="stepContent"><p>${linkify(step)}</p></div></div>`).join('')}
    </div></section>
    ${conclusion.map(line => `<p>${linkify(line)}</p>`).join('')}
  </div>`;
}

function bodyHTML(arr) {
  return (arr || []).map(line => {
    const txt = line.trim();
    if (!txt) return '';
    const isstep = /^\d+[.)]\s/.test(txt);
    const notice = isNoticeLine(txt);
    if (notice) return `<p class="notice">${linkify(txt)}</p>`;
    if (isstep) {
      const match = txt.match(/^(\d+)[.)]\s*(.*)$/);
      return `<div class="step"><span class="stepNumber">${match[1]}</span><p>${linkify(match[2])}</p></div>`;
    }
    if (isBodyHeading(txt)) {
      return `<h3>${escapeHTML(txt)}</h3>`;
    }
    return `<p>${linkify(txt)}</p>`;
  }).join('');
}

function href(section, id = '', lang = state.lang) {
  return '#/' + lang + '/' + section + (id ? '/' + id : '');
}

function tile(title, desc, ico, to) {
  return `<a class="tile pressable" href="${to}"><div class="tileicon">${iconText(ico)}</div><strong>${escapeHTML(title)}</strong><small>${escapeHTML(desc || '')}</small><span class="arr">${iconText('arrow',17)}</span></a>`;
}

function desktopNav() {
  const w = { ...words[state.lang], ...v3[state.lang] };
  return `<nav class="desktopnav" aria-label="Navigation">${[['home',w.home],['house',w.house],['discover',w.discover]].map(([id,label]) => {
    const guideGroup = state.section === 'guide' ? findTopic(state.id)?.group : '';
    const active = id === state.section || (id === 'house' && ['room','guide'].includes(state.section) && !isDiscoverGroup(guideGroup));
    return `<a class="${active ? 'active' : ''}" href="${href(id)}">${escapeHTML(label)}</a>`;
  }).join('')}</nav>`;
}

function topline() {
  const w = words[state.lang];
  return `<header class="topbar"><a href="${href('home')}" class="brand"><div class="brandmark">A</div><span><strong class="brandname">L’Andain</strong><span class="brandsub">${escapeHTML(w.guide)}</span></span></a>${desktopNav()}<div class="langselect" aria-label="Languages">${['fr','en','nl','de'].map(l => `<button type="button" class="${state.lang === l ? 'active' : ''}" data-lang="${l}" aria-label="${l.toUpperCase()}">${l.toUpperCase()}</button>`).join('')}</div></header>`;
}

function nav() {
  const w = words[state.lang];
  const guideGroup = state.section === 'guide' ? findTopic(state.id)?.group : '';
  const entries = [['home','home',state.lang === 'fr' ? 'Accueil' : state.lang === 'nl' ? 'Start' : state.lang === 'de' ? 'Start' : 'Home'], ['house','bed',w.house], ['discover','map',w.discover]];
  return `<nav class="mobiletab" aria-label="Navigation">${entries.map(([section, ico, label]) => {
    const selected = state.section === section || (section === 'house' && ['room','guide'].includes(state.section) && !isDiscoverGroup(guideGroup));
    return `<button data-go="${section}" class="${selected ? 'sel' : ''}">${iconText(ico)}<span>${escapeHTML(label)}</span></button>`;
  }).join('')}</nav>`;
}

function footer() {
  return `<footer class="footer"><span>© L’Andain · Sommière, Onhaye</span><span>${escapeHTML(words[state.lang].source)}</span></footer>`;
}

function reviewPanel() {
  const w = v3[state.lang];
  const google = REVIEW_LINKS.google
    ? `<a class="reviewLink pressable" href="${escapeHTML(REVIEW_LINKS.google)}" target="_blank" rel="noopener noreferrer">★ ${escapeHTML(w.google)} ${iconText('arrow',16)}</a>`
    : `<div class="reviewLink disabled" title="${escapeHTML(w.googlePending)}">★ ${escapeHTML(w.google)} <span class="smallnote">${escapeHTML(w.googlePending)}</span></div>`;
  return `<section class="reviews"><div class="reviewHead"><div class="reviewStar">★</div><div><h2>${escapeHTML(w.reviews)}</h2><p>${escapeHTML(w.reviewNote)}</p></div></div><div class="reviewActions">${google}<a class="reviewLink pressable" href="${REVIEW_LINKS.airbnb}" target="_blank" rel="noopener noreferrer">${iconText('home',17)} ${escapeHTML(w.airbnb)} ${iconText('arrow',15)}</a></div><p class="hint">${escapeHTML(w.airbnbHint)}</p></section>`;
}

function home() {
  const d = state.data;
  const w = words[state.lang];
  const t = v3[state.lang];
  return `<section class="hero"><div><h1>${escapeHTML(cleanTitle(w.welcome))}</h1></div></section><section><div class="sectionhead"><div><h2>${escapeHTML(t.help)}</h2></div></div><div class="grid homeEssentials">${tile(cleanTitle(d.arrival.title),'','key',href('arrival'))}${tile(cleanTitle(d.departure.title),'','door',href('departure'))}${tile(cleanTitle(d.safety.title),'','shield',href('guide','safety'))}</div><div class="practical"><div class="practicalItem"><span class="practicalIcon">${iconText('wifi')}</span><div><strong>Wi-Fi</strong><p>${escapeHTML(t.wifi)}</p></div></div><div class="practicalItem"><span class="practicalIcon">${iconText('phone')}</span><div><strong>${escapeHTML(t.contact)}</strong><a href="tel:+32496174363">François · +32 496 17 43 63 ${iconText('arrow',15)}</a><a href="tel:+32495167265">Émilie · +32 495 16 72 65 ${iconText('arrow',15)}</a></div></div></div></section>${reviewPanel()}`;
}

function breadcrumb(label, backTo='home') {
  return `<a href="${href(backTo)}" class="breadcrumb">${iconText('back',15)} ${escapeHTML(words[state.lang].back)} · ${escapeHTML(label || 'L’Andain')}</a>`;
}

function pathnav(entries) {
  return `<div class="pathnav">${entries.map(([label,to], i) => `${i ? '<span class="pathsep">›</span>' : ''}${to ? `<a href="${to}">${escapeHTML(label)}</a>` : `<strong>${escapeHTML(label)}</strong>`}`).join('')}</div>`;
}

function pageTitle(title, subtitle='') {
  return `<div class="pagehead"><h1>${escapeHTML(title)}</h1>${subtitle ? `<p>${escapeHTML(subtitle)}</p>` : ''}</div>`;
}

function listrow(title, description, ico, url, thumb='') {
  const media = thumb
    ? `<div class="listicon listthumb" ${thumbStyle(thumb)} aria-hidden="true"></div>`
    : `<div class="listicon">${iconText(ico)}</div>`;
  return `<a class="listrow pressable" href="${url}">${media}<div style="flex:1"><strong>${escapeHTML(title)}</strong>${description ? `<span>${escapeHTML(description)}</span>` : ''}</div><span class="chevron">${iconText('chevron',18)}</span></a>`;
}

function roomPage(id) {
  const d = state.data[id];
  const w = words[state.lang];
  if (!d) return home();
  const image = roomPhoto(id);
  return pathnav([[w.house, href('house')], [cleanTitle(d.title), null]]) +
    pageTitle(cleanTitle(d.title)) +
    `<div class="roomCover photoHero" ${photoStyle(image)}><div class="photoOverlayContent"><div class="roomCoverIcon">${iconText(sectionIcon(id), 65)}</div><span>${escapeHTML(cleanTitle(d.title))}</span></div></div><div class="list">${Object.entries(d.topics).map(([key,topic]) => listrow(cleanTitle(topic.title), topic.body[0]?.slice(0,90), itemIcon[key] || 'sparkle', href('guide',key))).join('')}${!Object.keys(d.topics).length ? `<div class="paper article">${bodyHTML(d.body)}</div>` : ''}</div>`;
}

function houseResults() {
  const q = state.query.trim().toLowerCase();
  if (!q) return '';
  const results = [];
  const roomSections = ROOM_ORDER.map(([id]) => id);

  roomSections.forEach(sectionId => {
    const section = state.data[sectionId];
    if (!section) return;
    const sectionText = [section.title, ...(section.body || [])].join(' ').toLowerCase();
    if (sectionText.includes(q)) {
      results.push({
        title: cleanTitle(section.title),
        description: section.body?.[0]?.slice(0,95) || '',
        icon: sectionIcon(sectionId),
        url: sectionId === 'safety' ? href('guide','safety') : href('room', sectionId)
      });
    }
    Object.entries(section.topics || {}).forEach(([topicId, topic]) => {
      const topicText = [topic.title, ...(topic.body || [])].join(' ').toLowerCase();
      if (topicText.includes(q)) {
        results.push({
          title: cleanTitle(topic.title),
          description: topic.body?.[0]?.slice(0,95) || '',
          icon: itemIcon[topicId] || 'sparkle',
          url: href('guide', topicId)
        });
      }
    });
  });

  const deduped = [];
  const seen = new Set();
  results.forEach(item => {
    if (seen.has(item.url)) return;
    seen.add(item.url);
    deduped.push(item);
  });

  if (!deduped.length) return `<div class="empty">${escapeHTML(words[state.lang].noresults)}</div>`;
  return deduped.map(item => listrow(item.title, item.description, item.icon, item.url)).join('');
}

function housePage() {
  const w = words[state.lang];
  const d = state.data;
  return pageTitle(w.house, v3[state.lang].roomsHelp) +
    `<div class="roomsGrid">${ROOM_ORDER.filter(([section]) => section !== 'safety').map(([section, ico]) => `<a class="roomTile photoTile pressable room-${section}" href="${href('room',section)}" ${photoStyle(roomTilePhoto(section))}><span class="roomIcon">${iconText(ico,35)}</span><strong>${escapeHTML(d[section].title.replace(/^\d+\.\s*/,''))}</strong><small>${Object.keys(d[section].topics).length} ${labelTopics()}</small>${iconText('arrow',18)}</a>`).join('')}</div><div class="sectionhead"><div><h2>${state.lang === 'fr' ? 'Vous cherchez quelque chose ?' : state.lang === 'nl' ? 'Op zoek naar iets?' : state.lang === 'de' ? 'Suchen Sie etwas?' : 'Looking for something?'}</h2></div></div><input class="search" id="search" placeholder="${escapeHTML(w.search)}" value="${escapeHTML(state.query)}"><div class="list" id="results">${state.query ? houseResults() : ''}</div>`;
}

function discoverPage() {
  const d = state.data;
  const t = v3[state.lang];
  const sel = state.filter;
  const cards = `<div class="topicCards">${DISCOVER_GROUPS.map(([group, ico]) => `<button class="topicCard pressable ${sel === group ? 'selected' : ''}" data-filter="${group}"><span class="topicIcon">${iconText(ico,29)}</span><strong>${escapeHTML(cleanTitle(d[group].title))}</strong>${iconText('arrow',16)}</button>`).join('')}</div>`;
  const content = sel === 'all'
    ? cards
    : `<button class="backCategory pressable" data-filter="all">${iconText('back',17)} ${escapeHTML(t.discoverHelp)}</button><div class="selectedCategory">${escapeHTML(cleanTitle(d[sel]?.title || ''))}</div>`;
  const groups = sel === 'all' ? '' : `<div class="topicGroups">${DISCOVER_GROUPS.filter(([group]) => sel === group).map(([group, ico]) => `<div class="list">${Object.entries(d[group].topics).map(([id, v]) => listrow(cleanTitle(v.title), v.body[0]?.slice(0,95), itemIcon[id] || ico, href('guide', id), topicPhoto(id, group))).join('')}</div>`).join('')}</div>`;
  return pageTitle(d.nearby_intro.title, t.discoverHelp) + content + groups;
}

function findTopic(id) {
  if (state.data[id] && Object.keys(state.data[id].topics || {}).length === 0) {
    return { t:{ title: state.data[id].title, body: state.data[id].body }, group: id };
  }
  for (const [group, section] of Object.entries(state.data)) {
    if (section.topics && section.topics[id]) return { t: section.topics[id], group };
  }
  return null;
}

function detailPage(id) {
  const found = findTopic(id);
  const w = words[state.lang];
  const t = v3[state.lang];
  if (!found) return home();
  const { t:topic, group } = found;
  const groupIsDiscover = isDiscoverGroup(group);
  const parent = groupIsDiscover ? w.discover : w.house;
  const backTarget = groupIsDiscover ? href('discover') : group === 'safety' ? href('home') : href('room', group);
  const related = Object.entries(state.data[group]?.topics || {}).filter(([key]) => key !== id).slice(0,4);
  const images = topicPhotos(id, group);
  return pathnav([[parent, href(groupIsDiscover ? 'discover' : 'house')], [cleanTitle(state.data[group].title), backTarget], [cleanTitle(topic.title), null]]) +
    pageTitle(cleanTitle(topic.title)) +
    `<div class="detailLayout detailFocus"><div>${galleryHTML(images, itemIcon[id] || 'sparkle', cleanTitle(topic.title))}<div class="paper article ${id === 'stove' ? 'manualArticle' : ''}">${id === 'stove' ? stoveBodyHTML(topic.body) : id === 'bath' ? bathBodyHTML(topic.body) : id === 'coffee' ? coffeeBodyHTML(topic.body) : bodyHTML(topic.body)}</div><a class="backRoom pressable" href="${backTarget}">${iconText('back',17)} ${escapeHTML(t.backTo)} ${escapeHTML(cleanTitle(state.data[group].title))}</a>${related.length ? `<div class="morelist"><h3>${escapeHTML(w.quick)}</h3><div class="list">${related.map(([key, value]) => listrow(cleanTitle(value.title), '', itemIcon[key], href('guide', key), groupIsDiscover ? topicPhoto(key, group) : '')).join('')}</div></div>` : ''}</div></div>`;
}

function departureChecklist() {
  const d = state.data.departure;
  const t = v3[state.lang];
  const lines = d.body;
  const tasks = lines.slice(1, -1);
  let checked = [];
  try {
    checked = JSON.parse(localStorage.getItem('landain-checkout-v3') || '[]');
    if (!Array.isArray(checked)) checked = [];
  } catch {}
  const progress = tasks.length ? 100 * checked.filter(x => x < tasks.length).length / tasks.length : 0;
  return `<div class="paper checklist" id="checkoutList"><div class="checkhead"><h2>${escapeHTML(t.checklist)}</h2><span id="checkProgress">${checked.length}/${tasks.length} ${escapeHTML(t.progress)}</span></div><div class="checkTrack"><div id="checkFill" style="width:${progress}%"></div></div>${tasks.map((line, i) => `<label class="checkitem"><input type="checkbox" data-check="${i}" ${checked.includes(i) ? 'checked' : ''}><span>${escapeHTML(line)}</span></label>`).join('')}<div class="checkfoot"><p>${escapeHTML(t.saved)}</p><button class="resetchecks pressable" id="resetChecks">${escapeHTML(t.reset)}</button></div></div><p class="departureTime">${escapeHTML(lines.at(-1))}</p>`;
}

function generalPage(id) {
  const d = state.data[id];
  const w = words[state.lang];
  return breadcrumb(w.general) + pageTitle(cleanTitle(d.title), id === 'arrival' ? w.stays : '') +
    `<div class="detailLayout detailFocus"><div>${id === 'departure' ? `<p class="leadtext">${escapeHTML(d.body[0])}</p><p class="cleaningNote">${escapeHTML(v3[state.lang].cleaning)}</p>${departureChecklist()}` : `<div class="list">${Object.entries(d.topics || {}).map(([key, topic]) => `<div class="paper topicPaper"><h3>${escapeHTML(cleanTitle(topic.title))}</h3><div class="article">${bodyHTML(topic.body)}</div></div>`).join('')}${d.body.length ? `<div class="paper article">${bodyHTML(d.body)}</div>` : ''}</div>`}<a class="backRoom pressable" href="${href('home')}">${iconText('back',17)} ${escapeHTML(v3[state.lang].backTo)} ${escapeHTML(v3[state.lang].home)}</a></div></div>`;
}

async function loadData(lang) {
  state.data = cache[lang] ?? (cache[lang] = await (await fetch('./data/' + lang + '.json?v=8.0')).json());
}

function wire() {
  document.querySelectorAll('[data-lang]').forEach(button => button.onclick = () => {
    if (state.lang === button.dataset.lang) return;
    const parts = location.hash.split('/');
    parts[1] = button.dataset.lang;
    location.hash = parts.join('/');
  });

  document.querySelectorAll('[data-go]').forEach(button => button.onclick = () => {
    location.hash = href(button.dataset.go);
  });

  document.querySelectorAll('[data-filter]').forEach(button => button.onclick = () => {
    state.filter = button.dataset.filter;
    router();
  });

  const search = $('#search');
  if (search) {
    search.addEventListener('input', e => {
      state.query = e.target.value;
      $('#results').innerHTML = houseResults();
    });
  }

  const checks = [...document.querySelectorAll('[data-check]')];
  function updateChecks() {
    const ids = checks.filter(x => x.checked).map(x => Number(x.dataset.check));
    try { localStorage.setItem('landain-checkout-v3', JSON.stringify(ids)); } catch {}
    const progress = $('#checkProgress');
    const fill = $('#checkFill');
    if (progress) progress.textContent = ids.length + '/' + checks.length + ' ' + v3[state.lang].progress;
    if (fill) fill.style.width = (checks.length ? ids.length / checks.length * 100 : 0) + '%';
  }
  checks.forEach(input => input.addEventListener('change', updateChecks));

  const reset = $('#resetChecks');
  if (reset) reset.onclick = () => {
    checks.forEach(c => c.checked = false);
    updateChecks();
  };

  document.querySelectorAll('[data-gallery]').forEach(gallery => {
    const track = gallery.querySelector('.galleryTrack');
    const slides = [...gallery.querySelectorAll('.gallerySlide')];
    const dots = [...gallery.querySelectorAll('[data-gallery-dot]')];
    let index = 0;
    const refresh = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
      slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
      dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    };
    gallery.querySelector('[data-gallery-prev]')?.addEventListener('click', () => {
      index = (index - 1 + slides.length) % slides.length;
      refresh();
    });
    gallery.querySelector('[data-gallery-next]')?.addEventListener('click', () => {
      index = (index + 1) % slides.length;
      refresh();
    });
    dots.forEach((dot, i) => dot.addEventListener('click', () => { index = i; refresh(); }));
    refresh();
  });
}

function router() {
  const parts = decodeURIComponent(location.hash || '').replace(/^#\/?/, '').split('/').filter(Boolean);
  const lang = ['fr','en','nl','de'].includes(parts[0]) ? parts[0] : 'fr';
  state.lang = lang;
  state.section = parts[1] || 'home';
  state.id = parts[2] || '';

  loadData(lang).then(() => {
    const output = state.section === 'home' ? home()
      : state.section === 'arrival' || state.section === 'departure' ? generalPage(state.section)
      : state.section === 'house' ? housePage()
      : state.section === 'room' ? roomPage(state.id)
      : state.section === 'guide' ? detailPage(state.id)
      : state.section === 'discover' ? discoverPage()
      : home();

    root.innerHTML = `<main class="shell">${topline()}${output}${footer()}</main>${nav()}`;
    document.documentElement.lang = lang;
    document.title = `L’Andain · ${words[lang].guide}`;
    window.scrollTo(0,0);
    wire();
  }).catch(error => {
    root.innerHTML = '<p style="padding:40px">Guide non disponible. Veuillez vérifier la connexion et les fichiers du site.</p>';
    console.error(error);
  });
}

window.addEventListener('hashchange', () => {
  state.query = '';
  state.filter = 'all';
  router();
});

router();
