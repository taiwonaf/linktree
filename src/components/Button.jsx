import './styles/button.css';

const Button = ({item}) => {
    const {name, url} = item
  return (
    <a href={url} className='button'>
        {name}
    </a>
  )
}

export default Button