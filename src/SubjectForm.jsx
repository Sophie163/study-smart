// SubjectForm.jsx

import React from 'react';
import Form from 'react-bootstrap/Form';

const SubjectForm = () => {
    // List of checkbox labels
    const checkboxes = [
        "Biology", "Business", "Chemistry", "Computer Science",
        "Dance", "English", "French", "History",
        "Mathematics", "Music", "Performing Arts", "Physics", "Visual Arts"
    ];

    return (
        <Form className='text-start ms-2 mb-4 h5'>
            {checkboxes.map((label, index) => (
                <Form.Check
                    key={index}
                    type="checkbox"
                    id={`checkbox-${index}`}
                    label={label}
                    className='m-2 ms-3'
                />
            ))}
        </Form>
    );
};

export default SubjectForm;
