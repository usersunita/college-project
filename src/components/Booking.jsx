/*import React, { useState } from 'react';

export default function Booking() {
  const [formValue, setFormValue] = useState({
    date: '',
    time: '',
    days: '',
    city: '',
    person: '',
    type:'',
    message:'',
    agree: false
  });
  const [isFormOpen, setIsFormOpen] = useState(true);
  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const onCheckboxChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formValue);
  };
  const handleClose = () => {
    setIsFormOpen(false); 
  };

  return (
    <>
    {isFormOpen && (
    <div className="container">
    <div className="box">
    <h2 className='heading text-center'>Request Guide Booking</h2>
    <form className='row g-3' onSubmit={handleSubmit}>
      <div className='col-md-4'>
        <label htmlFor='date' className='form-label' >Date</label>
        <input
          type='text'
          className='form-control'
          id='date'
          name='date'
          placeholder="mm/dd/yy"
          value={formValue.date}
          onChange={onChange}
          required
        />
      </div>
      <div className='col-md-4'>
        <label htmlFor='time' className='form-label' >Time</label>
        <input
          type='text'
          className='form-control'
          id='time'
          name='time'
          placeholder="--:--"
          value={formValue.time}
          onChange={onChange}
          required
        />
      </div>
      <div className='col-md-4'>
        <label htmlFor='days' className='form-label' >Number of Days</label>
        <input
          type='number'
          className='form-control'
          id='days'
          name='days'
          placeholder="number of days"
          value={formValue.days}
          onChange={onChange}
        />
      </div>
      <div className='col-md-4'>
        <label htmlFor='destination' className='form-label' >Destination</label>
        <input
          type='text'
          className='form-control'
          id='destination'
          name='destination'
          placeholder='Your Prefered Destination'
          value={formValue.destination}
          onChange={onChange}
          required
        />
      </div>
      <div className='col-md-4'>
        <label htmlFor='person' className='form-label' >Number of Person</label>
        <input
          type='number'
          className='form-control'
          id='person'
          name='person'
          placeholder="Number of person"
          value={formValue.person}
          onChange={onChange}
          required
        />
      </div>
      <div className='col-md-4'>
        <label htmlFor='type' className='form-label' placeholder="Select the type ">Type of Tour</label>
          <select
          className='form-control'
          id='type'
          name='type'
          value={formValue.type}
          onChange={onChange}
          required
        >
          <option value='' disabled>Select type</option>
          <option value='vehicle'>Vehicle</option>
          <option value='trek'>Trek</option>
        </select>
      </div>
      <div className='col-12'>
          <label className='form-label' htmlFor='message' >Write Something</label>
          <textarea
          className='form-control'
          id='textarea'
          name='message'
          placeholder="Write a Message for guide"
          value={formValue.message}
          onChange={onChange}
          required
        />
        </div>
      <div className='col-md-6'>
        <div className='form-check'>
          <input
            className='form-check-input'
            type='checkbox'
            id='agree'
            name='agree'
            checked={formValue.agree}
            onChange={onCheckboxChange}
            required
          />
          <label className='form-check-label' htmlFor='agree'>
            Agree to terms and conditions
          </label>
        </div>
      </div>
      <div className='col-12 d-flex justify-content-end'>
        <button type='submit' className='btn btn-primary'>Submit Request</button>
        <button type='close' className='btn btn-secondary'onClick={handleClose}>Close</button>
      </div>
    </form>
    </div>
    </div>
  )};
  </>
  );
}
*/
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

// Define Zod schema for form validation
const schema = z.object({
  date: z.string().nonempty('Date is required'),
  time: z.string().nonempty('Time is required'),
  days: z.string(),
  destination: z.string().nonempty('City is required'),
  person: z.string(),
  type: z.string(),
  message: z.string(),
  agree: z.boolean(),
})
function Modal({ isOpen, onClose, children }) {
  return (
    <div className={`modal ${isOpen ? 'show' : ''}`} tabIndex="-1" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Booking Form</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Booking() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    setIsModalOpen(false);
  };

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={() => setIsModalOpen(true)}>Open Form</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='row g-3'>
            <div className='col-md-4'>
              <label htmlFor='date' className='form-label'>Date</label>
              <input
                type='text'
                className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                id='date'
                {...register('date', { required: 'Date is required' })}
              />
              {errors.date && <div className='invalid-feedback'>{errors.date.message}</div>}
            </div>
            <div className='col-md-4'>
              <label htmlFor='time' className='form-label'>Time</label>
              <input
                type='number'
                className={`form-control ${errors.time ? 'is-invalid' : ''}`}
                id='time'
                {...register('date', { required: 'Date is required' })}
              />
              {errors.time && <div className='invalid-feedback'>{errors.time.message}</div>}
            </div>
            <div className='col-md-4'>
              <label htmlFor='days' className='form-label'>Days</label>
              <input
                type='number'
                className={`form-control ${errors.days? 'is-invalid' : ''}`}
                id='date'
                {...register('days', { required: 'Days is required' })}
              />
              {errors.days && <div className='invalid-feedback'>{errors.days.message}</div>}
            </div>
            <div className='col-md-4'>
              <label htmlFor='destination' className='form-label'>Destination</label>
              <input
                type='text'
                className={`form-control ${errors.destination ? 'is-invalid' : ''}`}
                id='destination'
                {...register('destination', { required: 'Destination is required' })}
              />
              {errors.date && <div className='invalid-feedback'>{errors.destination.message}</div>}
            </div>
            <div className='col-md-4'>
              <label htmlFor='person' className='form-label'>Number of Person</label>
              <input
                type='text'
                className={`form-control ${errors.person ? 'is-invalid' : ''}`}
                id='person'
                {...register('person', { required: 'Number of person is required' })}
              />
              {errors.person && <div className='invalid-feedback'>{errors.person.message}</div>}
            </div>
            <div className='col-md-4'>
              <label htmlFor='type' className='form-label'>Type of Tour</label>
              <input
                type='text'
                className={`form-control ${errors.type ? 'is-invalid' : ''}`}
                id='type'
                {...register('type', { required: 'Type is required' })}
              />
              {errors.type && <div className='invalid-feedback'>{errors.type.message}</div>}
            </div>
            <div className='col-md-4'>
              <label htmlFor='message' className='form-label'>Write Something</label>
              <input
                type='text'
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                id='message'
                {...register('message', )}
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
