import Container from "react-bootstrap/Container";
import { Link } from "react-router";

function DataProtectionPage(){
  return(
    <Container>
      <section>
        <h1 className="text-center">Protection des Données Personnelles et Gestion des Cookies</h1>
        <article>
            <h2>1. Introduction</h2>
            <p>
                Bienvenue sur SeniorLove. Nous nous engageons à protéger et à respecter votre vie privée. Cette politique de protection des données décrit comment nous recueillons, utilisons et protégeons vos données personnelles lorsque vous utilisez notre site web.
            </p>
        </article>

        <article>
            <h2>2. Données Collectées</h2>
            <p>
                Nous pouvons collecter les types de données personnelles suivants :
            </p>
            <ul>
                <li>Nom et prénom</li>
                <li>Adresse e-mail</li>
                
                <li>Données de navigation (adresse IP, type de navigateur, pages consultées)</li>
                <li>Autres informations pertinentes au regard des finalités pour lesquelles elles sont collectées</li>
            </ul>
        </article>

        <article>
            <h2>3. Finalités du Traitement</h2>
            <p>
                Les données collectées sont utilisées pour les finalités suivantes :
            </p>
            <ul>
                <li>Gérer votre compte utilisateur</li>
                <li>Améliorer nos services et notre site</li>
                
                <li>Assurer la sécurité du site</li>
                <li>Répondre à vos demandes et questions</li>
            </ul>
        </article>

        <article>
            <h2>4. Base Légale du Traitement</h2>
            <p>
                Le traitement de vos données personnelles repose sur les bases légales suivantes :
            </p>
            <ul>
                <li>Votre consentement</li>
                <li>L'exécution d'un contrat</li>
                <li>Le respect d'une obligation légale</li>
                <li>L'intérêt légitime de SeniorLove</li>
            </ul>
        </article>

        <article>
            <h2>5. Durée de Conservation des Données</h2>
            <p>
                Vos données personnelles sont conservées pour la durée nécessaire aux finalités mentionnées ci-dessus, sauf si une durée de conservation plus longue est requise ou autorisée par la loi.
            </p>
        </article>

        <article>
            <h2>6. Droits des Utilisateurs</h2>
            <p>
                Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul>
                <li><strong>Droit d'accès :</strong> Vous pouvez demander l'accès à vos données personnelles.</li>
                <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction de données inexactes.</li>
                <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données.</li>
                <li><strong>Droit à la limitation du traitement :</strong> Vous pouvez demander de restreindre le traitement de vos données.</li>
                <li><strong>Droit à la portabilité :</strong> Vous pouvez demander à recevoir vos données dans un format structuré.</li>
                <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données.</li>
            </ul>
            <p>
                Pour exercer ces droits, veuillez nous contacter à l'adresse suivante : <Link to="mailto:contact@seniorlove.projet.oclock.io">contact@seniorlove.projet.oclock.io</Link>.
            </p>
        </article>

        <article>
            <h2>7. Sécurité des Données</h2>
            <p>
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, divulgation, altération ou destruction.
            </p>
        </article>

        <article>
            <h2>8. Destinataires des Données</h2>
            <p>
                Vos données personnelles peuvent être partagées avec des prestataires de services tiers qui nous assistent dans l'exploitation du site, la gestion des données, et l'amélioration de nos services. Ces prestataires sont tenus de protéger vos données et de ne les utiliser que pour les finalités déterminées par SeniorLove.
            </p>
        </article>

        <article>
            <h2>9. Gestion des Cookies</h2>
            <p>
                Comme mentionné dans notre <Link to="/mentions-legales">Mentions Légales</Link>, SeniorLove utilise des cookies pour améliorer votre expérience de navigation. Voici les types de cookies que nous utilisons :
            </p>
            <ul>
                <li><strong>Cookies Essentiels :</strong> Nécessaires au fonctionnement du site (ex. gestion de session).</li>
                <li><strong>Cookies de Performance :</strong> Collectent des informations sur la manière dont les visiteurs utilisent le site pour améliorer ses performances.</li>
                <li><strong>Cookies Fonctionnels :</strong> Permettent de mémoriser des choix faits par l'utilisateur pour offrir une expérience personnalisée.</li>
                <li><strong>Cookies Publicitaires :</strong> Utilisés pour diffuser des publicités pertinentes en fonction de vos intérêts.</li>
            </ul>
            <p>
                Vous pouvez gérer vos préférences en matière de cookies en modifiant les paramètres de votre navigateur. Pour plus d'informations, consultez notre <Link to="/mentions-legales">page des Mentions Légales</Link>.
            </p>
            <p>
                Pour en savoir plus sur la gestion des cookies, vous pouvez visiter le site de la <Link to="https://www.cnil.fr/fr/cookies-traceurs" target="_blank">CNIL</Link>.
            </p>
        </article>

        <article>
            <h2>10. Modification de la Politique</h2>
            <p>
                SeniorLove se réserve le droit de modifier cette politique de protection des données et de gestion des cookies à tout moment. Les modifications seront publiées sur cette page et, si les changements sont significatifs, une notification sera affichée sur le site.
            </p>
        </article>

        <article>
            <h2>11. Contact</h2>
            <p>
                Pour toute question ou demande concernant cette politique, veuillez nous contacter à :
            </p>
            <ul>
                <li><strong>Email :</strong> <Link to="mailto:contact@seniorlove.projet.oclock.io">contact@seniorlove.projet.oclock.io</Link></li>
                <li><strong>Adresse :</strong> [Adresse de l'école O'clock ou adresse dédiée au projet]</li>
            </ul>
        </article>
      </section>
    </Container>
  );
};

export default DataProtectionPage;