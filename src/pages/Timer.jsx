import React from 'react'; 
import Time from '../time';

const totalTime = 300;

function Timer() {     
    return (     
        <>
        <div style={{ display: 'block', width: '100%', padding: 35 }} class="bg-mygreen"></div>
        <div style={{ display: 'block', width: '100%', padding: 15 }} class="bg-mygreen">
            <h1>Study Timer</h1>
        </div>
        <div style={{ display: 'block', width: '100%', padding: 0 }}>
        <div class="container my-5 p-4">
            <div class="row">
                <div class="col-sm-1"></div>
                <div class="col-sm-6 bg-white p-4">
                    <Time totalTime={totalTime} />
                </div>
                <div class="col-sm-4 bg-white m-0 p-0">
                    <img src={require('../assets/trees.jpg')} width="75%"/>
                </div>
                <div class="col-sm-1"></div>
            </div>
        </div>
        </div>
        </>    
    ); 
} 

export default Timer;