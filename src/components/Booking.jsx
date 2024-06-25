/*
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Session from 'react-session-api';

// Define Zod schema for form validation
const schema = z.object({
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

export default function Booking({ guideId, userId }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
    // Add guideId and userId to the form data
    const completeData = {
      ...data,
      guide_id: Number(guideId),
      client_id: userId,
      status: 'pending' // Set the default status
    };

    console.log('Form submitted:', completeData);
    setFormData(completeData);
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
          return response.json();
        })
        .then(data => {
          console.log(data);
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
            <div className='col-md-4'>
              <label htmlFor='date' className='form-label'>Date</label>
              <input
                type='date'
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
                type='time'
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
                type='number'
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

*/
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Session from 'react-session-api';

const schema = z.object({
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

export default function Booking({ guideId, userId }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
    const completeData = {
      ...data,
      guide_id: Number(guideId),
      client_id: userId,
      status: 'pending' 
    };

    console.log('Form submitted:', completeData);
    setFormData(completeData);
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
          return response.json();
        })
        .then(data => {
          console.log(data);
          window.location.reload();
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }, [formData]);


  const validateDate = (value) => {
    // const today = new Date();
    // const maxDate = new Date(today.getFullYear(), today.getMonth() + 5, today.getDate()); // 5 months from today

    // const selectedDate = new Date(value);
    // if (selectedDate < today || selectedDate > maxDate) {
    //   return 'Date must be between today and 5 months in advance.';
    // }

    var selectedDate = new Date(document.getElementById('date').value);
    var currentDate = new Date().toISOString().split('T')[0];

    document.getElementById('date').setAttribute('min', currentDate)

    return true;
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleSubmit(onSubmit)} method="POST" onChange={validateDate}>
          <div className='row g-3'>
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
                type='number'
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
              <div className='col-md-4'>
                <label htmlFor='date' className='form-label'>Date</label>
                <input
                  type='date'
                  
                  className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                  id='date'
                  placeholder='dd/mm/yyyy'
                  {...register('date', { validate: validateDate })}
                />
                {errors.date && <div className='invalid-feedback'>{errors.date.message}</div>}
              </div>
              <div className='col-md-4'>
                <label htmlFor='time' className='form-label'>Time</label>
                <input
                  type='time'
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
