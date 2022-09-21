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
                </div>
                <br />
                <div >
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Sn2mhSi6AnQ" title="YouTube video player" controls allowfullscreen>Your browser does not support this video.</iframe>
                </div>
                <br />
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/he-jEexqCLc" title="YouTube video player" controls allowfullscreen>Your browser does not support this video.</iframe>
                </div>
            </div>
            </div>
        </div>
    )
};

export default MediaPage;