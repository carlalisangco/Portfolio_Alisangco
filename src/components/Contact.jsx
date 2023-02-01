import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default function Contact (props){
  const form = useRef();
  const name = useRef();
  const email_ref = useRef();
  const msg = useRef();
  const [Close, setClose] = useState(false)

  const handleClose =()=>{
    setClose(false)
  }
  
  const sendEmail = (e) => {
    e.preventDefault();
  
    msg.current.value=''
    name.current.value=''
    email_ref.current.value=''

    emailjs.sendForm('service_1x2iw3s', 'template_5109ji8', form.current, '57KNmk21agGBbv-j1')
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });

    setClose(true)
  };

  return (<>
    <form ref={form} onSubmit={sendEmail}>
      <div className="input-box">
        <input ref={name} className='name' type="text" name="user_name" placeholder='Type your Name Here' required/>
        <input ref={email_ref} className='email' type="email" name="user_email" placeholder='Type your Email Here' required/>
      </div>

      <div className='msg-box'>
        <textarea ref={msg} rows='10' name="message" placeholder="What's on your mind, Dear Visitor ?"/>
        <input className='send' type="submit" value="Send" />  
      </div>
    </form>

    <div className="pop-box" style={{display: Close ? 'flex':'none' }}>
        <p>Successfully Send !</p>

        <button type="submit" onClick={handleClose}>Close</button>
    </div>

  </>);
};