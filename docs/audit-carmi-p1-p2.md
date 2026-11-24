# CARMI · Audit P1/P2

**Décision au 24 novembre 2026 — NO-GO pour une présentation institutionnelle.**
La branche de travail est `fix/carmi-complete-audit`. La revue a commencé au commit P0 `5799dd1`.
La validation a utilisé une instance PostgreSQL locale et des données synthétiques.
Le portail public, Vercel et les bases de production sont hors du périmètre d’exécution.

## Corrections et causes

| Zone | Anomalie constatée | Correction |
|---|---|---|
| ESLint | Deux mises à jour synchrones de l’état dans des effets et trois apostrophes JSX non échappées | Les préférences sont lues via une souscription à l’état du navigateur. Le retour de simulation s’efface à la modification des paramètres. Les trois apostrophes ont été échappées. |
| Suivi | Le matricule seul permettait de consulter des données de dossier. Un calcul sur le matricule inventait un stade, même pour un dossier absent. Une image de la page était manquante. | Le formulaire a été retiré et l’API répond 503 sans accès aux dossiers. La page donne les voies de contact existantes et un accès au calendrier. L’image absente a été retirée. |
| Formulaire | La route acceptait des types et longueurs incompatibles avec le schéma. Le reçu utilisait un identifiant faiblement aléatoire. | Validation des types, longueurs et référentiels. JSON limité à 16 Kio. Reçu aléatoire de 72 bits avec gestion des collisions, réponse minimale et sans stockage en cache. Le formulaire affiche son indisponibilité lorsque la région ne peut être sélectionnée. |
| Simulateur | L’interface confirmait l’enregistrement même sur refus de la base. L’échec de calcul d’éligibilité rendait certaines informations peu lisibles. | Le calcul indicatif reste en local. Un reçu apparaît après confirmation du serveur. Les paramètres sont contrôlés, les champs sont bloqués pendant l’envoi et les valeurs gardent un contraste lisible en cas d’inéligibilité. |
| Calendrier et guichets | Les ancres attendues par la navigation étaient absentes. Le calendrier ne montrait que les régions et le composant des guichets ignorait ses données. | Ancres restaurées. Les dates et les guichets proviennent des lignes réellement présentes. Des états vides sont affichés. L’image de paie n’est plus préchargée depuis le bas de page. |
| Données PostgreSQL | Les lectures exécutaient l’amorçage de données de démonstration. Une panne pouvait donner une réponse vide avec un statut 200 et être mise en cache. | Les chemins d’exécution courants ne déclenchent plus l’amorçage et n’affichent plus de valeurs de période ou de statistiques de substitution. Les API de lecture indiquent une panne par 503 et `no-store`. La base locale a été initialisée à partir du schéma. |
| Partage et clavier | Le lien copié pouvait être mal formé ou pointer vers la page d’accueil au lieu du contenu. Les incréments simultanés pouvaient s’écraser. Les fenêtres laissaient le focus sortir. | URL de partage résolue sur l’origine courante et ancres ciblées. Validation des événements et compteur SQL atomique dans une transaction. Fermeture par Échap, confinement du focus et retour au bouton d’origine pour le menu et la fiche de prestation. |
| Responsive et contraste | Les réseaux du pied de page débordaient à 1 024 px. Plusieurs petits libellés dorés et l’indicateur de focus étaient peu contrastés sur fond clair. | La grille s’adapte à la largeur du conteneur. Les libellés se replient et les couleurs de texte et de focus tiennent compte du fond. |
| Dépendances | L’audit npm de production relevait quatre paquets vulnérables, dont Next.js au niveau critique. | Next.js et sa configuration ESLint passent de 16.2.6 à 16.4.6. Le verrouillage transitif est actualisé et le nouvel audit npm de production ne relève plus de vulnérabilité. |
| Présentation institutionnelle | Le nom et le portrait attribués à la direction ne sont pas corroborés par les sources consultées. La mention de tutelle dans l’interface est incompatible avec le texte fondateur consulté. | Retrait de l’attribution du portrait, du nom, de la citation et de la mention de tutelle. La présentation des missions reprend les articles 1 à 3 de la loi de création. Les fichiers image d’origine, dont le logo CARMI, restent dans Git. |

Sources institutionnelles consultées

