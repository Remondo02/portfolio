# Portfolio

## Description des technologies employées

1. XAMPP pour l'utilisation de PHP avec Apache ;
2. Visual Studio Code comme éditeur de texte ;
3. Git Bash ;
4. HTML5 ;
5. CSS 3 ;
6. Javascript (ES 6+) & GSAP ;
7. PHP 7.2 ;
8. Git/Github ;
9. Netlify.

## Justification technique

- Le choix de XAMPP s'est imposé, car les ressources nécessaires lors de l'utilisation d'une VM ne permettaient pas un confort d'utilisation optimal sur mon ordinateur portable. En effet, cela occasionne une chauffe excessive et un bruit assourdissant, en plus de crashs occasionnels ;

- [Docker](https://www.docker.com/) aurait été un choix intéressant, malheureusement la configuration sur Win 7 ne m'a pas permis de mettre en place ce système. En effet, Docker est optimisé pour Windows 10 avant tout. La rétro compatibilité n'est possible qu'avec [Docker Toolkit](https://docs.docker.com/toolbox/toolbox_install_windows/), entre autres choses ;

- Visual Studio Code car il s'agit de l'outil que j'ai le plus utilisé durant ma formation, et son système de plugin est très bien géré ;

- [Git Bash](https://gitforwindows.org/) à la place du _Command Prompt_ de Windows, pour gérer le flux Git <-> Github entre autres choses ;

- HTML5 pour des raisons évidentes ;

- CSS 3 sans passer par SASS, car pour des raisons de simplicité et de temps, cela me semblait plus adapté. Pas besoin de compiler, et donc de surcharger l'application avec une configuration additionnelle ([Webpack](https://webpack.js.org/) & [NPM](https://www.npmjs.com/), ou autre).
  Le fichier CSS est long mais enrichi de commentaires afin de distinguer les différents éléments qui le composent.

- Javascript (ES 6+) sans devoir recourir à Jquery pour deux raisons :

  1. cela évite de surcharger le site par l'ajout de librairies relativement lourdes ;
  2. afin de pratiquer le langage original, sans raccourcis, pour de bonnes pratiques.

- [GSAP](https://greensock.com/gsap/), qui regroupe un ensemble d'outils formidables pour l'animation scriptée d'éléments.

- PHP afin de rendre le site multilangue (ce qui justifie l'utilisation d'Apache en première instance).

- Git/Github pour le _versioning_ afin de rendre le repository public, et donc disponible pour consultation.

- [Netlify](https://www.netlify.com/) car il permet un déploiement simple et efficace depuis Github par exemple, et gère le fonctionnement de formulaires via l'injection de balises additionnelles dans le HTML.

Home, about, my work, contact

home, about, resume, portfolio, contact
