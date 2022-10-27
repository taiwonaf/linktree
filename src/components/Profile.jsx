import './styles/profile.css';
const Profile = () => {
  return (
    <div className='profile'>
        <div className="profile-wrapper">
            <div className="share">
                <img src="/images/share.png" alt="" />
            </div>
            <div className="options">
                <img src="/images/options.png" alt="" />
            </div>
            <div className="profile-img">
                <img src="/images/profile__img.png" id="profile_id" alt="" />
                <div className="hover">
                    <img src="/images/camera.svg" alt="" />
                </div>
            </div>
            <div className="profile-name" id="twitter">
                tee_script
            </div>
            <div className="slack-username" id='slack'>
                taiwonaf
            </div>
        </div>
    </div>
  )
}

export default Profile