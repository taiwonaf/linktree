import Button from "./Button";
import './styles/links.css';

const Links = () => {
    const items = [
        {
            name: 'Twitter Link',
            url: 'https://twitter.com/tee_script',
            id: 'twitter',
            alt: "tee_script"
        },
        {
            name: 'Zuri Team',
            url: 'https://training.zuri.team/',
            id: 'btn__zuri',
            alt: "Zuri Team Internship landing page"
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
            id: 'book_python',
            alt: "Buy books written by professionals on python"
        },
        {
            name: 'Background Check for Coders',
            url: 'https://background.zuri.team/',
            id: 'pitch',
            alt: "Get a background check on your developer"
        },
        {
            name: 'Design Books',
            url: 'https://books.zuri.team/design-rules',
            id: 'book__design',
            alt: 'Get your free design book offered by Zuri Team'
        },
        {
            name: 'Contact me',
            url:'/contact',
            id: 'contact',
            alt: 'contact page'
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