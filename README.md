# MtpTest

This project was generated using [Nx](https://nx.dev).

## Démarrage des webservices du backend

La partie backend a été fait avec le framework NestJS

`npm run start:api`

La documentation des webservices est disponible à l'adresse suivante:

`http://localhost:3333/api/docs`

## Démarrage du client web

Le frontend de l'application é été fait avec Angular

`npm run start:client`

### Librairies principales:

- ApexChart pour la librairie graphique
- AgGrid pour le tableau éditable

## Exécution des tests

- Tests unitaires: `npm run test:apps`
- Tests e2e: `npm run e2e`
- Tous les tests: `npm run test`

Les tests e2e sont dans le dossiers `apps/mtp-test-e2e/src/integration`.

NB: Veuillez lancer le backend avant de lancer les tests de bout en bout (e2e)
