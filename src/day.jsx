import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './custom.scss'

function Day() {
  return (
    <>
      <InputGroup className="mt-2 mb-3">
        <DropdownButton
          variant="outline-secondary"
          title=""
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">Tutoring Session</Dropdown.Item>
          <Dropdown.Item href="#">Test Date</Dropdown.Item>
          <Dropdown.Item href="#">Due Date</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Undo</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" />
      </InputGroup>

      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title=""
          id="input-group-dropdown-2"
        >
          <Dropdown.Item href="#">Tutoring Session</Dropdown.Item>
          <Dropdown.Item href="#">Test Date</Dropdown.Item>
          <Dropdown.Item href="#">Due Date</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Undo</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" />
      </InputGroup>

      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title=""
          id="input-group-dropdown-3"
        >
          <Dropdown.Item href="#">Tutoring Session</Dropdown.Item>
          <Dropdown.Item href="#">Test Date</Dropdown.Item>
          <Dropdown.Item href="#">Due Date</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Undo</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" />
      </InputGroup>

      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title=""
          id="input-group-dropdown-4"
        >
          <Dropdown.Item href="#">Tutoring Session</Dropdown.Item>
          <Dropdown.Item href="#">Test Date</Dropdown.Item>
          <Dropdown.Item href="#">Due Date</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Undo</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" />
      </InputGroup>

      <InputGroup className="mb-2">
        <DropdownButton
          variant="outline-secondary"
          title=""
          id="input-group-dropdown-5"
        >
          <Dropdown.Item href="#">Tutoring Session</Dropdown.Item>
          <Dropdown.Item href="#">Test Date</Dropdown.Item>
          <Dropdown.Item href="#">Due Date</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Undo</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" />
      </InputGroup>
    </>
  );
}

export default Day;