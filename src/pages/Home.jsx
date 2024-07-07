import React from 'react'; 
import { Image } from 'react-bootstrap';

function Home() {     
    return (         
      <>
        <div class="container my-4"></div>
        <div style={{ display: 'block', width: '100%', padding: 0 }} class="bg-mygreen">
          <p className='pt-5'>
          Sign In to start studying smart with our helpful tools<button type="gosignin" className="custom-secondary mb-3 ms-4"><a class="nav-link" href="/SignIn">Sign In</a></button>
          </p>
        </div>

        <h1 className="pt-4 my-2">Learn the Benifits of Studying Smart</h1>
        <div class="container mb-4 p-4">
            <div class="row">
                <div class="col-sm-4 bg-black m-0 p-0">
                <img src={require('../assets/tutor.jpg')} width="100%"/>
                </div>
                <div class="col-sm-8 bg-white p-4 text-start">
                    <h2>Tutoring</h2>
                    <p>
                    Tutors can provide personalized support and guidance that is not always available in traditional classroom settings. Tutors have the ability to cater to the student’s specific learning needs and adapt their teaching methods to match the unique learning style of each student, whether they require extra explanations, practice problems, or alternative approaches to understanding complex concepts. This tailored approach not only enhances comprehension but also boosts confidence by addressing specific areas of difficulty. Overall, the personalized and supportive nature of tutoring fosters a positive learning experience that empowers students to excel academically.
              
                    </p>
                    <button type="gotutors" className="custom-primary m-2"><a class="nav-link" href="/Tutors">Find your Tutor</a></button>
                </div>
            </div>
        </div>
        <div class="container my-4 p-4">
            <div class="row">
                <div class="col-sm-8 bg-white p-4 text-start">
                    <h2>Planning</h2>
                    <p>
                    Using a planner to schedule study time helps to promote organization by clearly outlining when assignments are due and when exams are scheduled, preventing last-minute cramming. This method also encourages consistency in studying, spreading out workload efficiently over time rather than overwhelming students with too much at once. Additionally, planning study sessions allows for better time management, ensuring students allocate sufficient time for each subject or task. Ultimately, using a planner helps students stay on track, reduce stress, and maintain a balanced approach to their academic responsibilities.

                    </p>
                    <button type="goplanner" className="custom-primary m-2"><a class="nav-link" href="/Planner">Start Planning</a></button>
                </div>
                <div class="col-sm-4 bg-black m-0 p-0">
                <img src={require('../assets/planner.jpeg')} width="100%"/>
                </div>
            </div>
        </div>
        <div class="container my-4 p-4">
            <div class="row">
                <div class="col-sm-4 bg-black m-0 p-0">
                <img src={require('../assets/timer.jpeg')} width="100%"/>
                </div>
                <div class="col-sm-8 bg-white p-4 text-start">
                    <h2>Timing</h2>
                    <p>
                    Study timers are beneficial tools for students as they promote focused and efficient study sessions. By setting a specific time limit for studying a particular subject or task, students can maintain concentration and avoid distractions. Study timers create a sense of urgency that helps in staying motivated and productive throughout the study period. Moreover, study timers break down study sessions into manageable chunks, preventing burnout and enhancing retention of information. By regularly using study timers, students develop discipline in time management and improve their overall study habits, leading to more effective learning outcomes.
                    
                    </p>
                    <button type="gotiming" className="custom-primary m-2"><a class="nav-link" href="/Timer">Reach your Goals</a></button>
                </div>
            </div>
        </div>
        </>     
    ); 
} 

export default Home;