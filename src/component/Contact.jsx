import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './css/Contact.css';

const Contact = () =>{
    const [statusMessage, setStatusMessage] = useState(" ");

    const sendEmail =(e) => {
        e.preventDefault();
        const statusMessage = document.querySelector('.status-message');
        const form = document.querySelector('#contact-form');

        emailjs.sendForm('service_zfwm2mv','template_flva0gc', e.target,'user_2Csfrhh6MLVrJFLjfvAun')
        .then((result) => {
            console.log(result.text);
            setStatusMessage("Message sent!");
      statusMessage.className = "status-message success";
      setTimeout(()=> {
        statusMessage.className = 'status-message'
      }, 5000)
            form.reset();
        }, (error) => {
            console.log(error.text);
            setStatusMessage("Failed to send message! Please try again later.");
      statusMessage.className = "status-message failure";
      setTimeout(()=> {
        statusMessage.className = 'status-message'
      }, 5000)
        });
    }

    return(
        <>
            <div className="container ">
                <div className="my-5">
                    <h1 className="card text-center">HIRE ME</h1>
                </div>
                <div className="container contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form id="contact-form" onSubmit={sendEmail}>
                                <p className='status-message'>{statusMessage}</p>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                                    <input type="text" name="user_name" className="form-control" id="exampleFormControlInput1" placeholder="Name" required />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" name="useremail" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                    <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="3" required></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-outline-primary" type="submit">Submit form</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            
        </>
    )
};

export default Contact;