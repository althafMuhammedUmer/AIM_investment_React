import Accordion from 'react-bootstrap/Accordion';

function AccordinComponent() {
  return (
    <Accordion defaultActiveKey="0" className="w-full border-none flex flex-col gap-3">
      <Accordion.Item eventKey="0" className='border-none focus:outline-none'>
        <Accordion.Header className="cursor-pointer hover:bg-gray-200 p-2">Pillars</Accordion.Header>
        <Accordion.Body>
          <ul className="list-none p-0 m-0">
            <li className="py-2 ">Item 1</li>
            <li className="py-2 ">Item 2</li>
            
          </ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" className='border-none focus:outline-none'>
        <Accordion.Header className="cursor-pointer hover:bg-gray-200 p-2">Tracks</Accordion.Header>
        <Accordion.Body>
          <ul className="list-none p-0 m-0">
            <li className="py-2 ">Item 1</li>
            <li className="py-2 ">Item 2</li>
            
          </ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className='border-none focus:outline-none'>
        <Accordion.Header className="cursor-pointer hover:bg-gray-200 p-2 ">Features</Accordion.Header>
        <Accordion.Body>
          <ul className="list-none p-0 m-0">
            <li className="py-2 ">Item 1</li>
            <li className="py-2 ">Item 2</li>
           
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordinComponent;