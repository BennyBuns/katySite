import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import katyWave from '../assets/katyWave.jpeg'

const AboutPage = () => {
    return (
        <div className='container'>
            <div clasName='row'>
                <div className='col'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About</BreadcrumbItem>
                    </Breadcrumb>
                    <h2> About </h2>
                    <hr />
                </div>
            </div>
            <div className='row row-content '>
                <div className='col '>
                    <Card style={{ width: '18rem' }}>
                        <CardImg className='d-block mx-auto img-fluid' width="50%" src={katyWave} alt='katy picture' />
                        <CardImgOverlay>
                            <CardTitle >Katy Preston</CardTitle>

                        </CardImgOverlay>
                    </Card>
                    <Card>
                        <CardTitle>About</CardTitle>
                        <CardBody>Kati Preston: Holocaust & cancer survivor, wife, mother,
                            grandmother, mentor, fashion designer, model, journalist, entrepreneur, <br></br>
                            impresario, friend, cook, public speaker and campaigner against hate of
                            any sort. Born in Transylvania in 1939 she now lives in Barnstead, New Hampshire.
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
};

export default AboutPage;