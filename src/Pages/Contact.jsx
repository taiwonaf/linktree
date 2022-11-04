import React from 'react';
import Checkbox from '../components/contact/Checkbox';
import ContactHeader from '../components/contact/ContactHeader';
import Input from '../components/contact/Input';
import Message from '../components/contact/Message';
import Submit from '../components/contact/Submit';
import './styles/contact.css';

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
        <div className="wrapper">
            <ContactHeader />
            <form action="#">
                <div className="input-fields">
                    {
                        inputFields.map((inputItem, index) => {
                            return (
                            <Input inputField={inputItem} key={index} />
                            )
                        })
                    }
                </div>
                <Message />
                <Checkbox />
                <Submit />
            </form>
        </div>
    </div>
  )
}

export default Contact