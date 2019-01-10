## Predpriprava

Za uspešen zagon našega projekta, bomo potrebovali naslednje stvari:

- Poljuben IDE (Integrated development environment) (VS Code, Sublime, Atom,..)
- Git (Za arhiviranje naše kode) [Prenesi](https://git-scm.com/downloads)
- Node [Prenesi](https://nodejs.org/en/download/)

<details><summary>Če si želite začeti svoj projekt brez predloge, ki jo bomo uporabili v naslednjem koraku, potrebujete še izvesti naslednji ukaz</summary>

`npx create-react-app my-app`  
`cd my-app`  
`npm start`

</details>

## Naš začetni projekt

1. Projekt si prenesi s klikom na gumb `Clone or download`
2. Skopiraj pot (https://github.com/KlemenPlazar/meme-generator.git)
3. V ukazni vrstici na svojem računalniku izvedi ukaz `git clone https://github.com/KlemenPlazar/meme-generator.git`

## Zagon aplikacije

Na svojemem računalniku, v mapi kamor si si kloniral projekt, v ukazni vrstici izvedi ukaz `npm install`, ko se proces zaključi, izveri še ukaz `npm start`
Odpri [http://localhost:3000](http://localhost:3000) in videl boš svojo aplikacijo v brskalniku.

## Arhiviraj aplikacijo v svoj github

### Ustvari nov projekt

- Če še nimaš, si ustvari svoj uporabniški račun na GitHubu.
- V navigacijski vrstici, poleg svojega uporabniškega imena (desno), klikni na + (plus) in izberi `New repository`.
- Za ime projekta daj `meme-generator`.
- Pod description lahko nekaj napišeš poljuben opis, ostalo pa pusti tako kot je.
- Klikni na `Create repository`.

### Arhiviraj svoj projekt

V mapi kjer se nahaja tvoj aplikacija, odpri uzkano okno in izvedi naslednje ukaze

- git init
- git add README.md
- git commit -m "First commit"
- git remote add origin https://github.com/KlemenPlazar/meme-generator.git (Tvoja pot tukaj mora biti drugačna)
- git push -u origin master

Osveži svojo github stran, in videl boš svoje datoteke na Githubu :)

## Izvedi več

Več o tem kako ustvariti svojo prvo aplikacijo na [Create React App dokumentacija](https://facebook.github.io/create-react-app/docs/getting-started)

Več o tem kako uporabljati [Git in Github](https://try.github.io/)

<details><summary>Kako pripraviti konfiguracijo za projekt</summary>
[Frontend ReactJS stack](https://medium.com/@adam.giacom/how-to-configure-a-solid-frontend-reactjs-stack-1-41a091133d0e)
</details>
