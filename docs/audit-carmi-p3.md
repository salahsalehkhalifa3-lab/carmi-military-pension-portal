# CARMI — Consolidation P3

**Décision institutionnelle : NO-GO.** Le lot prépare une recette technique privée. La validation des informations, du processus de traitement, de la sécurité opérationnelle et du socle de préproduction appartient à la CARMI. Voir la [fiche de validation](validation-institutionnelle-carmi.md).

## Git et dépendances

- Point de départ `32c5a9a`. Copie de travail isolée, propre au départ et synchronisée avec le HEAD distant.
- Les 487 fichiers générés ont été sauvegardés hors du dépôt dans une archive comparée à la source. SHA-256 de l’archive : `47eb3ca17346103608c84abb850df7abc3479502fac4841154b60b930f61c46f`. Les fichiers locaux d’origine ont aussi été déplacés hors de la copie isolée pour garantir un build neuf. Le commit retire `.next` de l’index Git et ignore `/.next/` et `*.tsbuildinfo`. Le logo conserve son blob `90e69df9d7b5d119bea701c6973b3871e496e700`.
- Pour un autre clone utilisé par l’équipe, copier les sorties locales utiles avant de récupérer la branche. Git peut retirer les anciennes copies suivies lors du passage au nouveau commit. Les versions historiques restent accessibles dans les anciens commits. Un build neuf peut régénérer `next-env.d.ts` en fonction du mode utilisé.
- PostCSS de développement passe de 8.5.8 à 8.5.33 et les résolutions transitives compatibles sont mises à jour. L’audit complet est passé de 4 entrées élevées et 11 modérées à 4 modérées. Les paquets corrigés incluent les chaînes PostCSS, brace-expansion, js-yaml, minimatch et Zod.
- Les quatre entrées restantes correspondent à une chaîne unique, `drizzle-kit` → `@esbuild-kit/esm-loader` → `@esbuild-kit/core-utils` → `esbuild@0.18.20`. L’[avis esbuild](https://github.com/advisories/GHSA-67mh-4wv8-2f99) concerne l’utilisation du serveur de développement d’esbuild. Cette chaîne est classée en développement et n’est pas présente dans l’audit de production. La recette appelle Drizzle Kit pour appliquer le schéma à une base locale isolée et ne lance pas le serveur d’esbuild. npm propose un changement incompatible de Drizzle Kit. Cette voie est écartée pour le lot P3. Garder cet outillage local et isolé jusqu’à une mise à niveau vérifiée.

## Audit des formulaires

| Route | Constat | Risque à traiter avant exposition |
|---|---|---|
| `POST /api/contact` | Collecte nom, matricule, téléphone, région, objet et éventuel texte libre. JSON plafonné à 16 Kio, validation serveur et reçu aléatoire. Réponse minimale et `no-store`. | Les données sont persistées. La route existante peut traiter une demande sans authentification si une base configurée la reçoit. Le code ne fournit ni quota distribué, ni dédoublonnage durable, ni politique de purge, ni espace agents avec habilitations. |
| `POST /api/estimate` | Contrôle grade, unité, durée, taux d’invalidité et situation familiale. La route ignore tout matricule transmis et la simulation locale peut se calculer sans enregistrement. | Écritures automatisables et collecte inutile si la persistance n’a pas de finalité approuvée. Le schéma contient un ancien champ matricule, vide par défaut pour les nouvelles écritures de cette route. Le contenu historique éventuel reste à vérifier en environnement autorisé. |
| `POST /api/verify-matricule` | Retourne `503` avec `no-store` sans consultation de dossier. Le formulaire de suivi est absent. | Garder le suivi suspendu jusqu’à une authentification et une autorisation de consultation validées par la CARMI. Un matricule ou un reçu seul ne doit pas donner accès à un dossier. |

Les contrôles de cette phase portent sur le code et sur des données synthétiques. Les journaux d’hébergement, les sauvegardes, le chiffrement et les accès de la base cible restent à vérifier. `no-store` concerne le cache HTTP et ne règle pas la conservation en base ou dans les journaux.

### Proposition de durcissement à approuver

1. **Limiter la collecte.** Définir les finalités et les champs strictement requis. Privilégier le calcul local sans persistance pour le simulateur tant que l’enregistrement n’a pas de finalité approuvée. Informer l’usager des destinataires, des durées et des voies d’exercice de ses droits. Limiter le texte libre et éviter la demande de justificatifs par des canaux non validés.
2. **Fermer les écritures avant ouverture.** Ajouter un contrôle serveur désactivé par défaut, indépendant de l’affichage du formulaire. En recette, limiter les accès aux personnes habilitées et utiliser exclusivement une base dédiée et des scénarios synthétiques. Décider du périmètre d’ouverture par route lors de la validation.
3. **Limiter l’abus à la passerelle ou via un stockage partagé.** Appliquer des budgets distincts par route et un plafond global avec compteurs atomiques inter-instances. Prendre l’origine réseau uniquement depuis un proxy de confiance. Éviter les identifiants bruts dans les clés et tenir compte des réseaux partagés. Renvoyer `429` et `Retry-After`. Prévoir un refus temporaire des écritures si le limiteur est indisponible. Valider les seuils sur des volumes autorisés et tester les requêtes concurrentes, les relances et le rétablissement.
4. **Minimiser et cloisonner.** Compte de service à privilèges minimaux. Habilitations des agents par fonction et région, défaut de refus, journal d’accès sans données personnelles, revue des droits et révocation. Limiter les exports, protéger les connexions et vérifier les contrôles de chiffrement et de sauvegarde. Concevoir le dédoublonnage avec un identifiant de dépôt et des reprises idempotentes.
5. **Décider des durées par finalité.** Pour les demandes, préciser le point de départ après clôture, l’archivage et la gestion des recours. Pour les simulations, privilégier l’absence de conservation ou une durée justifiée. Fixer séparément la durée des journaux techniques, des clés anti-abus et des sauvegardes. Programmer la purge après approbation et vérifier les exceptions, les traces de purge et les restaurations.

## Préparer une démonstration privée

1. Cloner la branche de correction dans un dossier dédié, contrôler le commit et lancer `npm ci`. Utiliser Node.js 24 pour reproduire la recette. Écarter toute URL de base réelle.
2. Pour la version sans données, utiliser une URL de base volontairement indisponible sur un port local fermé, par exemple `postgresql://audit:audit@127.0.0.1:1/audit`. Exécuter `npm run build`, `npm run typecheck`, `npm run lint`, puis `npm run start -- --hostname 127.0.0.1 --port 3133` avec la même variable `DATABASE_URL`. Sur PowerShell, définir la variable pour la session avec `$env:DATABASE_URL = "postgresql://audit:audit@127.0.0.1:1/audit"`.
3. Pour montrer les écritures, créer une base locale jetable, limitée à l’interface de boucle locale, appliquer le schéma de cette branche et charger un jeu de données clairement synthétique. Démarrer le serveur avec `--hostname 127.0.0.1`. Vérifier la cible avant toute commande Drizzle. Présenter l’écran par partage privé avec la mention « démo technique ». Une base avec des régions affiche le formulaire existant. N’utiliser que des entrées fictives pour les essais.
4. Présenter l’accueil, le calendrier, les agences, la FAQ, le simulateur, l’état de suivi suspendu et les erreurs de service. Le logo et la navigation font partie du contrôle d’ouverture. Ne pas déclencher de messages vers les destinataires externes. Arrêter le serveur et isoler les captures et journaux de test à la fin.

## Recette exécutée

| Périmètre | Résultat et limites |
|---|---|
| Reconstruction | `npm ci`, `npm run build`, `npm run typecheck`, `npm run lint`, contrôle de l’index et du diff réussis. Aucun script `test` déclaré dans le projet. |
| Dépendances de production | `npm audit --omit=dev` renvoie zéro entrée. |
| PostgreSQL local synthétique | Base vide, absence de peuplement implicite, annonces, calendrier filtré, demande valide et invalide, reçu, simulation et écritures vérifiées. Douze partages concurrents comptabilisés. Variante PostgreSQL indisponible avec erreurs et absence de faux reçu éprouvée. Schéma appliqué exclusivement à une base jetable. |
| Chromium | Logo décodé et en-tête sans débordement. Bascule à 1 280 px. Accueil de 320 à 1 440 px, douze destinations internes, suivi, 404, menu, fiche de prestation, FAQ, partage et clavier vérifiés. Le focus revient à l’élément déclencheur à la fermeture. |
| Accessibilité | Un premier scan axe-core signalait 28 nœuds de contraste à l’accueil et 12 au suivi, plus un nom de lien incohérent sur chaque page. Les contrastes et le lien d’accueil ont été corrigés. Le scan de retour à 390 et 1 440 px, à l’accueil et au suivi, sans base, ne retourne aucune violation dans les règles automatisées sélectionnées. L’arbre d’accessibilité Chromium a été consulté. |
| Arabe | Bascule `lang=ar` et `dir=rtl`, navigation principale, bandeau et principaux appels d’accueil vérifiés. Le sous-titre de marque, le pied de page, le calendrier, les agences, le suivi, les prestations, la FAQ, le simulateur, les formulaires et leurs erreurs restent partiellement ou entièrement en français. Les libellés éditoriaux et métier en arabe requièrent validation. |
| Safari/iOS et lecteur d’écran | Safari/iOS et un lecteur d’écran réel restent à tester. L’exécutable Playwright WebKit a été téléchargé, mais son lancement Linux est bloqué par des bibliothèques système manquantes. Les vérifications Chromium et axe ne couvrent pas le rendu Safari ni les annonces vocales. |

**Conditions de présentation.** Disposer d’un contenu signé, d’une recette sur le socle PostgreSQL cible, de règles approuvées pour l’accès aux données et leur conservation, et d’une revue sur Safari/iOS et avec un lecteur d’écran. Ne pas ouvrir le dépôt des demandes au public avant ces décisions. La démonstration technique peut être présentée en privé selon la procédure ci-dessus, avec la mention « simulation » et des données exclusivement fictives.
