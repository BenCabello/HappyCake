import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Barra = () => {
return (

<Navbar 
bg="danger"
>

<Container className='justify-content-start'>
  <Link
to="/"
className="text-white text-decoration-none ms-3"
>
Home
</Link>

<Link
to="/ContactPage"
className="text-white text-decoration-none ms-3"
>
Contacto
</Link>
</Container>
</Navbar>
);
};

export default Barra;