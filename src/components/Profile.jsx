import './styles/profile.css';
import {useEffect, useState } from 'react';

const Profile = () => {
    const [width, setWidth] = useState('');
    useEffect(() => {
        setWidth(window.innerWidth)
        console.log(width)
    })
  return (
    <div className='profile'>
        <div className="profile-wrapper">
            <div className="share">
                <img src="/images/share.png" alt="" />
            </div>
            <div className="profile-img">
                <img src="/images/profile__img.png" alt="" />
            </div>
            <div className="profile-name">
                Nafiu Taiwo
            </div>
        </div>
    </div>
  )
}

export default Profile