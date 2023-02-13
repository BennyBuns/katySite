import React from 'react';
import {
    Breadcrumb, BreadcrumbItem, Container, Row, Col, Button
} from 'reactstrap';
import 'bootstrap'
import { Link } from 'react-router-dom';

const ContactPage = () => {
    return (
        <div className='bg-secondary'>
            <Breadcrumb>
                <BreadcrumbItem><Link className='text-danger' to='/'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Contact Us</BreadcrumbItem>
            </Breadcrumb>
            <Container className='mt-5'>
                <Row className='g-3'>
                    <div className='bg-dark text-white'>
                        <h1 className='d-flex justify-content-center text-danger'>Contact Us / Book an Event</h1>
                        <hr />
                        <h2 className='d-flex justify-content-center text-danger'>Book an Event</h2>
                        <p>
                            To set up a lecture please fill out the form and call the number listed below. <br/>
                        Please note that Kati’s speeches cover sensitive subjects as she relays real-life events.
                         The appropriate age groups are middle and high school age.<br/>
                         The speech lasts approximately 45 minutes with a 20 minute + Q & A session afterwards. 
                         Audience members are encouraged to ask questions or comment after the event <br/>
                         Kati has a driver who will assist her during the entire event <br/>
                         Occasionally, we will ask for permission to take photos. We do not include students in these photos.<br/>
                         In the event that a school has filmed the event we may ask permission to post media on her website. <br/>
                         Kati also does zoom events for classrooms- but prefers in person meetings
                        </p>
                        <h3 className='d-flex justify-content-center text-danger'>Compensation</h3>
                        <p> Currently, our standard speaker’s fee is $250.00. We will work within school/program budgets (fee is negotiable). Checks made out to Kati Preston.</p>
                        <form className='formgroup' action="https://formsubmit.co/hamp@tds.net" method="POST" >
                            <Col className='col-md-6'>
                                <label for='venue' class='form-label'>Name of Venue</label>
                                <input type='text' class='form-control' id='venue' name='name' required></input>
                                <label for='contact' class='form-label'>Name of Contact</label>
                                <input type='text' class='form-control' id='contact' name='contact name' required></input>
                                <label for='address' class='form-label'>Address of Venue</label>
                                <input type='text' class='form-control' id='address' name='address' required></input>
                                <label for='phone' class='form-label'>Phone Number of Contact</label>
                                <input type='text' class='form-control' id='phone' placeholder='555-555-5555' name='contact phone number' required></input>
                                <label for='phoneVenue' class='form-label'>Phone Number of Venue</label>
                                <input type='text' class='form-control' id='phoneVenue' placeholder='555-555-5555' name='venue phone number' required></input>
                            </Col>
                            <Col className='col-md-6'>
                                <label for='email' class='form-label'>E-Mail of Contact</label>
                                <input type='text' class='form-control' id='email' name='email of contact' required></input>
                            </Col>
                            <Col className='col-md-4 mt-3 mb-3'>
                                <label for="eventTime">Event (date and time):</label>
                                <input type="datetime-local" id="eventTime" name="event time" required/>
                            </Col>
                            <Col className='col-md-3'>
                                <label for="age">Audience Profile</label>
                                <select class="form-control" id="age" name='age range' required>
                                    <option>middle school</option>
                                    <option>high school</option>
                                    <option>university</option>
                                    <option>Adults</option>
                                </select>
                            </Col>
                            <Col className='col-md-3'>Number of Participants
                                <div class="radio" >
                                    <label><input type="radio" name="group size" />10 - 50</label>
                                </div>
                                <div class="radio">
                                    <label><input type="radio" name="group size" />50 - 100</label>
                                </div>
                                <div class="radio">
                                    <label><input type="radio" name="group size" />100 - 1000</label>
                                </div>
                            </Col>
                            <Col className='col-md-12'>
                                <label for="groupInfo">Information about your group (school program, interfaith event, etc.)</label>
                                <textarea class="form-control" rows="5" id="groupInfo" name='event info' required></textarea>
                            </Col>
                            <Col className='col-md-12'>
                                <label for="instructions">Instructions on Arrival</label>
                                <textarea class="form-control" rows="5" id="instructions" name='special instructions' ></textarea>
                            </Col>
                            <Col className='col-md-12'>
                            <Button type='submit' className='btn-danger mt-3'>Submit</Button>
                            </Col>
                        </form>
                        <div className="col justify-content-center ">
                            <h5 className='d-flex justify-content-center text-danger'>Contact Us</h5>
                            <address class='d-flex justify-content-center'>
                                1053 North Barnstead rd<br />
                                Center Barnstead, NH 03225<br />
                                U.S.A.
                            </address>
                        </div>
                    </div>
                </Row>
            </Container>
        </div >
    )
};

export default ContactPage;