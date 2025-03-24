import Row  from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col";
import Container  from "react-bootstrap/Container";
function Tagline(){
	return (
		<section className="mt-3">
			<Container className="text-center">
			<Row>
				<Col lg="3 mt-5  px-4">
					<img src="/img/icon/heart-icon.svg" alt="icone coeur" width="80" height="80"/>
					<p className="mt-4">Des rencontres basées sur vos centres d’intérêt</p>
				</Col>
				<Col lg="3  mt-5  px-4">
					<img src="/img/icon/event-icon.svg" alt="icone calendrier" width="80" height="80"/>
					<p  className="mt-4">Participez à des événements pour rencontrer en vrai</p>
				</Col>
				<Col lg="3 mt-5  px-4">
					<img src="/img/icon/easy-icon.svg" alt="icone doigts" width="80" height="80"/>
					<p  className="mt-4">Une plateforme simple, pensée pour les seniors</p>
				</Col>
				<Col lg="3  my-5  px-4">
					<img src="/img/icon/verified-profil.svg" alt="icone profil vérifié" width="80" height="80"/>
					<p  className="mt-4">Des rencontres basées sur vos centres d’intérêt</p>
				</Col>
			</Row>
			</Container>
		</section>
	)
}

export default Tagline