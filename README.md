# L’Andain — Guide d’accueil numérique (V1)

Site statique **mobile-first** pour GitHub Pages, sans framework ni coût d’hébergement.

## Mise en ligne

1. Créer un dépôt GitHub **public** nommé `andain-guide` (ou utiliser un dépôt existant).
2. Ajouter **tous les fichiers et dossiers** du présent dossier à la racine du dépôt (`index.html`, `styles.css`, `app.js`, `assets/`, `data/`).
3. Dans **Settings → Pages**, choisir **Deploy from a branch**, `main`, `/(root)`.
4. Attendre la publication, puis ouvrir `https://VOTRE-NOM.github.io/andain-guide/`.

## QR codes

Les URLs utilisent `#` pour assurer le bon fonctionnement de la navigation directe sur GitHub Pages. Ces liens sont conçus pour rester stables :

- Accueil : `https://VOTRE-NOM.github.io/andain-guide/#/fr/home`
- Arrivée : `https://VOTRE-NOM.github.io/andain-guide/#/fr/arrival`
- Départ : `https://VOTRE-NOM.github.io/andain-guide/#/fr/departure`
- Poêle : `https://VOTRE-NOM.github.io/andain-guide/#/fr/guide/stove`
- Baignoire : `https://VOTRE-NOM.github.io/andain-guide/#/fr/guide/bath`
- TV : `https://VOTRE-NOM.github.io/andain-guide/#/fr/guide/tv`
- PlayStation : `https://VOTRE-NOM.github.io/andain-guide/#/fr/guide/playstation`
- Cuisine (rubrique) : `https://VOTRE-NOM.github.io/andain-guide/#/fr/room/kitchen`
- Café : `https://VOTRE-NOM.github.io/andain-guide/#/fr/guide/coffee`
- Sorties : `https://VOTRE-NOM.github.io/andain-guide/#/fr/discover`

Les langues `en` et `nl` remplacent `fr` dans le lien. Le sélecteur change de langue en conservant la fiche consultée.

## Contenus et illustrations

- Textes : `data/fr.json`, `data/en.json`, `data/nl.json` ; issus des guides Word fournis.
- Illustration de couverture : `assets/valley.svg`, dessin décoratif de la vallée **et non une photographie du gîte**.
- Fiches : emplacements explicites « Photo à ajouter ». La V1 n’intègre pas encore vos photos réelles ou les schémas du panneau CADEL.
- Modification rapide : les textes des fiches sont dans les tableaux `body` des fichiers JSON. Chaque thème a un identifiant stable, par ex. `stove`.
- Les formulations laissées « à compléter » dans le document d’origine restent à compléter.

## Sécurité

Le site GitHub Pages est **public**. Ne jamais inscrire les codes de la boîte à clés, le mot de passe Wi-Fi, les contacts personnels privés ni les données des voyageurs dans les fichiers du dépôt.

## Tester sur l’ordinateur

Les fichiers JSON sont chargés via `fetch`, ce qui nécessite un petit serveur HTTP en local. Dans le dossier du site, lancez `python -m http.server 8000`, puis ouvrez `http://localhost:8000`. Le simple double-clic sur `index.html` peut bloquer le chargement des textes à cause des protections du navigateur.

## Prochaines améliorations

- Remplacer les illustrations génériques par vos photographies et annoter le panneau du poêle.
- Ajouter des vidéos brèves aux fiches.
- Mettre en place les QR codes finaux après publication.
- Tester les liens des promenades et mettre à jour les coordonnées et horaires des établissements.


## V2 (octobre 2026)
- Palette ocre / bordeaux inspirée des pièces du gîte, avec saturation adoucie.
- Navigation basse : Accueil, Le logement, À découvrir.
- Page d'accueil épurée : arrivée, départ, sécurité, Wi-Fi (code affiché sur place), téléphone de François et découverte locale.
- Dans Le logement, choisir d'abord une pièce, puis un équipement. Recherche optionnelle.
- Fil d'Ariane sur les fiches et retour explicite à la pièce.
- URLs des équipements identiques à la V1, compatibles avec les futurs QR codes.
- Aucun mot de passe ni code de boîte à clés publié.
- Photos réelles à intégrer ultérieurement.

Pour mettre à jour le dépôt GitHub, transférer le contenu de ce dossier à la racine, en remplaçant les fichiers déjà présents.


## V3 (octobre 2026)

- Navigation desktop avec Accueil, Le logement et Découvrir.
- Rubriques d’activités présentées en cartes avant leur liste.
- Suppression des encarts Besoin d'aide et de la commande de copie du lien. Les routes directes des fiches restent inchangées.
- Mise en page des étapes plus visuelle et meilleure navigation de retour.
- Checklist de départ interactive mémorisée via localStorage sur l’appareil utilisé (aucune synchronisation entre appareils, aucune donnée transmise).
- Section avis sur l’accueil : Airbnb ouvre les voyages/réservations ; pour activer l'avis Google, remplacer la chaîne vide `google` dans `REVIEW_LINKS` en tête du fichier `app.js` par le lien direct d'avis Google Business Profile.
- Aucune nouvelle photographie ajoutée en V3.


## V4 light — images optimisées

Les 11 photographies sont au format WebP et redimensionnées pour l'affichage dans les cartes et en-têtes. Les chemins `assets/photos/*.webp` doivent être conservés à la racine du dépôt. Les URL de navigation `#/fr/...` ne changent pas.


V5 : intégration des photos détaillées des équipements, nouveaux visuels par pièce et menu mobile stabilisé.
