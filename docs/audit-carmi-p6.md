# CARMI · Revue de la démonstration P6

## Audit P5 et décisions de design

Le déploiement public P5 sert le commit `6ce6e1b` sur le domaine existant. Il présente clairement le statut de démonstration et conserve les restrictions de collecte. L’accueil était organisé comme une série de sections fonctionnelles, avec une seule fiche de prestation, une Direction générale succincte et plusieurs blocs métier en français après bascule en arabe.

P6 donne la priorité au premier écran, aux parcours et à la compréhension du caractère fictif de la démonstration. Le premier écran conserve le vert, l’or, le tricolore et le logo d’origine. Les six catégories de prestations s’ouvrent au clavier. La Direction générale affiche une composition neutre et des axes de travail proposés. Le calendrier, les guichets et les annonces utilisent des exemples explicites. Le simulateur réemploie le calcul local et sépare les contrôles, les résultats et l’avertissement. Les pages d’accueil et de suivi proposent les textes principaux en français et en arabe. La proposition PROSPERA termine le parcours.

## Portrait historique

Le fichier `public/image/dgcarmi.jpg` a été extrait du commit `828746a085bd96b1b568afb5531f4244ce66366a` vers un espace privé. JPEG, 294 × 473 px. Blob Git `3a1881fa20a7c4ef929d33e8960f19a317f8feed`. SHA-256 `85a4f5dafe830e68f5a71ba78135d8e1a6405f7c1f61a5e879f35622cf4e8aab`. Le fichier a été décodé et les octets d’origine n’ont pas été modifiés.

L’ancien code attribuait le portrait au « Dr. Abdelkerim Mahamat Itno ». L’ONAMA et Alwihda ont cité le général Youssouf Sallime Mahamat comme directeur général lors de la rencontre du 3 décembre 2025. Cela établit l’attribution dans ces articles à cette date. Les sources consultées ne documentent pas la personne représentée dans le JPEG ni une nomination toujours en vigueur. Il manque un acte ou une confirmation actuelle, une provenance traçable du portrait et l’autorisation du détenteur des droits pour sa diffusion.

- [Compte rendu ONAMA du séminaire de décembre 2025](https://www.onama.td/protection-sociale-des-fds-un-seminaire-pour-repenser-la-retraite-des-militaires/)
- [Compte rendu Alwihda du 3 décembre 2025](https://www.alwihdainfo.com/tchad-a-n-djamena-ouverture-d-un-seminaire-sur-la-protection-sociale-des-forces-de-defense-et-de-securite-a146368.html)

Le JPEG et l’ancienne citation sont absents des ressources du candidat. La maquette privée est destinée au propriétaire pour revue et ne présente aucune identité comme confirmée.

## Contrôles et réserves

- Installation par verrouillage, build sans `DATABASE_URL`, TypeScript et ESLint réussis. Audit npm de production sans entrée.
- Chromium a vérifié les huit largeurs demandées en français et en arabe, le menu et le retour du focus, l’ouverture au clavier des fiches, le mode sombre, le calcul local, le lien PROSPERA et le suivi suspendu. Axe-core n’a relevé aucune violation sur l’accueil et le suivi pour les règles sélectionnées dans les états testés.
- Les réponses de collecte, simulation serveur, partage et suivi restent `503` et `no-store`. Les lectures de calendrier et d’annonces par API restent à `503`. La sonde retourne le mode démonstration. Le logo est identique. L’ancien chemin du portrait retourne `404`. Les directives `noindex, nofollow` et les en-têtes P5 restent en place.
- Le LCP observé localement en émulant un écran de 390 px est un repère sans réseau distant ni limitation CPU. Les Core Web Vitals de terrain, Safari/iOS et un lecteur d’écran réel nécessitent une recette distincte. La terminologie administrative et militaire en arabe doit être relue.
- Restent soumis à la CARMI le nom et le portrait de la direction, la tutelle, les contacts, banques, agences, dates de paiement, conditions de prestation, règles du simulateur, textes FR/AR et tout traitement de données ou accès aux dossiers.

## Revue et retour arrière

P5 reste en ligne. Sa référence de production est `dpl_4RdUTCWttefEQvPUthM1quNQp7cZ`, commit `6ce6e1b971a7e771f43cf5bc32602abd86ebb38b`. La recommandation concerne la revue du candidat commercial. Toute promotion sur le domaine public attend l’autorisation explicite du propriétaire. En cas de régression après une future promotion, réaffecter le domaine au déploiement P5 dans Vercel, puis revérifier les statuts sans authentification, le bandeau, `noindex` et les routes suspendues.
