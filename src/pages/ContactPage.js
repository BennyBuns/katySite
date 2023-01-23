import React from 'react';
import {
    Breadcrumb, BreadcrumbItem, Container, Row, Col
} from 'reactstrap';
import { Link } from 'react-router-dom';

const ContactPage = () => {
    return (
        <div className='bg-secondary'>
            <Breadcrumb>
                <BreadcrumbItem><Link className='text-danger' to='/'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Contact Us</BreadcrumbItem>
            </Breadcrumb>
            <Container>
                <Row>
                    <Col className='bg-dark text-white'>
                        <h1 className='d-flex justify-content-center text-danger'>Contact Us</h1>
                        <hr />
                        <h2 className='d-flex justify-content-center text-danger'>Book an Event</h2>
                        <p>
                            To set up a lecture please contact at the number or email listed below.
                        </p>
                        <h3 className='d-flex justify-content-center text-danger'>Compensation</h3>
                        <p> A small honorarium between $250 - $500 depending on travel and time commitment to help pay for a driver and travel expenses would be appreciated.</p>
                        <div className="row row-content align-items-center">
                            <div className="col-sm-4">
                                <h5 className='d-flex justify-content-center text-danger'>Our Address</h5>
                                <address>
                                    1053 North Barnstead rd<br />
                                    Center Barnstead, NH 03225<br />
                                    U.S.A.
                                </address>
                            </div>
                            <div className="col">
                                <a role="button" className="btn btn-link" href="tel:+16037766044"><i className="fa fa-phone" /> 1-603-674-6734</a><br />
                                <a role="button" className="btn btn-link" href="mailto:hamp@tds.net"><i className="fa fa-envelope-o" /> hamp@tds.net</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
};

export default ContactPage;