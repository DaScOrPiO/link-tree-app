import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
    // const initialValues = { lastname: '', firstname: '', mail: '', message: '' }
    const [inputs, SetInputs, TextArea] = useState({});
    const [FormErrors, SetFormErrors] = useState({});
    const [isSubmit, SetIsSubmit] = useState(false);
    const name = `DaScOrPiO`;

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        SetInputs(values => ({ ...values, [name]: value }));
    }

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const err = validate(inputs);
        SetFormErrors(err)
        SetIsSubmit(true);
        e.target.reset();
    }
    
    if(Object.keys(FormErrors).length === 0 && isSubmit){
        const btn = document.querySelector('.submit-btn');
        btn.innerText = `Messsage Sent, redirecting...`;
        btn.disabled = true;
        btn.classList.add('disabled');
        btn.classList.remove('enabled');
        setTimeout(() =>{
            navigate('/');
        }, 3000)
    }
    const validate = (values) => {
        const errors = {};
        const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!values.firstname) {
            errors.firstname = `Enter Firstname`;
        }
        if (!values.lastname) {
            errors.lastname = `Enter Lastname`;
        }
        if (!values.mail) {
            errors.mail = `Enter E-mail`;
        } else if (!regex.test(values.mail)) {
            errors.mail = 'This is not a vaild E-mail format!'
        }
        if (!values.message) {
            errors.message = `Required field`;
        }
        return errors;
    }

    return (
        <div className='general_container_4'>
            <div className='hero-msg'>
                <h1 className='h_msg'>Contact Me</h1>
                <p className='p_msg'>Hi there, contact me to ask me about anything you have in mind.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='text-inputs'>
                    <div className='render-msg'>
                        <label htmlFor='firstname' className='input-container'>First name
                            <input type="text" name="firstname" id='first_name' className='border' value={inputs.firstname || ''}
                                placeholder="Enter your first name" onChange={handleChange} />
                        </label>
                        <p className='error-msg'>{FormErrors.firstname}</p>
                    </div>

                    <div className='render-msg'>
                        <label htmlFor='lastname' className='input-container'> Last name
                            <input type="text" name="lastname" id='last_name' className='border' value={inputs.lastname || ''}
                                placeholder="Enter your last name" onChange={handleChange} />
                        </label>
                        <p className='error-msg'>{FormErrors.lastname}</p>
                    </div>
                </div>

                <div className='mail'>
                    <label htmlFor='email' className='input-container'>Email
                        <input type="email" name="mail" id='email' className='border' value={inputs.mail || ''}
                            placeholder="Yourname@email.com" onChange={handleChange} />
                    </label>
                    <p className='error-msg'>{FormErrors.mail}</p>
                </div>

                <div className='textarea'>
                    <label htmlFor='message' className='input-container'>Message
                        <textarea value={TextArea} className="border resize" name='message' id='message'
                            placeholder="Send me a message and i'll reply you s soon as possible..." onChange={handleChange} />
                    </label>
                    <p className='error-msg'>{FormErrors.message}</p>
                </div>

                <div className='check'>
                    <input type="checkbox" name="check" value={inputs.check || ''} />
                    <label htmlFor='checkbox'>{`You agree to providing your data to {${name}} who may contact you`}</label>
                </div>

                <div className='submit'>
                    <button type="submit" id='btn__submit' className='submit-btn enabled'>Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default ContactPage; 