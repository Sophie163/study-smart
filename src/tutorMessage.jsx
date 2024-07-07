import React from 'react'; 

function TutorMessage() {     
    return (         
        <>
        <div class="row mt-2 ps-2">
            <div class="col-sm-2 bg-mygreen p-2">
                <img src={require('../src/assets/profile.jpg')} width="100%"/>
            </div>
                
            <div class="col-sm-10 bg-mygreen text-start px-0">
                <a class="nav-link" href="/Messages"><h3 className='m-0 p-0'>Name</h3></a>
                <p className='subjects m-0 p-0'>Most resent message </p>
            </div>
        </div>
        </> 
    ); 
} 

export default TutorMessage;