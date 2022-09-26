import React from 'react';
import {
    Breadcrumb, BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const ContactPage = () => {
    return <div className="container">
        <div className="row">
            <div className="col">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <h2>Contact Us</h2>
                <hr />
            </div>
        </div>
        <div>
            <h2>Lecture</h2>
            <p>
                To set up a lecture please contact at the number or email listed. <br/>
                A small honorarium between $200 - $500 depending on travel and time commitment to help pay for a driver would be appriciated.
            </p>
        </div>
        <div className="row row-content align-items-center">
            <div className="col-sm-4">
                <h5>Our Address</h5>
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
    </div>
};

export default ContactPage;