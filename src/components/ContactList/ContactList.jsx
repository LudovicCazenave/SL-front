import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

function ContactList(){
  return (
    <Container fluid="lg" className="my-3  bg-secondary rounded d-flex flex-lg-column justify-content-center align-items-center" >
      <Image src='/src/assets/img/diverse-img/profils/Celine.png' roundedCircle  height="80" width="80" className='m-2'/>
      <Image src='/src/assets/img/diverse-img/profils/Celine.png' roundedCircle  height="80" width="80" className='m-2'/>
      <Image src='/src/assets/img/diverse-img/profils/Celine.png' roundedCircle  height="80" width="80" className='m-2'/>
      <Image src='/src/assets/img/diverse-img/profils/Celine.png' roundedCircle  height="80" width="80" className='m-2'/>
      <Image src='/src/assets/img/diverse-img/profils/Celine.png' roundedCircle  height="80" width="80" className='m-2'/>
    </Container>
  )
};

export default ContactList;