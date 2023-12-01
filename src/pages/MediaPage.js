import React from 'react';
import {
    Breadcrumb, BreadcrumbItem, Container, Row, Col
} from 'reactstrap';
import { Link } from 'react-router-dom';

const MediaPage = () => {
    return (
        <div className='bg-secondary'>
            <Breadcrumb>
                <BreadcrumbItem><Link className='text-danger' to='/'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Media</BreadcrumbItem>
            </Breadcrumb>
            <Container>
                <Row>
                <h1 className='d-flex justify-content-center text-danger'>Media</h1>
                <hr />
                        <Col className='justify-content-center mediaStyle bg-white'>
                            <div className="embed-responsive embed-responsive-21by9">
                            <iframe className="embed-responsive-item" src='https://www.youtube.com/embed/rXOKU_ne5zw' title="YouTube video player" type="video/mp4" controls allowFullScreen> Your browser does not support this video.
                            </iframe>
                            </div>
                            This video was recorded on December 5th, 2019 at Bedford High School in Bedford NH.
                                Kati Preston is a Holocaust Survivor and tells her story of living as a child during the Nazi persecution of the Jews in Europe.
                        </Col>
                        <br />
                        <Col className='justify-content-center mediaStyle bg-white'>
                            <div className="embed-responsive embed-responsive-21by9">
                            <iframe className='embed-responsive-item' src="https://www.youtube.com/embed/Sn2mhSi6AnQ" title="YouTube video player" controls allowfullscreen>Your browser does not support this video.</iframe>
                            </div>
                            <p>Holocaust Survivor Kati Preston speaks to students on Tolerance,
                                Acceptance and Forgiveness at Nashua High School North on Friday, February 21, 2020.
                                Introduction by NH Governor Chris Sununu.
                            </p>
                        </Col>
                        <br />
                        <Col className='justify-content-center mediaStyle bg-white'>
                            <div className="embed-responsive embed-responsive-21by9">
                            <iframe className='embed-responsive-item' src="https://www.youtube.com/embed/he-jEexqCLc" title="YouTube video player" controls allowfullscreen>Your browser does not support this video.</iframe>
                            </div>
                            <p>
                                Interview of Kathy (Kati) Preston, Holocaust survivor, author, educator.
                                Ms. Preston’s entire Jewish family of 28 members was exterminated in Auschwitz.
                                She survived the Holocaust by hiding in a barn. This interview was conducted in
                                November 2021 by Kenneth Litvak of the Jewish Federation of New Hampshire to commemorate International Holocaust Remembrance Day.
                            </p>
                        </Col>
                        <Col className='justify-content-center mediaStyle bg-white'>
                            <div class="embed-responsive embed-responsive-21by9">
                            <iframe class='embed-responsive-item' src="https://www.youtube.com/embed/pTYbsCpAqj8?si=gsv2M3WbJblKOgVn" title="YouTube video player" controls allowfullscreen></iframe>
                            </div>
                            <p>
                            Holocaust survivor Kati Preston was just five years old when a Hungarian soldier pierced the floor of a barn attic with his bayonet, missing her hay-covered head by an inch. This year marks the 75th anniversary of the liberation of Auschwitz, the largest Nazi concentration camp where 28 members of her family and 50 of her kindergarten classmates were exterminated. In part one, Kati shares her memories of the Holocaust.
                            </p>
                        </Col>
                        <Col className='justify-content-center mediaStyle bg-white'>
                            <div class="embed-responsive embed-responsive-21by9">
                            <iframe class='embed-responsive-item' src="https://www.youtube.com/embed/-vNarF29RZI?si=g0XOVD3LgXzpDEcc" title="YouTube video player" controls allowfullscreen></iframe>
                            </div>
                            <p>
                            Part Two: After the Holocaust, Kati Preston emigrates to Israel. She eventually becomes a highly-successful fashion designer, interacting with Christian Dior and Harry Winston while in Paris.  She learned eight languages, moved across seven countries, married three times, and gave birth to four sons. Autobiography: Holocaust to Healing: Closing the Circle. Website: katipreston.com.
                            </p>
                        </Col>
                        <Col className='justify-content-center mediaStyle bg-white'>
                            <div class="embed-responsive embed-responsive-21by9">
                            <iframe class='embed-responsive-item' src="https://www.youtube.com/embed/0d3ou8bCBRs?si=s2Xv2GatjdL07_fi" title="YouTube video player" controls allowfullscreen></iframe>
                            </div>
                            <p>
                            Part Three: In the final part of the interview, Kati Preston discusses her associations with Israeli government officials and fellow Holocaust survivors plus her current interests and her take on American politics.
                            </p>
                        </Col>
                </Row>
            </Container>
        </div>
    )
};

export default MediaPage;