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
            id: 'btn__zuri',
        },
        {
            name: 'Zuri Books',
            url: 'http://books.zuri.team',
            id: 'books',
            alt: 'This is where you find books about design and coding'
        },
        {
            name: 'Python Books',
            url: 'https://books.zuri.team/python-for-beginners?ref_id=taiwonaf',
            id: 'book_python'
        },
        {
            name: 'Background Check for Coders',
            url: 'https://background.zuri.team/',
            id: 'pitch'
        },
        {
            name: 'Design Books',
            url: 'https://books.zuri.team/design-rules',
            id: 'book__design'
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