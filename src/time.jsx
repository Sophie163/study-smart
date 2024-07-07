import React, { useState, useEffect } from 'react';
import { ProgressBar, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Time = () => {
  const [totalTime, setTotalTime] = useState(0); // State to hold total time in seconds
  const [timeLeft, setTimeLeft] = useState(0); // State to hold remaining time in seconds
  const [progress, setProgress] = useState(0); // State to hold progress percentage
  const [timerRunning, setTimerRunning] = useState(false); // State to track if timer is running
  const [timerEnded, setTimerEnded] = useState(false); // State to track if timer has ended

  useEffect(() => {
    if (timerRunning) {
      const interval = setInterval(() => {
        setTimeLeft(prevTimeLeft => {
          if (prevTimeLeft > 0) {
            return prevTimeLeft - 1;
          } else {
            clearInterval(interval);
            setTimerRunning(false);
            setTimerEnded(true); // Set timerEnded to true when timer finishes
            return 0;
          }
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timerRunning]);

  useEffect(() => {
    const percentage = (timeLeft / totalTime) * 100;
    setProgress(percentage);
  }, [timeLeft, totalTime]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleStartTimer = () => {
    setTimeLeft(totalTime);
    setTimerRunning(true);
    setTimerEnded(false); // Reset timerEnded state when starting the timer
  };

  const handleResetTimer = () => {
    clearInterval();
    setTimerRunning(false);
    setTimeLeft(0);
    setTimerEnded(false);
  };

  return (
    <div className="">
    
    <div className='mx-5 mb-2'>
    <Row>
    <Col></Col>
    <Col xs={6}>
      <Form.Group>
        <Form.Label><h3>Select Time:</h3></Form.Label>
        <Form.Control
          as="select"
          value={totalTime / 60}
          onChange={(e) => setTotalTime(parseInt(e.target.value, 10) * 60)}
        >
          <option value="0">Time (in minutes)</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="60">60</option>
        </Form.Control>
      </Form.Group>
    </Col>
    <Col></Col>
    </Row>
    </div>
      
      <button className="custom-primary mx-2" onClick={handleStartTimer} disabled={timerRunning || totalTime == 0}>
        Start Timer
      </button>

      <button className="custom-secondary mx-2" onClick={handleResetTimer} disabled={!timerRunning && !timerEnded}>
        Reset
      </button>

      <h5 className="mt-4 mb-2">Time Remaining: {formatTime(timeLeft)}</h5>
      <ProgressBar animated now={100 - progress} label={`${100 - Math.round(progress)}%`} className="mb-4" variant='success'/>

      {timerEnded && (
        <Alert variant="success" style={{ marginTop: "10px", padding: "5px", marginLeft: "100px", marginRight: "100px"}}>
            <Alert.Heading className='m-0 p-0'>Timer Ended!</Alert.Heading>
            <p className='m-0 p-0'>Your timer has finished.</p>
        </Alert>
      )}
    </div>
  );
};

export default Time;
