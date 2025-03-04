# derbskills 🛼

Derbskills est un projet divisé en deux parties :

- Un **site de quiz**, qui permet de réviser les règles du roller derby (sous licence [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/))
- Une **base de données communautaire de questions** (stockée dans `content/1.questions/`) (sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/))

## Contribuer

### Au site

#### Technologies utilisées

| Nom | Explication |
| --- | --- |
| [Nuxt](https://nuxt.com/) | Framework pour le front-end |
| [Nuxt Content](https://content.nuxtjs.org/) | Stockage de la base de données localement |
| [Decap](https://decapcms.com/) | CMS pour gérer les collections de la base de données (`/public/admin/`) |

Les Feature Requests & PR sont les bienvenues.

### À la base de données de questions

Les questions sont stockées dans le dossier `content/1.questions/` et sont organisées en sous-dossiers représentant des _"packs"_

Chaque pack contient un fichier `.json` décrivant le pack, avec un titre et une description ; et un ensemble de questions au format `.yml`
#### Les champs d'une question

| Champ | Description |
| --- | --- |
| `label` | La question, idéalement écrite en français et en inclusif. |
| `hint` | Un indice. |
| `possibleAnswers` | Une liste de réponses possibles, idéalement 2 (oui/non) ou 4. |
| `answer` | La bonne réponse (copiée de la liste au dessus). |
| `explanation` | Une explication qui apparaît après avoir répondu. |
| `tags` | Les catégories auxquelles votre question appartient. |
| `difficulty` | Sur une échelle de 1 à 3. |
| `author` | Pour identifier la personne qui a écrit la question. <i>Pensez à créer une entrée dans la collection "Authors" au préalable</i>. (optionnel) |
| `aiGenerated` | Marquer comme une question générée par IA (optionnel). |
| `reviewer` | Utilisé pour indiquer qu'une personne a revu une question générée par IA (optionnel). |

#### Convention

Vous pouvez créer une PR pour créer votre propre pack de questions si le pack a pour objectif de contenir un ensemble de questions. Si vous ne souhaitez contribuer que ponctuellement, ou que les questions n'ont pas vocation a être dans un pack, vous pouvez les ajouter dans le pack `contributions` (qui est le pack qui recueille les contributions générées via le CMS Decap)