import React from 'react'
import Swal from 'sweetalert2'

export const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ff764ad3-ed44-4576-a8a7-d01b5fa1fcf7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Sucess!",
        text: "Message Sent!",
        icon: "success"
      });
    }
  };

  return (
    <div id='contact'>
      <br />
      <h1>Contact</h1>
      <br />
      
      <div id='c-inside'>
        <section className='con'> 
          <form onSubmit={onSubmit}>
            <h2>Contact form</h2>
            <div className="input-box">
              <label >Fullname:</label>
              <input type="text" name='name' className="field"
              placeholder='Enter your name'
              required
               />
            </div>
            <div className="input-box">
              <label >Email:</label>
              <input type="email" className="field" name='email'
              placeholder='Enter your email'
              required
               />
            </div>
            <div className="input-box">
              <label >Your Message:</label>
              <textarea name="message" placeholder='Enter your message' className='field mess'></textarea>
            </div>
            <button type='submit'>Send</button>
          </form>

        </section>
        <div id='con-right'>

        </div >
      </div>
    </div>
  )
}
