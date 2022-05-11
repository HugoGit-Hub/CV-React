import './App.css';
import React from 'react'
import StarfieldAnimation from 'react-starfield-animation'
import Grid from '@mui/material/Grid'
import { Avatar } from '@mui/material';
import { Button } from '@mui/material'; import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Car from '@mui/icons-material/DirectionsCarFilledOutlined';
import Licence from '@mui/icons-material/AssignmentIndOutlined';
import Star from '@mui/icons-material/StarOutlined';
import StarHalf from '@mui/icons-material/StarHalfOutlined';
import StarOutline from '@mui/icons-material/StarOutlineOutlined';
import Draw from '@mui/icons-material/ModeEditOutlineOutlined';
import Computer from '@mui/icons-material/ComputerOutlined';
import profil from './profil.JPG'
import IT from './IT.png'
import CV from './CV_hugo_decuq.pdf'
import { SportsBasketball } from '@mui/icons-material';

function App() {

  return (
    <div className="App">
      <StarfieldAnimation
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          numParticles: 300,
          lineWidth: 10.0
        }}
      />
      <header className="App-header">
        <h1>CURRICULUM VITAE</h1>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <Grid className='App-block' direction="column" justifyContent="center" alignItems="center">
            <h2 className='App-tite'>Bonjour</h2>
            <p>Je suis un étudiant en 2ème année de Bachelor Informatique, je fais ce site web afin de présenter mes compétences que j'ai pu acquérir lors de mes différents apprentissages et expériences.</p>
            <Avatar src={profil} className='App-profil'></Avatar>
            <a href={CV} download style={{ textDecoration: 'none' }}>
              <Button className='App-download' variant="contained">Télécharger</Button>
            </a>
          </Grid>
          <Grid className='App-block'>
            <h2>Qui suis-je ?</h2>
            <p>Après mon BAC STI2D (Sciences et Technologies de l'Industrie et du Développement Durable), Je décide de partir sur un Bac+2, dans un BTS électrotechnique chez les Compagnons du Devoir et du tour de France. Pendant mon diplôme je me redécouvre une passion pour les nouvelles technologies ainsi que leurs fonctionnements (déjà connu lors de mon Bac), ce qui me motive, pour me réorienter afin de mieux me former et ainsi me diriger sur un Bac+3 Informatique.</p>
            <img className='App-IT' src={IT} alt=""></img>
          </Grid>
          <Grid className='App-block'>
            <h2>Mes connaissances</h2>
            <Carousel>
              <div>
                <h3>Web Developpement</h3>
                <h5>Mes connaissances acquises à l'école :</h5>
                <p>- Cours à propos de HTML CSS JS du côté du Front (bootstrap)</p>
                <p>- Cours de BDD avec MySqlWorkbench</p>
                <p>- Cours de PHP (transaction avec la BDD en PDO)</p>
                <h5>Projets et expériences :</h5>
                <p>- Site web via WordPress pour une thérapeute (projet de 1ère année Bachelor Informatique)</p>
                <p>- Site Web Trendae, entreprise de mon stage d'été 2021 via Kreezalid (m'occuper du Front ainsi que de Web App via Heroku)</p>
                <p>- Projet PHP, faire une médiathèque en ligne BDD comprise (technologies : MySqlWorkbench, PDO, HTML, CSS, JS)</p>
                <p>- CV en React (Node, React, HTML, CSS)</p>
              </div>
              <div>
                <h3>CyberSécurité</h3>
                <h5>Mes connaissances acquises à l'école :</h5>
                <p>- Cours de cybersécurité : L'entreprise DevenSys basé sur Montpellier, spécialisé en CyberSécurité nous donne cours. Cela porte sur des attaques basiques (injection SQL), FireWalls, la CNIL, RGPD, mais aussi les VPN</p>
                <h5>Projets et expériences :</h5>
                <p>- Utilisation de plusieurs outils de cyber-sécurité / OSINT (Shodan, aircrack-ng, hashcat, john the ripper, ...)</p>
                <p>- Complétion de quelques Labs root.me (notamentréseaux, web et cryptanalyse)</p>
              </div>
              <div>
                <h3>Software Développement</h3>
                <h5>Mes connaissances acquises à l'école :</h5>
                <p>- Cours de Java</p>
                <p>- Cours de Python</p>
                <h5>Projets et expériences :</h5>
                <p>- Lors de mon stage chez Trendae, j'ai du développer un logicel avec interface graphique, qui avait pour but de trier des base de données d'url pour ensuite envoyer des messages automatiquement sur Instagram</p>
                <p>- Utilisation de Python et Tkinter pour l'interface graphique</p>
              </div>
              <div className='App-caroussel'>
                <h3>Les Langages Étudiés</h3>
                <h5>Mes connaissances acquises à l'école :</h5>
                <p>- C / Python / Java / php / JavaScript (connaissances de bases)</p>
                <h5>Projets et expériences :</h5>
                <p>- Projet marathon développement en cours : Développer des jeux de casino (poker, blackjack, ... en C)</p>
              </div>
              <div>
                <h3>Infrastructure Réseaux</h3>
                <h5>Mes connaissances acquises à l'école :</h5>
                <p>- Cours Linux (Red Hat, RH124)</p>
                <p>- Cours Cisco avec une formation sur la CCNAv7</p>
                <p>- Cours Microsoft (installation server, AD, DHCP, DNS, IIS, ...)</p>
                <p>- Autodidacte sur Docker</p>
              </div>
              <div>
                <h3>Projets</h3>
                <h5>Projets et expériences :</h5>
                <p>- Création de jeux vidéo sous Unity en C#</p>
                <p>- CV en ligne en HTML CSS JS puis une autre version en React</p>
                <p>- Cours en ligne Python via la plateforme FunMooc</p>
                <p>- Développement d'une Bibliothèque en ligne (PHP, mysql, mysqli, HTML,CSS,JS)</p>
                <p>- Création de container docker et mise en place de serveur web, mysql et phpmyadmin</p>
                <p>- Autodidacte en swift, intéréssé par curisoité</p>
                <p>- Autodidacte sur Larvel, découverte du framwork, apprantissage de la structure des fichiers / dossier, ainsi que le MVC</p>
                <p>- Développement de structures de données (Liste , Pile, Arbre binaire) en Java J2EE via Eclipse</p>
                <p>- Autodidacte développement POO Java</p>
              </div>
              <div>
                <h3>Projets avenir</h3>
                <h5>Technologies et concepts :</h5>
                <p>- Approfondir et créer à partir de Laravel</p>
                <p>- apprantissage sur les API rest (flask / node)</p>
                <p>- Développer en POO</p>
                <p>- Projet de fin de deuxième année : développer une WebApplication pour une association de sauvetage de tortue marine (me familiariser avec les projet en Agilité)</p>
                <p></p>
              </div>
            </Carousel>
          </Grid>
          <Grid className='App-block'>
            <h2>Mes experiences</h2>
            <p>Septembre 2021 - Aujourd'hui : Septeo - Genapi / Technicien support technique</p>
            <p>Juin 2021 - Août 2021 : Trendae / Développement Web (Front)</p>
            <p>Octobre 2020 - Mai 2021 : Projet annuel 1ère année de Bachelor Informatique / Site Web (WordPress)</p>
            <p>Septembre 2018 - Août 2020 : Lactalis / Technicien de maintenance</p>
          </Grid>
          <Grid className='App-block' >
            <h2>Mes compétences / centres d'intérêt</h2>
            <Grid container spacing={3}>
              <Grid item xs>
                <div>
                  <h5>Langues</h5>
                  <p>Français<Star className='App-ico-lang'></Star><Star></Star><Star></Star></p>
                  <p>Anglais<Star className='App-ico-lang'></Star><StarHalf></StarHalf><StarOutline></StarOutline></p>
                </div>
              </Grid>
              <Grid item xs>
                <div>
                  <h5>Hobbies</h5>
                  <p><Computer className='App-ico'></Computer>Informatique</p>
                  <p><Draw className='App-ico'></Draw>Dessin</p>
                  <p><SportsBasketball className='App-ico'></SportsBasketball>Basket</p>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid className='App-block' >
            <h2>Informations annexes</h2>
            <Grid container spacing={3}>
              <Grid item xs>
                <div className='App-skills'>
                  <h5>ÉCOLE</h5>
                  <p>99 Impass Adam Smith</p>
                  <p>34470 Pérols</p>
                  <p>Keyce Academy</p>
                </div>
              </Grid>
              <Grid item xs>
                <div>
                  <h5>AUTOUR DU WEB</h5>
                  <p>LinkedIn : hugo decuq</p>
                  <p>GitHub : HugoGit-Hub</p>
                </div>
              </Grid>
              <Grid item xs>
                <div>
                  <h5>CONTACT</h5>
                  <p>Email : hugo.decuq@e-cdp.com</p>
                  <p><Car className='App-ico'></Car>véhiculé</p>
                  <p><Licence className='App-ico'></Licence>permis B</p>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid className='App-block App-copy'>
            <small>Copyright©hugo-decuq</small>
          </Grid>
        </Grid>
      </header >
    </div >
  );
}

export default App;
