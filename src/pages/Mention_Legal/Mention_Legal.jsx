import React from 'react';
import './MentionLegal.css';

const MentionLegal = () => {
    return (
        <div className="mentions-legales-container">
            <h1>Mentions Légales & Politique de Confidentialité (RGPD)</h1>
            <hr />

            <h2>1. Éditeur du site</h2>
            <div className="contact-info">
                <p><strong>Dénomination sociale :</strong> AM Services</p>
                <p><strong>Forme juridique :</strong> SARL Unipersonnelle</p>
                <p><strong>Adresse du siège social :</strong> 41 Rue des Poncées, 88200 Saint-Étienne-lès-Remiremont</p>
                <p><strong>Capital social :</strong> 3000 €</p>
                <p><strong>Numéro SIREN :</strong> 882 258 536</p>
                <p><strong>Numéro SIRET :</strong> 882 258 536 00029</p>
                <p><strong>Numéro de TVA intracommunautaire :</strong> FR58882258536</p>
                <p><strong>Code APE/NAF :</strong> 4741Z - Commerce de détail d'ordinateurs, d'unités périphériques et de logiciels en magasin spécialisé</p>
                <p><strong>Téléphone :</strong> 03 29 22 16 01</p>
                <p><strong>Adresse e-mail :</strong> <a href="mailto:contact@amservices.eu">contact@amservices.eu</a></p>
                <p><strong>Directeur de la publication :</strong> Aurélien Millote, Gérant</p>
            </div>

            <hr />

            <h2>2. Politique de Confidentialité et Traitement des Données Personnelles (RGPD)</h2>
            <p>AM Services s'engage à respecter la vie privée de ses utilisateurs et à traiter leurs données personnelles avec la plus grande confidentialité, conformément au Règlement Général sur la Protection des Données (RGPD) du 27 avril 2016.</p>

            <h3>Données collectées et finalités</h3>
            <p>Les données personnelles collectées via ce site web, notamment via le formulaire de contact, sont les suivantes : nom, prénom, adresse e-mail, numéro de téléphone, et le contenu de votre message. Ces données sont collectées dans le but de :</p>
            <ul>
                <li>Répondre aux demandes d'information ou de devis.</li>
                <li>Assurer le suivi des clients et prospects.</li>
                <li>Améliorer la qualité de nos services.</li>
            </ul>

            <h3>Base légale du traitement</h3>
            <p>Le traitement de ces données est basé sur le consentement de l'utilisateur, qui est exprimé lors de la soumission du formulaire de contact.</p>

            <h3>Destinataires des données</h3>
            <p>Les données collectées sont destinées uniquement à l'équipe interne d'AM Services et ne sont en aucun cas cédées, louées ou vendues à des tiers sans votre consentement explicite.</p>

            <h3>Durée de conservation des données</h3>
            <p>Vos données personnelles sont conservées pendant une durée limitée qui n'excède pas celle nécessaire aux finalités pour lesquelles elles sont traitées. Pour les demandes de contact, vos données sont conservées pour une durée maximale de <strong>3 ans</strong> après le dernier contact.</p>

            <h3>Droits de l'utilisateur</h3>
            <p>Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :</p>
            <ul>
                <li><strong>Droit d'accès :</strong> Demander l'accès aux données que nous détenons sur vous.</li>
                <li><strong>Droit de rectification :</strong> Demander la correction de données inexactes ou incomplètes.</li>
                <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données pour des motifs légitimes.</li>
                <li><strong>Droit à l'effacement ("droit à l'oubli") :</strong> Demander la suppression de vos données.</li>
                <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré et lisible pour les transmettre à un autre responsable de traitement.</li>
                <li><strong>Droit à la limitation du traitement :</strong> Demander à limiter l'utilisation de vos données dans certaines situations.</li>
            </ul>
            <p>Pour exercer ces droits, vous pouvez nous contacter par e-mail à <a href="mailto:contact@amservices.eu">contact@amservices.eu</a> ou par courrier à l'adresse de notre siège social.</p>

            <h3>Réclamation auprès de la CNIL</h3>
            <p>Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous avez la possibilité d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés).</p>

            <hr />

            <h2>3. Cookies</h2>
            <p>Ce site utilise des cookies. Un cookie est un petit fichier texte stocké sur votre terminal (ordinateur, tablette, smartphone) qui enregistre des informations relatives à votre navigation.</p>
            <p>Conformément au RGPD et à la législation française, nous sollicitons votre consentement avant de déposer des cookies (sauf pour les cookies strictement nécessaires au fonctionnement du site). Une bannière de gestion des cookies est mise à votre disposition pour vous permettre de faire vos choix.</p>

            <hr />

            <h2>4. Propriété intellectuelle</h2>
            <p>L'ensemble des éléments (textes, images, logos, icônes, etc.) présents sur ce site sont la propriété exclusive d'AM Services. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site est interdite, sauf autorisation écrite préalable.</p>
        </div>
    );
};

export default MentionLegal;