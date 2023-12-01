import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardTitle, Container, Row, Col,
    Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import closingTheCircle from '../assets/closingTheCircle.jpg';
import hidden from '../assets/Hidden.jpg';
import { Link } from 'react-router-dom';


const ShopPage = () => {
    return (
        <div className='bg-secondary'>
            <Breadcrumb>
                <BreadcrumbItem><Link className='text-danger' to='/'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Shop</BreadcrumbItem>
            </Breadcrumb>
            <h1 className='d-flex justify-content-center text-danger'> Shop </h1>
            <hr />
            <Container>
                <Row>
                    <Col className='col-12 col-lg-6' >


                        <div>
                            <Card className='cardStyle'>
                                <CardImg className=' card-img-top' src={closingTheCircle} alt='Closing the Circle book cover' />
                                <CardBody className='cardbody'>
                                    <CardTitle>Holocaust to Healing: Closing The Circle</CardTitle>
                                    <CardText>This is the candid, no-hold-barred autobiography of Kati Preston: Holocaust & cancer survivor, wife, mother, grandmother, mentor, fashion designer, model, journalist, entrepreneur, impresario, friend, cook, public speaker and campaigner against hate of any sort. <br />
                                        The book starting at the outset of World War II spans seven decades across seven countries: Hungary (Transylvania), Israel, France, Great Britain, Italy, Portugal & the U.S.A. It is a book that deftly chronicles love, persecution, triumph, adversity, turmoil, peace, affairs, partings, collaborations, betrayals, births and deaths. <br />
                                        It is a veritable history lesson told with much humor, insights, incisiveness and empathy. She knew and interacted with many a famous person in multiple countries, in multiple scenarios. Now in her seventies she is an indefatigable and much sought after inspirational speaker to the younger generation <br />
                                        her message always that of love, tolerance, acceptance and inclusiveness given the experiences to the contrary she experienced firsthand.
                                    </CardText>
                                    <a class="btn btn-danger d-flex justify-content-center" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/Holocaust-Healing-Closing-Kati-Preston/dp/1519621248">
                                        Buy now
                                    </a>
                                </CardBody>
                            </Card>
                        </div>
                        <br />
                    </Col>

                    <Col className='col-12 col-lg-6'>
                        <Card className='cardStyle'>
                            <CardImg className='card-img-top' src={hidden} alt='Hidden book cover' />
                            <CardBody className='cardbody'>
                                <CardTitle>Hidden</CardTitle>
                                <CardText>
                                    HIDDEN is the compelling story told from the child’s perspective of Kati Preston, who lost her extended Jewish family in the Holocaust and was saved when she was 5 years old.
                                    It is beautifully illustrated in color as a graphic novel.
                                    Kati Preston was born in Hungary in 1939, the only child born to a Jewish father and a Catholic mother.
                                    Twenty-eight members of Kati’s Jewish family perished in Auschwitz.
                                    After successful careers as a journalist, international fashion designer, EMT, and owner of an educational theater company, Kati realized that what matters most is sharing 
                                    her story of survival in order to educate others of the devastating consequences of hate and prejudice.
                                    <br />
                                    ILLUSTRATOR Dilleen Marsh works from her southwestern desert studio in Utah communicating ideas through art.
                                    She has illustrated 10 children’s books, designed a magazine for teenagers, created an art curriculum for an elementary school, and taught at a university.
                                    Dilleen has exhibited and won awards in various shows and galleries, locally, and nationally.
                                    For over three years she sketched and wrote a daily Instagram with stories and observations.
                                    This led to being included in a sketchbook show in New York City, various PowerPoint presentations, and working on HIDDEN with author Kati Preston in New Hampshire.
                                    You can see her paintings and illustrations at <a href='https://www.dilleenmarsh.com/' target="_blank" rel="noopener noreferrer">dilleenmarsh.com</a>.
                                    <br />
                                    <br />
                                    Advance copies can be bought directly from Kati, shipments over 10 are reduced to $15 plus shipping. Call the telephone  <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+16036746734'
                        >
                            <i className='fa fa-phone' /> 1-603-674-6734
                        </a> 
                        for further details.
                                </CardText>
                                <a class="btn btn-danger d-flex justify-content-center" target="_blank" rel="noopener noreferrer" href="https://pathway-book-service-cart.mypinnaclecart.com/peter-e-randall/hidden-a-true-story-of-the-holocaust/">
                                    Buy now
                                </a>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default ShopPage;