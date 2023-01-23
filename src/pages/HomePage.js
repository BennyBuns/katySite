import React from 'react';
import {
    Card, CardBody, CardDeck, CardImg, CardImgOverlay, CardTitle,
    Container, Row, Col
} from 'reactstrap';
import sununu from '../assets/Sununu.jpg'

const HomePage = () => {
    return (
        <div className='bg-secondary'>
            <Container>
                <Row >
                    <Col className='d-flex justify-content-center'>
                        <Card className='cardStyle bg-dark text-white'>
                            <CardTitle>Kati’s Story and Message:</CardTitle>
                            <CardBody>
                                Kati (KAH-TEE) has shared her story of survival with countless school children throughout New England.
                                Her focus is on the next generation who she believes “will save the world”.
                                Her talks invite her audience to take a journey through history as she recounts the details of her early childhood in Nazi-occupied Hungary.
                                28 members of Kati’s family perished, including her beloved father.
                                Kati is with us today due to the kind and courageous acts of one single person during the final stages of World War II.
                                Her lasting message is to never underestimate the power of one.
                                She reminds students of the power they possess to do the right thing and the importance of acting with compassion to fight against hate and prejudice.
                                She warns against bullying and to embrace others who are different from ourselves.
                                She has engaged adult audiences alike, speaking to groups at historical museums, teacher and administrator conferences, faith groups, and local prisons.
                                Her story of overcoming the unspeakable atrocities of WWII resonates with people from all walks of life.
                                Her message of hope and conquering hateful acts with love and kindness is a message for all of humanity.
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className='col-12 col-lg-6'>
                        <Card className='cardStyle bg-dark text-white'>
                            <CardImg className='card-img-top' width="25%" src={sununu} alt='kati picture'></CardImg>
                            
                                <CardTitle> Gov. Sununu Signing Holocaust education bill</CardTitle>
                            <CardBody className='cardbody'>
                               
                                <blockquote className="blockquote">
                                    <p className="mb-0">“I honestly think this generation of kids in school today will save the world, I want to give them the opportunity to hear,
                                        to learn the history of what can happen with prejudice and how far it can be pushed.”

                                    </p> <br />
                                    <footer className="blockquote-footer">
                                        Gov. Sununu      
                                    </footer>
                                </blockquote>
                                <a class="btn btn-danger d-flex justify-content-center" target="_blank" href="https://www.sentinelsource.com/news/local/sununu-signs-genocide-education-bill/article_c7321fde-b09c-5934-bdda-024763960aa5.html">
                                    Link to article
                                </a>
                            </CardBody>
                        </Card>

                    </Col>

                    <CardDeck>
                        <Col>
                            <br />
                            <br />
                            <h2 className='col d-flex justify-content-center text-danger'>Testimonials</h2>
                            <Card className="cardStyle bg-dark text-white mt-3">
                                <CardBody>
                                    <blockquote className="blockquote">
                                        <p className="mb-0">“Your devotion speaking to groups and students is so selfless, but I was amazed when witnessing myself the impact you had on all the students at Strafford. They are still talking about it, and ways they can contribute to society
                                            to make it a better place to live…you are a hero to these students and I truly believe they will never forget you.”</p> <br />
                                        <footer className="blockquote-footer">Kristine, 8th grade teacher at Strafford{' '}
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="cardStyle bg-dark text-white mt-3">
                                <CardBody>
                                    <blockquote className="blockquote">
                                        <p className="mb-0">“Words cannot describe how amazing you are. You have made me change my way of thinking...You have changed my way of how not to hate [because] you went through horrible things and you found a way to not hate.”</p> <br />
                                        <footer className="blockquote-footer">Hannah Littlefield{' '}
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="cardStyle bg-dark text-white mt-3">
                                <CardBody>
                                    <blockquote className="blockquote">
                                        <p className="mb-0">“You are an inspiration to those of us who are going to push forward and make something like the Holocaust never happen again.”</p> <br />
                                        <footer className="blockquote-footer"> Emily,{' '}
                                            <cite title="Source Title">8th Grade</cite>
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="cardStyle bg-dark text-white mt-3">
                                <CardBody>
                                    <blockquote className="blockquote">
                                        <p className="mb-0">“At my old school, I never really learned about the Holocaust as deep as we learn about it here. I am thankful that you came to further my knowledge about the past and how survivors have their own story. You are such a nice person and for you to share your story to thousands of students is just amazing. Thank you!”</p> <br />
                                        <footer className="blockquote-footer">Delaney Clough,{' '}
                                            <cite title="Source Title">8th Grade</cite>
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </Card>
                        </Col>
                    </CardDeck>
                </Row>
            </Container>
        </div>
    )
};

export default HomePage;