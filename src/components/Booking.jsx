import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Define Zod schema for form validation
const schema = z.object({
  username: z.string().nonempty('Username is required'),
  email: z.string().nonempty('Email is required').email('Invalid email address'),
  date: z.string().nonempty('Date is required'),
  time: z.string().nonempty('Time is required'),
  days: z.string().nonempty('Number of days is required'),
  destination: z.string().nonempty('Destination is required'),
  person: z.string().nonempty('Number of persons is required'),
  type: z.string().nonempty('Type of tour is required'),
  message: z.string().nonempty('Message is required'),
});

function Modal({ isOpen, onClose, children }) {
  return (
    <div className={`modal ${isOpen ? 'show' : ''}`} tabIndex="-1" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Guide Booking Form</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Booking() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    setFormData(data);
  };

  useEffect(() => {
    if (formData) {
      fetch('http://localhost/php%20backend/guidebooking.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        alert(data.message);
        window.location.reload();
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  }, [formData]);

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleSubmit(onSubmit)} method="POST">
          <div className='row g-3'>
            <div className='col-md-6'>
              <label htmlFor='username' className='form-label'>Username</label>
              <input
                type='text'
                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                id='username'
                placeholder='Username'
                {...register('username')}
              />
              {errors.username && <div className='invalid-feedback'>{errors.username.message}</div>}
            </div>
            <div className='col-md-6'>
              <label htmlFor='email' className='form-label'>Email</label>
              <input
                type='email'
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id='email'
                placeholder='Enter your email'
                {...register('email')}
              />
              {errors.email && <div className='invalid-feedback'>{errors.email.message}</div>}
            </div>
            <div className='col-md-4'>
              <label htmlFor='date' className='form-label'>Date</label>
              <input
                type='text'
                className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                id='date'
                placeholder='dd/mm/yyyy'
                {...register('date')}
              />
              {errors.date && <div className='invalid-feedback'>{errors.date.message}</div>}
            </div>
            <div className='col-md-4'>
              <label htmlFor='time' className='form-label'>Time</label>
              <input
                type='text'
                className={`form-control ${errors.time ? 'is-invalid' : ''}`}
                id='time'
                placeholder='--:--'
                {...register('time')}
              />
              {errors.time && <div className='invalid-feedback'>{errors.time.message}</div>}
            </div>
            <div className='col-md-4'>
              <label htmlFor='days' className='form-label'>Days</label>
              <input
                type='number'
                className={`form-control ${errors.days ? 'is-invalid' : ''}`}
                id='days'
                placeholder='Number of days of tour'
                {...register('days')}
              />
              {errors.days && <div className='invalid-feedback'>{errors.days.message}</div>}
            </div>
            <div className='col-md-4'>
              <label htmlFor='destination' className='form-label'>Destination</label>
              <input
                type='text'
                placeholder='Your destination'
                className={`form-control ${errors.destination ? 'is-invalid' : ''}`}
                id='destination'
                {...register('destination')}
              />
              {errors.destination && <div className='invalid-feedback'>{errors.destination.message}</div>}
            </div>
            <div className='col-md-4'>
              <label htmlFor='person' className='form-label'>Number of Persons</label>
              <input
                type='text'
                placeholder='Number of persons'
                className={`form-control ${errors.person ? 'is-invalid' : ''}`}
                id='person'
                {...register('person')}
              />
              {errors.person && <div className='invalid-feedback'>{errors.person.message}</div>}
            </div>
            <div className='col-md-4'>
              <label htmlFor='type' className='form-label'>Type of Tour</label>
              <select
                className={`form-control ${errors.type ? 'is-invalid' : ''}`}
                id='type'
                {...register('type')}
              >
                <option value=''>Select Type</option>
                <option value='vehicle'>Vehicle</option>
                <option value='trek'>Trek</option>
              </select>
              {errors.type && <div className='invalid-feedback'>{errors.type.message}</div>}
            </div>
            <div className='col-md-12'>
              <label htmlFor='message' className='form-label'>Write Something</label>
              <textarea
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                id='message'
                placeholder='Write a message for guide'
                {...register('message')}
              />
              {errors.message && <div className='invalid-feedback'>{errors.message.message}</div>}
            </div>
            <div className='col-12'>
              <button type='submit' className='btn btn-primary'>Submit Request</button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}
