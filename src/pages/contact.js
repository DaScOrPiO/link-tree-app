import React from 'react'
import { useState } from 'react'

const ContactPage = () => {
    const [inputs, SetInputs, SetTextArea, TextArea] = useState({});
    const radioText = `You agree to providing your data to {DaScOrPiO} who may contact you`;

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        SetInputs(values => ({ ...values, [name]: value }));
        SetTextArea(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='general_container_4'>
            <div className='hero-msg'>
                <h1 className='h_msg'>Contact Me</h1>
                <p className='p_msg'>Hi there, contact me to ask me about anything you have in mind.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='text-inputs'>
                    <label htmlFor='firstname' className='input-container'>First name
                        <input type="text" name="firstname" id='first_name' className='border' value={inputs.firstname || ''} 
                        placeholder="Enter your first name" onChange={handleChange} />
                    </label>

                    <label htmlFor="lastname" className='input-container'> Last name
                        <input type="text" name="lastname" id='last_name' className='border' value={inputs.lastname || ''} 
                        placeholder="Enter your last name" onChange={handleChange} />
                    </label>
                </div>

                <div className='mail'>
                    <label htmlFor="mail" className='input-container'>Email
                        <input type="email" name="mail" id='email' className='border' value={inputs.mail || ''} 
                        placeholder="Yourname@email.com" onChange={handleChange} />
                    </label>
                </div>

                <div className='textarea'>
                    <label htmlFor="message" className='input-container'>Message
                        <textarea value={TextArea} className="border resize" id='message'
                        placeholder="Send me a message and i'll reply you s soon as possible..." onChange={handleChange} />
                    </label>
                </div>

                <div className='check'>
                    <input type="radio" name="check" value={inputs.check || ''} />
                    <label>{radioText}</label>
                </div>

                <div className='submit'>
                    <input type="submit" id='btn__submit' className='submit-btn' value="Send message" />
                </div>
            </form>
        </div>
    )
}

export default ContactPage; 