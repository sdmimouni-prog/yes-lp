# Yes Baby Comfort — prototype animé

Page arabe RTL en HTML, CSS et JavaScript vanilla. Vite assure le développement et le build.

## Lancer

```sh
npm install
npm run dev -- --host 127.0.0.1 --port 42862 --strictPort
```

Ouvrir http://127.0.0.1:42862. Production : `npm run build`, fichiers dans `dist/client/`.

## Animations

- Barre supérieure et navigation : apparition verticale.
- Hero : photographie en zoom doux, titre en léger pivot, texte et CTA décalés.
- Avantages : apparition échelonnée et rebond visuel au survol des icônes.
- Produits : montée avec rotation légère ; élévation, ombre et zoom au survol.
- Engagement : dévoilement de la photo, glissement du texte et des engagements.
- Articles : montée progressive et zoom photo au survol.
- Avis : ouverture du bloc et transition à chaque changement, vague des étoiles au survol.
- Newsletter et footer : apparition au défilement ; boutons, liens, icônes et champs avec états hover/focus.

IntersectionObserver lance chaque entrée une seule fois lorsque l’élément entre dans l’écran. Les effets d’entrée et de survol agissent sur des éléments distincts. Pas de boucle décorative permanente. `prefers-reduced-motion` désactive les animations et les déplacements. Les contenus restent visibles sans prise en charge d’IntersectionObserver.

## Interactions

Menu mobile, navigation par ancres, recherche locale des familles de produits, fiches d’information, carrousel à trois positions, newsletter avec validation native et retour explicite de démonstration. Aucune commande, aucun paiement, aucun envoi de données.

## Visuels et limites

- Logo : ressource existante `yes-campaign-portal/assets/yes-logo-source.png` (fond beige, version différente de la maquette).
- Photographie mère/enfant : visuel existant de campagne, cadré en CSS.
- Hero : photographie générée pour ce prototype, également utilisée provisoirement dans les articles.
- Couches : packshot existant du revendeur https://kwikmarket.ma/products/yes-taille-4 ; ancien emballage différent de la maquette.
- Packshots lingettes, soins et coton : manquants, signalés explicitement.
- Photos éditoriales, portraits et motifs décoratifs de la maquette : manquants.

Le prototype permet de revoir les animations. La fidélité pixel perfect reste bloquée par les visuels séparés manquants ; voir `design-qa.md`.

## Organisation

`index.html`, `css/style.css`, `css/responsive.css`, `js/main.js`, `public/assets/`, `qa/`.
Aucun framework frontend ; les seules dépendances sont Vite et la bibliothèque d’icônes Lucide.

## Mise à jour du footer — 21 octobre 2026

Newsletter et footer recalibrés sur la référence dédiée : `css/footer.css`, police Tajawal locale, logo et décors séparés avec transparence, cinq colonnes et quatre icônes sociales (Font Awesome). Texte et contrôles restent en HTML. Vérification : `design-qa-footer.md`, comparaison dans `qa/footer-comparison.jpg`. Les liens des réseaux sociaux conservent une destination de démonstration en attendant les URL officielles.

## Contrôle qualité

Voir `quality-control.md` et les captures fraîches dans `qa/quality-control/`. Corrections : récupération des recherches vides, fermeture et focus au clavier, noms des dialogues, cibles tactiles, contraste, suivi du footer actif et logo cohérent. Grandes photos servies en WebP ; icônes sociales Font Awesome conservées en SVG statiques sans bibliothèque runtime. Le prototype reste en démonstration pour les inscriptions, les comptes et les commandes.

## Contrôle responsive approfondi

Voir `responsive-check.md` : 12 largeurs de 320 à 1920 px, plus paysage 667 × 375. Correction du logo/slogan coupé à 320 px, menu défilant sur écran court, état du menu à la rotation, champs à 16 px minimum sur mobile et cibles tactiles adaptées.
