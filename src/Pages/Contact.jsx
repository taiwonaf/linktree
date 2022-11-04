import React from 'react';
import ContactHeader from '../components/contact/ContactHeader';
import Input from '../components/contact/Input';

const Contact = () => {
    const inputFields = [
        {
            label: 'First Name',
            type: 'text',
            holder: 'Enter your first name',
            forItem: 'fname',
            id: 'first_name'
        },
        {
            label: 'Last Name',
            type: 'text',
            holder: 'Enter your last name',
            forItem: 'lname',
            id: 'last_name'
        },
        {
            label: 'Email',
            type: 'email',
            holder: 'yourname@email.com',
            forItem: 'email',
            id: 'email'
        }
    ]
  return (
    <div className='contact'>
        <ContactHeader />
        {
            inputFields.map((inputItem, index) => {
                return (
                <Input inputField={inputItem} key={index} />
                )
            })
        }
    </div>
  )
}

export default Contact