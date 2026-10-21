# QA — newsletter et footer

final result: passed

## Périmètre et référence

Correction du bandeau newsletter et du footer uniquement, à partir de `Référence fournie : انضموا إلى عائلة Yes Baby Comfort.png` (2075 × 758). Le statut du contrôle global de la homepage dans `design-qa.md` reste indépendant de ce contrôle ciblé.

## Preuves

- Desktop : viewport 1440 × 900, densité 1. Footer mesuré à 1440 × 526, conformément au ratio de la référence (526,03 px).
- Source ramenée proportionnellement à 1440 × 526 ; capture navigateur du même bloc : `qa/footer-desktop.png`.
- Comparaison source/rendu, même taille et état sans formulaire soumis : `qa/footer-comparison.jpg` (source au-dessus, rendu au-dessous).
- Première comparaison : `qa/footer-comparison-v1.jpg`.
- Mobile : viewport 375 × 812 ; `qa/footer-mobile.png`. Limite de cette capture longue : le navigateur inclut le header sticky dans la zone recadrée. Ce recouvrement est une limite de capture ; les mesures DOM ne présentent pas de débordement.

## Comparaisons et corrections

1. P2 : slogan trop large, titre newsletter trop large, corps de texte légèrement trop grand. Correction des tailles, des graisses et du placement ; vérification sur la comparaison finale.
2. P2 : bords rectangulaires autour du logo, des cœurs et des nuages. Isolation des seuls éléments graphiques fournis, avec transparence, sans découpage des champs, boutons ou liens.
3. P2 : formulaire trop à gauche. Décalage de 12,5 px au viewport 1440 et de 3,5 px verticalement, vérifié sur la comparaison finale.
4. P2 : TikTok et FAQ manquants. Ajout des quatre icônes de marque en SVG de bibliothèque et du contrôle FAQ.
5. P2 mobile : ponctuation du titre seule sur une ligne et YouTube sur une seconde ligne. Réduction de la taille du titre et adaptation des espacements des réseaux sociaux.

## Surfaces de fidélité

- Typographie : Tajawal locale, tailles et graisses calibrées sur les libellés de la référence ; texte arabe HTML et direction RTL conservés.
- Espacement : newsletter à x=47,19 px, largeur=1345,63 px et hauteur=135,32 px au viewport 1440 ; cinq colonnes, logo à gauche et ligne légale en bas.
- Couleurs : fond blanc rosé et bandeau pastel ajustés par échantillonnage ; bleu marine, rose et boutons cohérents avec la source.
- Images : logo, cœurs et nuages isolés de la référence comme ressources statiques ; aucune image complète du footer utilisée comme interface.
- Contenu : libellés, quatre familles de produits, quatre informations utiles, quatre liens institutionnels, quatre réseaux et mentions légales présents. Champ, bouton et liens sont de vrais éléments HTML.
- Motion : entrées au défilement et survols maintenus ; les réglages `prefers-reduced-motion` existants restent appliqués.

## Vérifications

- Build de production réussi après les dernières corrections.
- Aucun débordement horizontal à 375 px et 1440 px.
- Quatre liens sociaux présents et aucune image cassée dans le footer.
- Email incorrect : validation native rejette la valeur (`typeMismatch: true`).
- Email valide : message de démonstration affiché ; aucune donnée envoyée.
- FAQ : dialogue ouvert puis fermé.
- Aucune erreur console sur la version locale finale.

## Polish P3

De légères différences de rendu typographique et d’anticrénelage subsistent par rapport au texte raster de la maquette. L’icône enveloppe est issue de Lucide et présente un tracé intérieur légèrement différent. La texture subtile du fond raster est remplacée par une couleur CSS calibrée. Ces différences ne touchent ni la structure, ni les proportions, ni la lisibilité.

Aucun P0/P1/P2 restant dans le périmètre newsletter/footer.
