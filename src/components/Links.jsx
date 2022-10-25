import Button from "./Button";
import './styles/links.css';

const Links = () => {
    const items = [
        {
            name: 'Twitter Link',
            url: 'https://twitter.com/tee_script',
            id: 'twitter'
        },
        {
            name: 'Zuri Team',
            url: 'https://training.zuri.team/',
            id: 'button_zuri',
            alt: 'This is where you find books about design and coding'
        },
        {
            name: 'Zuri Books',
            url: 'https://twitter.com/tee_script'
        },
        {
            name: 'Python Books',
            url: 'https://books.zuri.team/'
        },
        {
            name: 'Background Check for Coders',
            url: 'https://background.zuri.team/'
        },
        {
            name: 'Design Books',
            url: 'https://books.zuri.team/design-rules'
        }
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