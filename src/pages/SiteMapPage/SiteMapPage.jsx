import { Link } from "react-router";
import Container from "react-bootstrap/Container";

function SiteMapPage(){
 return (
  <Container>
    <section>
      <h1 className="text-center">Plan du Site</h1>

      <h2>Pages publiques</h2>

      <ul>
        <li><Link to="/accueil" aria-label="Accéder à la page d'accueil">Accueil</Link> - Présentation du site et nos derniers événements</li>
        <li><Link to="/connexion" aria-label="Accéder à la page de connexion">Connexion</Link> - Se connecter à votre compte</li>
        <li><Link to="/inscription" aria-label="Accéder à la page d'inscription">Inscription</Link> - Creer un nouveau compte</li>
      </ul> 

      <h2>Pages membres (authentification requise)</h2>   

      <ul>
        <li><Link to="/tableau-de-bord" aria-label="Accéder à la page du tableau de bord">Tableau de bord</Link> - Les événements et les profils qui pourraient vous plaire</li>
        <li><Link to="/profils" aria-label="Accéder à la page des profils">Profils</Link> - Tous les profils</li>
        <li><Link to="/evenements" aria-label="Accéder à la page des événements">Événements</Link> - tous nos événements</li>
        <li><Link to="/messages" aria-label="Accéder à la page des messages">Messages</Link> - Votre messagerie</li>
        <li><Link to="/mon-compte" aria-label="Accéder à la page mon compte">Mon compte</Link> - Gérer votre profil</li>
      </ul>
        
      <h2>Pages légales</h2> 

      <ul>
        <li><Link to="/informations-legales" aria-label="Accéder à la page des informations légales">Informations Légales</Link> </li>
        <li><Link to="/protection-des-donnees" aria-label="Accéder à la page de la protection des données">Protection des Données</Link></li>
        <li><Link to="/plan-de-site" aria-label="Accéder à la page du plan de site">Plan de site</Link></li>
      </ul>  

    </section>
  </Container>
 );
};

export default SiteMapPage;