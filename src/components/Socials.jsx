import './styles/socials.css';

const Socials = () => {
  return (
    <div className='socials'>
        <div className="socials-wrapper">
            <div className="slack">
              <a href="#">
                <img src="/images/slack.png" alt="" />
              </a>
            </div>
            <div className="github">
              <a href="https://github.com/taiwonaf">
                <img src="/images/github.png" alt="" />
              </a>
            </div>
        </div>
    </div>
  )
}

export default Socials