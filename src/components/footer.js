import React from 'react'

const Footer = () => {
    return (
        <div className='general_container_3'>
            <div className='logo_1'>
                <img src={require('../svg/Zuri.Internship_Logo.svg').default} alt='SvgImage' />
            </div>
            <div className='text'>
                <p>HNG Internship 9 Frontend Task</p>
            </div>
            <div className='logo_2'>
                <img src={require('../svg/I4G.svg').default} alt='SvgImage' />
            </div>
        </div>
    )
}

export default Footer;