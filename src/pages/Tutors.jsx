import React from 'react'; 
import SubjectForm from '../SubjectForm';
import ObjectForm from '../OtherForm';
import RangeSliderComponent from '../RangeSlider';
import Tutor from '../tutor';

function Tutors() {     
    return (         
        <>
        <div style={{ display: 'block', width: '100%', padding: 25 }} class="bg-mygreen"></div>

        <div style={{ display: 'block', width: '100%', padding: 0 }}>
            <div class="row">
                <div class="col-sm-3 bg-mydarkgreen py-4 ps-4">
                    <h2 className='pb-2'>Subject</h2>
                    <SubjectForm />
                </div>
                    
                <div class="col-sm-3 bg-mygreen p-4">
                    <h2 className='pb-2'>Level</h2>
                    <ObjectForm />
                    <h2 className='pt-4'>Price</h2>
                    <RangeSliderComponent />
                </div>

                <div class="col-sm-6 m-0 pt-4 bg-mygreen">
                    <h2 className='pb-2'>Tutors</h2>
                        <Tutor />
                        <Tutor />
                        <Tutor />
                        <Tutor />
                </div>
            </div>
        </div>
        </> 
    ); 
} 

export default Tutors;