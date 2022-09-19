import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardTitle,
    Breadcrumb, BreadcrumbItem
} from 'reactstrap';

const MediaPage = () => {
    return (
        <div classname='container'>
            <div classname='row'>
                <div classname='col'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/rXOKU_ne5zw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br/>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Sn2mhSi6AnQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br/>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/he-jEexqCLc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            </div>
        </div>
    )
};

export default MediaPage;