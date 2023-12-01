import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/Media'>Media</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact / Book Event</Link>
                            </li>
                            <li>
                                <Link to='/shop'>Shop</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs='6' sm='3' className='text-center'>
                        <h5>Social</h5>
                        <a
                            className='btn btn-social-icon btn-google'
                            href='https://www.youtube.com/channel/UCUOq4-Q8nKzQTpfte2FhWwQ'
                        >
                            <i className='fa fa-youtube' />
                        </a>
                    </Col>
                    <Col sm='4' className='text-center'>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+16036746734'
                        >
                            <i className='fa fa-phone' /> 1-603-674-6734
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='hamp@tds.net'
                        >
                            <i className='fa fa-envelope-o' /> hamp@tds.net
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;