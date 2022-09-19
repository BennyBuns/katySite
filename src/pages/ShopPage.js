import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardTitle, Container, Row, Col,
    Breadcrumb, BreadcrumbItem, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import closingTheCircle from '../assets/closingTheCircle.jpg'

const ShopPage = () => {
    return (
        <Container>
            <Row>
                <Col className='col-md m-1'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Shop</BreadcrumbItem>
                    </Breadcrumb>
                    <h2> Shop </h2>
                    <hr />
                    <Card className='align-items-center'>
                        <CardImg src={closingTheCircle} alt='closing the cirlce book cover' />
                        <CardBody>
                            <CardTitle>Holocaust to Healing: Closing The Circle</CardTitle>
                            <CardText>This is the candid, no-hold-barred autobiography of Kati Preston: Holocaust & cancer survivor, wife, mother, grandmother, mentor, fashion designer, model, journalist, entrepreneur, impresario, friend, cook, public speaker and campaigner against hate of any sort. <br />
                                The book starting at the outset of World War II spans seven decades across seven countries: Hungary (Transylvania), Israel, France, Great Britain, Italy, Portugal & the U.S.A. It is a book that deftly chronicles love, persecution, triumph, adversity, turmoil, peace, affairs, partings, collaborations, betrayals, births and deaths. <br />
                                It is a veritable history lesson told with much humor, insights, incisiveness and empathy. She knew and interacted with many a famous person in multiple countries, in multiple scenarios. Now in her seventies she is an indefatigable and much sought after inspirational speaker to the younger generation <br />
                                her message always that of love, tolerance, acceptance and inclusiveness given the experiences to the contrary she experienced firsthand.
                            </CardText>
                        </CardBody>
                    </Card>
                    <br />
                    <div>
                        <a href="https://www.amazon.com/Holocaust-Healing-Closing-Kati-Preston/dp/1519621248">
                            <Button color="primary" size="lg" >Buy now</Button>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default ShopPage;