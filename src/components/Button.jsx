import './styles/button.css';

const Button = ({item}) => {
    const {name, url, id, alt} = item
  return (
    <a href={url} className='button' id={id} title={alt}>
        {name}
    </a>
  )
}

export default Button