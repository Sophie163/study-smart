import React from 'react'; 
import Form from 'react-bootstrap/Form';
import TutorMessage from '../tutorMessage';
import Tutor from '../tutor';
import { Row, Col } from 'react-bootstrap';

function Messages() {     
    return (         
        <>
        <div style={{ display: 'block', width: '100%', padding: 30 }} class="bg-mygreen"></div>

        <div style={{ display: 'block', width: '100%', padding: 0 }}>
            <div class="row">
                <div class="col-sm-4 m-0 pt-2">
                    <h2 className='py-2'>Messages</h2>
                        <TutorMessage />
                        <TutorMessage />
                        <TutorMessage />
                        <TutorMessage />
                        <TutorMessage />
                        <TutorMessage />
                </div>

                <div class="col-sm-8 bg-mygreen">
                    <div class="ms-3">
                    <div class="row mt-2">
                        <div class="col-sm-2 bg-mylightgreen p-2">
                            <img src={require('../assets/profile.jpg')} width="100%"/>
                        </div>
                            
                        <div class="col-sm-10 bg-mylightgreen text-start">
                            <a class="nav-link" href="/Messages"><h2 className='m-0 p-0 pt-3'>Name</h2></a>
                            <Row>
                            <Col xs={10}>
                            <p className='m-0 p-0'>Subject - Subject - Subject </p>
                            </Col>
                            <Col>
                            <p className='m-0 p-0'>$100</p>
                            </Col>
                            </Row>
                            <p className='m-0 p-0'>Description stuff</p>
                        </div>
                    </div>
                    </div>
                    <div class="bg-mylightgreen ms-1 mt-4">
                        <div style={{ display: 'block', width: '100%', padding: 140 }} class="bg-mylightgreen"></div>
                    </div>
                    <div class="row m-4">
                        <div class="col-sm-9 bg-mygreen">
                        <Form.Control type="text" placeholder="Message" />
                        </div>
                        <div class="col-sm-3 bg-mygreen">
                        <button type="gotiming" className="custom-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up me-4 pb-1" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
                            </svg>
                            Send
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>    
    ); 
} 

export default Messages;