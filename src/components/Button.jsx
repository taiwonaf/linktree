import './styles/button.css';

const Button = ({item}) => {
    const {name, url, id} = item
  return (
    <a href={url} className='button' id={id} >
        {name}
    </a>
  )
}

export default Button