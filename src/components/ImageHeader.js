import React from 'react';
import katiLogo from '../assets/katiLogo.jpg';

const HeaderImg = () => {
    return (
        <section className='bg-secondary'>
            <div className='container'>
                <div className='row'>
                    <div className='col headerBackground'>
                        <img className='headerImg' src={katiLogo} height={300} width={600}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderImg;