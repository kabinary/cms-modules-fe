# cms-modules-fe

Vitrine publique des modules Joomla de Kabinary : présentation, démo, guides d'installation et
achat. Angular 22 (standalone), Tailwind, déployé en statique sur GitHub Pages.

## Le point le plus important

**Ce front n'appelle aucune API.** Il ne connaît ni `cms-mod.kabinary.com`, ni clé d'API, ni
subscription. L'achat passe intégralement par un **Stripe Buy Button** (`js.stripe.com/v3/buy-button.js`
chargé dans `index.html`, boutons dans
`src/app/pages/member-directory-module-license/`), donc par du checkout hébergé par Stripe.

Conséquences à garder en tête :

- La clé publiable intégrée est une **`pk_live_`** : les boutons de cette page prennent de vrais
  paiements. Toute manipulation de cette page touche à de l'encaissement réel.
- Ce sont les `buy-button-id` qui déterminent le produit acheté et, surtout, les **métadonnées**
  (`ModuleId`, `Months`, `Days`, `IsFreeTrial`) transmises au webhook. Ces métadonnées sont
  configurées **côté dashboard Stripe**, pas dans ce repo : le backend en dépend pour créer la
  licence, et une valeur manquante ou renommée casse la livraison sans erreur visible ici.
- Un achat qui « ne marche pas » (client sans mail) ne se diagnostique donc **jamais** dans ce
  repo : le problème est côté webhook backend. Voir le `CLAUDE.md` racine.

## Domaine

Le fichier `CNAME` contient `joomla.kabinary.com`, mais le site réellement servi — et celui que
référencent le module Joomla et les mails de licence — est **`modules.kabinary.com`**
(`joomla.kabinary.com` ne répond pas). Vérifier la configuration GitHub Pages avant de se fier au
`CNAME`, et ne pas « corriger » les URLs `modules.kabinary.com` ailleurs pour les aligner dessus.

## Commandes

```bash
npm start          # serveur de dev
npm run build      # build de production
npm test           # tests unitaires
```

Il n'y a **pas de workflow GitHub Actions** dans ce repo (seulement `dependabot.yml`) : le
déploiement se fait via GitHub Pages, pas par une CI de build. Aucun test n'empêche donc une
régression d'arriver en ligne — relire le rendu avant de pousser sur `main`.
