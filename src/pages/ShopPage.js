import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardTitle, Container, Row, Col,
    Breadcrumb, BreadcrumbItem, Button
} from 'reactstrap';
import closingTheCircle from '../assets/closingTheCircle.jpg';
import hidden from '../assets/Hidden.jpg';
import { Link } from 'react-router-dom';


const ShopPage = () => {
    return (
        <Container>
            <Row>
                <Col className='col-md m-1'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Shop</BreadcrumbItem>
                    </Breadcrumb>
                    <h1 className='d-flex justify-content-center'> Shop </h1>
                    <hr />
                    <div>
                        <Card>
                            <CardImg className='card-img-top' width="25%" src={closingTheCircle} alt='Closing the Circle book cover' />
                            <CardBody>
                                <CardTitle>Holocaust to Healing: Closing The Circle</CardTitle>
                                <CardText>This is the candid, no-hold-barred autobiography of Kati Preston: Holocaust & cancer survivor, wife, mother, grandmother, mentor, fashion designer, model, journalist, entrepreneur, impresario, friend, cook, public speaker and campaigner against hate of any sort. <br />
                                    The book starting at the outset of World War II spans seven decades across seven countries: Hungary (Transylvania), Israel, France, Great Britain, Italy, Portugal & the U.S.A. It is a book that deftly chronicles love, persecution, triumph, adversity, turmoil, peace, affairs, partings, collaborations, betrayals, births and deaths. <br />
                                    It is a veritable history lesson told with much humor, insights, incisiveness and empathy. She knew and interacted with many a famous person in multiple countries, in multiple scenarios. Now in her seventies she is an indefatigable and much sought after inspirational speaker to the younger generation <br />
                                    her message always that of love, tolerance, acceptance and inclusiveness given the experiences to the contrary she experienced firsthand.
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <br />
                    <div>
                        <a className='d-flex justify-content-center' href="https://www.amazon.com/Holocaust-Healing-Closing-Kati-Preston/dp/1519621248">
                            <Button color="primary" size="lg" >Buy now</Button>
                        </a>
                    </div>
                    <br />
                    <br />
                    <h2 className='d-flex justify-content-center'>Coming Soon!</h2>
                    <Card>
                        <CardImg className='card-img-top' width="25%" src={hidden} alt='Closing the Circle book cover' />
                        <CardBody>
                            <CardTitle>Hidden</CardTitle>
                            <CardText>
                                HIDDEN is the true story of Kati Preston, who lost her father and her extended Jewish family in the Holocaust when she was 5 years old.
                                Fully illustrated, graphic novel
                                Over 175 images with full color throughout
                                Includes a Study Guide for schools
                                Endorsed by Governor Chris Sununu
                                <br />
                                <br/>
                                ILLUSTRATOR Dilleen Marsh works from her southwestern desert studio in Utah communicating ideas through art.
                                She has illustrated 10 children’s books, designed a magazine for teenagers, created an art curriculum for an elementary school, and taught at a university.
                                Dilleen has exhibited and won awards in various shows and galleries, locally, and nationally.
                                For over three years she sketched and wrote a daily Instagram with stories and observations.
                                This led to being included in a sketchbook show in New York City, various PowerPoint presentations, and working on HIDDEN with author Kati Preston in New Hampshire. 
                                You can see her paintings and illustrations at <a href='https://www.dilleenmarsh.com/'>dilleenmarsh.com</a>.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default ShopPage;