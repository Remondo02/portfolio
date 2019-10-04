# Portfolio

## Descriptif du projet

Un site personnel dédié à la présentation de mes projets, principalement web, qui fait suite à ma formation de développeur fullstack, spécialisé Wordpress.

## Description des technologies employées

1. XAMPP pour l'utilisation de PHP avec Apache ;
2. Visual Studio Code comme éditeur de texte ;
3. Git Bash ;
4. HTML5 ;
5. CSS 3 ;
6. Javascript (ES6), GSAP, ScrollMagic & smooth-scroll ;
7. Webpack, Babel, Polyfill ;
8. PHP 7.2 ;
9. Git/Github ;
10. Netlify.

## Justification technique

- Le choix de XAMPP s'est imposé, car les ressources nécessaires lors de l'utilisation d'une VM ne permettaient pas un confort d'utilisation optimal sur mon ordinateur portable. En effet, cela occasionne une chauffe excessive et un bruit assourdissant, en plus de crashs occasionnels ;

- [Docker](https://www.docker.com/) aurait été un choix intéressant, malheureusement la configuration sur Win 7 ne m'a pas permis de mettre en place ce système. En effet, Docker est optimisé pour Windows 10 avant tout. La rétro compatibilité n'est possible qu'avec [Docker Toolkit](https://docs.docker.com/toolbox/toolbox_install_windows/), entre autres choses ;

- Visual Studio Code car il s'agit de l'outil que j'ai le plus utilisé durant ma formation, et son système de plugin est très bien géré ;

- [Git Bash](https://gitforwindows.org/) à la place du _Command Prompt_ de Windows, pour gérer le flux Git <-> Github entre autres choses ;

- HTML5 pour des raisons évidentes ;

- CSS 3 sans passer par SASS, car pour des raisons de simplicité et de temps, cela me semblait plus adapté. Le fichier CSS est long mais enrichi de commentaires afin de distinguer les différents éléments qui le composent.

- Javascript (ES 6+) afin d'utiliser le langage original et pour de bonnes pratiques.

- [GSAP](https://greensock.com/gsap/) qui regroupe un ensemble d'outils formidables pour l'animation scriptée d'éléments.

- [ScrollMagic](https://scrollmagic.io/), une librairie simple et pratique pour l'animation d'élément au défilement.

- [Smooth-scroll](https://github.com/cferdinandi/smooth-scroll), autre libraire pour un défilement fluide sans passer par la propriété « scroll-behavior » de CSS qui n'est malheureusement pas encore compatible sur tout les navigateurs (notamment Safari).

- [Webpack](https://webpack.js.org/) et [Babel](https://babeljs.io/) afin de transformer ES6 en ES5 lisible depuis n'importe quel navigateur ;

- [Polyfill](https://polyfill.io/v3/) qui permet l'ajout de _features_ spécifiques pour certains navigateurs ;

- PHP afin de rendre le site multilangue (ce qui justifie l'utilisation d'Apache en première instance).

- Git/Github pour le _versioning_ afin de rendre le repository public, et donc disponible pour consultation.

- [Netlify](https://www.netlify.com/) car il permet un déploiement simple et efficace depuis Github, et gère le fonctionnement de formulaires via l'injection de balises additionnelles dans le HTML. De plus, à chaque push sur le repository, le déploiement live est directement appliqué.

Note : la version dite « dynamique » utilisant PHP se trouve dans la branche « languages » du repository, car Netlify ne prend pas en charge Apache et PHP.

Note 2 : au vu de la taille du fichier CSS natif (1300+ lignes), un axe d'amélioration serait d'implémenter SASS afin de fractionner le code pour une meilleure visivilité.
