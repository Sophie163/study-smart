// RangeSlider.jsx

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const RangeSliderComponent = () => {
    const [value, setValue] = useState(1);

    const handleChange = (e) => {
        setValue(parseInt(e.target.value, 10));
    };

    return (
        <Form>
            <Form.Group as={Col} controlId="formSlider">
                <Form.Range
                    value={value}
                    min={1}
                    max={100}
                    onChange={handleChange}
                />
                <Form.Label>Less than ${value} an hour</Form.Label>
            </Form.Group>
        </Form>
    );
};

export default RangeSliderComponent;
