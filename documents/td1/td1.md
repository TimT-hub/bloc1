## [Méthodes GET et POST](https://developer.mozilla.org/fr/docs/Web/HTTP/Methods) 

La [méthode GET](https://developer.mozilla.org/fr/docs/Web/HTTP/Methods/GET) demande une représentation de la ressource spécifiée. Les requêtes GET doivent uniquement être utilisées afin de récupérer des données.


La [méthode](https://developer.mozilla.org/fr/docs/Web/HTTP/Methods/POST) POST est utilisée pour envoyer une entité vers la ressource indiquée. Cela entraîne généralement un changement d'état ou des effets de bord sur le serveur.



## Comparaison Méthode GET et POST

| Méthode HTTP | La requête a un corps | Une réponse inclut un corps | Sûre | Idempotente | Peut être mise en cache | Autorisé dans les formulaires HTML|
|------------------|----------|----------|----------|-----------|----------------|----------------|
| GET             | Non      | Oui      | Oui      | Oui | Oui | Oui |
| POST          | Oui    | Oui | Non | Non | Seulement si une information de péremption est incluse | Oui |


## Extensible

HTTP est un protocole extensible qui a évolué au cours du temps. C'est un protocole de la couche application dont les données transitent via TCP ou à travers une connexion TCP chiffrée avec TLS. En théorie, tout protocole de transport fiable pourrait être utilisé.

## Sans état

 Il s'agit aussi d'un protocole sans état, ce qui signifie que le serveur ne conserve aucune donnée (on parle d'état) entre deux requêtes. Ni le client ni le navigateur ne peuvent conserver d'informations entre différentes requêtes sur les pages Web.