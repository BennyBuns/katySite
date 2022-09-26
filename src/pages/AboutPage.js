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
            <div className='row row-content'>
                <div className='col d-flex justify-content-center col-lg-8'>
                    <Card>
                        <CardImg max-height={600} max-width={300} src={katyWave} alt='kati picture' />
                        <CardImgOverlay>
                            <CardTitle>Kati Preston</CardTitle>
                        </CardImgOverlay>
                        <CardTitle>Biography</CardTitle>
                        <CardBody>Kati Preston is a Holocaust survivor, motivational speaker, author, and activist for tolerance and anti-bullying. She was born in Hungary in 1939 as the only child to a loving family. As the daughter of a Jewish father and a Catholic mother, Kati’s life was in danger when the war came to Hungary in 1944. Under threat of deportation, Kati was saved by a humble Christian peasant woman who risked her own life to hide Kati in her barn. However, twenty-eight members of Kati’s Jewish family, including her beloved father, perished in Auschwitz.
                            Recognizing that she survived while so many others perished, Kati wanted to have an active, meaningful life. After successful careers as a journalist, international fashion designer, EMT, and owner of an educational theater company, Kati realized that what matters most is sharing her story of survival in order to educate others of the devastating consequences of hate and prejudice.
                            Amidst the recent rise of hate, bullying, racism, and antisemitism around the world, Kati believes her story is more relevant than ever and seeks to spread it urgently. She speaks in schools, universities, synagogues, churches, museums, libraries, military establishments, and anywhere people will listen.
                            Kati has spoken at over seventy-five venues and has been featured in more than thirteen different newspapers. Recently, she was honored with the Susan J. Herman award for leadership in Holocaust and Genocide Awareness as well as the UNH Age of Champions Inspirational Award. Kati has written a book about her life called “Holocaust to Healing: Closing the Circle” and is currently finishing a graphic novel to provide better quality Holocaust education resources for middle school students.
                            Kati speaks about her experiences growing up after the tragedy of losing her family, but her message is being a survivor and not a victim. She is a mother to four sons and a grandmother to four girls. She travels throughout New England to share her message of hope, survival, and triumph over evil. Her optimism leaves her audiences energized to stand up, fight against hate, and improve their world.
                        </CardBody>
                        <CardTitle>Accomplishments/Awards:</CardTitle>
                        <CardBody>
                            -featured in 21 different articles from newspapers such as the Concord Monitor, The Telegraph, The Baysider, The Jewish Reporter, and The Union Leader<br />
                            -received numerous awards/recognitions including:<br />
                            Susan J. Herman Award for Leadership in Holocaust and Genocide Awareness (presented by the Cohen Center at Keene State College in 2016)
                            UNH Age of Champions Inspirational Award (2019) <br />
                            2017 Valued Presenter a The Cohen Center for Holocaust and Genocide Studies at Keene State College
                            Recognized for Support and Service to the 465th ASMC Spartan Medics <br />
                            -worked with the State of New Hampshire to assign April as Holocaust Awareness Month <br />
                            -currently working with Governor Sununu of New Hampshire to introduce and promote new legislation for better Holocaust education in NH
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
};

export default AboutPage;