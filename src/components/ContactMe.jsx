import React, { useState } from 'react'
import Swal from 'sweetalert2'

const ContactMe = () => {
  const [toSend, setTosend] = useState({
    full_name: '',
    reply_to: '',
    number: '',
    message: '',
  })
  const [error, setError] = useState({ reply_to: '', number: '' });

  const handleChange = (e) => {
    let valid;
    switch (e.target.name) {
      case 'reply_to':
        setTosend({ ...toSend, [e.target.name]: e.target.value })
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value);
        if (valid) {
          setError({ ...error, [e.target.name]: '' })
        } else {
          setError({ ...error, [e.target.name]: 'Invalid Email' })
        }
        break;
      case "number":
        setTosend({ ...toSend, [e.target.name]: e.target.value })
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(e.target.value);
        if (!valid) {
          setError({ ...error, [e.target.name]: 'Invalid Phone' })
        } else {
          setError({ ...error, [e.target.name]: '' })
        }
        break;
      case 'full_name':
        setTosend({ ...toSend, [e.target.name]: e.target.value })
        break;
      case 'message':
        setTosend({ ...toSend, [e.target.name]: e.target.value })
        break;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(toSend).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("access_key", "8bba7f46-e323-44c7-a222-77ae0d2b4f2d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Sucess!",
          text: "Your Message send Successfully!",
          icon: "success"
        });
        setTosend({
          full_name: '',
          reply_to: '',
          number: '',
          message: '',
        })


      } else {
        console.log("Error", data);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  const isFormValid = () => {
    return (
      toSend.full_name &&
      toSend.reply_to &&
      toSend.number &&
      toSend.message &&
      !error.reply_to &&
      !error.number
    );
  };

  return (
    <section name='Contact Me' className='max-w-screen-2xl mx-auto conatiner px-4 my-4 md:px-16 md:my-10'>
      <h2 className='text-3xl md:text-4xl p-3 font-semibold '>Connect with Me</h2>
      <p className='sm:px-4 text-gray-400 sm:py-2'>Discuss a project or just want to say Hi? My inbox is open to all.</p>
      <div>
        <form className='flex flex-col md:w-1/2 mx-auto shadow m-5' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={toSend.full_name} name='full_name'
            className='border hover:border-amber-700 outline-none border-amber-400 p-4 m-3' type="text" placeholder='Name' />

          <input onChange={handleChange} value={toSend.reply_to} name='reply_to'
            className='border hover:border-amber-700 outline-none border-amber-400 p-4 m-3' type='text' placeholder='Email' />
          {error && <p className='px-4 text-red-500'>{error.reply_to}</p>}
          <input onChange={handleChange} value={toSend.number} name='number'
            className='border hover:border-amber-700 outline-none border-amber-400 p-4 m-3' type='number' placeholder='Number' />
          {error && <p className='px-4 text-red-500'>{error.number}</p>}
          <textarea onChange={handleChange} value={toSend.message} name='message'
            className='border hover:border-amber-700 outline-none border-amber-400 p-4 mx-3 my-10 h-40' placeholder='Message'></textarea>

          <button type='submit' disabled={!isFormValid()}
            className='bg-amber-400 w-max p-3 mx-auto disabled:bg-amber-100 hover:bg-amber-500 rounded-full px-8 mb-10'>Send Message</button>
        </form>
      </div>
      <div className='bg-amber-200 w-full h-0.5'></div>
    </section>
  )
}

export default ContactMe;