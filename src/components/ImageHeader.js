import React from 'react';
import katiLogo from '../assets/katiLogo.jpg';

const HeaderImg = () => {
    return (
        <section>
            <div style={{ backgroundImage: `url(${katiLogo})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50% 50%',
                backgroundSize: 'cover'}}>

                <div className="container d-flex justify-content-center" style={{minHeight: '240px'}}>
                </div>
            </div>
        </section>
    )
}

export default HeaderImg;