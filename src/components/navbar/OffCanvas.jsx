import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvas({ show, handleClose }) {
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      backdrop={false} 
      
      className="bg-black text-white"
      style={{ width: '100%' }}
    >
      <Offcanvas.Header closeButton className='bg-green-400'>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as a placeholder. In real life, you can have the elements you
        have chosen, like text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default OffCanvas;