- [Journal officiel du Tchad, loi n°14/PCMT/2022, articles 1 à 3](https://journalofficiel.td/storage/v1/object/public/archiva/journaux/2022/11/1764340966371-9irgp08sgif.pdf)
- [ONAMA, compte rendu du séminaire de la CARMI du 3 décembre 2025](https://www.onama.td/protection-sociale-des-fds-un-seminaire-pour-repenser-la-retraite-des-militaires/). Le compte rendu attribue la fonction à une autre personne à cette date. Un acte de nomination actuel et un portrait approuvé restent à obtenir.

## Vérifications techniques et fonctionnelles

- `npm run lint`, `npm run typecheck`, `npm run build` et `git diff --check` passent sur le lot final. `npm audit --omit=dev` remonte zéro vulnérabilité dans l’arbre de production après correction. [Historique officiel Next.js](https://nextjs-changelog.vercel.app/).
- PostgreSQL natif local, distribution embarquée 19 préversion. Schéma Drizzle appliqué sur une base jetable et entrées synthétiques. Lecture sur base vide, filtre régional, annonce, dépôt avec reçu, simulation persistée et contrôle des lignes écrites. Douze partages concurrents d’une annonce ont donné douze incréments distincts. Le partage de prestation a été enregistré séparément.
- Chromium sur l’accueil, le suivi et la page 404 à des largeurs de 320, 390, 768, 1 024, 1 279, 1 280 et 1 440 px. Douze destinations internes, trois images rendues, types d’icônes, formulaire, simulateur, FAQ, annonce, partage par copie, navigation au clavier, thème et bascule RTL contrôlés. Les essais de largeur portent sur l’accueil.
- Les comparatifs visuels couvrent le suivi, le calendrier, la direction générale et le pied de page. L’image de paie s’affiche via l’optimiseur Next.js. Son fichier source est encodé en PNG malgré l’extension .jpg. La normalisation de l’URL publique est à prévoir avec la gestion de compatibilité.
- Le refus du suivi par matricule a été contrôlé avec et sans base. Les réponses SQL indisponible ont été vérifiées en utilisant une seconde instance HTTP dirigée vers un port local fermé.
- Le simulateur n’est pas un calcul réglementaire validé. L’éligibilité de l’interface, le reçu d’enregistrement et les services PostgreSQL testés attestent du comportement du logiciel.
- L’audit complet, dépendances de développement incluses, signale encore 15 paquets concernés (4 niveaux élevés, 11 modérés). Le lot évite une migration large de l’outillage. La revue du verrouillage de développement reste ouverte.
- `package.json` ne déclare pas de script `test`. Aucune intervention sur une base distante ni envoi réel de message n’a eu lieu.

## Dossier .next suivi par Git

Le commit de départ suit **487 fichiers**, totalisant **179 185 519 octets**.
On y trouve notamment des bundles client/serveur, des fichiers de développement, des types générés, des traces et des caches.
Treize fichiers générés contiennent encore la référence à l’ancien logo PNG.
Les artefacts locaux d’origine ont été déplacés dans une copie de travail séparée pour reconstruire le portail.
Aucun retrait de l’index ni effacement d’artefacts locaux d’origine n’a été appliqué dans ce lot.

Opération proposée sur une copie de travail dédiée après validation

1. Vérifier que la branche actuelle est bien la branche de correction et que l’index est propre. Copier les fichiers locaux utiles de `.next` hors du dossier du dépôt et vérifier que la copie est lisible. Chaque personne qui a besoin de ses artefacts locaux effectue cette copie avant de récupérer le commit de nettoyage.
2. Ajouter `/.next/` et `*.tsbuildinfo` à `.gitignore`.
3. Exécuter `git rm -r --cached -- .next`. Cette commande retire les entrées de l’index Git et conserve les fichiers sur disque dans la copie où elle est exécutée. Vérifier la copie avant toute mise à jour d’un autre clone.
4. Vérifier que `git ls-files -- .next` est vide, que `git check-ignore -v -- .next/BUILD_ID` identifie la règle d’exclusion et que `public/image/logocarmi.jpg` est toujours suivi. Relancer lint, TypeScript et un build neuf sur une copie isolée.
5. Commiter le retrait séparément sur la branche de correction. Les objets historiques restent disponibles dans les anciens commits. Une réécriture d’historique serait une opération distincte.

## Conditions de levée du NO-GO

1. **Contenu institutionnel.** Faire approuver la direction et son portrait, la tutelle actuelle, les coordonnées, les réseaux sociaux, les horaires, les annonces, le calendrier, les informations de bancarisation, les règles de calcul et les FAQ. Les destinations internes ont fait l’objet de contrôles navigateur. L’appartenance des comptes externes reste à confirmer.
2. **Protection des données.** Faire valider la collecte de matricule et téléphone, les règles de conservation, les habilitations côté agents et la protection anti-abus à la passerelle. L’API de demande a une limite de taille et une validation serveur. La limitation distribuée de la fréquence et l’exploitation du dossier par les agents restent à valider. Le suivi reste suspendu jusqu’à la mise en place d’un contrôle d’accès validé.
3. **Recette d’intégration.** Tester la version PostgreSQL et le schéma retenus, les migrations, les données éditoriales approuvées, la supervision et les sauvegardes en préproduction autorisée. Des données de démonstration déjà présentes en base doivent être recensées et retirées selon une procédure approuvée.
4. **Chaîne de compilation.** Traiter les avis qui subsistent dans les dépendances de développement. Effectuer le nettoyage séparé de `.next` et construire depuis les sources.
5. **Recette de présentation.** Vérifier Safari/iOS, un appareil mobile réel, les lecteurs d’écran et les parcours en arabe. Le changement de langue et l’orientation RTL ont été examinés dans Chromium. Plusieurs blocs métier sont encore en français. Aucun objectif chiffré de performance en production n’a été mesuré.
