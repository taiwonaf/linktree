import './styles/input.css';

const Input = ({inputField}) => {
    const {label, type, holder, forItem,id} = inputField;
  return (
    <div className='form-input'>
        <label htmlFor={forItem}>{label}</label>
        <input type={type} placeholder={holder}/>
    </div>
  )
}

export default Input