import './styles/message.css';

const Message = () => {
  return (
    <div className='form-input'>
        <label htmlFor="message">
            Message
        </label>
        <textarea name="message" id="message" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
    </div>
  )
}

export default Message