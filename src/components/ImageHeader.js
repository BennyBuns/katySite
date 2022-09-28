import React from 'react';
import katiLogo from '../assets/katiLogo.jpg';

const HeaderImg = () => {
    return (
        <section>
            <div style={{ backgroundImage: `url(${katiLogo})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'}}>

                <div className="container" style={{minHeight: '440px'}}>
                    <div className='row'>
                    <div className="col text-center justify-content-center align-self-center">
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderImg;