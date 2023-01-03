import React from 'react'

const Header = () => {
    return (
        <div className='general_container_1'>
            <div className='profile_section_container'>
                <div className='profile_img_container'>
                    <img id='profile_img' src={require('../svg/my bitmoji.jpg')} alt='ProfileImage' />
                    <div className='camera_icon'>
                        <img src={require('../pseudo-state/profile-hover.svg').default} className='camera'  alt="" />
                    </div>
                </div>
                <div id='twitter'><p>DaScOrPiO</p></div>
                <div id='slack'><p>DaScOrPiO</p></div>
            </div>
            <a href='#share' className='share-icon'>
                <img className='share_btn' src={require('../svg/share-btn.svg').default} alt='SvgImage' />
                <img className='more-btn' src={require('../svg/more-icon.svg').default} alt='SvgImage' />
            </a>
        </div>
    )
}

export default Header;