## [Méthodes GET et POST](https://developer.mozilla.org/fr/docs/Web/HTTP/Methods) 

La [méthode GET](https://developer.mozilla.org/fr/docs/Web/HTTP/Methods/GET) demande une représentation de la ressource spécifiée. Les requêtes GET doivent uniquement être utilisées afin de récupérer des données.


La [méthode POST](https://developer.mozilla.org/fr/docs/Web/HTTP/Methods/POST) est utilisée pour envoyer une entité vers la ressource indiquée. Cela entraîne généralement un changement d'état ou des effets de bord sur le serveur.



## Comparaison Méthode GET et POST

| Méthode HTTP | La requête a un corps | Une réponse inclut un corps | Sûre | Idempotente | Peut être mise en cache | Autorisé dans les formulaires HTML|
|------------------|----------|----------|----------|-----------|----------------|----------------|
| GET             | Non      | Oui      | Oui      | Oui | Oui | Oui |
| POST          | Oui    | Oui | Non | Non | Seulement si une information de péremption est incluse | Oui |


## Extensible

HTTP est un protocole extensible qui a évolué au cours du temps. C'est un protocole de la couche application dont les données transitent via TCP ou à travers une connexion TCP chiffrée avec TLS. En théorie, tout protocole de transport fiable pourrait être utilisé.

## Sans état

 Il s'agit aussi d'un protocole sans état, ce qui signifie que le serveur ne conserve aucune donnée (on parle d'état) entre deux requêtes. Ni le client ni le navigateur ne peuvent conserver d'informations entre différentes requêtes sur les pages Web.

 ## URL

Pour https://secnumacademie.gouv.fr/content

 
 | https:// | www.| secnumacademie.gouv | .fr | /content |
|------------------|----------|----------|-----------|---------|
| Protocole | Sous domaine | Nom domaine | Extension du domaine | Chemin | 


Protocole ==> Les protocoles de communication entre les serveurs web et les navigateurs web. Ils transmettent des messages, récupèrent des informations par le biais du système de noms de domaine

Sous domaine ==> Un sous-domaine est constitué de tous les mots ou phrases qui précèdent le premier point d’une URL. En ce qui concerne le World Wide Web, www est le type le plus courant. Il indique qu’un site web est accessible via l’internet et qu’il utilise le protocole HTTP pour communiquer.

Nom de domaine ==> Un nom de domaine est ce que les utilisateurs tapent dans la barre d’adresse de leur navigateur pour accéder à un site web. Il se compose d’un nom de site et d’une extension

Extension du domaine ==> Également appelé domaine de premier niveau (TLD), il s’agit de la partie qui suit le nom d’un site web. Utilisée pour environ 46% de tous les sites web, .com est l’extension la plus populaire.

Chemin ==> Le chemin d’accès à la ressource est la partie située à droite du TLD. Il s’agit souvent de la structure des dossiers du site web.

Paramètres ==> Les paramètres sont des chaînes de requête ou des variables URL. Il s’agit de la partie de l’URL qui suit un point d’interrogation.

## Codes Status

## Installation apache et configuration

C:\xampp\apache\conf\http.conf

##