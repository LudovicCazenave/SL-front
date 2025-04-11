import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router'

function NotFoundPage(){
  
  return(
    <section>
      <Container fluid="xl" className='text-center bg-white my-5 py-3 px-0 rounded'>
        <h1 className='pb-3'>Erreur 404 - page non trouvée</h1>
        <Image src="/src/assets/img/diverse-img/errors/404.jpg" alt="page d'erreur 404" fluid className="mx-auto pb-3" />
        <p className='pb-3 h1'>Désolé, l'amour ne se trouve pas içi.</p>
        <Link to="/accueil" className="btn btn-primary btn-lg">
          Retour à l'accueil
        </Link>
      </Container>
    </section>
  )
};


export default NotFoundPage;