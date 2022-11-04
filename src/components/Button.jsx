import './styles/button.css';
import { Link } from 'react-router-dom';

const Button = ({item}) => {
    const {name, url, id, alt} = item
  return (
    <Link to={url} className='button' id={id} >
        {name}
        {alt && <span>{alt}</span>}
    </Link>
  )
}

export default Button