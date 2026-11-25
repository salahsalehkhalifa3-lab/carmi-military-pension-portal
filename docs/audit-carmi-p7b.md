# CARMI P7-B · Consolidation et limites

Le candidat dérive du commit P7 `4a41538`. P6 reste le déploiement de production.

## Routes

- `/` Accueil et orientation
- Institution · `/institution`, `/historique`, `/missions`, `/commandement`, `/organisation`, `/cadre-juridique`
- Services · `/prestations`, `/demarches`, `/pensionne`, `/ayants-droit`, `/suivi`, `/simulateur`
- Informations pratiques · `/calendrier`, `/agences`, `/ressources`, `/actualites`, `/contact`

Chaque rubrique a son fichier de route et ses métadonnées. Les composants de navigation, de titres et de contenu structurent la présentation. Les trois groupes de navigation sont bilingues. Les dix URL de P7 restent disponibles.

## Sources institutionnelles

La loi n°14/PCMT/2022 documente la création, la tutelle et le siège aux articles 1–2, les missions et ressources aux articles 3–4, la reprise des actifs et passifs à l’article 5, et les organes et le renvoi au décret aux articles 6–7. Les passages du portail portent la référence d’article et un lien vers le [Journal officiel](https://journalofficiel.td/storage/v1/object/public/archiva/journaux/2022/11/1764340966371-9irgp08sgif.pdf). Les formulations arabes sont des traductions éditoriales à relire.

La situation juridique actuelle, le décret d’organisation applicable, les règles du Code des pensions militaires, les droits et les pièces à produire, les délais, les contacts, les banques et les calendriers réels restent à confirmer. Les scénarios fictifs sont signalés dans leur interface.

## Photo et direction

Le fichier historique est le blob `3a1881fa20a7c4ef929d33e8960f19a317f8feed` au commit `828746a`. Le [compte rendu ONAMA du 3 décembre 2025](https://www.onama.td/protection-sociale-des-fds-un-seminaire-pour-repenser-la-retraite-des-militaires/) nomme le général Youssouf Sallime Mahamat à cette date. Cette mention ne relie pas le JPEG à son sujet et ne confirme pas la nomination actuelle. Il manque un acte ou une confirmation actuelle, une provenance vérifiable du fichier et le droit de diffusion. Maintien de la Direction générale neutre.

## Audit des hypothèses héritées

| Hypothèse historique | Traitement |
|---|---|
| Montants, seuil de 15 ans, coefficients et taux de réversion | Formule P7 maintenue à l’identique, isolée dans `demo-pension.ts` et visible uniquement comme calcul fictif |
| Grades, unités et taux d’invalidité | Préconfigurations fictives du simulateur. Aucun effet sur un droit ni sur une demande |
| Pièces, délais, contrôle de vie et conditions de dépôt | Suppression des listes et FAQ héritées non vérifiées. Les démarches sont des scénarios sans dépôt |
| Banques, coordonnées et calendriers | Aucune relation commerciale ou adresse affirmée. Calendrier étiqueté fictif |

## Périmètre de revue

La recherche couvre les titres, descriptions et paragraphes détaillés du catalogue éditorial bilingue et affiche les extraits. Elle ne fouille pas le PDF externe ni les états interactifs calculés. Le suivi fictif se limite à trois étapes locales. Le suivi réel et les API sensibles restent suspendus. La démo n’intègre ni authentification, ni espace administrateur connecté. Les dates, identités et décisions des scénarios ne proviennent d’aucune base.

## Recette

- Build sans `DATABASE_URL`, TypeScript et ESLint passent.
- Chromium a vérifié 18 pages dans les deux langues à six largeurs de 320 à 1 920 px. Recette de navigation au clavier, résultats de recherche et état vide, démarches, scénario ayant droit, calendrier filtré, six fiches et simulateur.
- Axe-core ne relève aucune violation dans les états testés de l’accueil, des ressources, de l’espace pensionné et du simulateur. Safari/iOS, lecteur d’écran et conformité WCAG complète restent à qualifier.
- Les six API testées retournent `503` avec `no-store`. Les 18 pages conservent `noindex, nofollow`. Le chemin du portrait et une page inconnue renvoient `404`.
