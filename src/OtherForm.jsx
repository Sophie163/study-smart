// ObjectForm.jsx

import React from 'react';
import Form from 'react-bootstrap/Form';

const ObjectForm = () => {
    // List of checkbox labels
    const checkboxes = [
        "Elementary", "High School", "Post-Secondary"
    ];

    return (
        <Form className='text-start mb-4 h5'>
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

export default ObjectForm;
