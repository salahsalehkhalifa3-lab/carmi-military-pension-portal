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
