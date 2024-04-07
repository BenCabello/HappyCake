import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function ContactForm() {
  return (
    <>

      <h1 className='titulo'>En que te podemos ayudar?</h1>
      <InputGroup className="textos">
        <div>
          <h2 className='titulo'>Correo</h2>
        <Form.Control
          placeholder="Correo"
          aria-label="Correo"
        />
        </div>
        <h2 className='titulo'>Descripcion</h2>
        <div>
        <Form.Control
         placeholder="Descripcion" 
         aria-label="Descripcion" 
         />
         </div>
      </InputGroup>
      <div className='text-center'>
      <Button variant="primary">Enviar</Button>{' '}
      </div>
    </>
  );
}

export default ContactForm;