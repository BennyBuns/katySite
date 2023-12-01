import React from 'react';
import {
    Card, CardBody, CardDeck, CardImg, CardTitle,
    Container, Row, Col
} from 'reactstrap';
import 'bootstrap'
import katiPrestonFrontPorch from '../assets/katiPrestonFrontPorch.jpg'
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
                    </Row>
                    <Row>
                    <Col className='col-12 col-lg-6'>
                        <Card className='cardStyle bg-dark text-white'>
                            <CardImg className='card-img-top' width="25%" src={katiPrestonFrontPorch} alt='kati picture'></CardImg>

                            <CardTitle classname=''> Teachers struggle to teach the Holocaust without running afoul of new ‘divisive concepts’ rules </CardTitle>
                            <CardBody className='cardbody'>

                                <blockquote className="blockquote">
                                    <p className="mb-0">For more than a decade, Preston, now 84 and the author of the young adult graphic memoir “Hidden: A True Story of the Holocaust,” has been invited to 50 to 70 middle and high schools a year to share her story. She speaks primarily in New Hampshire, her home of 40 years. Last spring, she started becoming more political in her talks, especially about the dangers of staying silent when others are scapegoated. “Ten percent of people are
                                        very good people, wonderful people. Ten percent are pretty awful. Eighty percent are sheep, and that’s what scares me,” Preston told the students at Kingswood Regional High. “It’s the sheep that allowed Hitler to rise.” 
                                    </p> <br />
                                    <footer className="blockquote-footer text-white">
                                        Kati Preston, a Holocaust survivor and education speaker, at her home in New Hampshire. Credit: Vanessa Leroy for The Boston Globe

                                    </footer>
                                </blockquote>
                                <a className="btn btn-danger d-flex justify-content-center" target="_blank" rel="noopener noreferrer" href="https://hechingerreport.org/teachers-struggle-to-teach-the-holocaust-without-running-afoul-of-new-divisive-concepts-rules/">
                                    Link to article
                                </a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className='col-12 col-lg-6'>
                        <Card className='cardStyle bg-dark text-white'>
                            <CardImg className='card-img-top' width="25%" src={sununu} alt='kati picture'></CardImg>

                            <CardTitle> Gov. Sununu Signing Holocaust education bill</CardTitle>
                            <CardBody className='cardbody'>

                                <blockquote className="blockquote  text-white">
                                    <p className="mb-0">Teaching about the Holocaust and genocide prevention will be required under New Hampshire’s definition of an adequate education, as part of a bill Gov. Chris Sununu signed into law Thursday.
                                        Sununu was joined for the occasion by Kati Preston, a Holocaust survivor and Center Barnstead resident.
                                        “I honestly think this generation of kids in school today will save the world,” Preston said, according to a news release from the governor’s office. “I want to give them the opportunity to hear, to learn — to learn the history of what can happen with prejudice and how far it can be pushed.”
                                        In addition to making Holocaust and genocide-prevention education compulsory, the new law establishes a commission to study best practices for the subjects’ instruction.
                                    </p> <br />
                                    <footer className="blockquote-footer text-white">
                                        Kati Preston
                                    </footer>
                                </blockquote>
                                <a class="btn btn-danger d-flex justify-content-center" target="_blank" rel="noreferrer" href="https://www.sentinelsource.com/news/local/sununu-signs-genocide-education-bill/article_c7321fde-b09c-5934-bdda-024763960aa5.html">
                                    Link to article
                                </a>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <CardDeck>
                        <Col>
                            <br />
                            <br />
                            <h2 className='col d-flex justify-content-center text-danger'>Testimonials</h2>
                            <Card className="cardStyle mt-3 bg-dark text-white">
                                <CardBody>
                                    <blockquote className="blockquote">
                                        <p className="mb-0 ">“Your devotion speaking to groups and students is so selfless, but I was amazed when witnessing myself the impact you had on all the students at Strafford. They are still talking about it, and ways they can contribute to society
                                            to make it a better place to live…you are a hero to these students and I truly believe they will never forget you.”</p> <br />
                                        <footer className="blockquote-footer">Kristine, 8th grade teacher at Strafford{' '}
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="cardStyle mt-3 bg-dark text-white">
                                <CardBody>
                                    <blockquote className="blockquote">
                                        <p className="mb-0">“Kati Preston is a masterful presenter who weaves an inspiring personal narrative that is certain to engage your students. She expresses the painful elements of her family's history in Romania during the Holocaust. However, she has transformed that loss into an inspirational message of unity, peace and meaningful dialogue with others. At this time of uncertainty and discord, Kati offers students a pathway to navigate public discourse and to draw lessons that transcend the traditional history lesson.”</p> <br />
                                        <footer className="blockquote-footer">-Dr. William R. Driscoll{' '}
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="cardStyle mt-3 bg-dark text-white">
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
                            <Card className="cardStyle mt-3 bg-dark text-white">
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