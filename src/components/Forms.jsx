import React from 'react'
import "./Forms.css"
const Forms = () => {
  return (
    <div className='form-container'>
      <h1>Send a message to us!</h1>
      <form>
        <input name="name" placeholder='Your Name *'/>
        <input name='email' placeholder='Email * '/>
        <input name='subject' placeholder='Subject *'/>
        <textarea name='message' placeholder='Message' rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  )
}

export default Forms
