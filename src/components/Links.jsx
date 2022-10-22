import Button from "./Button";
import './styles/links.css';

const Links = () => {
    const items = [
        {
            name: 'Twitter Link',
            url: 'https://twitter.com/tee_script'
        },
        {
            name: 'Twitter Link',
            url: 'https://twitter.com/tee_script'
        },
        {
            name: 'Twitter Link',
            url: 'https://twitter.com/tee_script'
        },
        {
            name: 'Twitter Link',
            url: 'https://twitter.com/tee_script'
        },
        {
            name: 'Twitter Link',
            url: 'https://twitter.com/tee_script'
        },
        {
            name: 'Twitter Link',
            url: 'https://twitter.com/tee_script'
        },
        {
            name: 'Twitter Link',
            url: 'https://twitter.com/tee_script'
        },
    ]   
  return (
    <div className="links">
        <div className="links-wrapper">
            {
                items.map((item, index) => {
                    return <Button key={index} item={item}/>
                })
            }
        </div>
    </div>
  )
}

export default Links