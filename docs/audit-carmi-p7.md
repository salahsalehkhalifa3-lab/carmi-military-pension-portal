# CARMI P7 · Portail multipage et sources

Le point de départ est le commit P6 `86fbac0`. La démonstration commerciale conserve le logo reçu, le bandeau PROSPERA et le bloc Direction générale neutre. Les dates et données de parcours restent fictives.

## Benchmark international · 25 novembre 2026

| Référence | Modèle observé | Application CARMI |
|---|---|---|
| [U.S. Department of Veterans Affairs](https://www.va.gov/disability/) | Entrées distinctes pour comprendre une prestation ou l’administrer | Fiches de prestations séparées du suivi suspendu |
| [DFAS Military Retirement](https://www.dfas.mil/RetiredMilitary/about/contact-who/) | Distinction entre paiement, interlocuteur et type de droit | Calendrier et guichets séparés des conditions et prestations |
| [Service des retraites de l’État](https://retraitesdeletat.gouv.fr/actif/les-specificites-des-militaires/louverture-des-droits-retraite-et-lage-legal-de-depart) | Page spécialisée et navigation par thème | Rubrique institutionnelle et simulateur distincts. Les règles françaises ne sont pas importées. |
| [L’Assurance retraite](https://www.lassuranceretraite.fr/portail-info/portail-info/home/actif/age-depart/demarches-retraite.html) | Présentation par étapes de préparation | Fiches interactives et orientation sans dépôt réel |
| [GOV.UK Service Standard](https://www.gov.uk/service-manual/service-standard/point-4-make-the-service-simple-to-use) | Simplicité et cohérence du parcours | Pages à objectif unique, fil d’Ariane et libellés explicites |
| [Services Australia](https://www.servicesaustralia.gov.au/how-to-claim-age-pension?context=22526) | Étapes claires et aide associée aux démarches | FAQ et ressources regroupées sur une page dédiée |
| [LifeSG, GovTech Singapore](https://www.tech.gov.sg/products-and-services/for-citizens/digital-services/lifesg/) | Entrées par besoin et situation | Accueil d’orientation et rubriques adaptées aux pensionnés et ayants droit |
| [U.ae, services de protection sociale](https://u.ae/en/information-and-services/social-affairs/eservices) | Catalogue de services relié à l’information publique | Accès direct aux rubriques et à une source institutionnelle identifiable |
| [IremboGov, Rwanda](https://support.irembo.gov.rw/en/support/solutions/articles/47001155415-how-to-apply-for-a-visa-on-irembogov) | Aide procédurale en langage orienté action | Sommaire filtrable et exemples d’étapes courts |

L’expérience mobile conserve le menu P6 et privilégie des pages courtes. La recherche filtre uniquement les titres et descriptions des rubriques, dans le navigateur, en français et en arabe. Les services sensibles restent suspendus sur le serveur et le site conserve `noindex, nofollow`.

## Sources CARMI et limites

La [loi n°14/PCMT/2022](https://journalofficiel.td/storage/v1/object/public/archiva/journaux/2022/11/1764340966371-9irgp08sgif.pdf) est la référence utilisée. Les articles 1 et 2 établissent la création, le statut public administratif, l’autonomie, le siège à N’Djaména et la tutelle technique par le ministère chargé des Finances. L’article 3 énumère notamment l’affiliation, la liquidation des pensions de retraite, d’invalidité et de réversion, et la gestion des risques professionnels militaires. L’article 5 traite de la reprise des actifs et passifs de structures antérieures pour la gestion des pensions militaires. Les articles 6 et 7 définissent les organes et renvoient à un décret pour leur fonctionnement.

Un [compte rendu ONAMA du 3 décembre 2025](https://www.onama.td/protection-sociale-des-fds-un-seminaire-pour-repenser-la-retraite-des-militaires/) cite le général Youssouf Sallime Mahamat à cette date. Une confirmation actuelle de la nomination, le décret d’organisation applicable, les barèmes et procédures, les contacts confirmés et l’autorisation du portrait restent à obtenir. Aucun nom de titulaire actuel, portrait, code de pension non vérifié, calendrier réel ou réseau bancaire n’est présenté dans le candidat. Les traductions administratives sont proposées pour relecture.

## Prévisualisation

La branche P7 est destinée à une prévisualisation. L’adresse publique P6 conserve son déploiement `dpl_8EjAA6FuGfPSRKvC69m5cjZTn3eC` tant qu’une promotion distincte n’a pas été approuvée.

## Recette technique

- Build sans `DATABASE_URL`, TypeScript et ESLint réussis.
- Chromium a couvert dix pages, sept largeurs de 320 à 1 920 px et les deux langues, soit 140 vérifications de mise en page. Il a vérifié les titres uniques, le menu clavier, les six fiches, le simulateur, la recherche locale et son état sans résultat.
- Les six API suspendues renvoient `503` avec `no-store`. L’ancien chemin du portrait et une rubrique inconnue renvoient `404`. Les dix pages servent `noindex, nofollow`. La conformité WCAG 2.2 AA complète reste à qualifier avec une recette manuelle et des outils d’assistance.
