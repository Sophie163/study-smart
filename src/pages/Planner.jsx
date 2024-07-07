import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Day from '../day';
import '../custom.scss';

function Planner() {     
    return (         
        <>
        <div style={{ display: 'block', width: '100%', padding: 25}} class="bg-mygreen"></div>
        <div style={{ display: 'block', width: '100%', padding: 15}} class="bg-mygreen">
            <h1>Study Planner</h1>
        </div>
        <div style={{ display: 'block', width: '100%', paddingBottom: 15}} class="bg-mygreen">
            <Row>
            <Col><div class="classWithPad bg-mylightgreen pb-1"><h4>Sun</h4></div></Col>
            <Col><div class="classWithPad bg-mylightgreen pb-1"><h4>Mon</h4></div></Col>
            <Col><div class="classWithPad bg-mylightgreen pb-1"><h4>Tue</h4></div></Col>
            <Col><div class="classWithPad bg-mylightgreen pb-1"><h4>Wed</h4></div></Col>
            <Col><div class="classWithPad bg-mylightgreen pb-1"><h4>Thu</h4></div></Col>
            <Col><div class="classWithPad bg-mylightgreen pb-1"><h4>Fri</h4></div></Col>
            <Col><div class="classWithPad bg-mylightgreen pb-1"><h4>Sat</h4></div></Col>
            </Row>
        </div>
        <div style={{ display: 'block', width: '100%'}} class="bg-mygreen">
            <Row>
            <Col><div class="classWithPad bg-mylightgreen"><Day /></div></Col>
            <Col><div class="classWithPad bg-mylightgreen"><Day /></div></Col>
            <Col><div class="classWithPad bg-mylightgreen"><Day /></div></Col>
            <Col><div class="classWithPad bg-mylightgreen"><Day /></div></Col>
            <Col><div class="classWithPad bg-mylightgreen"><Day /></div></Col>
            <Col><div class="classWithPad bg-mylightgreen"><Day /></div></Col>
            <Col><div class="classWithPad bg-mylightgreen"><Day /></div></Col>
            </Row>
        </div>
        <div style={{ display: 'block', width: '100%', padding: 15}} class="bg-mygreen">
            <Row>
            <Col><h2 class="text-end">Test Date</h2></Col>
            <Col><h2>Tutoring Session</h2></Col>
            <Col><h2 class="text-start">Due Date</h2></Col>
            </Row>
        </div>
        </>
    ); 
} 

export default Planner;