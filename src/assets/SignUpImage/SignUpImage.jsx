import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'

function SignUpImage () {

  return (
    <>
      <Image src="/img/diverse-img/hands.jpg" fluid className="mx-auto" />
       <div className='position-absolute top-10 start-50 translate translate-middle-x rounded bg-light bg-opacity-25 text-center p-3'>
        <img src="/img/logo/heart-2-removebg.png"  
        width="80"
        height="80"/>
        <h1 className='text-primary '>Senior<span className='text-secondary'>Love</span></h1> 
        <Button className='primary'>S'inscrire</Button>

      </div>
        
    </>
  )
}

export default SignUpImage