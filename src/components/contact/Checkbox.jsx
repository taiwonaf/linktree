import './styles/Checkbox.css';
import { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Checkbox = () => {
    const [check, setCheck] = useState(false);
    const changeCheck = () => {
        setCheck(prev => !prev)
    }
  return (
    <div className='checkbox'>
        <div className={!check ? "check check-blink" : "check checked"} onClick={changeCheck} >
            {check && <FontAwesomeIcon icon={faCheck} size='sm' />}
        </div>
        <p>You agree to providing your data to Taiwo who may contact you.</p>
    </div>
  )
}

export default Checkbox