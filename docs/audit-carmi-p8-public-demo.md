# CARMI P8 · Audit de la démonstration commerciale publique

25 novembre 2026 · PROSPERA Tchad

## Périmètre et sécurité

Le candidat dérive de P7-E, commit `5aa10b31317129d559394c2304cdb0a025cba7d2`. La branche P8 exclut la route d’administration, son composant, la route et le composant du portrait historique ainsi que les lecteurs de configuration privée. La page Direction générale conserve l’emplacement neutre en français et en arabe. Les deux URL privées sont des 404 dans le build public, indépendamment des variables d’environnement. P7-E conserve sa configuration privée. Le logo public CARMI est inchangé.

Le bandeau identifie la démonstration commerciale et la validation attendue. Le pied de page attribue la proposition à PROSPERA Tchad. Les parcours publics restent fictifs. Le code applicatif public ne lit pas la configuration de base de données du projet Vercel. Les API suspendues restent sans traitement ni écriture.

## Recette du build local

Installation reproductible, TypeScript, ESLint et build de production exécutés. Audit npm des dépendances de production : 0 vulnérabilité signalée. Les sept routes API ont été contrôlées sur sept méthodes chacune, avec les statuts 200, 204, 405 ou 503 attendus, `Cache-Control: no-store` et `X-Robots-Tag: noindex, nofollow`.

Mesure Lighthouse en laboratoire sur le build de production local, Chromium, profil mobile simulé, un passage par route.

| Route | LCP | CLS | TBT |
|---|---:|---:|---:|
| Accueil | 760 ms | 0 | 63 ms |
| Espace pensionné | 756 ms | 0 | 11 ms |

Ces mesures ne représentent pas les données terrain. L’accueil et Direction générale sont générés statiquement après retrait de la logique privée.

## Publication et repli

Créer un candidat Vercel protégé et vérifier les 404 sensibles avant affectation du domaine principal. Après affectation, vérifier anonymement le domaine, les routes et l’accès séparé à P7-E. Le déploiement P6 de repli est `dpl_8EjAA6FuGfPSRKvC69m5cjZTn3eC`. Si un contrôle critique du domaine échoue, rétablir immédiatement P6 et vérifier l’affectation. La branche `main` n’entre pas dans cette opération.

Les droits de diffusion du portrait, les données institutionnelles et les procédures réelles restent soumis à validation de la CARMI. Cette démonstration ne déclenche aucun traitement administratif.

## Résultats finaux du 25 novembre 2026

- Déploiement de production `dpl_9PbQbsZBQ8qtGkXKxoctBPAv3J9z`, commit applicatif `1e76c512cdc2b392ca95fa627a711bcee7380265`, en état READY. Vercel a confirmé que le domaine principal pointe vers cet identifiant. La prévisualisation candidate est `dpl_Gfhdra6jaZakk2DYSbryjzbTn1VZ`.
- Consultation sans connexion sur le domaine principal. Le navigateur a affiché l’accueil multipage P8, son logo et le nouveau bandeau, puis a basculé vers l’arabe. La 404 bilingue a été observée sur l’administration et le JPEG.
- Statuts vérifiés sur le domaine principal : 200 pour l’accueil, institution, direction générale, pensionné, ayants droit, orientation et recherche. 404 pour l’administration et le JPEG. Santé 200. Annonces et paiements 503 avec `no-store`. Les quatre services suspendus en POST ont été validés dans la matrice locale du même commit.
- P7-E : la direction générale a répondu 200 en accès autorisé avec la légende du portrait. Sans session, l’accueil et le JPEG ont exigé la connexion Vercel. Le portrait est resté limité aux prévisualisations privées existantes.
- Chromium et Firefox : 20 routes publiques et deux cas 404, français/arabe, thèmes clair/sombre, huit largeurs de 320 à 1920 px. Aucun débordement, erreur JavaScript, lien interne hors matrice ou constat axe-core dans le périmètre exécuté. Les suites de navigation et des bénéficiaires ont passé 16 combinaisons langue/largeur dans chacun des deux moteurs. WebKit n’a pas pu démarrer avec les bibliothèques système disponibles. Aucun lecteur d’écran n’a été utilisé.
- Le lien PROSPERA a été ouvert et a abouti à https://www.prosperachad.site/. 
- Contrôle d’artefacts : 410 fichiers statiques et serveur locaux inspectés sans occurrence du portrait ou de son encodage, des variables privées ou du marqueur administratif contrôlé. Aucune signature usuelle de secret dans le build contrôlé. Le déclenchement de la recherche dans Git concernait deux URI d’exemple héritées, en boucle locale sur le port 1. Le logo statique est identique à celui de P7-E.
- `main` reste à `828746a085bd96b1b568afb5531f4244ce66366a`. L’affectation automatique des domaines a été désactivée au niveau du projet pour permettre une recette de production avant promotion. Les prochaines promotions nécessitent une affectation explicite. Vercel Authentication est restée activée.
- Capture de l’accueil en direct sur ordinateur dans la vérification navigateur. Les autres captures, dont le mobile RTL, proviennent du build local du commit publié.

**Décisions** : GO démonstration commerciale publique. GO présentation privée P7-E avec accès Vercel autorisé. NO-GO mise en service administrative réelle jusqu’aux validations de la CARMI.
