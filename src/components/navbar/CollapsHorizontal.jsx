import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function CollapsHorizontal({ show }) {
    
  return (
    <>
      <div className='w-full'>
        
        <Collapse in={show} dimension="width" className='w-full collaps-horizontal'>
          <div id="example-collapse-text">
            <div className='w-full bg-white h-10'>

              
            </div>
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default CollapsHorizontal;
