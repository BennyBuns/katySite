import React from 'react';
import {
    Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

const MediaPage = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Media</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Media</h2>
                    <hr />
                </div>
            </div>
            <div className='row row-content'>
                <div className='col-md-6'>
                    <div>
                        <iframe width="560" height="315" src='https://www.youtube.com/embed/rXOKU_ne5zw' type="video/mp4" controls allowFullScreen> Your browser does not support this video.
                        </iframe>
                        <p>
                            This video was recorded on December 5th, 2019 at Bedford High School in Bedford NH.
                            Kati Preston is a Holocaust Survivor and tells her story of living as a child during the Nazi persecution of the Jews in Europe.
                        </p>
                    </div>
                    <br />
                    <div >
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Sn2mhSi6AnQ" title="YouTube video player" controls allowfullscreen>Your browser does not support this video.</iframe>
                        <p>Holocaust Survivor Kati Preston speaks to students on Tolerance,
                            Acceptance and Forgiveness at Nashua High School North on Friday, February 21, 2020.
                            Introduction by NH Governor Chris Sununu.
                        </p>
                    </div>
                    <br />
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/he-jEexqCLc" title="YouTube video player" controls allowfullscreen>Your browser does not support this video.</iframe>
                        <p>
                            Interview of Kathy (Kati) Preston, Holocaust survivor, author, educator.
                            Ms. Preston’s entire Jewish family of 28 members was exterminated in Auschwitz.
                            She survived the Holocaust by hiding in a barn. This interview was conducted in
                            November 2021 by Kenneth Litvak of the Jewish Federation of New Hampshire to commemorate International Holocaust Remembrance Day.
                        </p>
                    </div>
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/_R2AuxQC4gs" title="YouTube video player" controls allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MediaPage;