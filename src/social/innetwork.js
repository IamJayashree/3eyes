import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';

export default function InNetwork() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="floating-button">
                <span class="spinner-grow spinner-grow-sm me-3" role="status" aria-hidden="true"></span>
                Need assistance?
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Need Professional Help?</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Advisory assistance</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>Name: AnnMarie <br />
                                        Contct Details: XXX-XXX-XXXX<br />
                                        Address: 123 Main St</li>
                                    <li>Name: Lisa  <br />
                                        Contct Details: XXX-XXX-XXXX<br />
                                        Address: 123 Main St</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Mental Helath assistance</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>Name: AnnMarie <br />
                                        Contct Details: XXX-XXX-XXXX<br />
                                        Address: 123 Main St</li>
                                    <li>Name: Lisa  <br />
                                        Contct Details: XXX-XXX-XXXX<br />
                                        Address: 123 Main St</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Personal Care</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>Name: AnnMarie <br />
                                        Contct Details: XXX-XXX-XXXX<br />
                                        Address: 123 Main St</li>
                                    <li>Name: Lisa  <br />
                                        Contct Details: XXX-XXX-XXXX<br />
                                        Address: 123 Main St</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Educational assistance</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>Name: AnnMarie <br />
                                        Contct Details: XXX-XXX-XXXX<br />
                                        Address: 123 Main St</li>
                                    <li>Name: Lisa  <br />
                                        Contct Details: XXX-XXX-XXXX<br />
                                        Address: 123 Main St</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}