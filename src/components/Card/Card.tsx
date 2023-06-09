import { Profile } from '../Profile/Profile';
import './Card.css';

type CardProps = {
    author: {
        name: string;
        image: string;
        checked: boolean;
    },
    content: {
        text: string;
        image: string
    },
    children?: JSX.Element 
}

export const Card = (props: CardProps) => {
    const {author, content, children} = props; 
    
    return <div className="wrapper">
        
        <Profile name={author.name} image={author.image} checked={author.checked} />
        <div className='text'>
            {content.text}
        </div>
        <div className='image'>
            <img src={content.image}></img>
        </div>
        {children}
    </div>
  }