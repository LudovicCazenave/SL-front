import Container from "react-bootstrap/Container";

function LegalInfoPage(){

  return(
    <Container>
      <section>
        <h1 className="text-center">Mentions Légales</h1>

        <div>
          <h2>1. Éditeur du Site</h2>
          
          <p><strong>Projet :</strong> SeniorLove</p> 
          <p><strong>Nature du projet :</strong> Projet de formation</p> 
          <p><strong>Équipe :</strong> Travail d'équipe de quatre étudiants</p> 
          <p><strong>École :</strong> O'clock</p> 
          <p><strong>Site de l'école :</strong> <a href="https://oclock.io/" target="_blank">https://oclock.io/</a></p> 
          <p><strong>Membres de l'équipe :</strong></p> 
          <p>- [Nom et Prénom, Développeur full-stack]</p> 
          <p>- [Nom et Prénom, Développeuse full-stack]</p> 
          <p>- [Nom et Prénom, Développeuse full-stack]</p> 
          <p>- [Nom et Prénom, Développeur full-stack]</p> 
          <p><strong>Adresse :</strong> [Adresse de l'école ou une adresse de contact dédiée au projet]</p> 
          <p><strong>Email de contact :</strong> [Adresse email dédiée au projet]</p> 
          
          <p>
            <strong>Avertissement :</strong> Ce site est développé dans le cadre d’une formation à l’école O'clock et n’est pas destiné à un usage commercial. Les contenus présentés sur ce site sont à but pédagogique et éducatif.
          </p>
        </div>

        <div>
          <h2>2. Hébergeur du Site</h2>
            
          <p><strong>Nom de l'hébergeur :</strong> [Nom de l'hébergeur]</p> 
          <p><strong>Adresse :</strong> [Adresse complète de l'hébergeur]</p> 
          <p><strong>Téléphone :</strong> [Numéro de téléphone de l'hébergeur]</p> 
            
        </div>

        <div>
          <h2>3. Propriété Intellectuelle</h2>
          <p>
            L’ensemble des contenus présents sur le site SeniorLove, incluant de manière non limitative les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme, sont la propriété collective des membres de l'équipe SeniorLove dans le cadre de leur projet de formation. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord écrit préalable des auteurs.
          </p>
        </div>

        <div>
          <h2>4. Protection des Données Personnelles</h2>
          
          <p>Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD) (EU) 2016/679, vous disposez d’un droit d’accès, de rectification, de suppression et d’opposition aux données personnelles vous concernant.</p> 
          <p>Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : [Adresse email de contact] ou par courrier à l'adresse mentionnée ci-dessus.</p> 
          
          <p>
            Pour en savoir plus sur vos droits et la manière de les exercer, vous pouvez consulter le site de la <a href="https://www.cnil.fr/" target="_blank">CNIL</a>.
          </p>
        </div>
      
        <div>
          <h2>5. Cookies</h2>
          <p>
            Le site SeniorLove peut utiliser des cookies pour améliorer votre expérience de navigation, analyser le trafic du site et personnaliser le contenu. Vous pouvez gérer vos préférences en matière de cookies via les paramètres de votre navigateur.
          </p>
        </div>

        <div>
          <h2>6. Responsabilité</h2>
          <p>
            Bien que nous nous efforcions de fournir des informations exactes et à jour, nous ne pouvons garantir l'exactitude, la complétude ou l'actualité des contenus du site. SeniorLove décline toute responsabilité en cas d'erreurs ou d'omissions dans les contenus.
          </p>
          <p>
            SeniorLove ne saurait être tenu responsable des dommages directs ou indirects résultant de l’accès ou de l’utilisation du site, y compris l’inaccessibilité, les pertes de données, et interruptions.
          </p>
        </div>

        <div>
          <h2>7. Liens Hypertextes</h2>
          <p>
            Le site SeniorLove peut contenir des liens vers d’autres sites. SeniorLove n’a pas de contrôle sur ces sites et ne peut être tenu responsable de leur contenu ni des dommages ou préjudices qu’ils pourraient causer.
          </p>
        </div>

        <div>
          <h2>8. Droit Applicable</h2>
          <p>
            Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </div>

        <div>
          <h2>9. Modification des Mentions Légales</h2>
          <p>
            SeniorLove se réserve le droit de modifier, à tout moment et sans préavis, les présentes mentions légales afin de les adapter à toute évolution de son activité ou de son exploitation.
          </p>
        </div>
      </section>
    </Container>
    
  );
};

export default LegalInfoPage;