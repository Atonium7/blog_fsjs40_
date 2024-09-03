# APP-full

## Présentation du projet

Mise en place d'une application uniquement coté serveur et son rendu également.

L'application aura accès à une BDD en SQL avec `mysql2`.
La vue utilisée sera `EJS`
Les routes gérées par `express`.
Un système d'authentification sera en place, la protection du mot de passe sera le hachage avec `bcrypt`.
Le maintient des sessions utilisateurs sera avec `express-session`. (et un `store sql`).
Les données sensibles stockées dans un fichier d'environnement avec `dotenv`.
Pour le coté pratique utilisation de `nodemon` en mode développement.

La thématique sera un blog.
L'architecture sera MVC (Model, View, Controller).

L'administrateur est le seul autorisé à poster des articles.
Ces articles :

- peuvent être commentés par des utilisateurs connectés uniquement.
- auront une images
- le nom de l'auteur
- une date et l'heure de publication
- le titre
- le contenu
- seront liés à **une** catégorie

Les commentaires :

- auront le nom de l'utilisateur
- la date et son heure de publication
- le message

Un utilisateur se connectera avec :

- un alias(username)
- un password

### Schéma

#### MCD

Les entités :

- user
- story
- comment

Cardinalités :

- un `user` peut `comment` une `story` comme plusieurs `story`. **0N**
- une `story` peut être `comment` par plusieurs `user`. **0N**

- une `story` n'est lié qu'à une seule `category` **11**
- une `category` peut être lié à une `story` comme plusieurs **0N**

`user` **N** <-----> **N** `story`
`story` **1** <-----> **N** `category`

#### MLD

User(id, username, password)

User_Story(#user_id, #story_id, message, publishDate) --> devient la table `comment`

Story(id, title, content, publishDate, author, img, #category_id)

Category(id, label)

## BACK-OFFICE (panneau d'administration)

Un BO simple, permettant au propriétaire du site de manipuler les articles du blog :

- Create (Création d'un article)
- Read   (Lecture d'un article)
- Update (Mise à jour d'un article)
- Delete (Suppression d'un article)

### BONUS

CRUD sur les catégories (tag)

Ce qui formera un CRUD complet !
