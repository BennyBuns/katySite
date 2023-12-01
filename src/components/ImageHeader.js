import React from 'react';
import katiLogo from '../assets/katiLogo.jpg';

const HeaderImg = () => {
    return (
        <section className='bg-secondary cover'>
            <div className='container'>
                <div className='row'>
                    <div className='col headerBackground'>
                        <img className='img-fluid' src={katiLogo} alt='Kati Preston Logo'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderImg;