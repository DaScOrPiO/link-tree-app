import React from 'react'
// import { useNavigate } from 'react-router-dom';

const Main = () => {
    return (
        <div className='general_container_2'>
            <div className='links'>
                <a href="https://twitter.com/oladunni_faith/" id='btn__zuri' target="_blank"
                    rel="noopener noreferrer">Twitter Link
                    <span className='subtext'>Twitter profile link</span>
                </a>
                <a href="https://training.zuri.team/" id='btn__zuri' target="_blank"
                    rel="noopener noreferrer">Zuri Team
                    <span className='subtext'>Meet the zuri team</span>
                </a>
                <a href="http://books.zuri.team/" id='books' target="_blank"
                    rel="noopener noreferrer">Zuri Books
                    <span className='subtext'>Get Web-design and coding books here</span>
                </a>
                <a href="https://books.zuri.team/python-for-beginners?ref_id=DaScOrPiO" id='book__python' target="_blank"
                    rel="noopener noreferrer">Python Books
                    <span className='subtext'>Want to learn or improve your python programming skills?
                        This is for you. Click now to get access and take your programming skills
                        to the next level.</span>
                </a>
                <a href="https://background.zuri.team/" id='pitch' target="_blank"
                    rel="noopener noreferrer">Background Check for Coders
                    <span className='subtext'>Are you skilled enough or want to be self conscious about your skills?
                        Click this button to find out.</span>
                </a>
                <a href="https://books.zuri.team/design-rules" id='book__design' target="_blank"
                    rel="noopener noreferrer">Design Books
                    <span className='subtext'>Free design books</span>
                </a>
                <a href='/contact'>Contact Me</a>
            </div>
            <div className='icons_main'>
                <div className='slack'>
                    <a href="#http">
                        <img src={require('../svg/slack.svg').default} alt='LogoIcon' />
                    </a>
                </div>
                <div className='github'>
                    <a href="https://github.com/DaScOrPiO">
                        <img src={require('../svg/Github-icon.svg').default} alt='LogoIcon' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Main;