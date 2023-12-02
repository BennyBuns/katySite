import React from 'react';
import Hidden from '../assets/hiddenBanner.png';

const HeaderImg = () => {
    return (
        <section className='bg-secondary cover'>
            <div className='container'>
                <div className='row'>
                    <div className='col headerBackground'>
                        <img className='img-fluid' src={Hidden} alt='Kati Preston Logo'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderImg;