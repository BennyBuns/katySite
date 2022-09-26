import React from 'react';
import { Card, CardBody, CardDeck, CardImg, CardImgOverlay, CardTitle, Button } from 'reactstrap';
import sununu from '../assets/Sununu.jpg'

const HomePage = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div>
                        <Card>
                            <CardImg className='card-img-top' width="25%" src={sununu} alt='kati picture'></CardImg>
                            <CardImgOverlay>
                                <CardTitle> Gov. Sununu Signing Holocaust education bill</CardTitle>
                            </CardImgOverlay>
                            <CardBody>
                                <blockquote className="blockquote">
                                    <p className="mb-0">“I honestly think this generation of kids in school today will save the world, I want to give them the opportunity to hear,
                                        to learn the history of what can happen with prejudice and how far it can be pushed.”

                                    </p> <br />
                                    <footer className="blockquote-footer">
                                        Gov. Sununu
                                    </footer>
                                </blockquote>
                            </CardBody>
                        </Card>
                        <br/>
                        <div className='col d-flex align-item-center'>
                            <a href="https://www.sentinelsource.com/news/local/sununu-signs-genocide-education-bill/article_c7321fde-b09c-5934-bdda-024763960aa5.html">
                                <Button color="primary" size="lg">Link to article</Button>
                            </a>{' '}
                        </div>
                    </div>
                   
                    <CardDeck>
                    <div className='col '>
                    <br/>
                    <br/>
                        <h2 className='col d-flex justify-content-center'>Testimonials</h2>
                            <Card className="bg-light mt-3">
                                <CardBody>
                                    <blockquote className="blockquote">
                                        <p className="mb-0">“Your devotion speaking to groups and students is so selfless, but I was amazed when witnessing myself the impact you had on all the students at Strafford. They are still talking about it, and ways they can contribute to society
                                         to make it a better place to live…you are a hero to these students and I truly believe they will never forget you.”</p> <br />
                                        <footer className="blockquote-footer">Kristine, 8th grade teacher at Strafford{' '}
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </Card>
                        </div>
                        <div className='col '>
                            <Card className="bg-light mt-3">
                                <CardBody>
                                    <blockquote className="blockquote">
                                        <p className="mb-0">“Words cannot describe how amazing you are. You have made me change my way of thinking...You have changed my way of how not to hate [because] you went through horrible things and you found a way to not hate.”</p> <br />
                                        <footer className="blockquote-footer">Hannah Littlefield{' '}
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col">
                            <Card className="bg-light mt-3">
                                <CardBody>
                                    <blockquote className="blockquote">
                                        <p className="mb-0">“You are an inspiration to those of us who are going to push forward and make something like the Holocaust never happen again.”</p> <br />
                                        <footer className="blockquote-footer"> Emily,{' '}
                                            <cite title="Source Title">8th Grade</cite>
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col">
                            <Card className="bg-light mt-3">
                                <CardBody>
                                    <blockquote className="blockquote">
                                        <p className="mb-0">“At my old school, I never really learned about the Holocaust as deep as we learn about it here. I am thankful that you came to further my knowledge about the past and how survivors have their own story. You are such a nice person and for you to share your story to thousands of students is just amazing. Thank you!”</p> <br />
                                        <footer className="blockquote-footer">Delaney Clough,{' '}
                                            <cite title="Source Title">8th Grade</cite>
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </Card>
                        </div>
                    </CardDeck>
                </div>
            </div>
        </div>
    )
};

export default HomePage;