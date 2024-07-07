import React from 'react'; 
import { Row, Col } from 'react-bootstrap';

function Tutor() {     
    return (         
        <>
        <div class="row mt-2">
            <div class="col-sm-2 bg-mylightgreen p-2">
                <img src={require('../src/assets/profile.jpg')} width="100%"/>
            </div>
                
            <div class="col-sm-10 bg-mylightgreen text-start">
                <a class="nav-link" href="/study-smart/#/Messages"><h3 className='m-0 p-0'>Name</h3></a>
                <Row>
                <Col xs={10}>
                <p className='subjects m-0 p-0'>Subject - Subject - Subject </p>
                </Col>
                <Col>
                <p className='m-0 p-0'>$100</p>
                </Col>
                </Row>
                <p className='description m-0 p-0'>Description stuff</p>
            </div>
        </div>
        </> 
    ); 
} 

export default Tutor;